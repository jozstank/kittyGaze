<template>
  <div
    class="w-full mt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img class="p-8 rounded-t-lg" :src="food.imgUrl" alt="product image" />
    <div class="px-5 pb-5">
      <a href="#">
        <h5
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ food.name }}
        </h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5"></div>
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-gray-900 dark:text-white">{{
          food.price
        }}</span>
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    food: {
      type: Object,
      required: true,
    },
  },
};
</script>
