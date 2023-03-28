<template>
  <div id="shakable">
  <div class="add-product-container" :style="`transform: translateX(${this.translateX}px)`">
    <label>Nazwa produktu</label>
      <input type="text" v-model="this.name" placeholder="wszystkie pola wymagane">
    <label>Opis</label>
    <textarea style="height:200px" v-model="this.description" placeholder="wszystkie pola wymagane"></textarea>
    <label>Cena</label>
      <input type="number" v-model="this.price"  placeholder="wszystkie pola musza byc wypelnione">
    <label>Zdjęcie produktu</label>
      <input type="file" accept="image/gif, image/jpeg, image/png" @change="appendImage">
    <div v-if="this.loading">Ladowanie</div>
  </div>
  <PhotoPreviewComponent v-if="this.photo" :photo="this.photo"></PhotoPreviewComponent>
  <button class="login_button" @click="addProduct()">Dodaj</button>
  </div>
</template>

<script>
import PhotoPreviewComponent from "@/components/widgets/PhotoPreviewComponent.vue";

const productService = require('@/services/ProductService');
import axios from "axios";
import router from "../../../config/router";
export default {
  name: "AddProductComponent",
  components: {PhotoPreviewComponent},
  data(){
    return{
      translateX:500,
      name:'',
      description:'',
      price:0,
      photoUrl:'',
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
            this.shake()
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
        if(res.error){
          this.shake()
          console.log(res)
        }
        if(res.success){
          router.push('/');
          location.reload();
        }
        console.log(res)
      }).catch(err=>{
        this.shake();
        console.log(err)
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
.add-product-container{
  margin-top:20px;
  transition: transform 1s ease;
}
.add-product-container input, textarea{
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