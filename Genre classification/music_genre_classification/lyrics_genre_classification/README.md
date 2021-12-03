# Music Genre CLassification <!-- omit in toc -->
An full-stack Machine Learning application which predicts the Genre only based on Text (Lyrics).

## Table Of Contents <!-- omit in toc -->
- [About](#about)
- [The Data](#the-data)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Build / Run](#build--run)

## About
To get into machine learning I needed a small project, so I decided to try sentiment analysis and text classification. From the beginning this was meant as a full-stack project, with the trained model in the backend and a single-page-application for the frontend.

The resulting application is meant to be run with docker-compose.

## The Data
As datasource I downloaded a dataset from [Kaggle (380.000+ lyrics from MetroLyrics)](https://www.kaggle.com/gyani95/380000-lyrics-from-metrolyrics) which contains over 380.000 lyrics with metadata like artist, song name, year and also the genre. There were lyrics in serveral languages, but I only needed the english ones.

To avoid possible Copyright-Issues, I am not able to include the Source-Dataset here, but feel free to download it from Kaggle yourself (link in text above) and place the .csv in the same folter as this README.md. Only needed if You want to experiment with the Data and my Jupyter-Notebook yourself, it is not needed for just running the application.

The whole process of data preperation, feature engineering and training of the model are documented in the Jupyter Notebook `genre_classification.ipynb` in the root folder.

## Project Structure
- ***backend:*** backend-service containung the ML-model, written in Python.
- ***frontend***
  - ***design:*** REACT.js-project for building the browser frontend.
  - ***server:*** Express.js-project serving the compiled REACT-frontend.

## Technologies
The individual versions can be found in the `requirements.txt` for the backend and `package.json` in the frontend sub-projects.

`Jupyter Lab` and `VS Code` are always up-to-date in their most recent versions.

- Python
  - scikit-learn
  - nltp
  - langdetect
- Node.js
  - React.js
  - Express.js
- Docker
  - docker-compose
- Text/Code Editor
  - Jupyter Lab
  - VS Code

## Build / Run
Download the complete project: 
```
$ git clone https://github.com/holgerdoerner/music_genre_classification.git
```

Install Node.js dependencies with npm and build the frontend:
```
$ cd music_genre_classification/frontend/design
$ npm install && npm run build
```

Build the 2 Docker container and run them with docker-compose:
```
$ cd ..
$ docker-compose up
```

Open your favorite web-browser and go to `http://localhost:3000` to get access to the frontend.
