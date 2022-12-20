<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style media="screen">
    /* @import "assets/css/fontawesomepro.css"; */
    @import "assets/css/tachyons.css";
    @import "assets/css/custom.css";
</style>
