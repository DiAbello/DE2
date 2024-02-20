<template>
  <div class="reg">
    <div class="reg__title text-center">Регистрация</div>
    <form
      class="form-group d-flex flex-column align-items-center"
      @submit.prevent="createUser"
    >
    <div class="d-xl-flex ga-2 w-100">
      <input
        type="text"
        class="input reglog mb-sm-0 mb-2"
        v-model="user.username"
        @keydown="Fun.validate"
        placeholder="Введите имя"
        required
        minlength="2"
        style="flex-grow: 1;"
      />
      <input
        type="text"
        class="input reglog "
        v-model="user.surname"
        placeholder="Введите фамилию"
        @keydown="Fun.validate"
        required
        minlength="2"
        style=" flex-grow: 1;"
      />
    </div>
     
      <input
        type="text"
        class="input reglog"
        v-model="user.patronymic"
        @keydown="Fun.validate"
        placeholder="Введите отчество"
        style="min-width: 650px"
        required
      />
      <input
        type="text"
        class="input reglog"
        :class="{ invalidLog: invalid.login }"
        v-model="user.login"
        :placeholder="
          invalid.login ? `Логин ${invalid.loginVal} занят` : 'Введите логин'
        "
        @keydown="Fun.validateEng"
        required
        minlength="2"
        style="min-width: 650px"
      />
      <input
        type="email"
        class="input reglog"
        v-model="user.email"
        style="min-width: 650px"
        placeholder="Введите почту"
        required
        minlength="2"
      />
      <input
        type="password"
        class="input reglog"
        v-model="user.password"
        placeholder="Введите пароль"
        required
        minlength="6"
        style="min-width: 650px"
      />
      <input
        type="password"
        class="input reglog"
        v-model="user.conPass"
        placeholder="Повторите пароль"
        required
        minlength="6"
        style="min-width: 650px"
      />
      <div class="d-flex gap-3 align-items-center">
        <input type="checkbox" id="checkbox" required />
        <label for="checkbox" style="color: white"
          >Согласие с правилами регистрации</label
        >
      </div>
      <button class="btn" type="submit">Регистрация</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits, watch } from 'vue'
import { Fun } from '@/functions/functions'
import API from '@/API/api';

const user = ref({
  username: '',
  surname: '',
  patronymic: '',
  login: '',
  email: '',
  password: '',
  conPass: ''
})
const invalid = ref({
  login: false,
  loginVal: '',
})

watch(invalid.value, () => {
  setTimeout(() => {
    invalid.value.login = false
    invalid.value.loginVal = ''
  }, 3000)
})

const emits = defineEmits([
  'changeLocation'
])

function clearInputs() {
  user.value.username = ''
  user.value.surname = ''
  user.value.patronymic = ''
  user.value.login = ''
  user.value.email = ''
  user.value.password = ''
  user.value.conPass = ''
}

function createUser() {
  if (user.value.password === user.value.conPass) {
    const data = new FormData()
    data.append('username', user.value.username)
    data.append('surname', user.value.surname)
    data.append('patronymic', user.value.patronymic)
    data.append('login', user.value.login)
    data.append('email', user.value.email)
    data.append('password', user.value.password)
    API.createUser(data).then(res => {
      console.log(res)
      if (typeof res.data === 'string') {
        clearInputs()
        invalid.value.loginVal = res.data
        invalid.value.login = true
      } else {
        clearInputs()
        alert('Пользователь зарегестрирован')
        setTimeout(() => {
          emits('changeLocation')
        }, 3000)
      }
    })
  }


}
</script>

<style lang="scss" scoped>
.reglog {
  @media (max-width: 425px) {
    min-width: 290px !important;
  }
}
.invalidLog {
  border: 1px solid red;
  &::placeholder {
    color: red !important;

  }
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
