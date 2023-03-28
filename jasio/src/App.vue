<template>
<div></div>
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <HeaderComponent></HeaderComponent>
  <TaskbarComponent></TaskbarComponent>
  <LogoComponent></LogoComponent>
  <OffersComponent></OffersComponent>
  <ListComponent></ListComponent>
  <FooterComponent></FooterComponent>
  <router-view></router-view>
</template>
<style>
@font-face {
  font-family: 'PoppinsRegular';
  src: url('@/assets/fonts/Poppins-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'PoppinsExtraBold';
  src: url('@/assets/fonts/Poppins-ExtraBold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'PoppinsBold';
  src: url('@/assets/fonts/Poppins-SemiBold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'ConcertOne';
  src: url('@/assets/fonts/ConcertOne-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
body{
  margin:0;
  padding: 0;
  overflow-x: hidden;
}

</style>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from "@/components/core/HeaderComponent.vue";
import TaskbarComponent from "@/components/core/TaskbarComponent.vue";
import LogoComponent from "@/components/core/LogoComponent.vue";
import OffersComponent from "@/components/core/OffersComponent.vue";
import ListComponent from "@/components/core/ListComponent.vue";
import FooterComponent from "@/components/core/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    FooterComponent,
    ListComponent,
    OffersComponent,
    LogoComponent,
    TaskbarComponent,
    HeaderComponent
  }
}
</script>

<style>
.login_button, .cancel_button{
  width:100%;
  padding:8px;
  border:solid white 3px;
  background:none;
  color:white;
  font-family: PoppinsExtraBold, sans-serif;
  border-radius: 5px;
  cursor:pointer;
  transition: background-color 0.7s ease, border-color 0.7s ease;
}
.login_button:hover{
  background-color: #30bf88;
  border-color:#30bf88;
}
.cancel_button:hover{
  background-color: #bf3070;
  border-color:#bf3070;
}
.white-board{
  width:100%;
  height:10px;
  background: white;
  border-radius: 2px;
}
body{
  margin:0;
  padding:0;
  color:#091727;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
