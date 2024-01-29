<script>
import "flowbite/dist/flowbite.js";
// import for carousel image display
import MainView from "./views/MainView.vue";
// import for nav open and close feature
import AboutView from "./views/AboutView.vue";
// router link နဲ့သုံးရင် scroll ကိုမှတ်ထားပြီး route change တဲ့ခါ အဲ့ scroll နေရာကပြပေးနေတာကိုသဘောမကျဘူး
// router link သုံးတဲ့ခါ curosel ကပုံတွေမပြပေးနိုင်တောဘူး
</script>

<template>
  <router-view></router-view>
</template>
