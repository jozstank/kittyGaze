import { defineStore } from "pinia";
import { compileScript } from "vue/compiler-sfc";
const useCatsDataStore = defineStore("CatsData", {
  state: () => {
    return {
      pageNumber: 0,
      catArray: [],
    };
  },
  actions: {
    async fetchData() {
      const response = await fetch(
        "https://api.thecatapi.com/v1/breeds?limit=24&page=" +
          `${this.pageNumber}`,
        {
          headers: {
            "x-api-key":
              "live_BOtgxiw2rDoPzGiqpiopOnlLxYuSWY35oXj5JdERQvZLVuaYTWuZv2kJat9kds7B",
          },
        }
      );
      const data = await response.json();
      this.catArray = data;
      // return data;
    },
    async nextPage(num) {
      this.pageNumber = num;
      await this.fetchData();
    },
  },
});
export default useCatsDataStore;
