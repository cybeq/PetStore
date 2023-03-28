<template>
  <div class="panel" :style="`width:${this.width}; opacity:${this.opacity}`">
    <div id="shakable">
        <div style="width:100%; display:flex;justify-content: right; ">
          <IconIc @click="close()" svg-path="x-circle" fill-color="#fff" height=35 width=35 style="display:block; cursor:pointer; margin-bottom:40px;"></IconIc>
        </div>
        <h1>ZALOGUJ SIĘ</h1>
        <IconIc svg-path="user" fill-color="#fff" height=65 width=65></IconIc>
        <div class="white-board"></div>
        <input type="text" v-model="this.name" placeholder="name">
        <input type="password" v-model="this.password" placeholder="name">
        <button @click="login()" class="login_button">Zaloguj</button>
      </div>
  </div>
</template>

<script>
import IconIc from "@/components/candies/IconIc.vue";
import router from "../../../config/router";
const authService = require('@/services/AuthService')
export default {
  name: "LoginComponent",
  components: {IconIc},
  data(){
    return{
      width:0,
      opacity:0.5,
      name:"mat",
      password:"1234"
    }
  },
  mounted(){
    setTimeout(()=>{
      window.innerWidth > 1200 ? this.width = "30%" : this.width = `${window.innerWidth}px`
      this.opacity = 1;
    },100)
  },
  methods:{
    close(){
     router.push('/')
    },
    login(){
      authService.login({name:this.name, password:this.password}).then(auth=>{
        if(auth.error){
          this.shake();
        }
        if(auth.success){
          router.push('/panel')
        }
      }).catch(()=>{
        this.shake();
      })
    },
    shake(){
      document.getElementById('shakable').className="shake";
      setTimeout(()=>{ document.getElementById('shakable').className=""},1000)
    }
  }
}
</script>

<style scoped>
.panel{
  position: fixed;
  top:0;
  right:0;
  color:white;
  padding-top: 100px;
  background: rgba(0, 0, 0, 0.93);
  height:100vh;
  transition: width 1s ease, opacity 1s ease;
  text-align: left;
  padding-inline:20px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.panel IconIc, .panel h1{
  display: inline;
  vertical-align: middle;
}
.panel input{
  display:block;
  width:100%;
  padding:3px;
  box-sizing: border-box;
  margin-block:8px;
  border:none;
  font-family: PoppinsRegular, sans-serif;
  border-radius: 2px;
}
.panel input:focus{
  outline:none;
  background: #ffffff99;

}

.shake{
  animation: shake 1s ease;
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80%, 100% {
    transform: translateX(10px);
  }
}
</style>