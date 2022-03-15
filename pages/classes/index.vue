<template>
  <div id="content_test">
    <div class="codex-container">
      <div class="text-black text-4xl">{{ doc.title }}</div>
      <nuxt-content :document="doc" class="text-black text-left text-lg py-5" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ $content }) {
    const doc = await $content("classes/index").fetch();

    return { doc };
  },
  data() {
    return {
      doc: "",
      occupations: [""],
    };
  },
});
</script>

<style lang="sass" scoped>
@tailwind components

@layer components
  .codex-container
    @apply relative container p-14 mx-auto bg-gray-light rounded-lg #{!important}
</style>
