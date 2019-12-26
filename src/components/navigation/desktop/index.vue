<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </div>-->

  <nav id="nav">
    <div class="container navbar">
      <div class="logo">Logo</div>

      <!-- menu -->
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tabs" class="nav-link">Tabs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tree" class="nav-link">Tree</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "appMenu",
  data() {
    return {
      showMenu: false
    };
  }
};
</script>

<style lang="scss" scoped>
$text-navbar: rgba(255, 255, 255, 0.8);
$border-bottom: rgba(255, 255, 255, 0.3);
$nav-background: #343a40;
$nav-collapse-background: #2d3436;
$primary: #007bff;
$primary-hover: #0056b3;

#nav {
  // position: relative;
  background-color: $nav-background;

  .navbar {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 5px;

    .logo {
      color: #ccc;
    }

    .navbar-nav {
      display: -ms-flexbox;
      display: flex;
      // -ms-flex-direction: column;
      // flex-direction: column;
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
      padding: 5px 5px;
      list-style: none;

      .nav-link {
        display: block;
        padding: 0.5rem 1rem;
        color: $text-navbar;
        text-decoration: none;
      }

      .nav-link:hover,
      .nav-link:focus {
        text-decoration: none;
      }
    }
  }
}
</style>
