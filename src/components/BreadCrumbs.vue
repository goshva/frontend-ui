<template>
  <div class="bread-crumbs-row">
    <template v-for="breadCrumb of breadCrumbs" :key="breadCrumb">
      <a href="#" >{{breadCrumb.name}}</a>
      <em>/</em>
    </template>
  </div>
</template>

<script>
export default {
  props:{
     breadCrumbs:{
       type:Array,
     }
  },
};
</script>

<style scoped>
.bread-crumbs-row{
  margin: 23px 0px 15px;
  display: flex;
  gap: 5px;
  align-items: center;
}
.bread-crumbs-row em:last-of-type{
  display: none;
}
.bread-crumbs-row a{
  color:  rgba(28, 28, 28, 0.50);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
}
.bread-crumbs-row a:last-of-type{
  color:  #1C1C1C;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
</style>