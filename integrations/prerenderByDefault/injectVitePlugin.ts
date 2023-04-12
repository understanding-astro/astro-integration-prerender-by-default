import type { Plugin } from "vite";
import type { Config, ValidationResult } from "./types";
import { getVitePlugin } from "./getVitePlugin";

export const injectVitePlugin = async (
  config: Config,
  validationResultPromise: Promise<ValidationResult>
): Promise<Plugin | null> => {
  // await the validation result promise before continuing
  const validationResult = await validationResultPromise;

  // exit if the validation result value is false
  if (!validationResult.value) {
    return null;
  }

  const prerenderByDefaultPlugin = getVitePlugin(config);

  return {
    name: "vite-plugin-astro-inject-default-prerender",
    configResolved: (options) => {
      (options.plugins as Plugin[]).unshift(prerenderByDefaultPlugin);
    },
  };
};
