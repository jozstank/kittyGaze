<template>
  <div>
    <NavComponent />
    <AsideComponent />
    <Carousel />
    <PhotoContentDiv />
    <NextNpreviousBtns />
  </div>
</template>
<script>
import NavComponent from "../components/NavComponent.vue";
import AsideComponent from "@/components/AsideComponent.vue";
import Carousel from "@/components/Carousel.vue";
import PhotoContentDiv from "@/components/PhotoContentDiv.vue";
import NextNpreviousBtns from "@/components/NextNpreviousBtns.vue";
export default {
  components: {
    NavComponent,
    AsideComponent,
    Carousel,
    PhotoContentDiv,
    NextNpreviousBtns,
  },
};
</script>
