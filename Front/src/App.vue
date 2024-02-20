<template>
  <div class="wrapper">
      <div class="content">
        <HeaderItem/>
        <RouterView v-slot="{Component}">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
          </transition>
        </RouterView>
      </div>
  </div>
</template>

<script setup>
import HeaderItem from './components/HeaderItem.vue';
import { onMounted } from 'vue';
import Cookies from 'universal-cookie'
import API from './API/api';
import { useStore } from './stores/store';

const cookies = new Cookies(['locale'])
const store = useStore()

onMounted(() => {
  if(cookies.get('userId')) {
    store.user = undefined
    const data = new FormData()
    data.append('id', cookies.get('userId'))
    API.getUser(data).then(res => {
      console.log(res);
      store.user = res.data
    })
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
    min-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: var(--back);
  }
  .content {
    flex: 1 1 auto;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>