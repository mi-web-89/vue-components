<template>
  <div class="container text-center">
    <div class="home">
      <img alt="Vue logo" src="../assets/images/logo.png" />
      <Intro msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";

export default {
  name: "home",
  components: {
    Intro
  }
}
</script>