<template>
  <div id="tabs">
    <div v-if="!isLoading" class="rounded border shadow-sm container">
      <div class="row text-center">
        <PBOBHeader
          v-for="(tab, i) in tabs"
          :key="i"
          :pbob="tab"
          :class="{active: tab.name === currentTab}"
          @switchTab="switchTab(tab)"
        />
      </div>
      <div :is="currentMode" class="tab-detail" />
    </div>
    <skeleton-box v-if="isLoading" width="99%" height="160px" />
  </div>
</template>

<script>
/* eslint-disable */
import PBOBHeader from "./PBOBHeader";
import Pulsa from "./Pulsa";
import Listrik from "./Listrik";
import SkeletonBox from "@/components/ui/SkeletonBox";

export default {
  components: {
    PBOBHeader,
    Pulsa,
    Listrik,
    SkeletonBox
  },
  data() {
    return {
      tabs: [
        {
          name: "pulsa",
          mode: "Pulsa"
        },
        {
          name: "internet",
          mode: "Pulsa"
        },
        {
          name: "listrik",
          mode: "listrik"
        },
        {
          name: "telepon",
          mode: "Pulsa"
        },
        {
          name: "BPJS",
          mode: "Pulsa"
        }
      ],
      currentTab: "pulsa",
      currentMode: "Pulsa",
      isLoading: true
    };
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab.name;
      this.currentMode = tab.mode;
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = !this.isLoading
    }, 3000)
  }
};
</script>

<style lang="scss" scoped>
#tabs {
  background: #fff;
  margin: 2rem 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
