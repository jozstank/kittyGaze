import { defineStore } from "pinia";
const useCatsDataStore = defineStore("CatsData", {
  state: () => {
    return {
      catArray: [],
      searchCat: "",
    };
  },
  getters: {
    getLovedCats() {
      const loved = this.catArray.filter((i) => {
        return i.isLove === true;
      });
      return loved;
    },
  },
  actions: {
    async fetchData() {
      const response = await fetch("https://api.thecatapi.com/v1/breeds", {
        headers: {
          "x-api-key":
            "live_BOtgxiw2rDoPzGiqpiopOnlLxYuSWY35oXj5JdERQvZLVuaYTWuZv2kJat9kds7B",
        },
      });
      const data = await response.json();
      for (let i of data) {
        i["isLove"] = false;
      }
      this.catArray = data;
    },

    searchTheCat(catName) {
      this.searchCat = catName;
    },
  },
});

const catStore = useCatsDataStore();
catStore.fetchData();
export default useCatsDataStore;
