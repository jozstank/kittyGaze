<template>
  <div class="p-1 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-1"
    >
      <div class="grid lg:grid-cols-3 gap-3 mb-4 grid-cols-1 md:grid-cols-2">
        <CatCard
          v-for="(item, index) in getEighteenCats"
          :key="index"
          :cat="item"
        />
      </div>
    </div>
  </div>
  <NextNpreviousBtns @next="nextPage" @previous="previousPage" />
</template>
<script>
import CatCard from "./CatCard.vue";
import useCatsDataStore from "../catsDataStore.js";
import NextNpreviousBtns from "./NextNpreviousBtns.vue";

export default {
  data() {
    return {
      catsStore: useCatsDataStore(),
      pageNum: null,
    };
  },
  computed: {
    getEighteenCats() {
      if (this.pageNum === 1) {
        const catsInOnePage = this.catsStore.catArray.slice(
          0,
          this.pageNum * 18
        );
        return catsInOnePage;
      } else if (this.pageNum === 2) {
        const catsInOnePage = this.catsStore.catArray.slice(18, 36);
        return catsInOnePage;
      } else if (this.pageNum === 3) {
        const catsInOnePage = this.catsStore.catArray.slice(36, 54);
        return catsInOnePage;
      } else if (this.pageNum === 4) {
        const catsInOnePage = this.catsStore.catArray.slice(
          54,
          this.catsStore.catArray.length
        );
        return catsInOnePage;
      }
    },
  },
  components: {
    CatCard,
    NextNpreviousBtns,
  },

  created() {
    const pageNum = Number(this.$route.params.id);
    this.pageNum = pageNum;
  },

  methods: {
    nextPage(data) {
      this.pageNum = data;
    },
    previousPage(data) {
      this.pageNum = data;
    },
  },
};
</script>
