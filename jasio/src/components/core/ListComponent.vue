<template>
<div class="list-container">

<div class="list-position" v-for="all in this.products" :key="all.id">
  <img :src="`/api/download/${all.photoUrl}/raw`" >
  <div>
    <h1>{{all.name}}</h1>
    <p>{{all.description}}</p>
  </div>
  <div>
    <h3 class="price">{{all.price}},-</h3>
    <p class="date">{{new Date(all.createdAt).toLocaleDateString()}}, sprzedawca: {{all.username}}</p>
  </div>
</div>


</div>


</template>

<script>
import ProductService from "@/services/ProductService";
export default {
  name: "ListComponent",
  mounted() {
    ProductService.getAllProducts().then(products=>{
      this.products = products;
    });
  },
  data(){
    return{
      products:[],
      productLength:0,
      i:0
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.list-container{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  text-align: center;
  padding-inline:20px;
  margin-top:20px;
}
.list-position:hover{
  transform: scale(1.3);
}
.list-position{
  padding:20px;
  text-align: left;
  background: #091727;
  color:white;
  border-radius: 6px;
  transition: transform 0.7s ease;
  cursor:pointer;
}
.list-position h1,p, h3{
  margin:0;
}
.list-position h1{
  background: white;
  color:#091727;
  border-radius:6px;
  padding-inline: 7px;
  margin-bottom:10px;
}
.price{
  color:#439fd2;
  margin-top:10px;
}
.date{
  font-size:0.8em;
}
.list-position img{
  width:80%;
  margin-block:15px;
  min-height:200px;
  max-height:300px;
  border-radius:4px;
}
.arrow-left, .arrow-right{
  display: flex;
  justify-content: center;
  align-items: center;
}

@media(max-width: 900px) {
 .list-container{
   grid-template-columns: 1fr 1fr;
 }
  .list-position img{
    width:80%;
    margin-block:15px;
    min-height:80px;
    max-height:120px;

  }
}
</style>