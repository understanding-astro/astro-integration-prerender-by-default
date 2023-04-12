import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead } from '../astro.62beaaac.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const prerender = false;
const $$Ssr = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ssr;
  await fetch("https://google.com");
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>SSR</title>
  ${renderHead($$result)}</head>
  <body>
    <h1>SSR</h1>
  </body></html>`;
}, "/Users/ohansemmanuel/Documents/dev/books/understanding-astro/astro-integration-prerender-by-default/src/pages/ssr.astro");

const $$file = "/Users/ohansemmanuel/Documents/dev/books/understanding-astro/astro-integration-prerender-by-default/src/pages/ssr.astro";
const $$url = "/ssr";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ssr,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page1 as _ };
