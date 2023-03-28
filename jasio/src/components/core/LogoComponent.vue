<template>

    <section class="logo">
<!--      logo headers-->
      <div>
        <button class="promo">
          <IconIc svg-path="home" fill-color="#fff" height=60 width=60></IconIc>
        </button>
        <h1 style=" padding-top:30px; color: #22ac78">Domek</h1><h1 style="font-size:2.5em; padding-left:50px; min-width: 600px"> dla Twojego futrzaka</h1>
        <button class="buy_button">Kup teraz</button>
      </div>
<!--      cat & wave pic-->
      <div>
        <img  style="width:100%;" class="wave" src="@/assets/wave.png">
        <img class="dog" src="@/assets/cat1.png" :style="'margin-left:' + this.catX +'px'">
      </div>

    </section>

</template>

<script>
import IconIc from "@/components/candies/IconIc.vue";

export default {
  name: "LogoComponent",
  components: {IconIc},
  data(){
    return {
        catX: window.outerWidth/10
    }
  },
  mounted() {
    window.addEventListener('resize', ()=>{
      if(window.outerWidth < 1430){
        this.catX= window.outerWidth/25
      }
    })
  }
}
</script>

<style scoped>
 section[class='logo']
 {
   height:500px;
   background: #f1f4f4;
   width: 100%;
   text-align: left;
   display: grid;
   grid-template-columns: 1fr 1fr;
 }
 img[class="dog"]
 {
   width:600px;

   margin-top:-500px;

 }
 .logo h1{
   font-size:6.5em;
   margin:0; padding:0;
   font-family: ConcertOne, sans-serif;
 }
 .promo{
   text-align: center;
   width:120px;
   height:120px;
   border-radius:100%;
   border:none;
   padding-left:20px;
   background: #22ac78;
   margin-top:60px;
   margin-left:30px;
 }
  .buy_button{
    background: #091727;
    color:white;
    border:none;
    padding:30px;
    padding-inline:120px;
    border-radius: 40px;
    margin-top:20px;
    font-family: PoppinsExtraBold, sans-serif;
    margin-left:20px;
    transition: color 1s ease;
    cursor: pointer;
  }
  .buy_button:hover{
    color: #774ad8;
  }
 @media(max-width: 900px){
   img[class="dog"]
   {
     right:-170px;
   }
 }
</style>