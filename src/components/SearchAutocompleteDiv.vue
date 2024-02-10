<template>
  <div :class="{ hidden: isClicked }">
    <AutocompleteItem
      v-for="(i, index) in search"
      :class="{ hidden: isClicked }"
      :key="index"
      :cat="i"
      @choiced="choiced"
    />
  </div>
</template>
<script>
import useCatsDataStore from "@/catsDataStore";
import AutocompleteItem from "./AutocompleteItem.vue";

export default {
  data() {
    return {
      catsStore: useCatsDataStore(),
      isClicked: false,
    };
  },
  props: {
    searchChar: {
      type: String,
      required: true,
    },
  },
  computed: {
    search() {
      if (this.searchChar.length >= 1) {
        const s = this.searchChar.toLowerCase();
        const found = this.catsStore.catArray.filter((item) => {
          const result = item.name.toLowerCase().includes(s);
          return result;
        });
        return found;
      }
    },
  },
  emits: ["searchCat"],
  components: {
    AutocompleteItem,
  },
  methods: {
    choiced() {
      this.isClicked = true;
    },
  },
};
</script>
