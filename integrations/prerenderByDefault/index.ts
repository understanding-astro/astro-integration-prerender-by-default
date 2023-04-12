import type { AstroIntegration } from "astro";

import { log } from "./log";
import type { Config, ValidationResult } from "./types";
import { injectVitePlugin } from "./injectVitePlugin";
import { isValidAstroConfig } from "./isValidAstroConfig";

let resolveValidationResult: (value: ValidationResult) => void;
let validationResultPromise = new Promise<ValidationResult>((resolve) => {
  resolveValidationResult = resolve;
});

export default function prerenderByDefault(config: Config): AstroIntegration {
  return {
    name: "astro-prerender-by-default",
    hooks: {
      "astro:config:setup"(options) {
        options.updateConfig({
          vite: {
            plugins: [injectVitePlugin(config, validationResultPromise)],
          },
        });
      },
      "astro:config:done"(options) {
        // get the 'silent' integration config property, default to false.
        const silent = config?.silent ?? false;

        // validate the resolved project configuration
        const validationResult = isValidAstroConfig(options.config);

        // resolve the validation promise
        resolveValidationResult(validationResult);

        /**
         * Leverage Typescript exhaustive check to handle all
         * validation types and log messages where appropriate
         */
        switch (validationResult.type) {
          case "invalid_adapter_config":
            log({
              silent,
              message: `Adapter not set for hybrid rendering. Skipping`,
            });
            return;

          case "invalid_output_config":
            log({
              silent,
              message: `Config output not set to "server". Skipping`,
            });
            return;

          case "success":
            return;

          default:
            const _exhaustiveCheck: never = validationResult;
            return _exhaustiveCheck;
        }
      },
    },
  };
}
