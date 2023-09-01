<template>
  <video id="myVideo" autoplay muted loop>
    <source src="../assets/img/bg-video.mp4" type="video/mp4" />
  </video>
  <div class="cf center mw8">
    <div class="w-100 pa4 dt vh-100">
      <div class="dtc v-mid">
        <div
          class="flex flex-column w-100 justify-center bg-near-white near-black pa4 br4"
        >
          <div class="flex items-center justify-between w-100 pa1">
            <div class="b">
              No Of Registered Users : <span class="f2">{{ users.length }}</span>
            </div>
            <div class="">
              <img class="w5" src="../assets/img/logo.png" />
            </div>
          </div>
          <div class="flex flex-row w-100 pv3 bb bw3 b b--gold near-black">
            <div class="w-30">Full Name</div>
            <div class="w-25 pl3">Email/Phone Number</div>
            <div class="w-50 pl3">Action</div>
          </div>
          <div class="flex flex-column w-100 pt2 overflow-auto f7 h5">
            <div
              v-for="(user, index) in users"
              :key="index"
              class="flex flex-row items-center w-100 bb pv3 ph2 hover-bg-gold pointer"
            >
              <div class="w-30 ttc truncate">
                {{ user.name }}
              </div>
              <div class="w-25 pl3">
                {{ user.email }}
                <span class="db bt">{{ user.mobile }}</span>
              </div>
              <div class="flex justify-between w-50">
                <div class=""></div>
                <div class="bg-gold hover-bg-near-white pa2 fw4 br3" @click="showPopup(index)">View Question</div>
              </div>
              <popupuser
                :label=user
                :editable="false"
                v-if="isPopup && currentIndex == index"
                @showPopup="showPopup"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUsers } from "../utils/data";
import popupuser from "../components/reuseables/popup-user.vue";

export default {
  name: "User",
  data() {
    return {
      users: [],
      isPopup: false,
      currentIndex: null
    };
  },
  components: {popupuser},
  async mounted() {
    this.storeUserList();
  },
  methods: {
    showPopup(index) {
      this.isPopup = !this.isPopup;
      this.currentIndex = index;
    },
    async storeUserList() {
      const app = this;
      app.users = await getUsers();
      return;
    },
  },
};
</script>
