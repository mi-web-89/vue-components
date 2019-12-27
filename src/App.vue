<template>
  <div id="app">
    <menu-mobile @sideMenu="showMenu = !showMenu" v-if="_isMobile"/>
    <menu-desktop v-else/>

    <!-- <menu-responsive /> -->
    
    <!-- <div id="nav-simple" class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/tabs">Tabs</router-link> |
      <router-link to="/tree">Tree</router-link>
    </div> -->

    <router-view/>

     <!-- modal/overlay -->
    <overlay v-if="showMenu" @close="showMenu = false">
      <side-menu @close="showMenu = false"></side-menu>
    </overlay>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'
import MenuDesktop from './components/navigation/desktop/'
import MenuMobile from './components/navigation/mobile/Menu'
// import MenuResponsive from '@/components/navigation/Responsive'
import SideMenu from './components/navigation/mobile/SideMenu'
import Overlay from './components/ui/Overlay'

export default {
  components: {
    MenuDesktop,
    MenuMobile,
    // MenuResponsive,
    SideMenu,
    Overlay
  },
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    _isMobile() {
      return isMobile
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/global.scss';
@import './assets/styles/control.scss';
@import './assets/styles/layout.scss';

// #nav-simple {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     /*class include vue */
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
