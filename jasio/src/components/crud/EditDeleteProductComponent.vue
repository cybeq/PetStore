<template>
  <div id="shakable" v-if="this.products.length>0">
    <div class="add-product-container" :style="`transform: translateX(${this.translateX}px)`">

      <label>Wybierz produkt</label>
      <select v-model="selectedProduct" @change="selectProduct()">
        <option v-for="all in this.products" :key="all.id" :value="all.id">{{all.name}}</option>
      </select>


      <textarea style="height:200px" v-model="this.description"  placeholder="wszystkie pola musza byc wypelnione"></textarea>
      <label>Cena</label>
      <input type="number" v-model="this.price"  placeholder="wszystkie pola musza byc wypelnione">
      <label>Zdjęcie produktu</label>
      <input type="file" accept="image/gif, image/jpeg, image/png" @change="appendImage">
    </div>
    <PhotoPreviewComponent v-if="this.photo" :photo="this.photo"></PhotoPreviewComponent>
    <button class="login_button" @click="editProduct()">Edytuj</button>
    <button class="cancel_button" @click="deleteProduct()" style="margin-top:10px;">Usuń</button>
  </div>

  <div class="add-product-container" :style="`transform: translateX(${this.translateX}px)`" v-if="this.products.length<1" >
      <h1>Nie masz produktów</h1>
  </div>
</template>

<script>
import ProductService from "@/services/ProductService";
import axios from "axios";
import PhotoPreviewComponent from "@/components/widgets/PhotoPreviewComponent.vue";
import router from "../../../config/router";

export default {
  name: "EditDeleteProductComponent",
  components: {PhotoPreviewComponent},
  data(){
    return{
      products: [],
      selectedProduct:undefined,
      price:undefined,
      description:undefined,
      photo:null,
      id:null,
      translateX:500,

    }
  },
  mounted(){
    ProductService.getAllProducts().then(products=>{
      this.products = products;
      if(this.products.length>0){
        this.selectedProduct = this.products[0].id
        this.description = this.products[0].description
        this.price = this.products[0].price
        this.id = this.products[0].id
      }
    });
    setTimeout(()=>{ this.translateX = 0;},100)
  },
  methods:{
    editProduct(){
      ProductService.updateProduct(this.id, {price:this.price, description:this.description, name:this.name, photoUrl:this.photoUrl}).then(res=>{
        if(res.success){
          router.push('/')
          location.reload();
        }
        if(res.error){
          this.shake();
          console.log(res)
        }
      }).catch(err=>{
        console.log(err)
      })
    },
    selectProduct(){
      const prod = this.products.find(product => product.id === this.selectedProduct)
      this.description = prod.description
      this.price = prod.price
      this.id = prod.id
    },
    deleteProduct(){
      ProductService.deleteProduct(this.id).then(res=>{
        if(res.success){
          router.push('/')
          location.reload();
        }
        if(res.error){
          this.shake()
          console.log(res)
        }
      }).catch(error =>{
        console.log({error})
      })
    },
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