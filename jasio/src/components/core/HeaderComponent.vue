<template>
  <header >
    <button  v-for="link in menu"  @mouseenter="showSubMenu(link)" :key="link.name">
      <IconIc :svg-path="link.icon" fill-color="#00000099" height=15 width=15></IconIc>
      <p>{{String(link.value).toUpperCase()}}</p>
    </button>

    <div v-for="data in companyInfo" :key="data.name">
      <label>
        <IconIc :svg-path="data.icon" fill-color="#00000099" height=10 width=10></IconIc>
        <label>{{String(data.value).toUpperCase()}}</label>
      </label>
    </div>
  </header>
  <div :style="'transform: translateY(' + this.submenuY +')'" class="dropDown">
    <HeaderSubmenuComponent  @closeSubmenu="showSubMenu('leave')" :submenu="this.hoverSubmenu" top-to-change="200px"></HeaderSubmenuComponent>
  </div>
</template>
<style>
header{
  position: absolute;
  top:0;
  z-index:60;
  left:0;
  background:#f1f4f4;
  width:100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height:40px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: PoppinsRegular, sans-serif;
}
header button{
  padding:0;
  margin:0;
  display: inline;
  list-style:none;
  min-width:120px;
  height: 100%;
  background: none;
  border:none;
  font-family: PoppinsBold, sans-serif;
  margin-right: 10px;
  cursor: pointer;
  transition: color 1s ease;
}
header button:hover{
  color: #22ac78;
}
header p{
  margin:0;
  padding:0;
  vertical-align: middle;
  display: inline;
}
header div{
  width: 100%;
  text-align: right;
}
header div label{
  margin:0;
  padding:0;
  font-size:0.8em;
}
.dropDown{
  transition: transform 1s ease;
}
</style>
<style scoped>
@media(max-width: 900px){
  p{
    display: none;
  }
  button{
    min-width:40px;
  }
}
</style>
<script>
import IconIc from "@/components/candies/IconIc.vue";
import HeaderSubmenuComponent from "@/components/core/HeaderSubmenu/HeaderSubmenuComponent.vue";

export default {
  name: "HeaderComponent",
  components: {HeaderSubmenuComponent, IconIc},
  methods:{
    showSubMenu(element){
      if(element === 'leave') {
        this.submenuY = '-190px'
        setTimeout(() => {
          this.hoverSubmenu = []
        }, 1000)
      return;
      }
      this.hoverSubmenu = element.submenu
      this.submenuY = '-20px'
    }
  },
  data(){
    return{
      submenuY: '-180px',
      companyInfo: [{name:'address', value:'25/4 Zwierzęca, Olsztyn 13-133', icon:'map'}],
      hoverSubmenu:[],
      menu: [
              {name:'home', value:'Główna', icon:'home',
               submenu:[{name:'home1', value:'Główna 1'},
                        {name:'home2', value:'Główna 2'},
                        {name:'home3', value:'Główna 3'},
                        {name:'home4', value:'Główna 4'}]
              },
              {name:'categories', value:'Kategorie', icon:'layers',
               submenu:[{name:'categories1', value:'Kategorie 1'},
                        {name:'categories2', value:'Kategorie 2'},
                        {name:'categories3', value:'Kategorie 3'},
                        {name:'categories4', value:'Kategorie 4'}]
              },
              {name:'shop', value:'Sklep', icon:'shopping-cart',
                submenu:[{name:'shop1', value:'Sklep 1'},
                  {name:'shop2', value:'Sklep 2'},
                  {name:'shop3', value:'Sklep 3'},
                  {name:'shop4', value:'Sklep 4'}]
              },
              {name:'blog', value:'Blog', icon: 'archive',
                submenu:[{name:'blog1', value:'Blog 1'},
                  {name:'blog2', value:'Blog 2'},
                  {name:'blog3', value:'Blog 3'},
                  {name:'blog4', value:'Blog 4'}]
              }
      ]
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>