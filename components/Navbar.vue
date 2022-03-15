<template>
  <transition name="pan">
    <div name="Navbar" class="flex justify-center">
      <div id="codex-navbar-id" class="hidden fixed container order-first">
        <nav
          class="bg-gray-dark border-gray-200 mx-3 mt-2 px-2 sm:px-4 py-2.5 rounded-lg shadow-lg"
        >
          <!-- Container Start -->
          <div
            class="container flex flex-wrap justify-between items-center mx-auto"
          >
            <!-- Navbar Title -->
            <a href="#" class="flex items-center">
              <img
                src="@/assets/logo.png"
                class="mr-3 h-6 sm:h-10"
                alt="Codex Logo"
              />
              <span
                class="self-center text-xl font-bold whitespace-nowrap text-white"
                >Codex</span
              >
            </a>

            <!-- Navbar Search Bar -->
            <div class="flex md:order-2">
              <div class="hidden relative mr-3 md:mr-0 md:block">
                <div
                  class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  id="email-adress-icon"
                  type="text"
                  class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <button
                data-collapse-toggle="mobile-menu-3"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="mobile-menu-3"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <!-- Navbar Menu -->
            <div
              id="mobile-menu-3"
              class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            >
              <div id="navbar-menu">
                <ul
                  class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-semibold"
                >
                  <li v-for="(item, index) of routes" :key="index">
                    <nuxt-link
                      href="#"
                      class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                      aria-current="page"
                      :to="item.path"
                      >{{ item.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Container End -->
          </div>
        </nav>
      </div>
    </div>
  </transition>
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
  mounted() {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const scrollFunction = this.scrollFunction;
    // eslint-disable-next-line func-names
    window.onscroll = function () {
      scrollFunction();
    };
  },
  methods: {
    scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("codex-navbar-id")!.classList.remove("hidden");
      } else {
        document.getElementById("codex-navbar-id")!.classList.add("hidden");
      }
    },
  },
});
</script>

<style lang="scss">
#codex-navbar-id {
  z-index: 999;
}
.pan-enter-from {
  opacity: 0;
}
.pan-enter-to {
  opacity: 1;
}
.pan-enter-active {
  transition: all 2s ease;
}
.pan-leave-from {
  opacity: 1;
}
.pan-leave-to {
  opacity: 0;
}
.pan-leave-active {
  transition: all 2s ease;
}
</style>
