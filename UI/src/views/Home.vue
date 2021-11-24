<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <!-- <h1 class="title"> -->
        <div style="float: left; font-size:180%;"> Autocomplete a melody</div>
        <div style="float: right; font-size:180%;">Share with friends</div>
        <div style="float: center; font-size:180%;">Change Pitch/Rhythm/Chords of a Song</div>
        <h1>
          Welcome to MusicGuru        
        </h1>
        
        <!-- <h2 class="subtitle">
          Make sure to explore music guru's features!
        </h2> -->
        <div class="button-block">
          <button v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-dark">Sign Up to Browse Events</button>
          <h3 v-if="$auth.isAuthenticated" class="is-size-3 has-background-dark welcome">Welcome, {{ $auth.user.name }}!</h3>
        </div>
        

      </div>
    </div>
  </section>
  
  <EventsList />

  
</div>
</template>
<script>
import EventsList from '../components/EventsList';
export default {
  name: 'home',
  components: {
    EventsList,
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>
<style lang="scss" scoped>
  h1 {
  margin: 30px 0 10px 0;
  // color: #F06292;
  font-weight: 700;
  // font-style: italic;
  // font-size: 30px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  font-size: 60px;
  }
  h4 {
  margin: 30px 0 10px 0;
  // color: #F06292;
  // font-weight: 700;
  // font-style: italic;
  // font-size: 30px;
  // text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
  padding: 40px 0 20px 0;
  // font-size: 60px;
  }
  .hero {    
    text-align: center;
    background-image: url('../assets/musicNotes.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 500px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
  
</style>