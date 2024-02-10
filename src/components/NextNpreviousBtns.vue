<template>
  <div class="flex pb-4 sm:ml-64 justify-evenly">
    <!-- Previous Button -->
    <button
      v-show="pageNum > 1"
      @click="previousPage"
      class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      <svg
        class="w-3.5 h-3.5 me-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        />
      </svg>
      Previous
    </button>
    <button
      v-show="pageNum < 4"
      @click="nextPage"
      class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Next
      <svg
        class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageNum: Number(this.$route.params.id),
    };
  },

  emits: ["next", "previous"],
  methods: {
    nextPage() {
      if (this.pageNum === 4) {
        window.alert("There is no more page");
        return;
      } else {
        this.pageNum += 1;
        this.$emit("next", this.pageNum);
      }
      this.$router.push(`/page/${this.pageNum}`);
      window.scrollTo(0, 0);
    },
    previousPage() {
      if (this.pageNum === 1) {
        window.alert("There is no previous page");
        return;
      } else {
        this.pageNum -= 1;
        this.$emit("previous", this.pageNum);
      }
      this.$router.push(`/page/${this.pageNum}`);
      window.scrollTo(0, 0);
    },
  },
};
</script>
