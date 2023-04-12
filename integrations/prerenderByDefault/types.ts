import type { isValidAstroConfig } from "./isValidAstroConfig";

export type ValidationResult = ReturnType<typeof isValidAstroConfig>;

export type Config =
  | {
      silent?: boolean;
    }
  | undefined;
