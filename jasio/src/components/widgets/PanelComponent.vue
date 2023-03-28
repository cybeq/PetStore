<template>
  <div class="panel" :style="`width:${this.width}`">
    <IconIc @click="close()" svg-path="x-circle" fill-color="#fff" height=35 width=35 style="display:block; cursor:pointer; margin-bottom:40px;"></IconIc>
    <h1>PANEL</h1>
    <div class="white-board" style="margin-bottom:30px;"></div>
    <button v-if="!this.addProduct && !this.editProduct" @click="this.addProduct=true; this.editProduct=false" class="login_button">Dodaj produkt</button>
    <button v-if="!this.addProduct && !this.editProduct" @click="this.addProduct=false; this.editProduct = true" class="login_button" style="margin-top:8px;">Edytuj/Usuń produkt</button>
    <AddProductComponent v-if="this.addProduct"></AddProductComponent>
    <EditDeleteProductComponent v-if="this.editProduct"></EditDeleteProductComponent>
  </div>
</template>

<script>
import IconIc from "@/components/candies/IconIc.vue";
import router from "../../../config/router";
import AddProductComponent from "@/components/crud/AddProductComponent.vue";
import EditDeleteProductComponent from "@/components/crud/EditDeleteProductComponent.vue";

export default {
  name: "PanelComponent",
  components: {EditDeleteProductComponent, AddProductComponent, IconIc},
  data(){
    return{
      width:0,
      opacity:0.5,
      name:"mat",
      password:"1234",
      addProduct:false,
      editProduct:false,
      updateProduct:false,
      deleteProduct:false
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
  overflow-y: auto;
}
.panel h1{
  font-family: PoppinsExtraBold;
}


</style>