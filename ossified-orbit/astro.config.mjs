import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import vue from "@astrojs/vue";
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    partytown(),
    vue({
      template: {
        compilerOptions: {
          "editor.formatOnSave": true,
          "editor.defaultFormatter": "Vue.volar",
          // treat any tag that starts with ion- as custom elements
          isCustomElement: (tag) => tag.startsWith("ion-"),
        },
      },
      // ...
    }),
  ],
});
