import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_FARPgKn6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BL4_H2F2.mjs';
import 'clsx';
import { $ as $$BlogCard } from '../chunks/BlogCard_XIQNLL80.mjs';
import { g as getCollection } from '../chunks/_astro_content_zQ4DtZXm.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ServiceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const {
    title,
    description,
    icon,
    features,
    gradient = "from-blue-600 to-purple-600"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group"> <div${addAttribute(`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`, "class")}> <div class="text-white text-2xl">${unescapeHTML(icon)}</div> </div> <h3 class="text-xl font-bold text-gray-900 mb-3">${title}</h3> <p class="text-gray-600 mb-4 leading-relaxed">${description}</p> <ul class="space-y-2"> ${features.map((feature) => renderTemplate`<li class="flex items-center text-sm text-gray-700"> <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${feature} </li>`)} </ul> <div class="mt-6"> <a href="/contact" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
En savoir plus
<svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </div>`;
}, "C:/wamp64/www/astro-project/src/components/ServiceCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getCollection("blog");
  const featuredPosts = blogPosts.filter((post) => post.data.featured).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()).slice(0, 3);
  const services = [
    {
      title: "Sites Web Vitrine",
      description: "Des sites web \xE9l\xE9gants et performants qui refl\xE8tent parfaitement votre image de marque et convertissent vos visiteurs en clients.",
      icon: "\u{1F310}",
      features: [
        "Design responsive et moderne",
        "Optimisation SEO avanc\xE9e",
        "Performance et vitesse optimales",
        "Int\xE9gration CMS personnalis\xE9e"
      ],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Applications Web",
      description: "Applications web sur mesure alliant performance technique et exp\xE9rience utilisateur exceptionnelle pour digitaliser vos processus.",
      icon: "\u26A1",
      features: [
        "Architecture scalable",
        "Interface utilisateur intuitive",
        "API REST/GraphQL",
        "Int\xE9grations tierces avanc\xE9es"
      ],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "E-commerce",
      description: "Boutiques en ligne compl\xE8tes avec gestion des stocks, paiements s\xE9curis\xE9s et analytics pour maximiser vos ventes.",
      icon: "\u{1F6D2}",
      features: [
        "Gestion compl\xE8te des produits",
        "Paiements s\xE9curis\xE9s",
        "Analytics et reporting",
        "Marketing automation"
      ],
      gradient: "from-green-600 to-emerald-600"
    }
  ];
  const stats = [
    { number: "150+", label: "Projets r\xE9alis\xE9s" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "5 ans", label: "D'exp\xE9rience" },
    { number: "24/7", label: "Support technique" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "PixelPerfect - Agence Web Moderne & Performante", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-black opacity-20" data-astro-cid-j7pv25f6></div> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <div class="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" data-astro-cid-j7pv25f6></div> <div class="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" data-astro-cid-j7pv25f6></div> <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" data-astro-cid-j7pv25f6></div> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32" data-astro-cid-j7pv25f6> <div class="text-center" data-astro-cid-j7pv25f6> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-astro-cid-j7pv25f6>
Créons ensemble votre
<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-astro-cid-j7pv25f6>
présence digitale
</span> </h1> <p class="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed" data-astro-cid-j7pv25f6>
Agence web spécialisée dans la création de sites et applications modernes, performants et sur mesure. 
          Transformez vos idées en expériences digitales exceptionnelles.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-astro-cid-j7pv25f6> <a href="/contact" class="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1" data-astro-cid-j7pv25f6>
Démarrer un projet
</a> <a href="/services" class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all text-lg" data-astro-cid-j7pv25f6>
Découvrir nos services
</a> </div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto" data-astro-cid-j7pv25f6> ${stats.map((stat) => renderTemplate`<div class="text-center" data-astro-cid-j7pv25f6> <div class="text-3xl lg:text-4xl font-bold text-white mb-2" data-astro-cid-j7pv25f6>${stat.number}</div> <div class="text-blue-200 text-sm lg:text-base" data-astro-cid-j7pv25f6>${stat.label}</div> </div>`)} </div> </div> </div> </section> <section class="py-16 lg:py-24 bg-gray-50" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="text-center mb-16" data-astro-cid-j7pv25f6> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-j7pv25f6>
Nos Services
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-j7pv25f6>
Des solutions complètes pour tous vos besoins digitaux, de la conception à la maintenance.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-j7pv25f6> ${services.map((service) => renderTemplate`${renderComponent($$result2, "ServiceCard", $$ServiceCard, { ...service, "data-astro-cid-j7pv25f6": true })}`)} </div> <div class="text-center mt-12" data-astro-cid-j7pv25f6> <a href="/services" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors" data-astro-cid-j7pv25f6>
Voir tous nos services
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> </section> <section class="py-16 lg:py-24" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-astro-cid-j7pv25f6>
Pourquoi choisir PixelPerfect ?
</h2> <p class="text-lg text-gray-600 mb-6 leading-relaxed" data-astro-cid-j7pv25f6>
Depuis 5 ans, nous accompagnons les entreprises dans leur transformation digitale. 
            Notre équipe d'experts combine créativité et expertise technique pour créer des solutions 
            qui dépassent vos attentes.
</p> <div class="space-y-4 mb-8" data-astro-cid-j7pv25f6> <div class="flex items-start space-x-3" data-astro-cid-j7pv25f6> <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" data-astro-cid-j7pv25f6> <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> </div> <div data-astro-cid-j7pv25f6> <h4 class="font-semibold text-gray-900" data-astro-cid-j7pv25f6>Expertise technique</h4> <p class="text-gray-600" data-astro-cid-j7pv25f6>Technologies modernes et bonnes pratiques</p> </div> </div> <div class="flex items-start space-x-3" data-astro-cid-j7pv25f6> <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" data-astro-cid-j7pv25f6> <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> </div> <div data-astro-cid-j7pv25f6> <h4 class="font-semibold text-gray-900" data-astro-cid-j7pv25f6>Accompagnement personnalisé</h4> <p class="text-gray-600" data-astro-cid-j7pv25f6>Suivi dédié de A à Z sur chaque projet</p> </div> </div> <div class="flex items-start space-x-3" data-astro-cid-j7pv25f6> <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" data-astro-cid-j7pv25f6> <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-j7pv25f6></path> </svg> </div> <div data-astro-cid-j7pv25f6> <h4 class="font-semibold text-gray-900" data-astro-cid-j7pv25f6>Performance garantie</h4> <p class="text-gray-600" data-astro-cid-j7pv25f6>Sites rapides et optimisés SEO</p> </div> </div> </div> <a href="/about" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium" data-astro-cid-j7pv25f6>
En savoir plus sur notre équipe
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </a> </div> <div class="relative" data-astro-cid-j7pv25f6> <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Équipe de développeurs collaborant sur un projet" class="rounded-lg shadow-lg" loading="lazy" data-astro-cid-j7pv25f6> <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg" data-astro-cid-j7pv25f6> <div class="flex items-center space-x-3" data-astro-cid-j7pv25f6> <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center" data-astro-cid-j7pv25f6> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-astro-cid-j7pv25f6></path> </svg> </div> <div data-astro-cid-j7pv25f6> <div class="font-bold text-gray-900" data-astro-cid-j7pv25f6>Livraison rapide</div> <div class="text-gray-600 text-sm" data-astro-cid-j7pv25f6>Projets livrés en temps record</div> </div> </div> </div> </div> </div> </div> </section> ${featuredPosts.length > 0 && renderTemplate`<section class="py-16 lg:py-24 bg-gray-50" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="text-center mb-16" data-astro-cid-j7pv25f6> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-j7pv25f6>
Articles Récents
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-j7pv25f6>
Découvrez nos derniers articles sur les tendances du développement web et nos retours d'expérience.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-j7pv25f6> ${featuredPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "title": post.data.title, "description": post.data.description, "author": post.data.author, "date": post.data.date, "image": post.data.image, "tags": post.data.tags, "slug": post.slug, "featured": post.data.featured, "data-astro-cid-j7pv25f6": true })}`)} </div> <div class="text-center mt-12" data-astro-cid-j7pv25f6> <a href="/blog" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors" data-astro-cid-j7pv25f6>
Voir tous les articles
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> </section>`}<section class="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600" data-astro-cid-j7pv25f6> <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6" data-astro-cid-j7pv25f6>
Prêt à donner vie à votre projet ?
</h2> <p class="text-xl text-blue-100 mb-8 leading-relaxed" data-astro-cid-j7pv25f6>
Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé. 
        Notre équipe est là pour transformer vos idées en réalité digitale.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-j7pv25f6> <a href="/contact" class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg" data-astro-cid-j7pv25f6>
Demander un devis
</a> <a href="tel:+33123456789" class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg" data-astro-cid-j7pv25f6>
Nous appeler
</a> </div> </div> </section> ` })} `;
}, "C:/wamp64/www/astro-project/src/pages/index.astro", void 0);

const $$file = "C:/wamp64/www/astro-project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
