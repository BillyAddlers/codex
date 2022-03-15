export default {
  mode: "jit",
  // darkMode: false, // Change to "class" instead of "media" to override theme

  // Include plugins here
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugin: [require("flowbite/plugin"), require("@tailwindcss/typography")],

  // Content plugin, as mentioned on Nuxt Modules
  content: ["./node_modules/flowbite/**/*.js"],

  // Theming
  theme: {
    // Extends default theme
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        fredoka: ["Fredoka", "fredoka"],
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
    },
  },
};
