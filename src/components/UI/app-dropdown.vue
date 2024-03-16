<template>
  <div class="dropdown" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <a :href="data.ref" class="head" :class="{ active: activePage===index }">
      {{ data.title }}
    </a>
    <nav v-if="display" @mouseenter="handleNavEnter" @mouseleave="handleMouseLeave">
      <ul class="lists">
        <li v-for="li of data.dropList" :key="li">
          <a :href="li.ref">{{ li.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app-dropdown",
  props:{
    data:{
      type:Object,
      default:null
    },
    index:{
      type:Number,
      default:null
    }
  },
  inject:["activePage"],
  data(){
    return{
      display: false,
      hoverTimer: null,
    }
  },
  methods: {
    handleMouseEnter() {
      clearTimeout(this.hoverTimer);
      this.display = true;
    },
    handleMouseLeave() {
      this.hoverTimer = setTimeout(() => {
        this.display = false;
      }, 100); // Adjust the delay (in milliseconds) as needed
    },
    handleNavEnter() {
      clearTimeout(this.hoverTimer);
    },
  },
}
</script>

<style scoped>
.dropdown{
  position: relative;
}
.dropdown nav .lists{
  display: flex;
  gap: 8px;
  flex-direction: column;
}
a{
  text-decoration: none;
}
.head{
  color: #1C1C1C;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
}
.head.active{
  color: #1890FF;
}

.dropdown nav{
  position: absolute;
  left: -15px;
  bottom: auto;
  top: calc(100% + 5px);
  width: -moz-max-content;
  width: max-content;
  padding: 11px 15px;
  border-radius: 5px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
}
.dropdown nav ul li{
  list-style: none;
}
.dropdown nav ul li a{
   text-decoration: none;
    color: #1C1C1C;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
}
</style>