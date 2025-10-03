// tailwind.config.js
module.exports = {
  theme: {
    extend: {},
    screens: {

      // ширина >= 1441 и высота >= 960
      desktop: { raw: "(min-width: 1441px) and (min-height: 960px)" },

      // (ширина <= 1440) или (высота <= 959)
      laptop: [
        { max: "1440px" },
        { raw: "(max-height: 959px)" },
      ],

      // (ширина <= 1199) или (высота <= 789)
      tablet: [
        { max: "1199px" },
        { raw: "(max-height: 789px)" },
      ],

      // ширина экрана <= 743px
      mobile: { max: "743px" },
      smallHeight: { raw: "(max-height: 500px)" },
    },
  },
  plugins: [],
};
