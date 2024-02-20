<template>
  <div class="authorization">
    <div class="container">
      <div class="log">
        <div class="log__title text-center">Авторизация</div>
        <form
          class="form-group d-flex flex-column w-100 align-items-center"
          @submit.prevent="startSession"
        >
          <input
            type="text"
            style="min-width: 650px"
            class="input reglog"
            placeholder="Введите логин"
            required
            minlength="2"
            @keydown="Fun.validateEng"
            v-model="user.login"
          />
          <input
            type="password"
            style="min-width: 650px"
            class="input reglog"
            placeholder="Введите пароль"
            required
            minlength="6"
            v-model="user.password"
          />
          <button class="btn" type="submit">Вход</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "@/stores/store";
import Cookies from 'universal-cookie';
import API from "@/API/api";
import { Fun } from "@/functions/functions";
import { useRouter } from "vue-router";

const cookies = new Cookies(['locale'])
const store = useStore()
const router = useRouter()

const user = ref({
  login: "",
  password: "",
});

function clearInputs() {
  user.value.login = "";
  user.value.password = "";
}

function startSession() {
  const data = new FormData()
  data.append('login', user.value.login)
  data.append('password', user.value.password)
  API.startSession(data).then(res => {
    console.log(res)
    if(res.data instanceof Object) {
      clearInputs()
      store.user = res.data
      cookies.set('userId', res.data.id)
      router.push({path: '/profile'})
    } else {
      clearInputs()
      console.log('Error')
      alert('Неверный логин или пароль')
    }
  })
}
</script>

<style lang="scss" scoped>
.reglog {
  @media (max-width: 425px) {
    min-width: 290px !important;
  }
}
.invalidLog, .invalidLog::placeholder {
  color: red;
}

.reg, .log {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 40px;
    font-weight: bold;
    color: white;
    padding: 30px 0;
    @media (max-width: 425px) {
      font-size: 32px;

    }
  }

  .form-group {
    gap: 8px;
  }
}

.input {
  padding: 15px 20px;
  border-radius: 10px;
  color: white;
  background-color: var(--back-for-block);
  font-weight: 500;
  @media (max-width: 768px) {
    min-width: 450px;
  }
  @media (max-width: 424px) {
    min-width: 240px;
    padding: 10px 15px;
  }
  &::placeholder {
    color: rgb(176, 176, 176);
  }
}

.btn {
  color: white;
  border: 1px solid var(--back-for-block);
  background-color: var(--black);
  padding: 10px 40px;
  font-size: 14px;
  margin-top: 10px;

  &:hover {
    background-color: var(--btnOnHover);
  }
}

</style>
