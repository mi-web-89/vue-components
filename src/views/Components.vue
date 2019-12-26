<template>
  <div class="about">
    <h1 class="text-center">This is an components page</h1>
    <hr>
    <!-- tabs component -->
    <div class="container">
      <PBOBTabs></PBOBTabs>
    </div>
  </div>
</template>

<script>
import PBOBTabs from '@/components/PBOBTabs/Index'

export default {
  components: {
    PBOBTabs
  }
}
</script>
