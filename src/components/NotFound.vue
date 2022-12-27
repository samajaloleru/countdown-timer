<template>
  <div class="h-100 flex overflow-auto flex-column bg-black-10 vh-100">
    <div v-if="!isComplete">
      <div class="fl mb2 mb0-ns w-100 tr">
        <span class="fr pa3">
          <img width="130px" class="relative" src="../assets/img/logo.png"/>
        </span>
      </div>
      <div class="cf center mw7 tc mv4 mv0-ns fw6 measure">
        <div class="typed-out light-pink pr2">
          Countdown to the Year 2023
        </div>
      </div>
      
      <div class="cf tracking-in-expand-fwd w-50-l f6 measure center hover-bg-black-30 hover-light-pink bg-light-pink navy b pv3 ph2 br2 mt4 tc">
          Not Found
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
  name: 'NotFound',
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
