<template>
  <nav id="menu">
    <ul class="nav-item">
      <li class="item" id="menu1">
        <a href="#menu1" class="btn">Menu 1</a>
        <div class="smenu" @click="$emit('close')">
          <a href="#">Submenu 1.1</a>
          <a href="#">Submenu 1.2</a>
        </div>
      </li>

      <li class="item" id="menu2">
        <a href="#menu2" class="btn">Menu 2</a>
        <div class="smenu" @click="$emit('close')">
          <a href="#">Submenu 2.1</a>
          <a href="#">Submenu 2.2</a>
        </div>
      </li>

      <li class="item" id="menu3">
        <a href="#menu3" class="btn">Menu 3</a>
        <div class="smenu" @click="$emit('close')">
          <a href="#">Submenu 3.1</a>
          <a href="#">Submenu 3.2</a>
        </div>
      </li>

      <li class="item" @click="$emit('close')">
        <a href="#" class="btn">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
#menu {
  max-width: 85%;
  height: 100%;
  background-color: #333;

  * {
    text-decoration: none;
    font-family: sans-serif;
  }

  .nav-item {
    margin: 0;
    padding: 0;

    .item {
      list-style-type: none;
      border-bottom: solid 1px #2980b9;
      overflow: hidden;

      .btn {
        display: block;
        background-color: #3498db;
        padding: 0.8rem 1rem;
        color: #fff;
        position: relative;
      }
      .btn:before {
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        background-color: #3498db;
        left: 1.2rem;
        bottom: -0.5rem;
        transform: rotate(45deg);
      }
      .btn:hover {
        color: #95a5a6;
      }
      .btn:last-child:before {
        content: none;
      }

      .smenu {
        background-color: #333;
        overflow: hidden;
        transition: max-height 0.3s;
        max-height: 0;

        a {
          display: block;
          padding: 1.2rem 1.2rem;
          color: #fff;
          margin: 0.3rem 0;
          font-size: 0.9rem;
          position: relative;
          border-bottom: solid 1px #2c3e50;
          z-index: 1;
        }
        a:last-child {
          border-bottom: none;
        }
        a:before {
          content: "";
          position: absolute;
          background-color: #3498db;
          font-weight: 1rem;
          width: 6px;
          height: 100%;
          top: 0;
          left: 0;
          transition: 0.5s;
          opacity: 0;
        }
        a:hover:before {
          opacity: 1;
        }
      }
    }
    .item:target {
      .smenu {
        max-height: 10em;
      }
    }
  }
}
</style>