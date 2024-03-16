<template>
  <div class="hint" :class="{[color]:color}">
    <app-title
        size="S"
        tag="h5"
    >
      {{ title }}
    </app-title>
    <p>
      {{text}}
    </p>
  </div>

</template>


<script>
import AppTitle from "@/components/UI/app-title.vue";

export default {
  name: "app-hints",
  props:{
     title:{
       type:String,
       default:null
     },
    text:{
      type:String,
      default:null
    },
    color:{
      type:String,
      default:null
    }
  },
  components: {AppTitle}
}
</script>


<style scoped>

.hint{
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  gap: 6px;
  padding: 20px;
  border-radius: 10px;
}
.gold{
  border: 1px solid #FADB14;
  background: #FFFBE6;
}
</style>