<template>
  <NavComponent />
  <AsideComponent />
  <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-1"
    >
      <h1
        class="mt-24 sm:ml-12 text-gray-700 dark:text-gray-400"
        v-if="getSearchCatObj.length === 0"
      >
        There is no search result to show you. Please go ==>
        <button class="text-blue-500 underline" @click="goBack">
          Backward
        </button>
      </h1>
      <div
        v-else
        class="grid lg:grid-cols-3 mt-10 md:grid-cols-2 gap-4 mb-4 grid-cols-1"
      >
        <CatCard v-for="(i, index) in getSearchCatObj" :key="index" :cat="i" />
      </div>
    </div>
  </div>
  <div
    v-if="getSearchCatObj.length > 0"
    class="flex pb-4 sm:ml-64 justify-evenly"
  >
    <button
      @click="goBack"
      class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
    >
      <span
        class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
      >
        Backward
      </span>
    </button>
  </div>
</template>
<script>
import useCatsDataStore from "@/catsDataStore";
import CatCard from "@/components/CatCard.vue";
import AsideComponent from "@/components/AsideComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import { initFlowbite } from "flowbite";

export default {
  data() {
    return {
      catsStore: useCatsDataStore(),
    };
  },
  computed: {
    getSearchCatObj() {
      const result = this.catsStore.catArray.filter((item) => {
        return item.name === this.catsStore.searchCat;
      });
      return result;
    },
  },
  components: {
    AsideComponent,
    NavComponent,
    CatCard,
  },
  mounted() {
    initFlowbite();
  },
  methods: {
    goBack() {
      // window.scrollTo(0, 0);

      window.history.go(-1);
    },
  },
};
</script>
