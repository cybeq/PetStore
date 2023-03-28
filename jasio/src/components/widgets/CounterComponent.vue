<template>
  <h1 style="font-size:0.6em; margin-bottom:0; margin-top:30px;">Promocja kończy się za</h1>
  <div class="counter">{{`${this.hours}:${this.minutes>9 ? this.minutes : `0${this.minutes}`}:${this.seconds > 9 ? this.seconds : `0${this.seconds}`}`}}</div>

</template>

<script>
export default {
  name: "CounterComponent",
  data(){
    return{
      hours:new Date().getHours() > 0 ? new Date().getHours() : 24,
      minutes:new Date().getMinutes(),
      seconds:new Date().getSeconds(),
      timer: 0
    }
  },
  mounted() {
    setInterval(()=>{
      if(this.hours<1){
        this.hours=24;
      }
      this.seconds-=1;
      if(this.seconds<1){
        this.minutes-=1;
        this.seconds=59
        this.timer++;
      }
      if(this.minutes<1){
        this.minutes= 59;
        this.hours-=1;
      }
      if(this.timer===60){
        this.hours-=1;
        this.timer=0;
      }

    },1000)
  }
}
</script>

<style scoped>
.counter{
  font-family: ConcertOne, sans-serif;
  font-size:2rem;
}
</style>