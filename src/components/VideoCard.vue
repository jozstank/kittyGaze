<template>
  <iframe
    class="aspect-video w-full"
    :src="getSrc"
    :title="video.title"
    frameborder="0"
    allowfullscreen
  ></iframe>
</template>
<script>
export default {
  computed: {
    getSrc() {
      return `${this.video.src}?rel=0`;
    },
  },
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
};
</script>
