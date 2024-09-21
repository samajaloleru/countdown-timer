<template>
  <section>
    <div
      class="cf w-100 dt z-max vh-100 fixed top-0 left-0 right-0 bg-black-40 dark-gray"
    >
      <div class="dtc v-mid vh-100 w-100 ph3 overflow-scroll">
        <div
          class="cf mw7 center br2 bg-light-gray pv6 relative overflow-x-scroll"
          style="max-height: 90vh"
        >
          <span class="w-100 fl tc">
            <img class="w5" src="../../assets/img/logo.png"/>
          </span>

          <div class="w-100 fl tc pb5 b purple f3">
            You have Registered Successfully
          </div>

          <div class="flex justify-center pa1 mv1 w-100">
            <div
              class="w5 flex justify-center items-center pa2 br2 pointer fw6 tc bg-purple hover-bg-yellow hover-purple yellow"
              @click="closePopup"
            >
              <i class="f7 pr2 fas fa-home"></i> Go Back To Homepage
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">

export default {
  name: 'template-default',
  props: ['label', 'editable'],
  data() {
    return {
      
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    
    showPopup() {
      this.$emit('showPopup');
      this.$router.push({name: 'Home'});
    },
    closePopup() {
      this.showPopup();
    },
  },
};
</script>
