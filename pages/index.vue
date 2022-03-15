<template>
  <div id="index" name="index">
    <div class="codex-container">
      <div class="text-black text-4xl">Home</div>

      <!-- Carousel Start -->
      <div id="carousel" data-carousel="slide" class="relative py-20">
        <!-- Carousel wrapper -->
        <div
          class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96"
        >
          <!-- Item 1 -->
          <div
            class="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="@/assets/img/bridge.webp"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>

          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="@/assets/img/fantasy1.webp"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>

          <!-- Item 3 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="@/assets/img/castle.webp"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>

          <!-- Item 4 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="@/assets/img/clockwork-planet.webp"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>

          <!-- Item 5 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item="">
            <img
              src="@/assets/img/damned.webp"
              class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
        </div>

        <!-- Slider indicators -->
        <div class="codex-slider-control">
          <button
            type="button"
            class="w-3 h-3 bg-white rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <!-- Slider controls -->
        <button
          type="button"
          class="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
          >
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
          >
            <svg
              class="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="hidden">Next</span>
          </span>
        </button>
        <!-- Carousel End -->
      </div>

      <!-- Text Start -->
      <div class="text-black text-center text-lg py-10">
        Welcome to <strong>Codex</strong> Wiki! <br />
        Codex is a vast growing fiction universe written by Riichi Rusdiana.
        Codex is an open-source project, feel free to use any written concept
        provided within Codex to enrich your worldbuilding. Whether it's a
        Novel, Video Games, Tabletop RPG, Concept Art, or any kind of creation
        that involves in-depth lore. <br />
      </div>

      <hr />

      <div class="codex-text-link">
        <nuxt-link aria-current="page" to="about">About</nuxt-link>
        <strong>•</strong>
        <nuxt-link aria-current="page" to="classes/index">Classes</nuxt-link>
        <strong>•</strong>
        <nuxt-link aria-current="page" to="subclasses">Subclasses</nuxt-link>
        <strong>•</strong>
        <nuxt-link aria-current="page" to="weapons">Weapons</nuxt-link>
        <strong>•</strong>
        <nuxt-link aria-current="page" to="concept">Concept</nuxt-link> <br />
        <nuxt-link aria-current="page" to="races">Races</nuxt-link>
        <strong>•</strong>
        <nuxt-link aria-current="page" to="skills">Skills</nuxt-link>
        <strong>•</strong>
        <nuxt-link aria-current="page" to="unique_skils"
          >Unique Skills</nuxt-link
        >
        <strong>•</strong>
        <nuxt-link aria-current="page" to="gifts">Gifts</nuxt-link> <br />
        <nuxt-link aria-current="page" to="soulwatch">Soulwatch</nuxt-link>
      </div>
      <!-- Text End -->

      <!-- <div class="text-black" v-for="n in 10">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </div> -->
    </div>
  </div>
</template>

<style lang="sass" scoped>
@tailwind components

@layer components
  .codex-text-link
    @apply text-black text-center text-lg py-10 #{!important}
  .codex-container
    @apply relative container p-14 mx-auto bg-gray-light rounded-lg #{!important}
  .codex-slider-control
    @apply flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2 #{!important}
</style>
