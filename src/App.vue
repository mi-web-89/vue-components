<template>
  <div id="app">
    <menu-desktop />
    <!-- <div id="nav-simple" class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/tabs">Tabs</router-link> |
      <router-link to="/tree">Tree</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import MenuDesktop from './components/navigation/desktop/'

export default {
  components: {
    MenuDesktop
  }
}
</script>

<style lang="scss">
@import './assets/styles/global.scss';
@import './assets/styles/control.scss';
@import './assets/styles/layout.scss';

#nav-simple {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    /*class include vue */
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
