<template>
  <div
    v-if="isComplete === false"
    class="relative h-screen flex justify-center items-center"
  >
    <div class="h-fit p-10 flex flex-col gap-5">
      <div class="flex justify-center items-center">
        <div
          class="absolute animate-spin rounded-full h-36 w-36 border-t-4 border-b-4 border-purple-500"
        ></div>
        <img src="../../catIcon.png" class="rounded-full w-24" />
      </div>
      <div id="loading-overlay" class="flex items-center justify-center">
        <svg
          class="animate-spin h-8 w-8 text-white mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-100"
            cx="12"
            cy="12"
            r="10"
            stroke="#a855f7"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>

        <span class="text-gray-700 dark:text-gray-400 text-3xl font-bold"
          >Loading...</span
        >
      </div>
    </div>
  </div>

  <div
    v-if="isComplete"
    class="bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <NavComponent />
    <AsideComponent />
    <Carousel />
    <PhotoContentDiv />
  </div>
</template>

<script>
import NavComponent from "../components/NavComponent.vue";
import AsideComponent from "@/components/AsideComponent.vue";
import Carousel from "@/components/Carousel.vue";
import PhotoContentDiv from "@/components/PhotoContentDiv.vue";
import { initFlowbite } from "flowbite";
import useCatsDataStore from "@/catsDataStore";
import { handler } from "flowbite/plugin";

export default {
  data() {
    return {
      catsStore: useCatsDataStore(),
      isCompleted: false,
    };
  },

  computed: {
    isComplete() {
      if (this.catsStore.catArray.length > 1) {
        return true;
      } else {
        return false;
      }
    },
  },

  components: {
    NavComponent,
    AsideComponent,
    Carousel,
    PhotoContentDiv,
  },
  mounted() {
    initFlowbite();
  },
  created() {
    const pageNum = Number(this.$route.params.id);
    if (pageNum < 1 || pageNum > 4 || isNaN(pageNum)) {
      window.alert("There is no page found");
      document.write(
        `<h1>404 - Page Not Found. Here, have this cookie instead 🍪</h1>
        <h2>Please go to correct Url <a href="/">KittyGaze</a></h2>`
      );
    }
  },
};
</script>
