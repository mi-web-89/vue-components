<template>
  <div class="home container">
    <h1 class="text-center">This is an Tree(liquor-tree) Components</h1>
    <div>{{ getStatus ? getStatus : 'No Data' }}</div>
    <div>
      <tree :options="treeOpts" ref="tree" />
    </div>
    <div><button type="button" class="btn btn-primary" @click="getDataChecked()">console</button></div>
  </div>
</template>

<script>
/*eslint-disable*/
import { getAllCategories } from '@/api/api.categories'

export default {
  name: 'home',
  data () {
    return {
      items: [],
      treeOpts: {
        checkbox: true,
        fetchData (node) {
          return getAllCategories()
            .then(res => res.data)
        }
      }
    }
  },
  computed: {
    getStatus () {
      return this.items.length > 0
    }
  },
  methods: {
    getDataChecked () {
      const dataChecked = this.$refs.tree.checked(true)
      this.items = dataChecked.map((value, index, array) => {
        return value.id
      })
      console.log('dataChecked', this.items)
      console.log('tree', this.$refs.tree.checked(true))
    }
  }
}
</script>
