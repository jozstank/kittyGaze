<template>
  <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-1"
    >
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-4 grid-cols-1">
        <CatCard
          v-for="(item, index) in catDataArray"
          :key="index"
          :cat="item"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CatCard from "./CatCard.vue";
import useLovedStore from "../lovedStore.js";
import { compileScript } from "vue/compiler-sfc";
import useCatsDataStore from "../catsDataStore.js";
import { handler } from "flowbite/plugin";

export default {
  data() {
    return {
      lovedStore: useLovedStore(),
      catsStore: useCatsDataStore(),
      catDataArray: [],
    };
  },
  components: {
    CatCard,
  },
  async created() {
    await this.catsStore.fetchData();
    this.catDataArray = await this.catsStore.catArray;
  },

  // created() {
  //   const pageNum = Number(this.$route.params.id);
  //   this.catsStore.pageNumber = pageNum;

  //   console.log(pageNum);
  // },
};
</script>
