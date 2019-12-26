<template>
  <span :style="{ height, width: computedWidth }" class="SkeletonBox" />
</template>

<script>
export default {
  name: "SkeletonBox",
  props: {
    maxWidth: {
      // The default maxiumum width is 100%.
      default: 100,
      type: Number
    },
    minWidth: {
      // Lines have a minimum width of 80%.
      default: 80,
      type: Number
    },
    height: {
      // Make lines the same height as text.
      default: "1em",
      type: String
    },
    width: {
      // Make it possible to define a fixed
      // width instead of using a random one.
      default: null,
      type: String
    }
  },
  computed: {
    computedWidth() {
      // Either use the given fixed width or
      // a random width between the given min
      // and max values.
      return (
        this.width ||
        `${Math.floor(
          Math.random() * (this.maxWidth - this.minWidth) + this.minWidth
        )}%`
      );
    }
  }
};
</script>

<style lang="scss">
.SkeletonBox {
  display: inline-block;
  vertical-align: middle;
  background: linear-gradient(-45deg, rgba(242, 242, 240, 1.0), rgba(227, 230, 232, 1.0));
  background-size: 400% 400%;
  animation: gradientBG 3.5s ease infinite;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>