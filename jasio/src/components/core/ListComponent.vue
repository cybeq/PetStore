<template>
<h1>List</h1>
</template>

<script>
import ProductService from "@/services/ProductService";
export default {
  name: "ListComponent",
  mounted() {
    ProductService.getAllProducts().then(products=>{
      console.log(products)
    });
  },
  data(){
    return{
      products:[]
    }
  }
}
</script>

<style scoped>

</style>