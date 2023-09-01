<template>
  <video id="myVideo" autoplay muted loop>
    <source src="../assets/img/bg-video.mp4" type="video/mp4">
  </video>
  <div class="dt w-100 overflow-auto flex-column bg-black-10 vh-100">
    <div class="dtc w-100 v-mid">
      <div class="flex items-center justify-center w-100 pa1">
        <span class="fr right-0">
          <img class="w5" src="../assets/img/logo.png"/>
        </span>
      </div>
      
      <div class="cf w-50-l f2 measure center near-black b pv3 ph2 br2 mt4 tc">
        Page Does Not Exist

        <div class="fl w-100 center tc mt5">
          <router-link to="/" class="bg-gold hover-bg-near-black pointer mt3 w-auto near-black hover-near-white br2 b f4-ns f5 grow ttc no-underline ph5 pa2">
            <i class="f7 pr2 fas fa-home"></i> Back to Home Page
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data(){
    return{
    }
  },
  mounted(){
  },
  methods: {
    
  }
}
</script>
