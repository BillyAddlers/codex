<template>
  <div id="content_test">
    <div class="codex-container">
      <nuxt-content :document="doc" class="text-black" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || "test").fetch();

    return { doc };
  },
  data() {
    return {
      doc: "A",
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
