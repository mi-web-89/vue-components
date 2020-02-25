<template>
    <div id="page-tabs">
      <h2 class="text-center border-bottom">This is an Tab Components</h2>
      <div class="container">
        <tab :lists="tabs" @switchTab="switchTab" :current="currentTab">
          <prepaid v-if="tabs[currentTab - 1].type == 1"  />
          <postpaid v-if="tabs[currentTab - 1].type == 2"  />
        </tab>
      </div>
    </div>
</template>

<script>
import Postpaid from '@/components/PPOB/Postpaid'
import Prepaid from '@/components/PPOB/Prepaid'
import Tab from '@/components/ui/tab/index'

export default {
  components: {
    Prepaid,
    Postpaid,
    Tab
  },
  data() {
    return {
      /* type 1 = prepaid, type 2 = postpaid */
      tabs: [
        {id: 1, name: 'Pulsa', type: 1},
        {id: 2, name: 'Paket Data', type: 1},
        {id: 3, name: 'Token PLN', type: 2},
        {id: 4, name: 'BPJS', type: 1},
        {id: 5, name: 'Telkom', type: 1}
      ],
      currentTab: 1
    }
  },
  methods: {
    switchTab(e) {
      if(e) this.currentTab = e.id
    }
  }
}
</script>
