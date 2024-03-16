
<template>
  <!--Вход-->
  <div class="form-wrapper" v-if="props.type == 'login'">
    <div class="form-head">
      <app-title size="S" tag="h2">
        Вход
      </app-title>
      <p>Войти в свой аккаунт</p>
    </div>
    <div class="form-inputs">
      <app-input :placeholder="'Введите почту'" :label="'Почта'" :type="'email'" v-model="email" />
      <app-input :placeholder="'Введите пароль'" :label="'Пароль'" :type="'password'" v-model="password" />

      <app-checbox>
        Запомнить меня
      </app-checbox>

    </div>
    <app-button @click="handleLogin()" :text="'Продолжить'" :type="1" />
    <p>Нет аккаунта? <a href="/registration">Зарегистрировать</a></p>
    <telegramLoginTemp mode="callback" telegramLogin="botforauthonwebbot" @callback="AuthCallbackFunction" />

  </div>
  <!--Регистрация-->
  <div class="form-wrapper" v-else>
    <div class="form-head">
      <app-title size="S" tag="h2">
        Регистрация
      </app-title>
      <p>Создайте аккаунт, это займёт меньше минуты</p>
    </div>
    <div class="form-inputs">
      <app-input :placeholder="'Введите ФИО'" :label="'ФИО'" :type="'text'" v-model="name" />
      <app-input :placeholder="'Введите номер телефона'" :label="'Номер телефона'" :type="'tel'" v-model="phone" />
      <app-input :placeholder="'Введите почту'" :label="'Почта'" :type="'email'" v-model="email" />
      <app-input :placeholder="'Введите пароль'" :label="'Пароль'" :type="'password'" v-model="password" />
      <app-button @click="handleRegistration" :text="'Создать аккаунт'" :type="1" />
      <app-checbox>
        <div class="agree">
          <span>Я согласен со всеми</span>
          <a class="ref-agree" href="#">условиями пользовательского соглашения</a> и
          <a class="ref-agree" href="#">политикой конфиденциальности</a>
        </div>
      </app-checbox>
    </div>
    <p>Уже есть аккаунт? <a href="/login">Войти</a></p>
    <telegramLoginTemp mode="callback" telegramLogin="botforauthonwebbot" @callback="AuthCallbackFunction" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { telegramLoginTemp } from 'vue3-telegram-login'
import { useAuthStore } from '@/stores/auth.store.js'
import AppTitle from "@/components/UI/app-title.vue";
import AppButton from "@/components/UI/app-button.vue";
import AppInput from "@/components/UI/app-input.vue";
import AppChecbox from "@/components/UI/app-checbox.vue";

const store = useAuthStore()


const props = defineProps({
  type: null
})

const name = ref("");
const phone = ref("");
const email = ref("");
const password = ref("");


const handleRegistration = async () => {
  const credendtials = { name: this.name, phone: this.phone, email: this.email, password: this.password }
  this.loading = true;

  this.$store.dispatch("auth/register", credendtials).then(
    () => {
      this.$router.push("/dashboard")
    },
    (error) => {
      this.loading = false;
      this.message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
    }
  )
}


const handleLogin = async () => {
  const credendtials = { email: this.email, password: this.password }
  this.loading = true;
  this.$store.dispatch("auth/login", credendtials).then(
    () => {
      this.$router.push("/dashboard");
    },
    (error) => {
      this.loading = false;
      this.message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
    }
  );
}

const AuthCallbackFunction = (user) => {
  console.log(user)

  store.loginTg(user)
}
</script>

<style scoped>
p {
  color: rgba(0, 0, 0, 0.50);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 125%;
}

p a {
  color: #000;
  text-decoration: none;
}

.agree {
  color: rgba(0, 0, 0, 0.50);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  /* 19.6px */
}

a.ref-agree {
  color: rgba(0, 0, 0, 0.50);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%;
  text-decoration-line: underline;
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 35px;
}

.form-head {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}

.form-wrapper {
  width: 446px;
  min-height: 687px;
  background-color: #FFF;
  border: 1px solid #EEE;
  box-shadow: 0px 0px 5px 1px rgba(238, 238, 238, 1);
  position: relative;
  padding: 70px 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-wrapper p:last-of-type {
  margin-top: 26px;
}


.form-wrapper:before,
.form-wrapper:after {
  content: "";
  width: 126px;
  height: 126px;
  position: absolute;
  background:
    linear-gradient(to right, rgba(238, 238, 238, 1), rgba(238, 238, 238, 0)) top left,
    linear-gradient(to bottom, rgba(238, 238, 238, 1), rgba(238, 238, 238, 0)) top left;
  background-size: 2px 100%, 100% 2px;
  background-repeat: no-repeat;
  pointer-events: none;
}

.form-wrapper:before {
  left: -126px;
  top: -126px;
  transform: rotate(180deg);
}

.form-wrapper:after {
  bottom: -126px;
  right: -126px;
}

.form-head:before {
  content: "";
  width: 126px;
  height: 126px;
  position: absolute;
  background: linear-gradient(to right, rgba(238, 238, 238, 1), rgba(238, 238, 238, 0)) top left, linear-gradient(to bottom, rgba(238, 238, 238, 1), rgba(238, 238, 238, 0)) top left;
  background-size: 2px 100%, 100% 2px;
  background-repeat: no-repeat;
  pointer-events: none;
  transform: rotate(270deg);
  right: -126px;
  top: -126px;
}

.form-inputs:before {
  content: "";
  width: 126px;
  height: 126px;
  position: absolute;
  background: linear-gradient(to right, rgba(238, 238, 238, 1), rgba(238, 238, 238, 0)) top left, linear-gradient(to bottom, rgba(238, 238, 238, 1), rgba(238, 238, 238, 0)) top left;
  background-size: 2px 100%, 100% 2px;
  background-repeat: no-repeat;
  pointer-events: none;
  transform: rotate(90deg);
  left: -126px;
  bottom: -126px;
}
</style>