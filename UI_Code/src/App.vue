<template>
<v-app id="app">
  <div id="nav">
    <Nav />
    <router-view/>
  </div>
</v-app>
</template>
<script>
import Nav from './components/partials/Nav.vue';
export default {
  name: 'app',
  components: {
    Nav
  }  
}

</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

