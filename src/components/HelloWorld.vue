<template>
  <div class="vh-100 h-100 dt w-100 tc">
    <div class="dtc v-mid">
      <span class="z-max top-0 right-2 absolute">
        <img width="150px" class="glow" src="../assets/img/logo.png"/>
      </span>
      <div class="fl w-100 tc">
        <div class="cf w7-l tc center">
          <div id="clockdiv" class="relative flex flex-row heartbeat items-center justify-center">
            <div class="w-auto pa3 hover-light-pink br4">
              <div class="fl w-100 f-subheadline-l f1-m f2 b days"></div>
              <div class="fl w-100 f3 b">Days</div>
            </div> 
            <div class="w-auto">
              <div class="glow fl w-100">:</div>
            </div> 
            <div class="w-auto pa3 hover-light-pink br4">
              <div class="fl w-100 f-subheadline-l f1-m f2 b hours">00</div>
              <div class="fl w-100 f3 b">Hours</div>
            </div>
            <div class="w-auto">
              <div class="fl w-100">:</div>
            </div>
            <div class="w-auto pa3 hover-light-pink br4">
              <div class="fl w-100 f-subheadline-l f1-m f2 b minutes">00</div>
              <div class="fl w-100 f3 b">Minutes</div>
            </div>
            <div class="w-auto">
              <div class="fl w-100">:</div>
            </div>
            <div class="w-auto pa3 hover-light-pink br4">
              <div class="fl w-100 f-subheadline-l f1-m f2 b seconds">00</div>
              <div class="fl w-100 f3 b">Seconds</div>
            </div>
          </div>
        </div>
        <div class="cf tracking-in-expand-fwd w-50-l f6 measure center hover-bg-black-30 hover-light-pink bg-light-pink navy b pv3 ph2 br2 mt4 tc">
          May this new year bring us a fantastic January, a brilliant February, a calm March, an anxiety-free April, a phenomenal May, and joy that lasts from June to November, with a happy December to cap it off.
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      deadline: new Date("dec 31, 2022 23:59:59"), daysSpan:'', hoursSpan: '', minutesSpan: '', secondsSpan: '', timeinterval: ''
    }
  },
  mounted(){
    this.getCountdown()
  },
  methods: {
    getCountdown(){
      console.log("deadline", this.deadline);
      
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
          clearInterval(this.timeinterval);
        }
      }

  }
}
</script>
