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
import SkeletonBox from "../SkeletonBox";

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
          type: "prepaid",
          mode: "Pulsa"
        },
        {
          name: "internet",
          type: "prepaid",
          mode: "Pulsa"
        },
        {
          name: "listrik",
          type: "prepaid",
          mode: "Listrik"
        },
        {
          name: "telepon",
          type: "postpaid",
          mode: "Pulsa"
        },
        {
          name: "BPJS",
          type: "prepaid",
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
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/var.scss";

#tabs {
  background: $contentBackground;
  margin: 2rem 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
