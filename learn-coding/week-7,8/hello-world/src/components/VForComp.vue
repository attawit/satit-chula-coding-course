<template>
  <div class="row">
    <div class="mx-auto col-12">
      <h3>V-For Examples</h3>
    </div>
    <div
      class="col-lg-3 col-md-4 col-6 p-1"
      v-for="(item, index) in datas"
      :key="index"
    >
      <img :src="item" width="200" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [],
    };
  },
  created() {
    for (let t = 0; t < 10; t++) {
      this.datas.push("https://picsum.photos/20" + t.toString());
    }
  },
  method: {},
};
</script>