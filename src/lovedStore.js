import { defineStore } from "pinia";
const useLovedStore = defineStore("loved", {
  state: () => {
    return {
      keyOfDiv: ["hi"],
    };
  },
  actions: {
    pushIndexOfLoved() {},
  },
});
export default useLovedStore;
