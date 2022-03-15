<template>
  <div id="hero" name="hero">
    <section class="jumbotron-bg">
      <div class="hero-text text-white grid grid-cols-3 gap-4">
        <div class="col-span-2 text-left font-bold text-3xl">Codex</div>
        <div class="text-right">Buttons</div>
        <div class="col-span-2 text-left text-white">
          <div id="navbar-menu">
            <ul
              class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-semibold"
            >
              <li v-for="(item, index) of routes" :key="index">
                <nuxt-link
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                  :to="item.path"
                  >{{ item.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IRoute } from "~/typings/routes";

export default Vue.extend({
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      routes: this.$store.state.routes.list as IRoute[],
    };
  },
});
</script>

<style lang="sass">
#hero
  .jumbotron-bg
    padding: 100px 0px
  .jumbotron-bg .container
    position: relative
</style>
