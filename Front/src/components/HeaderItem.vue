<template>
  <nav class="navbar navbar-expand-lg" style="background-color: var(--back)">
    <div class="container">
      <router-link to="/movies" class="navbar-brand">
        <img src="../assets/logo/logo_groom.svg" alt="" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/about">О Нас</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/movies">Афиша</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacts">Где нас найти?</router-link>
          </li>
          <li class="nav-item" v-if="store?.user?.isAdmin">
            <router-link class="nav-link" to="/admin">Админ панель</router-link>
          </li> -->
        </ul>
        <div class="auth-btns d-flex">
          <router-link to="/auth" class="reg-btn auth" v-if="store.user === null">
            Авторизация
          </router-link>
          <router-link to="/profile" class="reg-btn auth" v-if="store.user !== null">
            Профиль
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useStore } from "@/stores/store";

const store = useStore();
</script>

<style lang="scss" scoped>
.navbar {
  min-height: 100px;
  @media (max-width: 992px) {
    padding: 0 !important;
  }
  .navbar-nav {
    gap: 25px;
    @media (max-width: 992px) {
      align-items: center;
      padding: 20px 0 !important;
    }
  }
  .navbar-collapse {
    width: 100%;
    background-color: var(--back);
    border-radius: 0 0 15px 15px;
    z-index: 2;
    @media (max-width: 992px) {
      // margin-top: -20px;
      padding-bottom: 20px;
    }
  }
  .nav-link {
    color: white !important;
    font-size: 15px;
    transition: all 0.4s ease;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    &:before {
      transition: all 0.2s linear;
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.57);
      transform: translateX(-200px);
    }
    &:hover {
      &:before {
        transform: translateX(0px);
      }
    }
  }
  .navbar-brand {
    margin-right: 75px;
    cursor: pointer;
    img {
      width: 100px;
      transition: all 0.4s ease;
      &:hover {
        transform: scale(1.08);
      }
      @media (max-width: 768px) {
        width: 80px;
      }
    }
  }

  .auth-btns {
    gap: 15px;
    @media (max-width: 992px) {
      justify-content: center;
    }
    .auth {
      font-size: 16px;
      padding: 10px 25px;
      background-color: var(--black);
      color: white;
      cursor: pointer;
      border-radius: 10px;
      transition: all 0.3s ease;
      &:hover {
        background-color: var(--back-for-block);
        color: black;
      }
      @media (max-width: 992px) {
        background-color: var(--back-for-block);
      }
    }
    .reg-btn {
      @media (max-width: 992px) {
        border: 1px solid #9ca3af;
      }
    }
    .log-btn {
      @media (max-width: 992px) {
        border: 1px solid #9ca3af;
      }
    }
  }
}
</style>
