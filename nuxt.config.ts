// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
import {defineNuxtConfig} from "nuxt/config";
import {nesting} from "postcss-selector-parser";

export default defineNuxtConfig({
  alias:{
    "@":resolve(__dirname,"/")
  },

  css:['~/assets/css/main.css'],

  postcss:{
    plugins:{
      tailwindcss:{},
      autoprefixer:{}
    },
  },

  devtools: { enabled: false },

  vite:{
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  runtimeConfig:{
    secretKey:'',
    public:{
      server:'',
    }
  },
  typescript: {
    typeCheck: true
  }
})