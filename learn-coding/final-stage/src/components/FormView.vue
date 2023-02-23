<template>
  <div class="row">
    <div class="col-lg-4 col-sm-8 mx-auto">
      <label> name </label>
      <input v-model="formName" class="form-control" />
      <button class="btn btn-primary mt-5" @click="updateDB()">Update DB</button>
    </div>
  </div>
</template>
<script>
import { db } from "../configs/firebase";
export default {
  data() {
    return {
      formName: "xxx",
    };
  },
  methods: {
    updateDB() {
      db.collection("org").doc("n4FvqR5PskqObkcfJwo0").update({
        name: this.formName,
      });
    },
  },
};
</script>