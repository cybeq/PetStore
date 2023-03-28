<template>
    <footer>
      <div>
          <div class="contact">
            <IconIc svg-path="smartphone" fill-color="#fff" height=75 width=75></IconIc>
            <h1>+48798221083</h1>
            <p>  mateuszss00b@gmail.com</p>
          </div>
          <div style="text-align: left;">

          </div>
      </div>

      <div class="something">
        <h1>100% zadowolonych zwierząt</h1>
      </div>
    </footer>
</template>

<script>
import IconIc from "@/components/candies/IconIc.vue";

export default {
  name: "FooterComponent",
  components: {IconIc}
}
</script>

<style scoped>
footer{
  width:100%;
  min-height:250px;
  background: #001c20;
  color:white;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding:20px;
  font-family: ConcertOne;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top:20px;
}
footer IconIc{

}
footer .contact{
  text-align: left
}
.something{
  height:60%;
  width:100%;
  background: #c7476a;
  margin:-20px;
  padding:0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: PoppinsExtraBold, sans-serif;
}

</style>