<template>
  <div class="container">
    <div class="tab-header row">
      <button-tab 
        v-for="tab in lists" 
        :key="tab.id" 
        :list="tab"
        :class="{active: tab.id === current}"
        @switchTab="e => $emit('switchTab', e)"
      />
    </div>
    <div class="body row">
      <slot />
    </div>
  </div>
</template>

<script>
import ButtonTab from './BtnTab'
export default {
  props: {
    lists: {
      type: Array,
      default: () => []
    },
    current: {
      type: Number,
      default: 1
    }
  },
  components: {
    ButtonTab
  }
}
</script>

<style lang="scss" scoped>

</style>