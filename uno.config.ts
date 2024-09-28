import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig, presetWebFonts, presetWind } from "unocss";

export default defineConfig({
  presets: [
    presetWind({}),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Albert Sans",
      },
    }),
  ],
  transformers: [transformerVariantGroup()],
});
