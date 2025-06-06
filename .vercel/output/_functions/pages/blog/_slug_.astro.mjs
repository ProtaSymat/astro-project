import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_FARPgKn6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BL4_H2F2.mjs';
import { g as getCollection } from '../../chunks/_astro_content_zQ4DtZXm.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-4sn4zg3r> <header class="mb-12" data-astro-cid-4sn4zg3r> <div class="mb-6" data-astro-cid-4sn4zg3r> ${entry.data.tags && renderTemplate`<div class="flex flex-wrap gap-2 mb-4" data-astro-cid-4sn4zg3r> ${entry.data.tags.map((tag) => renderTemplate`<span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full" data-astro-cid-4sn4zg3r> ${tag} </span>`)} </div>`} ${entry.data.featured && renderTemplate`<div class="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full mb-4" data-astro-cid-4sn4zg3r> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4sn4zg3r> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-4sn4zg3r></path> </svg>
Article à la Une
</div>`} </div> <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6" data-astro-cid-4sn4zg3r> ${entry.data.title} </h1> <p class="text-xl text-gray-600 mb-8 leading-relaxed" data-astro-cid-4sn4zg3r> ${entry.data.description} </p> <div class="flex items-center space-x-6 text-gray-500 mb-8" data-astro-cid-4sn4zg3r> <div class="flex items-center" data-astro-cid-4sn4zg3r> <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3" data-astro-cid-4sn4zg3r> <span class="text-white font-semibold text-sm" data-astro-cid-4sn4zg3r> ${entry.data.author ? entry.data.author.charAt(0) : "A"} </span> </div> <div data-astro-cid-4sn4zg3r> <p class="font-medium text-gray-900" data-astro-cid-4sn4zg3r>${entry.data.author}</p> <p class="text-sm text-gray-500" data-astro-cid-4sn4zg3r>Auteur</p> </div> </div> <div class="flex items-center" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-4sn4zg3r></path> </svg> <time${addAttribute(entry.data.date, "datetime")} data-astro-cid-4sn4zg3r> ${new Date(entry.data.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> </div> ${entry.data.image && renderTemplate`<div class="mb-12" data-astro-cid-4sn4zg3r> <img${addAttribute(entry.data.image, "src")}${addAttribute(entry.data.title, "alt")} class="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-xl" data-astro-cid-4sn4zg3r> </div>`} </header> <div class="prose prose-lg prose-blue max-w-none" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-4sn4zg3r": true })} </div> <footer class="mt-16 pt-8 border-t border-gray-200" data-astro-cid-4sn4zg3r> <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0" data-astro-cid-4sn4zg3r> <div class="flex items-center space-x-4" data-astro-cid-4sn4zg3r> <span class="text-gray-600" data-astro-cid-4sn4zg3r>Partager cet article :</span> <div class="flex space-x-3" data-astro-cid-4sn4zg3r> <a href="#" class="text-blue-600 hover:text-blue-700 transition-colors" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" data-astro-cid-4sn4zg3r></path> </svg> </a> <a href="#" class="text-blue-600 hover:text-blue-700 transition-colors" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-4sn4zg3r></path> </svg> </a> <a href="#" class="text-green-600 hover:text-green-700 transition-colors" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" data-astro-cid-4sn4zg3r></path> </svg> </a> </div> </div> <div class="text-sm text-gray-500" data-astro-cid-4sn4zg3r> <time${addAttribute(entry.data.date, "datetime")} data-astro-cid-4sn4zg3r>
Publié le ${new Date(entry.data.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> </div> </div> </footer> </article> ` })} `;
}, "C:/wamp64/www/astro-project/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/wamp64/www/astro-project/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
