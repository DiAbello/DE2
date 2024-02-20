<template>
  <div class="authorization">
    <div class="container">
      <Transition name="translate" mode="out-in" >
        <component :is="location" @changeLocation="location = LogItem"></component>
      </Transition>
    </div>
    <div class="text-center my-3">
      <button v-if="location === RegItem" @click="location = LogItem">Уже есть аккаунт? Войти</button>
      <button v-if="location === LogItem" @click="location = RegItem">Нет аккаунта? Регистрация</button>
    </div>
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'
import RegItem from '@/components/RegItem.vue';
import LogItem from '@/components/LogItem.vue';
  
const location = shallowRef(RegItem)
</script>

<style lang="scss" scoped>
.translate-leave-active {
  transition: all 0.3s ease;
}

.translate-enter-from,
.translate-leave-to {
  opacity: 0;
}
</style>