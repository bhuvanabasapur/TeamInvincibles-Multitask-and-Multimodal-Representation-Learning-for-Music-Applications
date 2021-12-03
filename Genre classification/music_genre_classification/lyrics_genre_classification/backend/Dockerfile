FROM python:3.7-stretch
WORKDIR /app
COPY ["app.py", "clf_pipeline_sgd.joblib", "requirements.txt", "./"]
RUN python3 -m pip install -r requirements.txt
EXPOSE 5000
# CMD python3 app.py
ENTRYPOINT [ "python3", "app.py" ]