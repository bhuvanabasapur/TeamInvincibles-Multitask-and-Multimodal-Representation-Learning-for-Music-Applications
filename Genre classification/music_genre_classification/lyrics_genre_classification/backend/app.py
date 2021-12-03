#! /usr/bin/env python3

import sklearn
import joblib
from flask import Flask, request, jsonify, abort
from flask_cors import CORS
from datetime import datetime
from nltk.stem import WordNetLemmatizer
import nltk
import langdetect
import re

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

clf = joblib.load('clf_pipeline_sgd.joblib')

nltk.download('wordnet')

genres = ['Pop', 'Hip-Hop', 'Rock', 'Metal', 'Country', 'Jazz', 'Electronic', 'Folk']
accepted_languages = ['en']

@app.route('/api/v1/genre', methods=['POST'])
def recieve_data():
    client_id = request.json['client_id']
    if client_id != '1234567890':
        abort(401)
    data = request.json['data']
    lang = _detect_language(data)
    response = {}
    if lang not in accepted_languages:
        response['status'] = 'language not accepted'
        response['code'] = 1
        response['timestamp'] = datetime.now().isoformat()
        response['result'] = ', '.join(accepted_languages)
    else:
        response['status'] = 'ok'
        response['code'] = 0
        response['timestamp'] = datetime.now().isoformat()
        response['result'] = _process_data(data)
    return jsonify(response)

def _process_data(data):
    data_processed = _clean_input(data)
    data_processed = _mask_buzzwords(data_processed, buzzwords=genres, mask='')
    prediction = clf.predict_proba([data_processed])
    return list(prediction[0])

def _clean_input(data):
    data = re.sub(r'[^A-Za-z]', ' ', data)
    # remove all single characters surrounded by whitepace
    data = re.sub(r'\s+[a-zA-Z]\s+', ' ', data)
    # remove single characters at beginning of text
    data = re.sub(r'\^[a-zA-Z]\s+', ' ', data)
    # replace repeated whitespaces with single whitespace
    data = re.sub(r'\s+', ' ', data, flags=re.I)
    # replaces repeated chars by two ('aaaaaaah' => 'aah', 'helllloooooooo' => 'helloo')
    data = re.sub(r'(.)\1{2,}', r'\1\1', data, flags=re.I)
    # converts all to lowercase
    data = data.lower()
    # lemmatizes words ('am, are, is => be', 'car, cars, car's, cars' => car')
    data = ' '.join([WordNetLemmatizer().lemmatize(w) for w in data.split()])
    # remove leading and trailing whitespaces
    data = data.strip()
    return data

def _mask_buzzwords(data, buzzwords=[], mask=''):
    data_processed = data
    for word in buzzwords:
        data_processed = re.sub(word, mask, data_processed, flags=re.I)
    return data_processed

def _detect_language(data):
    lang = ''
    try:
        lang = langdetect.detect(data)
    except:
        lang = 'unknown'
    return lang

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)