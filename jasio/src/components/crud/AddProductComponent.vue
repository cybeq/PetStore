<template>
  <div class="add-product-container" :style="`transform: translateX(${this.translateX}px)`">
    <label>Nazwa produktu</label>
      <input type="text" v-model="this.name">
    <label>Opis</label>
      <input type="text" style="height:200px" v-model="this.description">
    <label>Cena</label>
      <input type="number" v-model="this.price">
    <label>Zdjęcie produktu</label>
      <input type="file" accept="image/gif, image/jpeg, image/png" @change="appendImage">
    <div v-if="this.loading">Ladowanie</div>
  </div>
  <PhotoPreviewComponent v-if="this.photo" :photo="this.photo"></PhotoPreviewComponent>
  <button class="login_button" @click="addProduct()">Dodaj</button>

</template>

<script>
import PhotoPreviewComponent from "@/components/widgets/PhotoPreviewComponent.vue";

const productService = require('@/services/ProductService');
import axios from "axios";
export default {
  name: "AddProductComponent",
  components: {PhotoPreviewComponent},
  data(){
    return{
      translateX:500,
      name:'',
      description:'',
      price:0,
      photoUrl:'/',
      photo:undefined,
      uploaded:false,
      loading:false
    }
  },
  mounted() {
    setTimeout(()=>{ this.translateX = 0;},100)
  },
  methods:{
    appendImage(event){
      this.uploaded = false;
      this.loading = true;
      let formData = new FormData();
      formData.append('image', event.target.files[0]); // assuming 'selectedImage' is the file object
      this.photo = URL.createObjectURL(event.target.files[0]);
      axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
          .then(response => {
            this.uploaded = true;
            this.loading = false;
            this.photoUrl = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    },

    addProduct(){
      const formData = new FormData();
      formData.append('price', this.price);
      formData.append('name', this.name);
      formData.append('description', this.description);
      formData.append('photoUrl', this.photoUrl);
      productService.createProduct(formData).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.add-product-container{
  margin-top:20px;
  transition: transform 1s ease;
}
.add-product-container input{
  display:block;
  width:100%;
  padding:3px;
  box-sizing: border-box;
  margin-block:8px;
  border:none;
  font-family: PoppinsRegular, sans-serif;
  border-radius: 2px;
}
.add-product-container input:focus{
  outline:none;
  background: #ffffff99;

}
</style>