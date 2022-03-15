<template>
  <div id="default-layout" class="default-layout-bg">
    <header>
      <Navbar />
    </header>

    <div class="grid grid-cols-6 gap-2">
      <div class="grid-body col-start-2 col-end-6">
        <body>
          <Hero />
        </body>
      </div>
    </div>

    <Nuxt />

    <Footer />
  </div>
</template>
