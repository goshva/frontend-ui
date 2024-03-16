<template>
  <div class="select-block"  >
    <div class="head" @click="display=!display">
      <span class="label">{{ label }}</span>
      <span class="select">{{ selectOption }}</span>
      <svg :class="{rt:display}" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.162718 0.180053C0.379676 -0.0600183 0.731434 -0.0600182 0.948392 0.180053L4.60716 4.2286C4.82412 4.46867 5.17588 4.46867 5.39284 4.2286L9.05161 0.180054C9.26857 -0.060017 9.62032 -0.060017 9.83728 0.180054C10.0542 0.420125 10.0542 0.809357 9.83728 1.04943L6.17851 5.09797C5.52764 5.81818 4.47236 5.81818 3.82149 5.09797L0.162718 1.04943C-0.0542403 0.809355 -0.0542402 0.420123 0.162718 0.180053Z"
            fill="#1C1C1C"
            fill-opacity="0.2"
        />
      </svg>
    </div>

    <nav v-if="display" >
      <ul>
        <li
            v-for="link of list"
            :key="link"
            @click="display=!display , choise?selectOption=link.name:null , $emit('choose',selectOption)"
        >
          <a :href="link.ref">{{ link.name }}</a>
        </li>
      </ul>
    </nav>

    <div v-if="display" class="bg" @click="display=!display"></div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
    select: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: null,
    },
    choise:{
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      display: false,
      hoverTimer: null,
      selectOption:this.select
    };
  },
};
</script>

<style scoped>
.select-block{
  position: relative;
}
.select-block .head{
  border-radius: 16px;
  border: 1px solid #D9D9D9;
  padding: 13px 14px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 3px;
  cursor: pointer;
  position: relative;
  z-index: 8;
}
.select-block .head svg{
  margin-left: auto;
}
.select-block .head .label{
  color: rgba(28, 28, 28, 0.50);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
.select-block .head .select{
  color: #1C1C1C;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-right: 3px;
  margin-right: 15px;
}

nav{
  position: absolute;
  left: 0;
  top: calc(100% + 5px);
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
  z-index: 9;
}
nav ul{
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
}
nav ul li {
  list-style: none;
  cursor: pointer;
}
svg.rt{
  transform: rotate(180deg);
}
nav ul li a{
  text-decoration: none;
  color: #1C1C1C;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.bg{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>