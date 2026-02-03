import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

export const createEmotionCache = (direction: "ltr" | "rtl") =>
  createCache({
    key: direction === "rtl" ? "mui-rtl" : "mui-ltr",
    stylisPlugins: direction === "rtl" ? [rtlPlugin] : [],
  });