<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="outsideBox">
    <div class="innerBox">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
    </div>
  </div>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.outsideBox {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.innerBox {
  display: flex;
  width: 200px;
  height: 100px;
  overflow: hidden;
  background-color: rgb(255, 0, 0);
  position: absolute;
}
.box1,
.box2,
.box3,
.box4 {
  width: 100%;
  height: 100%;
  position: absolute;
  animation: move 12s ease infinite;

}

.box1 {
  background-color: red;
}
.box2 {
  background-color: blue;
  left: 200px;
}
.box3 {
  background-color: green;
  left: 400px;
}
.box4 {
  background-color: yellow;
  left: 600px;
}
@keyframes move {
  0% {
    transform: translate3d(0,0,0);
  }
  25% {
    transform: translate3d(-100%,0,0);
  }
  50% {
    transform: translate3d(-200%,0,0);
  }
  75% {
    transform: translate3d(-300%,0,0);
  }
  100% {
    transform: translate3d(-400%,0,0);
  }
}
</style>
