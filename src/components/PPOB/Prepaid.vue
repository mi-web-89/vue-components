<template>
  <div class="tab-detail d-flex">
    <div class="flex-fill">
      <label for="phoneNumber" class="label-sm">Nomor Telepon</label>
      <input id="phoneNumber" type="number" class="form-control form-input-oneline font-bold">
    </div>
    <div class="flex-fill">
      <label for="nominal" class="label-sm">Nominal</label>
      <select id="nominal" class="form-control form-input-oneline font-bold">
        <option>Rp. 5000</option>
        <option>Rp. 10000</option>
        <option>Rp. 15000</option>
        <option>Rp. 20000</option>
        <option>Rp. 50000</option>
      </select>
    </div>
    <div class="flex-fill">
      <label for="phoneNumber" class="label-sm">Harga</label>
      <div class="font-bold">
        Rp. 98000
      </div>
    </div>
    <div class="flex-fill text-right pt-4">
      <button type="button" class="btn btn-primary btn-block">
        Beli Sekarang
      </button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.tab-detail {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  .flex-fill {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .currency {
    font-weight: 500;
  }
}
</style>
