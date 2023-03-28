<template>
  <div class="offers">

    <div v-for="offer in offers" :key="offer.name" :style="`background-color:${offer.background};`" class="scalable">
      <label class="content">
        <h1 :style="`color:${offer.h1.color}`">{{offer.h1.value}}</h1>
        <p :style="`color:${offer.p.color}`">{{offer.p.value}}</p>
      </label>
      <div style="position: relative;">
        <img  :src="offer.img.path" class="offer_pet" :style="`width:${offer.img.width}px; height:${offer.img.height}px; `"  style=" position: absolute;bottom: 30px;left: 0">
      </div>
    </div>
  </div>
  <CounterComponent></CounterComponent>
</template>

<script>
import CounterComponent from "@/components/widgets/CounterComponent.vue";

export default {
  name: "OffersComponent",
  components: {CounterComponent},
  data(){
    return{
      scale:1,
      offers:[
        {name:'houses',  img:{path: require('@/assets/cat2.png'), width:120, height:104}, background:'#ed8337', h1:{value:'Domki', color:'whitesmoke'},    p: {value:'dla Twojego ukochanego pupila', color:'whitesmoke'}, href:'/'},
        {name:'food',    img:{path: require('@/assets/dog2.png'), width:130, height:134}, background:'#30bf88', h1:{value:'Jedzenie', color:'whitesmoke'}, p: {value:'o najlepszych wartościach odzywczych', color:'whitesmoke'}, href:'/'},
        {name:'courses', img:{path: require('@/assets/cat2.png'), width:120, height:104}, background:'#439fd2', h1:{value:'Kursy', color:'whitesmoke'},    p: {value:'i szkolenia najlepsze w mieście', color:'whitesmoke'}, href:'/'},
        {name:'toys',    img:{path: require('@/assets/cat2.png'), width:120, height:104}, background:'#784ad9', h1:{value:'Zabawki', color:'whitesmoke'},  p: {value:'Twoj zwierzak oszaleje z radości', color:'whitesmoke'}, href:'/'}
      ]
    }
  }
}
</script>

<style scoped>
.offers{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  padding-inline:30px;
  text-align: left;
  margin-top:-30px;
}
.offers div{

  padding:30px;
  height:135px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.offer_pet{

}
.content{
  text-align: right;
}
.scalable{
  transition: transform 1s ease;
  border-radius:5px;
}
.scalable:hover{
  transform: scale(1.3)
}
@media (max-width: 900px) {
  .offers{
    grid-template-columns: 1fr;  }
}
</style>