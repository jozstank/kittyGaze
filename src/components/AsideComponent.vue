<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <form @submit.prevent="search" class="my-2">
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            v-model="searchChar"
            type="search"
            id="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
            autocomplete="off"
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>

        <SearchAutocompleteDiv
          class=""
          :searchChar="searchChar"
          :searchCat="searchCat"
        />
      </form>
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            @click="toTopView"
            to="/about"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <img src="../../public/icon/1801287.svg" class="w-6" alt="" />
            <span class="ms-3">About</span>
          </router-link>
        </li>
        <li>
          <router-link
            @click="toTopView"
            to="/foods"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <img src="../../public/icon/1801287.svg" class="w-6" alt="" />

            <span class="flex-1 ms-3 whitespace-nowrap">Cat Food & Snack</span>
          </router-link>
        </li>

        <li>
          <router-link
            @click="toTopView"
            to="/liked"
            class="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <img src="../../public/icon/1801287.svg" class="w-6" alt="" />

            <span class="flex-1 ms-3 whitespace-nowrap">Liked cats</span>
            <span
              class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
              >{{ catsStore.getLovedCats.length }}</span
            >
          </router-link>
        </li>

        <li>
          <router-link
            @click="toTopView"
            to="/videos"
            class="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <img src="../../public/icon/1801287.svg" class="w-6" alt="" />

            <span class="flex-1 ms-3 whitespace-nowrap">Videos</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
import useCatsDataStore from "@/catsDataStore";
import SearchAutocompleteDiv from "./SearchAutocompleteDiv.vue";

export default {
  data() {
    return {
      catsStore: useCatsDataStore(),
      searchChar: "",
    };
  },
  components: {
    SearchAutocompleteDiv,
  },
  methods: {
    toTopView() {
      // this.$router.push(`/liked`);
      window.scrollTo(0, 0);
    },
    searchCat(catName) {
      this.searchChar = catName;
    },
    search() {
      window.scrollTo(0, 0);

      this.$router.push(`/search`);
    },
  },
  watch: {
    "catsStore.searchCat": {
      handler(newVal, oldVal) {
        this.searchChar = newVal;
      },
    },
  },
};
</script>
