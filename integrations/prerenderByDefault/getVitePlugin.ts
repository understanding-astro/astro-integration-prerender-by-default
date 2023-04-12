import type { Plugin } from "vite";
import type { Config } from "./types";
import { parse } from "@astrojs/compiler";
import { walk, is, serialize } from "@astrojs/compiler/utils";
import { parse as parseESModuleLexer } from "es-module-lexer";

import { log } from "./log";

export const getVitePlugin = (config: Config): Plugin => {
  const silent = config?.silent ?? false;

  return {
    name: "vite-plugin-astro-prerender-by-default",
    async transform(code, id) {
      if (!id.endsWith(".astro")) {
        return;
      }

      const { ast } = await parse(code);

      walk(ast, (node) => {
        if (is.root(node)) {
          const firstChildNode = node.children?.[0];

          // check that a frontmatter exists as the first child node
          if (firstChildNode?.type === "frontmatter") {
            // using es-module-lexer, get the list of exports
            const [, exports] = parseESModuleLexer(firstChildNode.value);

            // check if any export is named "prerender". "n" stands for "name"
            if (exports.some((e) => e.n === "prerender")) {
              log({
                silent,
                message: "'prerender' export found. Skipping",
              });

              // exit - let whatever prerender value is exported take effect
              return;
            }

            // add prerender export for static build i.e., "export const prerender = true"
            // note that we concatenate this to whatever the current string value of the node is
            firstChildNode.value = `\nexport const prerender = true; \n ${firstChildNode.value}`;

            log({
              silent,
              message: "Added 'prerender' export to frontmatter",
            });
          } else {
            // No frontmatter in this astro component. Add frontmatter node and default export
            log({
              silent,
              message: "No frontmatter, going ahead to add one",
            });

            // "unshift" to add this to the start of the list i.e., first child
            node.children.unshift({
              type: "frontmatter",
              value: "\nexport const prerender = true\n",
            });
          }
        }
      });

      // serialize the AST and return the result
      const result = serialize(ast);

      return result;
    },
  };
};
