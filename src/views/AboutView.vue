<template>
  <NavComponent />
  <AsideComponent />
  <div
    class="flex flex-col items-center mt-12 sm:ml-64 px-10 max-w-3xl mx-auto"
  >
    <img src="../../cat.svg" class="max-w-96" alt="" />
    <h1
      class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl mx-auto"
    >
      <span
        class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >KittyGaze</span
      >
    </h1>

    <p class="mb-3 text-center text-gray-500 dark:text-gray-400">
      Welcome to our cat-centric haven! 🐾 Explore the feline universe on our
      website, where we celebrate the charm, variety, and quirks of cat breeds.
      From the majestic Maine Coon to the playful Siamese, discover a treasure
      trove of information that captures the essence of each unique feline
      friend. Indulge your cat's culinary cravings with our curated selection of
      cat food and snacks. We prioritize their health and happiness, offering
      insights into nutritious meals and delectable treats that will have your
      furry friend purring with delight. Enhance your cat's playtime with our
      collection of carefully chosen toys. Whether it's a feathered teaser, a
      cozy tunnel, or an interactive puzzle, we've got the perfect playthings to
      keep your cat entertained and stimulated. At our cat-centric hub, we're
      not just a website — we're a community of cat enthusiasts. Join us in
      celebrating the wonderful world of cats, sharing experiences, and finding
      inspiration to make every moment with your feline companion extraordinary.
      Welcome to a purr-fectly delightful journey into the heart of feline
      fascination! 🐱✨
    </p>

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
import NavComponent from "@/components/NavComponent.vue";
import AsideComponent from "@/components/AsideComponent.vue";
import useCatsDataStore from "@/catsDataStore";
import { initFlowbite } from "flowbite";

export default {
  data() {
    return {
      catsStore: useCatsDataStore(),
    };
  },
  components: {
    NavComponent,
    AsideComponent,
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
