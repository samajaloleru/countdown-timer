<template>
  <div class="cf center mw8">
    <div class="w-100 dt vh-100 near-white">
      <div class="dtc w-100 v-mid" v-if="!isComplete">
        <div class="fl items-center justify-between w-100 pa1 pt1-ns pt3">
          <!-- <router-link to="/games" class="fl mt3 no-underline purple bg-yellow hover-orange w-auto pa3 b br2">
            Play Games
          </router-link> -->
  
          <div class="fr-ns right-0-ns">
            <img class="w5" src="../assets/img/logo.png"/>
          </div>
        </div>
        <!-- <div class="fl w-100 b f1-ns f5 tc near-white">
          Countdown to End of the Year 2023
        </div> -->
        <div class="fl w-100 f5 tc bg-purple">
          <div class="cf mw7-ns mw5 tc center">
            <div id="clockdiv" class="flex flex-row items-center justify-center">
              <div class="w-auto pa3 yellow br4">
                <div class="fl w-100 f-subheadline-l f1 b days"></div>
                <div class="fl w-100 f3-ns f6 b">Days</div>
              </div> 
              <div class="w-auto">
                <div class="fl w-100 f1 yellow">:</div>
              </div> 
              <div class="w-auto pa3 yellow br4">
                <div class="fl w-100 f-subheadline-l f1 b hours">00</div>
                <div class="fl w-100 f3-ns f6 b">Hours</div>
              </div>
              <div class="w-auto">
                <div class="fl w-100 f1 yellow">:</div>
              </div>
              <div class="w-auto pa3 yellow br4">
                <div class="fl w-100 f-subheadline-l f1 b minutes">00</div>
                <div class="fl w-100 f3-ns f6 b">Minutes</div>
              </div>
              <div class="w-auto">
                <div class="fl w-100 f1  yellow">:</div>
              </div>
              <div class="w-auto pa3 white br4">
                <div class="fl w-100 f-subheadline-l f1 b seconds heartbeat">00</div>
                <div class="fl w-100 f3-ns f6 b yellow">Seconds</div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="fl w-100 center tc mt5">
          <router-link to="/register" class="bg-yellow hover-bg-purple pointer mt3 w-auto purple hover-yellow br2 b f4-ns f5 grow ttc no-underline ph5 pa2">
            Click to register
          </router-link>
        </div>
      </div>
      <div class="dtc w-100 v-mid" v-else>
        <video id="myVideo" autoplay muted loop>
          <source src="../assets/img/bg-video2.mp4" type="video/mp4">
        </video>
        <div class="fl w-100 f-headline-l  f1 heartbeat b tc orange">
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
      deadline: new Date("oct 26, 2024 10:59:59"), daysSpan:'', hoursSpan: '', minutesSpan: '', secondsSpan: '', timeinterval: ''
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
