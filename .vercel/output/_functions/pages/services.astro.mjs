import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_FARPgKn6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BL4_H2F2.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const mainServices = [
    {
      title: "Sites Web Vitrine",
      description: "Des sites web \xE9l\xE9gants et performants qui refl\xE8tent parfaitement votre image de marque et convertissent vos visiteurs en clients.",
      icon: "\u{1F310}",
      features: [
        "Design responsive et moderne",
        "Optimisation SEO avanc\xE9e",
        "Performance et vitesse optimales",
        "Int\xE9gration CMS personnalis\xE9e",
        "H\xE9bergement et maintenance",
        "Analytics et suivi des performances"
      ],
      gradient: "from-blue-600 to-cyan-600",
      price: "\xC0 partir de 2 500\u20AC",
      timeline: "2-4 semaines"
    },
    {
      title: "Applications Web",
      description: "Applications web sur mesure alliant performance technique et exp\xE9rience utilisateur exceptionnelle pour digitaliser vos processus.",
      icon: "\u26A1",
      features: [
        "Architecture scalable et moderne",
        "Interface utilisateur intuitive",
        "API REST/GraphQL",
        "Int\xE9grations tierces avanc\xE9es",
        "Authentification s\xE9curis\xE9e",
        "Tableau de bord administrateur"
      ],
      gradient: "from-purple-600 to-pink-600",
      price: "\xC0 partir de 5 000\u20AC",
      timeline: "4-8 semaines"
    },
    {
      title: "E-commerce",
      description: "Boutiques en ligne compl\xE8tes avec gestion des stocks, paiements s\xE9curis\xE9s et analytics pour maximiser vos ventes.",
      icon: "\u{1F6D2}",
      features: [
        "Gestion compl\xE8te des produits",
        "Paiements s\xE9curis\xE9s multi-devises",
        "Gestion des stocks automatis\xE9e",
        "Analytics et reporting avanc\xE9s",
        "Marketing automation",
        "Int\xE9gration ERP/CRM"
      ],
      gradient: "from-green-600 to-emerald-600",
      price: "\xC0 partir de 4 000\u20AC",
      timeline: "3-6 semaines"
    }
  ];
  const additionalServices = [
    {
      icon: "\u{1F3A8}",
      title: "UI/UX Design",
      description: "Conception d'interfaces utilisateur modernes et exp\xE9riences optimis\xE9es",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: "\u{1F4F1}",
      title: "Applications Mobiles",
      description: "Applications natives et hybrides pour iOS et Android",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: "\u{1F527}",
      title: "Maintenance & Support",
      description: "Support technique continu et mises \xE0 jour r\xE9guli\xE8res",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "\u{1F4C8}",
      title: "Consulting Digital",
      description: "Conseil strat\xE9gique pour votre transformation digitale",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: "\u26A1",
      title: "Optimisation Performance",
      description: "Am\xE9lioration des performances et de la vitesse de chargement",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "\u{1F512}",
      title: "S\xE9curit\xE9 Web",
      description: "Audit de s\xE9curit\xE9 et mise en place de protections avanc\xE9es",
      gradient: "from-gray-600 to-gray-800"
    }
  ];
  const process = [
    {
      step: "01",
      title: "D\xE9couverte & Analyse",
      description: "Nous analysons vos besoins, votre march\xE9 et vos objectifs pour d\xE9finir la strat\xE9gie optimale.",
      icon: "\u{1F50D}",
      duration: "1-2 jours"
    },
    {
      step: "02",
      title: "Conception & Design",
      description: "Cr\xE9ation des wireframes, maquettes et prototypes pour valider l'exp\xE9rience utilisateur.",
      icon: "\u{1F3A8}",
      duration: "3-5 jours"
    },
    {
      step: "03",
      title: "D\xE9veloppement",
      description: "D\xE9veloppement technique avec technologies modernes et bonnes pratiques de d\xE9veloppement.",
      icon: "\u26A1",
      duration: "2-6 semaines"
    },
    {
      step: "04",
      title: "Tests & Optimisation",
      description: "Tests complets, optimisation des performances et validation sur tous les appareils.",
      icon: "\u{1F9EA}",
      duration: "2-3 jours"
    },
    {
      step: "05",
      title: "Lancement & Suivi",
      description: "Mise en ligne, formation et suivi post-lancement pour assurer le succ\xE8s du projet.",
      icon: "\u{1F680}",
      duration: "1-2 jours"
    }
  ];
  const technologies = [
    { name: "React", logo: "\u269B\uFE0F", category: "Frontend" },
    { name: "Vue.js", logo: "\u{1F49A}", category: "Frontend" },
    { name: "Svelte", logo: "\u{1F9E1}", category: "Frontend" },
    { name: "Node.js", logo: "\u{1F49A}", category: "Backend" },
    { name: "Python", logo: "\u{1F40D}", category: "Backend" },
    { name: "TypeScript", logo: "\u{1F537}", category: "Language" },
    { name: "Tailwind CSS", logo: "\u{1F3A8}", category: "Styling" },
    { name: "PostgreSQL", logo: "\u{1F418}", category: "Database" },
    { name: "MongoDB", logo: "\u{1F343}", category: "Database" },
    { name: "AWS", logo: "\u2601\uFE0F", category: "Cloud" },
    { name: "Vercel", logo: "\u25B2", category: "Deployment" },
    { name: "Docker", logo: "\u{1F433}", category: "DevOps" }
  ];
  const stats = [
    { number: "3", label: "Services principaux" },
    { number: "50+", label: "Technologies ma\xEEtris\xE9es" },
    { number: "2-8", label: "Semaines de d\xE9veloppement" },
    { number: "24/7", label: "Support disponible" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services - PixelPerfect | Solutions Web Professionnelles", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden" data-astro-cid-ucd2ps2b> <div class="absolute inset-0 bg-black opacity-20" data-astro-cid-ucd2ps2b></div> <div class="absolute inset-0" data-astro-cid-ucd2ps2b> <div class="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" data-astro-cid-ucd2ps2b></div> <div class="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" data-astro-cid-ucd2ps2b></div> <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" data-astro-cid-ucd2ps2b></div> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28" data-astro-cid-ucd2ps2b> <div class="text-center" data-astro-cid-ucd2ps2b> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-astro-cid-ucd2ps2b>
Nos
<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-astro-cid-ucd2ps2b>
Services
</span> </h1> <p class="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed" data-astro-cid-ucd2ps2b>
Des solutions web complètes et sur mesure pour transformer votre présence digitale. 
          De la conception au déploiement, nous accompagnons vos projets avec expertise.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-astro-cid-ucd2ps2b> <a href="/contact" class="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1" data-astro-cid-ucd2ps2b>
Demander un devis
</a> <a href="#services" class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all text-lg" data-astro-cid-ucd2ps2b>
Découvrir nos services
</a> </div> <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto" data-astro-cid-ucd2ps2b> ${stats.map((stat) => renderTemplate`<div class="text-center" data-astro-cid-ucd2ps2b> <div class="text-3xl lg:text-4xl font-bold text-white mb-2" data-astro-cid-ucd2ps2b>${stat.number}</div> <div class="text-blue-200 text-sm lg:text-base" data-astro-cid-ucd2ps2b>${stat.label}</div> </div>`)} </div> </div> </div> </section> <section id="services" class="py-16 lg:py-24 bg-gray-50" data-astro-cid-ucd2ps2b> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ucd2ps2b> <div class="text-center mb-16" data-astro-cid-ucd2ps2b> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-ucd2ps2b>
Nos Services Principaux
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-ucd2ps2b>
Découvrez nos solutions complètes pour donner vie à vos projets digitaux
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-ucd2ps2b> ${mainServices.map((service) => renderTemplate`<div${addAttribute(`bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100`, "class")} data-astro-cid-ucd2ps2b> <div${addAttribute(`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`, "class")} data-astro-cid-ucd2ps2b></div> <div class="relative z-10" data-astro-cid-ucd2ps2b> <div class="flex items-center mb-6" data-astro-cid-ucd2ps2b> <div${addAttribute(`text-4xl mr-4 p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`, "class")} data-astro-cid-ucd2ps2b> ${service.icon} </div> <div data-astro-cid-ucd2ps2b> <h3 class="text-2xl font-bold text-gray-900 mb-2" data-astro-cid-ucd2ps2b>${service.title}</h3> <div class="flex items-center gap-4 text-sm text-gray-600" data-astro-cid-ucd2ps2b> <span class="font-semibold" data-astro-cid-ucd2ps2b>${service.price}</span> <span data-astro-cid-ucd2ps2b>•</span> <span data-astro-cid-ucd2ps2b>${service.timeline}</span> </div> </div> </div> <p class="text-gray-600 mb-6 leading-relaxed" data-astro-cid-ucd2ps2b> ${service.description} </p> <div class="mb-8" data-astro-cid-ucd2ps2b> <h4 class="font-semibold text-gray-900 mb-3" data-astro-cid-ucd2ps2b>Fonctionnalités incluses :</h4> <ul class="space-y-2" data-astro-cid-ucd2ps2b> ${service.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-600" data-astro-cid-ucd2ps2b> <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-ucd2ps2b> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-ucd2ps2b></path> </svg> ${feature} </li>`)} </ul> </div> <a href="/contact"${addAttribute(`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 group-hover:scale-105`, "class")} data-astro-cid-ucd2ps2b>
Découvrir ce service
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ucd2ps2b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-ucd2ps2b></path> </svg> </a> </div> </div>`)} </div> </div> </section> <section class="py-16 lg:py-24 bg-white" data-astro-cid-ucd2ps2b> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ucd2ps2b> <div class="text-center mb-16" data-astro-cid-ucd2ps2b> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-ucd2ps2b>
Services Complémentaires
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-ucd2ps2b>
Une gamme complète de services pour accompagner tous vos besoins digitaux
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-ucd2ps2b> ${additionalServices.map((service) => renderTemplate`<div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 group" data-astro-cid-ucd2ps2b> <div${addAttribute(`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-200`, "class")} data-astro-cid-ucd2ps2b> ${service.icon} </div> <h3 class="text-xl font-bold text-gray-900 mb-2" data-astro-cid-ucd2ps2b>${service.title}</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-ucd2ps2b>${service.description}</p> </div>`)} </div> </div> </section> <section class="py-16 lg:py-24 bg-gray-50" data-astro-cid-ucd2ps2b> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ucd2ps2b> <div class="text-center mb-16" data-astro-cid-ucd2ps2b> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-ucd2ps2b>
Notre Processus de Travail
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-ucd2ps2b>
Une méthodologie éprouvée pour garantir le succès de votre projet
</p> </div> <div class="relative" data-astro-cid-ucd2ps2b> <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" data-astro-cid-ucd2ps2b></div> <div class="space-y-12" data-astro-cid-ucd2ps2b> ${process.map((step, index) => renderTemplate`<div${addAttribute(`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`, "class")} data-astro-cid-ucd2ps2b> <div${addAttribute(`flex-1 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`, "class")} data-astro-cid-ucd2ps2b> <div class="bg-white rounded-xl shadow-lg p-8 relative" data-astro-cid-ucd2ps2b> <div class="flex items-center mb-4" data-astro-cid-ucd2ps2b> <div class="text-3xl mr-4" data-astro-cid-ucd2ps2b>${step.icon}</div> <div data-astro-cid-ucd2ps2b> <div class="text-sm font-semibold text-blue-600 mb-1" data-astro-cid-ucd2ps2b>Étape ${step.step}</div> <h3 class="text-2xl font-bold text-gray-900" data-astro-cid-ucd2ps2b>${step.title}</h3> </div> </div> <p class="text-gray-600 leading-relaxed mb-4" data-astro-cid-ucd2ps2b>${step.description}</p> <div class="flex items-center text-sm text-gray-500" data-astro-cid-ucd2ps2b> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ucd2ps2b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ucd2ps2b></path> </svg>
Durée : ${step.duration} </div> </div> </div> <div class="flex-shrink-0 my-8 lg:my-0" data-astro-cid-ucd2ps2b> <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg" data-astro-cid-ucd2ps2b> ${step.step} </div> </div> <div class="flex-1 hidden lg:block" data-astro-cid-ucd2ps2b></div> </div>`)} </div> </div> </div> </section> <section class="py-16 lg:py-24 bg-white" data-astro-cid-ucd2ps2b> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ucd2ps2b> <div class="text-center mb-16" data-astro-cid-ucd2ps2b> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-ucd2ps2b>
Technologies Utilisées
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-ucd2ps2b>
Nous utilisons les technologies les plus récentes et performantes pour vos projets
</p> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6" data-astro-cid-ucd2ps2b> ${technologies.map((tech) => renderTemplate`<div class="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-200 group" data-astro-cid-ucd2ps2b> <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200" data-astro-cid-ucd2ps2b> ${tech.logo} </div> <h3 class="font-semibold text-gray-900 mb-1" data-astro-cid-ucd2ps2b>${tech.name}</h3> <p class="text-sm text-gray-600" data-astro-cid-ucd2ps2b>${tech.category}</p> </div>`)} </div> </div> </section> <section class="py-16 lg:py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white" data-astro-cid-ucd2ps2b> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-astro-cid-ucd2ps2b> <h2 class="text-3xl lg:text-4xl font-bold mb-6" data-astro-cid-ucd2ps2b>
Prêt à Lancer Votre Projet ?
</h2> <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto" data-astro-cid-ucd2ps2b>
Parlons de votre projet et découvrons ensemble comment nous pouvons vous aider à atteindre vos objectifs digitaux.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-ucd2ps2b> <a href="/contact" class="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1" data-astro-cid-ucd2ps2b>
Demander un devis gratuit
</a> <a href="/portfolio" class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all text-lg" data-astro-cid-ucd2ps2b>
Voir nos réalisations
</a> </div> </div> </section> ` })} `;
}, "C:/wamp64/www/astro-project/src/pages/services.astro", void 0);

const $$file = "C:/wamp64/www/astro-project/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
