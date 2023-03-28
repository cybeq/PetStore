<template>
<img style="width:100%; max-height:320px" :src="this.photo">
</template>

<script>
export default {
  name: "PhotoPreviewComponent",
  props:{
    photo:{
      required:true
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>