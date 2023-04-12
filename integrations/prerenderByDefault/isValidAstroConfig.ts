import type { AstroConfig } from "astro";

/**
 * @param config: the fully resolved astro project config
 * @returns validation result
 */
export const isValidAstroConfig = (config: AstroConfig) => {
  if (config.output !== "server") {
    return { type: "invalid_output_config", value: false } as const;
  }

  if (!config.adapter) {
    return { type: "invalid_adapter_config", value: false } as const;
  }

  /**
   * configuration is valid
   */
  return { type: "success", value: true } as const;
};
