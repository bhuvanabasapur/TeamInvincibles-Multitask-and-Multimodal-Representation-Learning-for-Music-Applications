<template>
  <div class="about">
    <github-ribbon />
    <div class="about-header">
      <h1>MusicGuru - The multimodel multitasking application</h1>
      <span class="about-subtext">Give it a few notes, and it'll autocomplete/remix your song!</span>
    </div>
    <div class="about-content">
      <h2>Instructions</h2>
      <div class="content-body">
        <ol id="instruction-list">
          <li>Search and select a song you like to remix/explore to find the one that resonates with you in the MIDI format!</li>
          <li>
            Press the <v-btn
              color="pink lighten-3"
              dark
              small
              fab
            >
              <v-icon>cached</v-icon>
            </v-btn> button. This will create a new variation on the song you selected.
          </li>
          <li>
            Press <v-btn
              color="pink lighten-3"
              dark
              small
              fab
            >
              <v-icon>play_arrow</v-icon>
            </v-btn> play to hear what the model created for you!
          </li>
          <li>Repeat as many times as you want. You'll get a different variation each time.</li>
        </ol>
      </div>

      <h2>Below are some music tasks our MusicGuru can handle:</h2>
      <div class="content-body">
        <ol id="instruction-list">
          <li>Melody autocomplete: Users can give it a few notes to see how the application autocompletes the tune.</li>
          <li>Harmonization: MusicGuru generates a new set of chord progression using the same melody.
          </li>
          <li>Melody generation: MusicGuru will detect the chord progression and will generate a new melody using the same chords.</li>
          <li>Song remixing: Users can experiment with different pitches and rhythms for their tune.</li>
          <!-- <li>Changing the pitch while keeping the rhythm constant!</li>
          <li>Changing the rhythm while keeping the pitch constant!</li>
          <li>Changing the melody of the song with the existing chord progression!</li>
          <li>Changing the chords of the song with the existing melody progression!</li> -->
          <li>Melody mixing using Google's Magenta</li>
        </ol>
      </div>
      

      <h2>What is it?</h2>
      <div class="content-body">
        <p>MusicGuru is an application that uses a multitasking model called 'MusicAutoBot' trained on MIDI files, and Magenta's MusicVAE.</p>
        <h4>The multitasking model</h4>
        <p>Sequence to Sequence Transformer is the backbone for the Multitasking model. Since it consists of an encoder and a decoder, the encoder can be reused to train the required Bert model and the decoder can be reused to train the TransformerXL model. To understand more about these architectures, please refer to the Google AI Blogs: (<a href="https://ai.googleblog.com/2019/01/transformer-xl-unleashing-potential-of.html">TransformerXL</a>, <a href="https://ai.googleblog.com/2017/04/introducing-tf-seq2seq-open-source.html">SequenceToSequence</a>, and <a href="https://ai.googleblog.com/2018/11/open-sourcing-bert-state-of-art-pre.html">BERT</a>)</p>
          
      </div>


      <h2>Advanced Controls</h2>
      <div class="content-body">
        <h4>Seed length</h4>
        <ul>
          <li>Choose how much of the original song gets sent to the model for prediction</li>
          <!-- <li>Longer snippets give the model a better idea of the style to play in. It'll generate something more coherent, but less creative</li> -->
        </ul>
        
        <!-- <h4>
          Grid editor
        </h4>
        The grid is a basic MIDI sequencer. Edit the song notes to generate even cooler music!
        <br>
        <ul>
          <li>Add a note by clicking any spot in the grid</li>
          <li>Change the note pitch by draging it up or down</li>
          <li>Change the note length by draging the ends of the note longer or shorter</li>
          <li>Remove a note by collapsing the note ends.</li>
        </ul> -->
        <h4 id="header-random">
          Creativity
        </h4>
        You can alter how wild and creative you want the generated music to be.
        <ul>
          <li>Pitch - amount of random variation in note pitch (C2, D2, E2, ..., F6, G6, A6)</li>
          <li>Rhythm - amount of random variation in note length (sixteenth, quarter, half notes)</li>
        </ul>
        <h4 id="header-playback">
          Playback controls
        </h4>
        <ul>
          <li>Change the BPM to play faster/slower.</li>
          <!-- <li>Playback instrument. More coming soon!</li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { PredictionType } from '@/lib/config'
import GithubRibbon from '@/components/GithubRibbon'

export default {
  name: 'About',
  // components: {
  //   GithubRibbon
  // },
  data () {
    return {
      predictionTypes: this._.values(PredictionType),
      window: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.title {
  margin-bottom: 10px;
  color: #0000008a;
}

.about-header {
  text-align: center;
  margin-top: 20px;
  .about-subtext {
    font-size: 1.5em;
    color: #444444;
  }
}

.v-window-item {
  min-height: 130px;
}
.v-card__text {
  font-size: 1.2rem;
  line-height: 1.5;
  // letter-spacing: 1em;
}

#instruction-list {
  .v-btn {
    margin: 0px 5px 5px;
    width: 25px;
    height: 25px;
    pointer-events: none;
  }
}

#about-seed {
  border-left-width: 6px;
  border-left-style: dotted;
  border-left-color: #4e2319be;
  margin-left: 20px;
  margin: 10px 20px;
  padding-left: 20px;
}

.note {
  width: 40px;
  height: 15px;
  display: inline-block;

  &.seed {
    background-color: #64b5f6;
  }
  &.generated {
    background-color: #FF5252;
  }
  &.original {
    background: repeating-linear-gradient(
      45deg,
      #56c721,
      #54c021 10px,
      #fffeb0 10px,
      #fffeb0 20px
    );
  }
}
.about-content {
  text-align: left;
  width: 800px;
  font-size: 1.2em;
  margin: auto;
}
.content-body {
  margin-left: 20px;
  margin-right: 20px;
}
h1 {
  margin: 30px 0 10px 0;
  color: #F06292;
  font-weight: 700;
  // font-style: italic;
  font-size: 30px;
}
h2 {
  margin: 30px 0 10px 0;
  color: #F06292;
  font-weight: 700;
  font-style: italic;
}
h4 {
  margin: 20px 0 0 0;
}
.variation-list {
  list-style-type: none;
  margin: 10px 20px;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }
}

#icon-autobot {
  width: 34px;
  height: 34px;
  margin-left: 10px;
}

a {
  color: #42b983 !important;
}

#header-random {
  color: #F06292;
}

#header-playback {
  color: #F06292;
}
</style>
