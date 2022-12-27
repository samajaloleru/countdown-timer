<template>
  <div class="h-100 flex overflow-auto flex-column bg-black-10 vh-100">
    <div v-if="!isComplete">
      <div class="fl w-100">
        <router-link to="/games" class="fl mt3 no-underline bg-black-10 white hover-bg-light-pink hover-navy w-auto pa3 b br2">
          Play Games 
        </router-link>

        <div class="fr right-0">
          <img class="w4" src="../assets/img/logo.png"/>
        </div>
      </div>
      <div class="cf center mw7 tc mv4 mv0-ns fw6 measure">
        <div class="typed-out light-pink pr2">
          Countdown to the Year 2023
        </div>
      </div>
      <div class="cf mw7-ns mw5 mv4 mv0-ns tc center">
        <div id="clockdiv" class="relative flex heartbeat flex-row items-center justify-center">
          <div class="w-auto pa3 hover-light-pink br4">
            <div class="fl w-100 f-subheadline-l f1-m f2 b days"></div>
            <div class="fl w-100 f3-ns f4 b">Days</div>
          </div> 
          <div class="w-auto">
            <div class="glow fl w-100">:</div>
          </div> 
          <div class="w-auto pa3 hover-light-pink br4">
            <div class="fl w-100 f-subheadline-l f1-m f2 b hours">00</div>
            <div class="fl w-100 f3-ns f4 b">Hours</div>
          </div>
          <div class="w-auto">
            <div class="fl w-100">:</div>
          </div>
          <div class="w-auto pa3 hover-light-pink br4">
            <div class="fl w-100 f-subheadline-l f1-m f2 b minutes">00</div>
            <div class="fl w-100 f3-ns f4 b">Minutes</div>
          </div>
          <div class="w-auto">
            <div class="fl w-100">:</div>
          </div>
          <div class="w-auto pa3 hover-light-pink br4">
            <div class="fl w-100 f-subheadline-l f1-m f2 b seconds">00</div>
            <div class="fl w-100 f3-ns f4 b">Seconds</div>
          </div>
        </div>
      </div>
      <div class="cf tracking-in-expand-fwd w-50-l f6 measure center hover-bg-black-30 hover-light-pink bg-light-pink navy b pv3 ph2 br2 mv4 tc">
        May this new year bring us a fantastic January, a brilliant February, a calm March, an anxiety-free April, a phenomenal May, and joy that lasts from June to November, with a happy December to cap it off.
      </div>
    </div>
    <video v-else autoplay muted loop id="myVideo">
      <source src="../assets/img/bg-video.mp4" type="video/mp4">
    </video>
    
    <div class="fl b black-20 absolute w-100 bottom-0">
      Built by Authentic Sam & Ife
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      isComplete: false,
      deadline: new Date("dec 31, 2022 23:59:59"), daysSpan:'', hoursSpan: '', minutesSpan: '', secondsSpan: '', timeinterval: ''
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
