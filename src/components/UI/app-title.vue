 <template>
  <component
      :is="tag ?? tags[size]"
      :class="['title', size , `font-${font}`]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props:{
    size: {
      type: String,
      default: "S",
    },
    tag: {
      type: String,
      default: null,
    },
    font:{
      type: Number,
      default: null,
    }
  },
  data(){
    return{
      tags : {
        S: "h4",
        M: "h3",
        L: "h2",
        XL: "h1",
      }
    }
  }
};
</script>

<style scoped>
h2{
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
h3{
  color: #1C1C1C;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
h4{
  color: #1C1C1C;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
h5{
  color:#1C1C1C;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
.font-800{
  font-weight: 800;
}
</style>