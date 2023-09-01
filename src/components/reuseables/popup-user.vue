<template>
  <section>
    <div
      class="cf w-100 dt z-max vh-100 fixed top-0 left-0 right-0 bg-black-70 dark-gray"
    >
      <div class="dtc v-mid vh-100 w-100 ph3 overflow-scroll">
        <div
          class="cf mw6 center br2 bg-light-gray pa3 relative overflow-x-scroll"
          style="max-height: 90vh"
        >

          <div class="w-100 fl pv5 dark-green f7">
            <div class="fl w-100 pb3">
              <span class="db">Full Name</span>
              <div class="f5 b ttc pv2">{{ objUser.name }}</div>
            </div>
            <div class="fl w-100 pb3">
              <div class="fl w-100 w-60-ns truncate pb0-ns pb3">
                <span class="db">Email</span>
                <div class="f5 b ttc pv2">{{ objUser.email }}</div>
              </div>
              <div class="fl fr-ns w-100 w-30-ns">
                <span class="db">Phone Number</span>
                <div class="f5 b ttc pv2">{{ objUser.mobile }}</div>
              </div>
            </div>
            <div class="fl w-100 pb3">
              <span class="db">Parish</span>
              <div class="f5 b ttc pv2">{{ objUser.parish }}</div>
            </div>
            <div class="fl w-100">
              <span class="db">Question</span>
              <div class="f5 b ttc pv2">{{ objUser.question }}</div>
            </div>
          </div>

          <div class="flex justify-center pa1 mv1 w-100">
            <div
              class="w5 flex justify-center items-center pa2 br2 pointer fw6 tc bg-near-black hover-bg-gold hover-near-black near-white"
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
      objUser: {},
    };
  },
  mounted() {
    this.objUser = this.label
    console.log(this.objUser);
  },
  methods: {
    showPopup() {
      this.$emit('showPopup', this.objUser);
      // this.$router.push({name: 'Home'});
    },
    closePopup() {
      this.showPopup();
    },
  },
};
</script>
