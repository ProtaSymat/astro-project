import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_FARPgKn6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro();
const $$BlogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const {
    title,
    description,
    author,
    date,
    image,
    tags,
    slug,
    featured = false
  } = Astro2.props;
  const formattedDate = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  let imageModule;
  if (image) {
    try {
      imageModule = await import(
        /* @vite-ignore */
        image
      );
    } catch (error) {
      console.error("Erreur lors du chargement de l'image:", error);
    }
  }
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${featured ? "ring-2 ring-blue-500" : ""}`, "class")} data-astro-cid-e3grugc2> ${image && renderTemplate`<div class="aspect-video overflow-hidden" data-astro-cid-e3grugc2> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"${addAttribute(800, "width")}${addAttribute(450, "height")} data-astro-cid-e3grugc2> </div>`} <div class="p-6" data-astro-cid-e3grugc2> ${featured && renderTemplate`<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3" data-astro-cid-e3grugc2> <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-e3grugc2> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-e3grugc2></path> </svg>
Article vedette
</div>`} <div class="flex flex-wrap gap-2 mb-3" data-astro-cid-e3grugc2> ${tags.map((tag) => renderTemplate`<span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full" data-astro-cid-e3grugc2>
#${tag} </span>`)} </div> <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors" data-astro-cid-e3grugc2> <a${addAttribute(`/blog/${slug}`, "href")} class="hover:underline" data-astro-cid-e3grugc2> ${title} </a> </h3> <p class="text-gray-600 mb-4 leading-relaxed line-clamp-3" data-astro-cid-e3grugc2> ${description} </p> <div class="flex items-center justify-between" data-astro-cid-e3grugc2> <div class="flex items-center space-x-2 text-sm text-gray-500" data-astro-cid-e3grugc2> <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center" data-astro-cid-e3grugc2> <span class="text-white text-xs font-medium" data-astro-cid-e3grugc2> ${author.split(" ").map((n) => n[0]).join("")} </span> </div> <div data-astro-cid-e3grugc2> <p class="font-medium text-gray-700" data-astro-cid-e3grugc2>${author}</p> <p class="text-xs" data-astro-cid-e3grugc2>${formattedDate}</p> </div> </div> <a${addAttribute(`/blog/${slug}`, "href")} class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group" data-astro-cid-e3grugc2>
Lire
<svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-e3grugc2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-e3grugc2></path> </svg> </a> </div> </div> </article> `;
}, "C:/wamp64/www/astro-project/src/components/BlogCard.astro", void 0);

export { $$BlogCard as $ };
