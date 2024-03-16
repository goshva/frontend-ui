<!-- LoginForm.vue -->
<template>
  <section>
     <app-form-authorization type="login" />
     <p>© 2023 mpfact</p>
  </section>
</template>

<script>
import AppFormAuthorization from "@/components/AppFormAuthorization.vue";
export default {
  components: {
    AppFormAuthorization
  }
};
</script>

<style scoped>
section{
  background: linear-gradient(180deg, #F9F9F9 0%, #FFF 100%);
  min-height: 1080px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 52px;
  flex-direction: column;
}
p{
  color: #231F20;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.28px;
  opacity: 0.3;
}
</style>
