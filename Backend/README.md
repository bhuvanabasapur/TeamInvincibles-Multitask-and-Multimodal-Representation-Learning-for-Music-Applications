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
