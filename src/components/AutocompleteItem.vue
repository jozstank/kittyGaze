<template>
  <div
    class="mb-1 h-12 flex justify-between items-center p-1 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
    @click="searchCat"
  >
    <h1>{{ cat.name }}</h1>
    <div v-if="cat.image">
      <img class="w-16 object-cover" :src="cat.image.url" alt="" />
    </div>
  </div>
</template>
<script>
import useCatsDataStore from "@/catsDataStore";
export default {
  data() {
    return {
      catsStore: useCatsDataStore(),
    };
  },
  props: {
    cat: {
      type: Object,
      required: true,
    },
  },
  emits: ["choiced"],
  methods: {
    searchCat() {
      this.$emit("choiced");
      this.catsStore.searchTheCat(this.cat.name);
    },
  },
};
</script>
