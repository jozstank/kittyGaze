<template>
  <div
    class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img class="rounded-t-lg" :src="cat.image.url" alt="" />
    </a>
    <div class="p-5">
      <div>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ cat.name }}
        </h5>

        <p class="text-md font-medium mb-1">
          Originally from: <span class="text-pink-400">{{ cat.origin }}</span>
        </p>
      </div>
      <div class="flex flex-wrap gap-1 justify-items-start items-center mb-1">
        <span
          v-for="(item, index) in getTemperament"
          :key="index"
          class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
          >{{ item }}</span
        >
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ cat.description }}
      </p>
      <div class="flex justify-between">
        <a
          v-show="cat.vcahospitals_url"
          :href="cat.vcahospitals_url"
          target="_blank"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Details
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
        </a>

        <div class="flex items-center">
          <input
            type="checkbox"
            :id="cat.id"
            class="hidden"
            v-model="isChecked"
          />

          <label :for="cat.id" class="cursor-pointer">
            <svg
              v-if="isChecked"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="red"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 21l-1.42-1.42C6.18 15.7 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.18 7.2-8.58 11.58L12 21z"
              />
            </svg>

            <!-- Heart icon outline for the unchecked state -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 21l-1.42-1.42C6.18 15.7 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.18 7.2-8.58 11.58L12 21z"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { stringify } from "postcss";

export default {
  data() {
    return {
      isChecked: false,
      temperament: null,
    };
  },
  computed: {
    getTemperament() {
      const temperament = this.cat.temperament.split(",");
      return temperament;
    },
  },
  props: {
    cat: {
      type: Object,
      required: true,
    },
  },
};
</script>
