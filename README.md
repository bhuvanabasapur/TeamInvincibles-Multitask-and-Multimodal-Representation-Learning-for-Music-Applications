# TeamInvincibles

## Multi-task and Multi-modal Representation Learning for Music Applications (Masters Project - 295A and 295B)

The MusicGuru application uses a multitasking model for performing various music related tasks. It uses a transformer based architecture for achieving the same. The model is deployed on the flask server which comes up on port 5000. The UI server comes up on port 8080. The predictions are then stored on the S3 bucket with an idea to make retrieval faster and store space. MusicGuru also has an authentication service using AuthO in order to respect user privacy.

The MusicGuru application performs the below downstream tasks:
* Melody Autocompletion
* Changing the pitch while keeping the rhythm constant.
* Changing the rhythm while keeping the pitch constant.
* Changing the melody of the song with the existing chord progression.
* Changing the chords of the song with the existing melody progression.
* Music blending using Google Magenta's MusicVAE

<img src="https://github.com/bhuvanabasapur/TeamInvinsibles/blob/main/Screenshots/Homescreen.png">

## For backend

1. After cloning the repo, run the following to install dependencies:

```conda env update -f environment.yml```

2. Install musescore

ubuntu: ```sudo apt-get install musescore```

MAC: https://musescore.org/en/download

3. Running generateMusic.ipynb would require an empty directory named 'numpy' under data/, into which the data and model files would get loaded after execution.

**To bring up the flask server**

Under the folder 'serve', run the below command:

```python run.py```

**Pretrained Models**

Path: 'https://ashaw-midi-web-server.s3-us-west-2.amazonaws.com/pretrained/MultitaskSmallKeyC.pth'

## Front End

The following commands are to be run in order to bring up the UI

```yarn install```
```npm run serve```

## References
* https://github.com/bearpelican/musicautobot
* https://auth0.com/blog/beginner-vuejs-tutorial-with-user-login/ 
* https://towardsdatascience.com/a-multitask-music-model-with-bert-transformer-xl-and-seq2seq-3d80bd2ea08e 

