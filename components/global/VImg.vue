<template>
  <img :src="imgSrc()" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        // eslint-disable-next-line
        return require(`~/assets/img/${this.src}`);
      } catch (error) {
        return null;
      }
    },
  },
};
</script>
