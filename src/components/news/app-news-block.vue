<template>
 <a href="/news/1" class="news-block">
   <slot />
 </a>
</template>

<script>
export default {
  name: "app-news-block"
}
</script>

<style >
a{
  text-decoration: none;
}
a.news-block{
  padding: 20px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
}
a.news-block p.description{
  color: rgba(28, 28, 28, 0.50);
  font-feature-settings: 'cv11' on, 'cv01' on, 'ss01' on;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-top: 15px;
}
a.news-block p.date{
  color: rgba(0, 0, 0, 0.50);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 30px;
}
</style>