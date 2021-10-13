# MusicGuru Backend Flask application


**Commands must be run inside the `scripts/` folder**

## Installation

2. Run:  

```bash
git clone https://github.com/bearpelican/musicautobot.git

cd musicautobot

conda env update -f environment.yml

source activate musicautobot
```

3. Install Musescore - to view sheet music within a jupyter notebook  

    Ubuntu:  
    ```bash
    sudo apt-get install musescore
    ```
    
    MacOS - [download](https://musescore.org/en/download)

## Flask Server

Installation:  
```bash
cd serve

conda env update -f environment.yml
```

#### S3 Bucket

Need to add

## References

This project is built on top of [fast.ai's](https://github.com/fastai/fastai) deep learning library and music21's incredible musicology [library](https://web.mit.edu/music21/).

Inspired by [bachbot](https://github.com/feynmanliang/bachbot) and [clara](http://christinemcleavey.com/clara-a-neural-net-music-generator/)

Special thanks to [SPC](https://southparkcommons.com) and [PalapaVC](https://www.palapavc.com/)
