<template>
  <nav id="nav">
    <div class="navbar">
      <!-- toggler -->
      <hamburger @showMenu="$emit('sideMenu')"></hamburger>

      <!-- logo -->
      <div>logo</div>

      <!-- icon user -->
     <i class="material-icons" style="color: #ecf0f1">person</i>
    </div>
  </nav>
</template>

<script>
import Hamburger from "./Hamburger"
export default {  
  components: {
    Hamburger
  }
}
</script>

<style lang="scss" scoped>
$nav-bg-active: #3498db;
$text-navbar: #ecf0f1;

#nav {
  background-color: $nav-bg-active;  
  top: 0;
  width: 100%;
  // position: fixed;
  top: 0;
  // z-index: 1000;
  padding: 0.8rem 0.5rem;
  color: $text-navbar;
  // margin-bottom: 5rem;

  .navbar {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
}
</style>