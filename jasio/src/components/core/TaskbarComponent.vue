<template>
<div class="taskbar">
  <label>
    <img src="@/assets/cat.png">
    <h1>Ferdek</h1>
  </label>
  <div>
    <router-link to="/panel">
       <IconIc class="user" svg-path="user" fill-color="#00000099" height=40 width=40 style=""></IconIc>
    </router-link>
  </div>
</div>
</template>

<script>
import IconIc from "@/components/candies/IconIc.vue";

export default {
  name: "TaskbarComponent",
  components: {IconIc},

}
</script>

<style scoped>
.taskbar, .taskbar label{
  height:60px;
  text-align: left;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-inline: 30px;
  display: flex;
  justify-content: left;
  align-items: center;

}
.taskbar{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.taskbar * {
  display: inline;
  vertical-align: middle;
}
.taskbar h1{
  font-family: ConcertOne, sans-serif;
  margin:0; padding:0;
  color: black;
  margin-left:40px;
  margin-top:-10px;
}
.taskbar img{
  width:50px;
}
.taskbar div{
 text-align: right;
}
.user{
  cursor: pointer;
  width:fit-content;

}
</style>