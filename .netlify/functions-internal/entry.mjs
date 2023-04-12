import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { s as server_default, e as deserializeManifest } from './chunks/astro.62beaaac.mjs';
import { _ as _page0 } from './chunks/prerender.3ca5cea0.mjs';
import { _ as _page1 } from './chunks/pages/all.62da5546.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/ssr.astro", _page1],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"routeData":{"route":"/ssr","type":"page","pattern":"^\\/ssr\\/?$","segments":[[{"content":"ssr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ssr.astro","pathname":"/ssr","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"componentMetadata":[["/Users/ohansemmanuel/Documents/dev/books/understanding-astro/astro-integration-prerender-by-default/src/pages/ssr.astro",{"propagation":"none","containsHead":true}],["/Users/ohansemmanuel/Documents/dev/books/understanding-astro/astro-integration-prerender-by-default/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/index.html"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
