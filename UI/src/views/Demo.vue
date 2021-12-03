<template>
    
  <div class="about">
    <!-- <github-ribbon /> -->
    <div class="about-header">
      <h1>MusicGuru - Demo</h1>
      <span class="about-subtext">Check out what MusicGuru can do!</span>
    </div>
    <div class="about-content">

      <h2></h2>
      <div class="content-body">
        <ul>
            <li><h1>What is MusicGuru?</h1></li>
            <LazyYoutube ref="lazyVideo" src="https://www.youtube.com/watch?v=qD8sI_6L4Xo" />
            <hr>

            <hr>
            <li><h1>Melody Autocomplete</h1></li>
            <h2>What is Melody Autocomplete?</h2>
            <LazyYoutube ref="lazyVideo" src="https://youtu.be/h-wVfe0Qibc" />

            <h2>Original Jingle Bells track</h2>
            <LazyYoutube ref="lazyVideo" src="https://youtu.be/uQoSsR-P5cg" />

            <h2> MusicGuru's autocomplete version of Jingle Bells </h2>
            <LazyYoutube ref="lazyVideo" src="https://youtu.be/CkDLoWX7KJc" />
            <hr>
            
            <hr>
            <li><h1>2. Melody to Chords and Chords to Melody</h1></li>
            <h2>What are Melodies and Chords?</h2>
            <LazyYoutube ref="lazyVideo" src="https://youtu.be/cEvlXatHiEI" />

            <h2>Original Jingle Bells track</h2>
            <LazyYoutube ref="lazyVideo" src="https://youtu.be/qCtgK9ReVIs" />

            <h2> MusicGuru's melody for Jingle Bells </h2>
            <LazyYoutube ref="lazyVideo" src="https://youtu.be/1xN9q210MM8" />

            <h2> MusicGuru's chords for Jingle Bells </h2>
            <LazyYoutube ref="lazyVideo" src="https://youtu.be/pu8qRHjH-TI" />
            <hr>
            
            <hr>
            <li><h1>3. Changing Pitch/Rhythm and remixing the song</h1></li>
            <h2>What is Pitch and Rhythm?</h2>
            <LazyYoutube ref="lazyVideo" src="https://youtu.be/L4biYOMx7YU" />

            <h2>Original Jingle Bells track</h2>
            <LazyYoutube ref="lazyVideo" src="https://youtu.be/pNCEk0J4Tjw" />

            <h2> MusicGuru's autocomplete version of Jingle Bells </h2>
            <LazyYoutube ref="lazyVideo" src="https://youtu.be/PWY85Tjlf2k" />
            <hr>

            <hr>
            <li><h1>4. Melody Mixer</h1></li>
            <LazyYoutube ref="lazyVideo" src="https://www.youtube.com/watch?v=cJhI_MP8uG8" />
            <hr>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import { PredictionType } from '@/lib/config'
import { LazyYoutube } from "vue-lazytube";
export default {
  name: 'Demo',
  components: {
        LazyYoutube
  },
  data () {
    return {
      predictionTypes: this._.values(PredictionType),
      window: 0
    }
  },
  
      methods: {
        handleClick(event) {
          this.$refs["lazyVideo"][event]();
        },
      }
}

</script>

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
  color: #14090d;
  font-weight: 700;
  font-style: italic;
}
a {
  color: #F06292 !important;
}
</style>
