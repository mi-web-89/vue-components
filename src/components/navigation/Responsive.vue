<template>
  <nav id="nav">
    <!-- toggler -->
    <button class="navbar-toggler" type="button" @click="showMenu = !showMenu">
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>

    <!-- menu -->
    <div class="collapse navbar-collapse" :class="{'show-menu': showMenu}">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
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
  name: 'appMenu',
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
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: $nav-background;

  .navbar-collapse {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center;
    background-color: $nav-collapse-background;
  }

  .collapse:not(.show) {
    display: none;
  }

  .show-menu {
    display: block !important;
  }

  .navbar-nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;

    .nav-item:first-child {
      border-top: solid 1px $border-bottom;
    }
    .nav-item {
      border-bottom: solid 1px $border-bottom;
    }

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

  .navbar-toggler {
    padding: 0.25rem 0.5rem;
    font-size: 1.25rem;
    line-height: 1;
    // color: rgba(255, 255, 255, 0.5);
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
    margin: 0.45rem 0.5rem;

    .hamburger span {
      height: 1px;
      margin-top: 5px;
      margin-bottom: 5px;
      background-color: $text-navbar;
      display: block;
      // transition: 0.33s;

      &:nth-child(1) {
        width: 12px;
      }
      &:nth-child(2) {
        width: 24px;
      }
      &:nth-child(3) {
        width: 12px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding: 0.25rem 0.5rem;

    .navbar-collapse {
      background-color: $nav-background;
    }

    .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;

      .nav-item {
        border: none !important;
      }

      .nav-link {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
      }
    }

    .navbar-toggler {
      display: none;
    }

    .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }

    // .navbar-expand-md .navbar-nav .dropdown-menu {
    //   position: absolute;
    // }

    // .navbar-expand-md > .container,
    // .navbar-expand-md > .container-fluid {
    //   -ms-flex-wrap: nowrap;
    //   flex-wrap: nowrap;
    // }
  }
}
</style>
