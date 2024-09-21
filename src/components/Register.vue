<template>
  <video id="myVideo" autoplay muted loop>
    <source src="../assets/img/bg-video.mp4" type="video/mp4">
  </video>
  <div class="w-100 pa4-ns pa2 dt vh-100 purple">
    
    <div class="dtc w-100 v-mid">
      <div class="cf center mw7 mw6-l bg-near-white br3 shadow-3">
        <div class="flex items-center justify-between w-100 pa1">
          <router-link to="/" class="fl mt3 no-underline hover-bg-yellow purple w-auto pa3 b br2">
            Go To Home
          </router-link>
  
          <span class="fr right-0">
            <img class="w5" src="../assets/img/logo.png"/>
          </span>
        </div>
        <div class="fl w-100 pb2 b f4 tc purple">
          Registration
        </div>
        <div class="fl w-100 near-black mv4 pa4-ns pa3">
          <div class="fl w-100">
            Fill in the fields below
          </div>
          <div v-if="message" class="fl w-100 b pv3 red">
            {{ message }}
          </div>
          <div class="fl w-100 pv3">
            <label class="f7 b">Full Name</label>
            <input type="text" class="fl w-100 inputfield pv2 bg-transparent near-black" placeholder="e.g Cape. Eld. Bro James James" v-model="form.name"/>
          </div>
          <div class="fl w-100 pv3">
            <label class="f7 b">Email</label>
            <input type="email" class="fl w-100 inputfield pv2 bg-transparent near-black" placeholder="james@mail.com" v-model="form.email"/>
          </div>
          <div class="fl w-100 pv3">
            <label class="f7 b">Phone Number</label>
            <input type="tel" class="fl w-100 inputfield pv2 bg-transparent near-black" placeholder="070*********" v-model="form.mobile"/>
          </div>
          <div class="fl w-100 pv3">
            <label class="f7 b">Parish</label>
            <input type="text" class="fl w-100 inputfield pv2 bg-transparent near-black" placeholder="C.C.C National Headquarter" v-model="form.parish"/>
          </div>
          <div class="fl w-100 pt3 mt2 pv2 bb bw1 b--gray">
            <label class="f7 b">Are You attending</label>
            <select class="fl w-100 inputfield2 bg-transparent near-black pt1" v-model="form.attending">
              <option value="" selected></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div class="fl w-100 pv3 bb bw1 b--gray">
            <label class="f7 b">Question</label>
            <textarea class="fl w-100 h3 inputfield2 pt1 pv2 bg-transparent near-black" v-model="form.question"></textarea>
          </div>
          <div v-if="isSubmit" @click="handleSumbit" class="pointer fl w-100 tc bg-purple b yellow mt4 br2 hover-bg-yellow hover-purple pv3">
            Submit
          </div>
          <div v-else class="pointer fl w-100 tc bg-near-black near-white mt4 br2 hover-bg-purple hover-near-black pv3">
            <i class="f7 fas fa-spinner fa-spin"></i> Submiting ...
          </div>
        </div>
      </div>
    </div>
    <popupsuccess
      ref="return"
      :editable="false"
      :class="{ dn: !isPopup }"
      @showPopup="showPopup"
    />
  </div>
</template>

<script>
  import {EMAIL_REGEX} from '../utils/common';
  import { client } from  '../utils/client';
  import { getUserByEmail, getUserByMobile } from  '../utils/data';

  import popupsuccess from '../components/reuseables/popup-success.vue';

  export default {
    name: 'Register',
    data(){
      return{
        isSubmit: true,
        isPopup: false,
        message: '',
        form: {
          name: '',
          email: '',
          mobile: '',
          parish: '',
          attending: '',
          question: ''
        }
      }
    },
    components: { popupsuccess },
    methods: {
      showPopup() {
        this.isPopup = !this.isPopup;
      },
     
      resetForm() {
        const app = this
        app.form.name = '';
        app.form.email = '';
        app.form.mobile = '';
        app.form.parish = '';
        app.form.attending = '';
        app.form.question = '';
      },
      validateForm(){
        const app = this
        const {name, email, mobile, parish, attending} = app.form
        let message = '';
        if (!name) 
          message = "FullName is required"
        
        else if (!email)
          message = "Email must be provided"

        else if (!EMAIL_REGEX.test(email))
          message = "Email is not valid"

        else if (!mobile) 
          message = "Phone Number is required"

        else if (!parish) 
          message = "Parish is required"

        else if (!attending) 
          message = "Please indicate if you would be attending the program"
        
        return message
      },

      checkIfUserExistByEmail(){
        const app = this;
        const {email} = app.form;
        return getUserByEmail(email);
      },

      checkIfUserExistByMobile(){
        const app = this;
        const {mobile} = app.form;
        return getUserByMobile(mobile);
      },

      async handleSumbit(){
        const app = this;
        app.isSubmit = false
        const validator = app.validateForm();
        
        if (validator) {
          app.message = validator
          setTimeout(() => {
            app.isSubmit = true
            app.message = '';
          }, 4000);
          return
        }

        const userExistByEmail = await app.checkIfUserExistByEmail();

        if (userExistByEmail) {
          app.message = 'Someone already registered with this email'
          setTimeout(() => {
            app.isSubmit = true
            app.message = '';
          }, 4000);
          return
        }

        const userExistByMobile = await app.checkIfUserExistByMobile();
        
        if (userExistByMobile) {
          app.message = 'Someone already registered with this phone number'
          setTimeout(() => {
            app.isSubmit = true
            app.message = '';
          }, 4000);
          return
        }
        
        // create user doc object
        const doc = {
          _type: 'user',
          name: app.form.name.toLowerCase(),
          email: app.form.email.toLowerCase(),
          mobile: app.form.mobile,
          parish: app.form.parish.toLowerCase(),
          attending: app.form.attending.toLowerCase(),
          question: app.form.question.toLowerCase(),
        }
        client.create(doc)
          .then(() => {
            setTimeout(() => {
              app.resetForm();
              app.isSubmit = true
              app.showPopup()
            }, 2000);
          })
      }

    }
  }
</script>
