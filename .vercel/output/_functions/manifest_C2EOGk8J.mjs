import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_FARPgKn6.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Cj6Eje_q.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/wamp64/www/astro-project/","cacheDir":"file:///C:/wamp64/www/astro-project/node_modules/.astro/","outDir":"file:///C:/wamp64/www/astro-project/dist/","srcDir":"file:///C:/wamp64/www/astro-project/src/","publicDir":"file:///C:/wamp64/www/astro-project/public/","buildClientDir":"file:///C:/wamp64/www/astro-project/dist/client/","buildServerDir":"file:///C:/wamp64/www/astro-project/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@keyframes pulse{0%,to{opacity:.2}50%{opacity:.4}}.animation-delay-2000[data-astro-cid-kh7btl4r]{animation-delay:2s}.animation-delay-4000[data-astro-cid-kh7btl4r]{animation-delay:4s}\n"},{"type":"external","src":"/assets/about.Bp5kFPJU.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".prose[data-astro-cid-4sn4zg3r]{color:#374151;max-width:none}.prose[data-astro-cid-4sn4zg3r] h1[data-astro-cid-4sn4zg3r],.prose[data-astro-cid-4sn4zg3r] h2[data-astro-cid-4sn4zg3r],.prose[data-astro-cid-4sn4zg3r] h3[data-astro-cid-4sn4zg3r],.prose[data-astro-cid-4sn4zg3r] h4[data-astro-cid-4sn4zg3r]{color:#111827}.prose[data-astro-cid-4sn4zg3r] strong[data-astro-cid-4sn4zg3r]{color:#111827;font-weight:600}.prose[data-astro-cid-4sn4zg3r] code[data-astro-cid-4sn4zg3r]{color:#6366f1;background-color:#f1f5f9;padding:.125rem .25rem;border-radius:.25rem;font-size:.875em}.prose[data-astro-cid-4sn4zg3r] pre[data-astro-cid-4sn4zg3r]{background-color:#1f2937;color:#e5e7eb;border-radius:.75rem;padding:1.5rem;overflow-x:auto}.prose[data-astro-cid-4sn4zg3r] pre[data-astro-cid-4sn4zg3r] code[data-astro-cid-4sn4zg3r]{background-color:transparent;color:inherit;padding:0;border-radius:0;font-size:inherit}.lead[data-astro-cid-4sn4zg3r]{font-size:1.25rem;line-height:1.6}\n"},{"type":"external","src":"/assets/about.Bp5kFPJU.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".line-clamp-3[data-astro-cid-e3grugc2]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"},{"type":"external","src":"/assets/about.Bp5kFPJU.css"},{"type":"inline","content":"@keyframes pulse{0%,to{opacity:.2}50%{opacity:.4}}.animation-delay-2000[data-astro-cid-ijnerlr2]{animation-delay:2s}.animation-delay-4000[data-astro-cid-ijnerlr2]{animation-delay:4s}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/assets/about.Bp5kFPJU.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@keyframes pulse{0%,to{opacity:.2}50%{opacity:.4}}.animation-delay-2000[data-astro-cid-ucd2ps2b]{animation-delay:2s}.animation-delay-4000[data-astro-cid-ucd2ps2b]{animation-delay:4s}\n"},{"type":"external","src":"/assets/about.Bp5kFPJU.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/assets/about.Bp5kFPJU.css"},{"type":"inline","content":".line-clamp-3[data-astro-cid-e3grugc2]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n@keyframes pulse{0%,to{opacity:.2}50%{opacity:.4}}.animation-delay-2000[data-astro-cid-j7pv25f6]{animation-delay:2s}.animation-delay-4000[data-astro-cid-j7pv25f6]{animation-delay:4s}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/wamp64/www/astro-project/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/wamp64/www/astro-project/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["C:/wamp64/www/astro-project/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/wamp64/www/astro-project/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/wamp64/www/astro-project/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/wamp64/www/astro-project/src/pages/services.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","C:/wamp64/www/astro-project/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_up0HRjac.mjs","C:\\wamp64\\www\\astro-project\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\wamp64\\www\\astro-project\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_dAm2PPxG.mjs","\u0000@astrojs-manifest":"manifest_C2EOGk8J.mjs","C:/wamp64/www/astro-project/src/components/ContactForm.tsx":"assets/ContactForm.8BkpY0Vt.js","@astrojs/react/client.js":"assets/client.BPIbHqJh.js","C:/wamp64/www/astro-project/src/components/Header.astro?astro&type=script&index=0&lang.ts":"assets/Header.astro_astro_type_script_index_0_lang.Bee1Fw67.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/wamp64/www/astro-project/src/components/Header.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"mobile-menu-btn\"),e=document.getElementById(\"mobile-menu\");n&&e&&n.addEventListener(\"click\",()=>{e.classList.toggle(\"hidden\")});const i=e?.querySelectorAll(\"a\");i?.forEach(t=>{t.addEventListener(\"click\",()=>{e?.classList.add(\"hidden\")})});"]],"assets":["/assets/about.Bp5kFPJU.css","/favicon.svg","/assets/client.BPIbHqJh.js","/assets/ContactForm.8BkpY0Vt.js","/assets/index.BVOCwoKb.js","/images/accessibility-in-web.webp.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"jLZiQW0nHs4CHLCluk727Dq59+2SlnLxU9XU+asz53o="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
