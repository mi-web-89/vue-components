<template>
  <div @click="$emit('switchTab')" class="tab-header col border-bottom text-center text-capitalize">
    <span class="font-bold">{{ pbob.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'TabHeader',
  props: {
    pbob: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/var.scss";

.tab-header {
  cursor: pointer;
  padding: 0.5rem 0.25rem;
  border-bottom: solid 3px $border !important;
  &.active {
    color: $primary !important;
    border-bottom-color: $primary !important;
  }
}
</style>
