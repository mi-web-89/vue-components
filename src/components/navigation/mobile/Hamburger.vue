<template>
  <button class="navbar-toggler" type="button" @click="$emit('showMenu')">
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
</template>

<style lang="scss" scoped>
$text-navbar: #ecf0f1;

.navbar-toggler {
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  line-height: 1;
  // color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.25rem;

  .hamburger span {
    height: 2px;
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
</style>