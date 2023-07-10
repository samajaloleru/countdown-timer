<template>
  <div class="w-100 pa4-ns pa2 dt vh-100 gold">
    <div class="dtc w-100 v-mid">
      <div class="cf center mw7 mw6-l bg-near-white br3 shadow-3">
        <div class="flex items-center justify-between w-100 pa1">
          <router-link to="/" class="fl mt3 no-underline hover-bg-gold near-black w-auto pa3 b br2">
            Go To Home
          </router-link>
  
          <span class="fr right-0">
            <img class="w4" src="../assets/img/logo.png"/>
          </span>
        </div>
        <div class="fl w-100 pb2 f4 tc gold">
          Registration
        </div>
        <div class="fl w-100 near-black mv4 pa4-ns pa3">
          <div class="fl w-100">
            Fill in your fields below
          </div>
          <div class="fl w-100 pv3">
            <input type="text" class="fl w-100 inputfield pv2 bg-transparent near-black br2" placeholder="Full Name"/>
          </div>
          <div class="fl w-100 pv3">
            <input type="text" class="fl w-100 inputfield pv2 bg-transparent near-black br2" placeholder="Rank"/>
          </div>
          <div class="fl w-100 pv3">
            <textarea type="text" class="fl w-100 inputfield pv2 bg-transparent near-black br2" placeholder="Question"></textarea>
          </div>
          <div class="fl w-100 tc bg-near-black near-white mt2 br2 hover-bg-gold hover-near-black pv3">
            Submit
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      isComplete: false,
      deadline: new Date("oct 14, 2023 11:59:59"), daysSpan:'', hoursSpan: '', minutesSpan: '', secondsSpan: '', timeinterval: ''
    }
  },
  mounted(){
  },
  methods: {
   

  }
}
</script>
