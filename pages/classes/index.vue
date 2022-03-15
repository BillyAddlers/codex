<template>
  <div id="content_test">
    <div class="codex-container">
      <h1>Classes</h1>
      <div class="text-black text-lg text-left py-5">
        There are 15 classes/occupations available through Codex with distinct
        ability and mechanics that can give advantages and disadvantages based
        on certain situation. Along with player's chosen
        <nuxt-link aria-current="page" to="classes">Classes</nuxt-link> and
        <nuxt-link aria-current="page" to="races">Races</nuxt-link>, available
        <nuxt-link aria-current="page" to="skills">Skills</nuxt-link> may vary.
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@tailwind components

@layer components
  .codex-container
    @apply relative container p-14 mx-auto bg-gray-light rounded-lg #{!important}
</style>
