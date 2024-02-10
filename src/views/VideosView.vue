<template>
  <NavComponent />
  <AsideComponent />
  <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-5"
    >
      <div class="grid lg:grid-cols-2 gap-4 mb-4 grid-cols-1">
        <VideoCard v-for="(i, index) in videos" :key="index" :video="i" />
      </div>
    </div>
  </div>
  <div class="flex pb-4 sm:ml-64 justify-evenly">
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
import AsideComponent from "@/components/AsideComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import { initFlowbite } from "flowbite";
import VideoCard from "@/components/VideoCard.vue";

export default {
  data() {
    return {
      videos: [
        {
          src: "https://www.youtube.com/embed/GdJwvZGpOXA",
          title: "아기고양이를 보고 직립보행하는 어른고양이",
        },
        {
          src: "https://www.youtube.com/embed/CRXO15ZLoRQ",
          title: "in real life #cute #cat funny kitten video compilation",
        },
        {
          src: "https://www.youtube.com/embed/wE8s993ZV-8",
          title:
            "The kitten approaching the daddy cat to play with him was so cute.",
        },
        {
          src: "https://www.youtube.com/embed/5UaSScBpPR8",
          title: "Tiny Kitten Pudding is crying to find mother cat",
        },
        {
          src: "https://www.youtube.com/embed/O58N8Mmv0QU",
          title: "Kitten Kiki greets a tiny chicks for the first time",
        },
        {
          src: "https://www.youtube.com/embed/1RTiaTGuKnM",
          title: "The most dangerous kitten in the world",
        },
        {
          src: "https://www.youtube.com/embed/Hewaj5VKFN4",
          title: "The Daily Life Of Kitten Pudding",
        },
        {
          src: "https://www.youtube.com/embed/lw_M5wnVWXc",
          title: "Dad Cat Ignores Tiny Kitten [Try not to Laugh]",
        },
        {
          src: "https://www.youtube.com/embed/Ch80pJJm50E",
          title: "Kittens fighting - mother cat punishes her kittens",
        },
        {
          src: "https://www.youtube.com/embed/3f1N2bsIQqc",
          title: "German Shepherd Shocked by Tiny Kittens occupying dog bed!",
        },
        {
          src: "https://www.youtube.com/embed/Zb1ODjHX5_I",
          title:
            "Cat Obsessed With Baby Brother Thinks He’s Also A Baby | The Dodo Cat Crazy",
        },
        {
          src: "https://www.youtube.com/embed/AUXYE1Qi6ww",
          title: "Котики 3 - Погляд Марійки - Марія Стаднік",
        },
        {
          src: "https://www.youtube.com/embed/OWbtxdq5rvQ",
          title: "Two-Week Old Kitten Lets Out A Roar",
        },
        {
          src: "https://www.youtube.com/embed/qM-f-uKK5zs",
          title: "Golden Retriever Reacts to Golden Retriever Puppy",
        },
        {
          src: "https://www.youtube.com/embed/5dDjJLdQ6Jo",
          title: "Husky gets bullied",
        },
        {
          src: "https://www.youtube.com/embed/rUz4BogCaKU",
          title:
            "🐯🐯🐯WOW!!! adorable baby #tigercub #tiger  #kitten #foryou #fpy  #cute #kitty",
        },
      ],
    };
  },
  components: {
    AsideComponent,
    NavComponent,
    VideoCard,
  },
  methods: {
    goBack() {
      // window.scrollTo(0, 0);

      window.history.go(-1);
    },
  },
  mounted() {
    initFlowbite();
  },
};
</script>
