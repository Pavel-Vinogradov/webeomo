module.exports = {
  pluginOptions: {
    autoRouting: {
      // Optionally specify a custom output file, relative to the project root
      outFile: "src/router/routes.js",
      // Specify other vue-auto-routing options here
      nested: false
    }
  },

  pwa: {
    name: "ITWebNet",
    themeColor: "#18181e",
    msTileColor: "#18181e",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    assetsVersion: "2",
    manifestOptions: {
      name: "ITWebNet",
      short_name: "ITWebNet",
      description: "Software Development ",
      display: "fullscreen",
      background_color: "#18181e",
      icons: [
        {
          src: "./img/icons/logo-192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./img/icons/logo-512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "./img/icons/logo-192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "./img/icons/logo-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    },

    iconPaths: {
      favicon32: "img/icons/logo-32.png",
      favicon16: "img/icons/logo-16.png",
      appleTouchIcon: "img/icons/logo-152.png",
      msTileImage: "img/icons/logo-144.png"
    }
  }
};
