<template>
  <div class="cf center mw8">
    <div class="w-100 pa4 dt vh-100 gold">
      <div class="dtc w-100 v-mid" v-if="!isComplete">
        <div class="fl w-100">
          <router-link to="/games" class="fl mt3 no-underline bg-near-gold white hover-bg-gold hover-navy w-auto pa3 b br2">
            Play Games 
          </router-link>
  
          <span class="fr right-0">
            <img class="w4" src="../assets/img/logo.png"/>
          </span>
        </div>
        <div class="fl w-100 f2-ns f5 tc near-white">
          Countdown to Our Heritage Program
        </div>
        <div class="fl w-100 f5 tc gold">
          <div class="cf mw7-ns mw5 mv4 mv0-ns tc center">
            <div id="clockdiv" class="relative flex heartbeat flex-row items-center justify-center">
              <div class="w-auto pa3 hover-gold br4">
                <div class="fl w-100 f-headline-l f-6-m f2 b days"></div>
                <div class="fl w-100 f3-ns f4 b">Days</div>
              </div> 
              <div class="w-auto">
                <div class="fl w-100 f1">:</div>
              </div> 
              <div class="w-auto pa3 hover-gold br4">
                <div class="fl w-100 f-headline-l f-6-m f2 b hours">00</div>
                <div class="fl w-100 f3-ns f4 b">Hours</div>
              </div>
              <div class="w-auto">
                <div class="fl w-100 f1">:</div>
              </div>
              <div class="w-auto pa3 hover-gold br4">
                <div class="fl w-100 f-headline-l f-6-m f2 b minutes">00</div>
                <div class="fl w-100 f3-ns f4 b">Minutes</div>
              </div>
              <div class="w-auto">
                <div class="fl w-100 f1">:</div>
              </div>
              <div class="w-auto pa3 hover-gold br4">
                <div class="fl w-100 f-headline-l f-6-m f2 b seconds">00</div>
                <div class="fl w-100 f3-ns f4 b">Seconds</div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="fl w-100 center tc mt5">
          <router-link to="/register" class="bg-gold pointer mt3 w-auto near-black br2 bold ttc no-underline pa2">
            Click to register
          </router-link>
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

        this.daysSpan.innerHTML = t.days;
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
