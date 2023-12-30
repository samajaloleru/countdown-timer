<template>
  <div class="cf center mw8">
    <div class="w-100 pa4 dt vh-100 near-white">
      <div class="dtc w-100 v-mid" v-if="!isComplete">
        <div class="flex items-center justify-between w-100 pa1">
          <router-link to="/games" class="fl mt3 no-underline near-white hover-bg-near-white hover-orange w-auto pa3 b br2">
            Play Games
          </router-link>
  
          <span class="fr right-0">
            <img class="w5" src="../assets/img/logo.png"/>
          </span>
        </div>
        <div class="fl w-100 b f1-ns f5 tc near-white">
          Countdown to End of the Year 2023
        </div>
        <div class="fl w-100 f5 tc orange">
          <div class="cf mw7-ns mw5 mv4 mv0-ns tc center">
            <div id="clockdiv" class="relative flex heartbeat flex-row items-center justify-center">
              <div class="w-auto pa3 hover-near-white br4">
                <div class="fl w-100 f-headline-l f-6-m f2 b days"></div>
                <div class="fl w-100 f3-ns f4 b">Days</div>
              </div> 
              <div class="w-auto">
                <div class="fl w-100 f-subheadline">:</div>
              </div> 
              <div class="w-auto pa3 hover-near-white br4">
                <div class="fl w-100 f-headline-l f-6-m f2 b hours">00</div>
                <div class="fl w-100 f3-ns f4 b">Hours</div>
              </div>
              <div class="w-auto">
                <div class="fl w-100 f-subheadline">:</div>
              </div>
              <div class="w-auto pa3 hover-near-white br4">
                <div class="fl w-100 f-headline-l f-6-m f2 b minutes">00</div>
                <div class="fl w-100 f3-ns f4 b">Minutes</div>
              </div>
              <div class="w-auto">
                <div class="fl w-100 f-subheadline">:</div>
              </div>
              <div class="w-auto pa3 hover-near-white br4">
                <div class="fl w-100 f-headline-l f-6-m f2 b seconds">00</div>
                <div class="fl w-100 f3-ns f4 b">Seconds</div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="fl w-100 center tc mt5">
          <router-link to="/register" class="bg-near-white dn hover-bg-orange pointer mt3 w-auto orange hover-near-white br2 b f4-ns f5 grow ttc no-underline ph5 pa2">
            Click to register
          </router-link>
        </div>
      </div>
      <div class="dtc w-100 v-mid" v-else>
        <video id="myVideo" autoplay muted loop>
          <source src="../assets/img/bg-video2.mp4" type="video/mp4">
        </video>
        <div class="fl w-100 f-headline heartbeat b tc orange">
          Happy New Year!
          <div class="white pt3">Welcome to 2024</div>
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
      deadline: new Date("dec 31, 2023 23:59:59"), daysSpan:'', hoursSpan: '', minutesSpan: '', secondsSpan: '', timeinterval: ''
    }
  },
  mounted(){
    this.getCountdown()
  },
  methods: {
    getCountdown(){      
      this.initializeClock('clockdiv', this.deadline);
    },
    getTimeRemaining() {
      const total = Date.parse(this.deadline) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));
      
      return {
        total,
        days,
        hours,
        minutes,
        seconds
      };
    },

    initializeClock(id,) {
      const clock = document.getElementById(id);
      this.daysSpan = clock.querySelector('.days');
      this.hoursSpan = clock.querySelector('.hours');
      this.minutesSpan = clock.querySelector('.minutes');
      this.secondsSpan = clock.querySelector('.seconds');
      
      this.updateClock();
      
      this.timeinterval = setInterval(this.updateClock, 1000);
    },
    updateClock() {
        const t = this.getTimeRemaining(this.deadline);

        this.daysSpan.innerHTML = ('0' + t.days).slice(-2);
        this.hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        this.minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        this.secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          this.isComplete = true;
          clearInterval(this.timeinterval);
        }
      }

  }
}
</script>
