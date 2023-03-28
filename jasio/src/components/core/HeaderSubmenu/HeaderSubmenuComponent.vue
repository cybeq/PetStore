<template>
<div class="sumbenu-container" @mouseleave="hideSubmenu()">
  <div v-for="all of submenu" :key="all.name">
    <IconIc svg-path="link-2" fill-color="#00000099" height=15 width=15 style="border:none;"></IconIc>
    {{all.value}}
  </div>
</div>
</template>

<script>
import IconIc from "@/components/candies/IconIc.vue";
export default {
  name: "HeaderSubmenuComponent",
  components: {IconIc},
  props:{
    submenu: {
      type: Array,
      required: false
    },
    moveY:{
      type:String,
      required:false,
      default:"-180px"
    }
  },
  data(){
    return{

    }
  },
  methods:{
    hideSubmenu(){
      this.$emit('closeSubmenu', true)
    },

  },
  mounted() {

  }
}
</script>

<style scoped>
.sumbenu-container{
  margin:0;
  padding:0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  position: absolute;
  z-index: 10;
  background: white;
  width:100%;
  transition: transition 1s ease;

}
.sumbenu-container div{
  width: 100%;
  text-align: left;
  background: white;
  border-bottom:1px solid #00000030;
  padding:10px;
  cursor:pointer;
  transition: color 1s ease;
}
.sumbenu-container div:hover{
  color: #22ac78!important;
}
</style>