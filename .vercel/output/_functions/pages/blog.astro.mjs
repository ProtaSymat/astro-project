import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_FARPgKn6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BL4_H2F2.mjs';
import { $ as $$BlogCard } from '../chunks/BlogCard_XIQNLL80.mjs';
import { g as getCollection } from '../chunks/_astro_content_zQ4DtZXm.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: {
      slug: entry.slug
    },
    props: {
      entry
    }
  }));
}
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const posts = allPosts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const featuredPosts = posts.filter((post) => post.data.featured);
  posts.filter((post) => !post.data.featured);
  const categories = [
    { name: "Tous", count: posts.length, active: true },
    { name: "D\xE9veloppement", count: posts.filter((p) => p.data.tags?.includes("d\xE9veloppement")).length },
    { name: "Design", count: posts.filter((p) => p.data.tags?.includes("design")).length },
    { name: "SEO", count: posts.filter((p) => p.data.tags?.includes("seo")).length },
    { name: "Performance", count: posts.filter((p) => p.data.tags?.includes("performance")).length }
  ];
  const stats = [
    { number: posts.length + "+", label: "Articles publi\xE9s" },
    { number: "50K+", label: "Lectures mensuelles" },
    { number: "500+", label: "Abonn\xE9s newsletter" },
    { number: "95%", label: "Satisfaction lecteurs" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - PixelPerfect | Articles & Conseils Web", "data-astro-cid-ijnerlr2": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden" data-astro-cid-ijnerlr2> <div class="absolute inset-0 bg-black opacity-20" data-astro-cid-ijnerlr2></div> <div class="absolute inset-0" data-astro-cid-ijnerlr2> <div class="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" data-astro-cid-ijnerlr2></div> <div class="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" data-astro-cid-ijnerlr2></div> <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" data-astro-cid-ijnerlr2></div> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28" data-astro-cid-ijnerlr2> <div class="text-center" data-astro-cid-ijnerlr2> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-astro-cid-ijnerlr2>
Notre
<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-astro-cid-ijnerlr2>
Blog
</span> </h1> <p class="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed" data-astro-cid-ijnerlr2>
Découvrez nos conseils d'experts, tutoriels et analyses sur le développement web, 
          le design et les dernières tendances digitales.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-astro-cid-ijnerlr2> <a href="#newsletter" class="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1" data-astro-cid-ijnerlr2>
S'abonner à la newsletter
</a> <a href="#articles" class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all text-lg" data-astro-cid-ijnerlr2>
Lire les articles
</a> </div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto" data-astro-cid-ijnerlr2> ${stats.map((stat) => renderTemplate`<div class="text-center" data-astro-cid-ijnerlr2> <div class="text-3xl lg:text-4xl font-bold text-white mb-2" data-astro-cid-ijnerlr2>${stat.number}</div> <div class="text-blue-200 text-sm lg:text-base" data-astro-cid-ijnerlr2>${stat.label}</div> </div>`)} </div> </div> </div> </section> ${featuredPosts.length > 0 && renderTemplate`<section class="py-16 lg:py-24 bg-gray-50" data-astro-cid-ijnerlr2> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ijnerlr2> <div class="text-center mb-16" data-astro-cid-ijnerlr2> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-ijnerlr2>
Articles à la Une
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-ijnerlr2>
Nos articles les plus populaires et nos dernières publications sélectionnées pour vous.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-ijnerlr2> ${featuredPosts.slice(0, 3).map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.data.title, "description": post.data.description, "author": post.data.author, "date": post.data.date, "image": post.data.image, "tags": post.data.tags, "slug": post.slug, "featured": post.data.featured, "data-astro-cid-ijnerlr2": true })}`)} </div> </div> </section>`}<section class="py-8 bg-white border-b border-gray-200" data-astro-cid-ijnerlr2> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ijnerlr2> <div class="flex flex-wrap gap-4 justify-center" data-astro-cid-ijnerlr2> ${categories.map((category) => renderTemplate`<button${addAttribute(`px-6 py-3 rounded-full font-medium transition-all ${category.active ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, "class")} data-astro-cid-ijnerlr2> ${category.name} <span class="ml-2 text-sm opacity-75" data-astro-cid-ijnerlr2>(${category.count})</span> </button>`)} </div> </div> </section> <section id="articles" class="py-16 lg:py-24" data-astro-cid-ijnerlr2> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ijnerlr2> <div class="text-center mb-16" data-astro-cid-ijnerlr2> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-ijnerlr2>
Tous nos Articles
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-ijnerlr2>
Explorez notre collection complète d'articles techniques, conseils pratiques et analyses approfondies.
</p> </div> ${posts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-ijnerlr2> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.data.title, "description": post.data.description, "author": post.data.author, "date": post.data.date, "image": post.data.image, "tags": post.data.tags, "slug": post.slug, "featured": post.data.featured, "data-astro-cid-ijnerlr2": true })}`)} </div>` : renderTemplate`<div class="text-center py-16" data-astro-cid-ijnerlr2> <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6" data-astro-cid-ijnerlr2> <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ijnerlr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" data-astro-cid-ijnerlr2></path> </svg> </div> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-ijnerlr2>Aucun article pour le moment</h3> <p class="text-gray-600 mb-8" data-astro-cid-ijnerlr2>Nos premiers articles arrivent bientôt ! En attendant, abonnez-vous à notre newsletter.</p> <a href="#newsletter" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors" data-astro-cid-ijnerlr2>
S'abonner à la newsletter
</a> </div>`}  ${posts.length > 9 && renderTemplate`<div class="text-center mt-12" data-astro-cid-ijnerlr2> <button class="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-medium transition-colors" data-astro-cid-ijnerlr2>
Charger plus d'articles
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ijnerlr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-ijnerlr2></path> </svg> </button> </div>`} </div> </section> <section id="newsletter" class="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600" data-astro-cid-ijnerlr2> <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" data-astro-cid-ijnerlr2> <div class="mb-8" data-astro-cid-ijnerlr2> <div class="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6" data-astro-cid-ijnerlr2> <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ijnerlr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-ijnerlr2></path> </svg> </div> <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4" data-astro-cid-ijnerlr2>
Restez informé des dernières tendances
</h2> <p class="text-xl text-blue-100 mb-8 leading-relaxed" data-astro-cid-ijnerlr2>
Recevez nos meilleurs articles, tutoriels et conseils d'experts directement dans votre boîte mail. 
          Une newsletter par semaine, désabonnement en un clic.
</p> </div> <form class="max-w-md mx-auto" data-astro-cid-ijnerlr2> <div class="flex flex-col sm:flex-row gap-4" data-astro-cid-ijnerlr2> <input type="email" placeholder="votre@email.com" class="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50" required data-astro-cid-ijnerlr2> <button type="submit" class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap" data-astro-cid-ijnerlr2>
S'abonner
</button> </div> <p class="text-blue-200 text-sm mt-4" data-astro-cid-ijnerlr2>
En vous abonnant, vous acceptez de recevoir nos emails et pouvez vous désabonner à tout moment.
</p> </form> </div> </section> <section class="py-16 lg:py-24 bg-gray-50" data-astro-cid-ijnerlr2> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ijnerlr2> <div class="text-center mb-16" data-astro-cid-ijnerlr2> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-ijnerlr2>
Nos Thématiques
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-ijnerlr2>
Découvrez nos différents sujets d'expertise et plongez dans les domaines qui vous intéressent le plus.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-ijnerlr2> <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer" data-astro-cid-ijnerlr2> <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" data-astro-cid-ijnerlr2> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ijnerlr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" data-astro-cid-ijnerlr2></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3" data-astro-cid-ijnerlr2>Développement Web</h3> <p class="text-gray-600 mb-4" data-astro-cid-ijnerlr2>Techniques avancées, frameworks modernes et bonnes pratiques de développement.</p> <div class="text-blue-600 font-medium" data-astro-cid-ijnerlr2>12 articles →</div> </div> <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer" data-astro-cid-ijnerlr2> <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" data-astro-cid-ijnerlr2> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ijnerlr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" data-astro-cid-ijnerlr2></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3" data-astro-cid-ijnerlr2>UI/UX Design</h3> <p class="text-gray-600 mb-4" data-astro-cid-ijnerlr2>Principes de design, expérience utilisateur et tendances visuelles actuelles.</p> <div class="text-purple-600 font-medium" data-astro-cid-ijnerlr2>8 articles →</div> </div> <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer" data-astro-cid-ijnerlr2> <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" data-astro-cid-ijnerlr2> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ijnerlr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-ijnerlr2></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3" data-astro-cid-ijnerlr2>Performance & SEO</h3> <p class="text-gray-600 mb-4" data-astro-cid-ijnerlr2>Optimisation des performances, référencement naturel et techniques d'amélioration.</p> <div class="text-green-600 font-medium" data-astro-cid-ijnerlr2>6 articles →</div> </div> <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group cursor-pointer" data-astro-cid-ijnerlr2> <div class="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" data-astro-cid-ijnerlr2> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ijnerlr2> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-astro-cid-ijnerlr2></path> </svg> </div> <h3 class="text-xl font-bold text-gray-900 mb-3" data-astro-cid-ijnerlr2>Innovation & Veille</h3> <p class="text-gray-600 mb-4" data-astro-cid-ijnerlr2>Nouvelles technologies, outils émergents et tendances du marché digital.</p> <div class="text-orange-600 font-medium" data-astro-cid-ijnerlr2>4 articles →</div> </div> </div> </div> </section> ` })} `;
}, "C:/wamp64/www/astro-project/src/pages/blog.astro", void 0);

const $$file = "C:/wamp64/www/astro-project/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
