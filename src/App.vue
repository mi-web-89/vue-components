<template>
  <div id="app">
    <div id="nav" class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/components">Components</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/styles/global.scss';
@import './assets/styles/control.scss';
@import './assets/styles/layout.scss';

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
