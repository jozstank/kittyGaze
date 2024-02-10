<template>
  <NavComponent />
  <AsideComponent />
  <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-1"
    >
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-4 grid-cols-1">
        <FoodCard
          v-for="(food, index) in foodStore.foods"
          :key="index"
          :food="food"
        />
      </div>
    </div>
  </div>
  <div class="flex pb-4 sm:ml-64 justify-evenly">
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
import AsideComponent from "@/components/AsideComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import FoodCard from "@/components/FoodCard.vue";
import { initFlowbite } from "flowbite";
import useFoodStore from "@/foods";

export default {
  data() {
    return {
      foodStore: useFoodStore(),
    };
  },
  components: {
    AsideComponent,
    NavComponent,
    FoodCard,
  },
  methods: {
    goBack() {
      // window.scrollTo(0, 0);

      window.history.go(-1);
    },
  },
  mounted() {
    initFlowbite();
  },
};
</script>
