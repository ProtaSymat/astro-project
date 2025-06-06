import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_FARPgKn6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BL4_H2F2.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { number: "5+", label: "Ann\xE9es d'exp\xE9rience" },
    { number: "150+", label: "Projets r\xE9alis\xE9s" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "15+", label: "Technologies ma\xEEtris\xE9es" }
  ];
  const team = [
    {
      name: "Mathys Girard",
      role: "Fondateur & D\xE9veloppeur Full-Stack",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Passionn\xE9 par les technologies web depuis plus de 5 ans, Mathys allie expertise technique et vision cr\xE9ative pour cr\xE9er des solutions digitales innovantes.",
      skills: ["React", "Node.js", "TypeScript", "Design System"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Designer UX/UI",
      image: "https://images.unsplash.com/photo-1494790108755-2616b6cc2a89?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Sp\xE9cialis\xE9e dans l'exp\xE9rience utilisateur, Sarah transforme les id\xE9es complexes en interfaces intuitives et esth\xE9tiques.",
      skills: ["Figma", "Adobe Suite", "Prototyping", "User Research"],
      social: {
        linkedin: "#",
        dribbble: "#",
        behance: "#"
      }
    },
    {
      name: "Alex Martin",
      role: "D\xE9veloppeur Front-End",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Expert en d\xE9veloppement front-end moderne, Alex ma\xEEtrise les derni\xE8res technologies pour cr\xE9er des interfaces performantes.",
      skills: ["Vue.js", "Tailwind CSS", "JavaScript", "Animation"],
      social: {
        linkedin: "#",
        github: "#",
        codepen: "#"
      }
    }
  ];
  const values = [
    {
      icon: "\u{1F3AF}",
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en portant une attention particuli\xE8re aux d\xE9tails et \xE0 la qualit\xE9 du code.",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: "\u{1F680}",
      title: "Innovation",
      description: "Nous restons \xE0 la pointe des technologies \xE9mergentes pour offrir des solutions modernes et performantes.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: "\u{1F91D}",
      title: "Collaboration",
      description: "Nous croyons en la collaboration \xE9troite avec nos clients pour cr\xE9er des solutions qui d\xE9passent leurs attentes.",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      icon: "\u26A1",
      title: "Performance",
      description: "Chaque site que nous cr\xE9ons est optimis\xE9 pour la vitesse, l'accessibilit\xE9 et l'exp\xE9rience utilisateur.",
      gradient: "from-orange-600 to-red-600"
    }
  ];
  const timeline = [
    {
      year: "2019",
      title: "Cr\xE9ation de PixelPerfect",
      description: "Mathys fonde l'agence avec une vision claire : cr\xE9er des exp\xE9riences web exceptionnelles."
    },
    {
      year: "2020",
      title: "Premiers grands projets",
      description: "D\xE9veloppement de notre premi\xE8re application web complexe pour une startup parisienne."
    },
    {
      year: "2021",
      title: "Expansion de l'\xE9quipe",
      description: "Sarah et Alex rejoignent l'\xE9quipe, apportant leurs expertises en design et d\xE9veloppement."
    },
    {
      year: "2022",
      title: "100 projets r\xE9alis\xE9s",
      description: "Franchissement du cap des 100 projets avec une satisfaction client de 98%."
    },
    {
      year: "2023",
      title: "Sp\xE9cialisation E-commerce",
      description: "D\xE9veloppement d'une expertise pointue dans les solutions e-commerce sur mesure."
    },
    {
      year: "2024",
      title: "Innovation & IA",
      description: "Int\xE9gration de l'intelligence artificielle dans nos processus de d\xE9veloppement."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 propos - PixelPerfect | Notre Histoire & \xC9quipe", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden" data-astro-cid-kh7btl4r> <div class="absolute inset-0 bg-black opacity-20" data-astro-cid-kh7btl4r></div> <div class="absolute inset-0" data-astro-cid-kh7btl4r> <div class="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" data-astro-cid-kh7btl4r></div> <div class="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" data-astro-cid-kh7btl4r></div> <div class="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" data-astro-cid-kh7btl4r></div> </div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28" data-astro-cid-kh7btl4r> <div class="text-center" data-astro-cid-kh7btl4r> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-astro-cid-kh7btl4r>
À propos de
<span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-astro-cid-kh7btl4r>
PixelPerfect
</span> </h1> <p class="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed" data-astro-cid-kh7btl4r>
Une équipe passionnée qui transforme vos idées en expériences digitales exceptionnelles. 
          Découvrez notre histoire, nos valeurs et les personnes qui font la différence.
</p> <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto" data-astro-cid-kh7btl4r> ${stats.map((stat) => renderTemplate`<div class="text-center" data-astro-cid-kh7btl4r> <div class="text-3xl lg:text-4xl font-bold text-white mb-2" data-astro-cid-kh7btl4r>${stat.number}</div> <div class="text-blue-200 text-sm lg:text-base" data-astro-cid-kh7btl4r>${stat.label}</div> </div>`)} </div> </div> </div> </section> <section class="py-16 lg:py-24 bg-gray-50" data-astro-cid-kh7btl4r> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-astro-cid-kh7btl4r> <div data-astro-cid-kh7btl4r> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" data-astro-cid-kh7btl4r>
Notre Mission
</h2> <p class="text-lg text-gray-600 mb-6 leading-relaxed" data-astro-cid-kh7btl4r>
Chez PixelPerfect, nous croyons que chaque entreprise mérite une présence digitale qui lui ressemble. 
            Notre mission est de créer des solutions web innovantes qui allient performance technique, 
            design moderne et expérience utilisateur exceptionnelle.
</p> <p class="text-lg text-gray-600 mb-8 leading-relaxed" data-astro-cid-kh7btl4r>
Nous accompagnons nos clients dans leur transformation digitale en proposant des solutions 
            sur mesure qui répondent précisément à leurs besoins et dépassent leurs attentes.
</p> <div class="flex flex-col sm:flex-row gap-4" data-astro-cid-kh7btl4r> <a href="/services" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center" data-astro-cid-kh7btl4r>
Découvrir nos services
</a> <a href="/contact" class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors text-center" data-astro-cid-kh7btl4r>
Nous contacter
</a> </div> </div> <div class="relative" data-astro-cid-kh7btl4r> <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Équipe PixelPerfect au travail" class="rounded-lg shadow-lg" loading="lazy" data-astro-cid-kh7btl4r> <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg" data-astro-cid-kh7btl4r> <div class="flex items-center space-x-3" data-astro-cid-kh7btl4r> <div class="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center" data-astro-cid-kh7btl4r> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-kh7btl4r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-kh7btl4r></path> </svg> </div> <div data-astro-cid-kh7btl4r> <div class="font-bold text-gray-900" data-astro-cid-kh7btl4r>Qualité garantie</div> <div class="text-gray-600 text-sm" data-astro-cid-kh7btl4r>Satisfaction client 98%</div> </div> </div> </div> </div> </div> </div> </section> <section class="py-16 lg:py-24" data-astro-cid-kh7btl4r> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <div class="text-center mb-16" data-astro-cid-kh7btl4r> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-kh7btl4r>
Nos Valeurs
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-kh7btl4r>
Les principes qui guident notre travail et définissent notre approche avec chaque client et projet.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-kh7btl4r> ${values.map((value, index) => renderTemplate`<div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group" data-astro-cid-kh7btl4r> <div${addAttribute(`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`, "class")} data-astro-cid-kh7btl4r> <span class="text-2xl" data-astro-cid-kh7btl4r>${value.icon}</span> </div> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-kh7btl4r>${value.title}</h3> <p class="text-gray-600 leading-relaxed" data-astro-cid-kh7btl4r>${value.description}</p> </div>`)} </div> </div> </section> <section class="py-16 lg:py-24 bg-gray-50" data-astro-cid-kh7btl4r> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <div class="text-center mb-16" data-astro-cid-kh7btl4r> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-kh7btl4r>
Notre Équipe
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-kh7btl4r>
Rencontrez les experts passionnés qui donnent vie à vos projets digitaux.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-kh7btl4r> ${team.map((member) => renderTemplate`<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group" data-astro-cid-kh7btl4r> <div class="relative overflow-hidden" data-astro-cid-kh7btl4r> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" data-astro-cid-kh7btl4r> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-kh7btl4r></div> </div> <div class="p-6" data-astro-cid-kh7btl4r> <h3 class="text-xl font-bold text-gray-900 mb-2" data-astro-cid-kh7btl4r>${member.name}</h3> <p class="text-blue-600 font-medium mb-3" data-astro-cid-kh7btl4r>${member.role}</p> <p class="text-gray-600 text-sm mb-4 leading-relaxed" data-astro-cid-kh7btl4r>${member.bio}</p> <div class="flex flex-wrap gap-2 mb-4" data-astro-cid-kh7btl4r> ${member.skills.map((skill) => renderTemplate`<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium" data-astro-cid-kh7btl4r> ${skill} </span>`)} </div> <div class="flex space-x-3" data-astro-cid-kh7btl4r> ${Object.entries(member.social).map(([platform, url]) => renderTemplate`<a${addAttribute(url, "href")} class="w-8 h-8 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-colors" data-astro-cid-kh7btl4r> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-kh7btl4r> <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" data-astro-cid-kh7btl4r></path> </svg> </a>`)} </div> </div> </div>`)} </div> </div> </section> <section class="py-16 lg:py-24" data-astro-cid-kh7btl4r> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <div class="text-center mb-16" data-astro-cid-kh7btl4r> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4" data-astro-cid-kh7btl4r>
Notre Histoire
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-kh7btl4r>
Découvrez les étapes clés qui ont façonné PixelPerfect et notre évolution au fil des années.
</p> </div> <div class="relative" data-astro-cid-kh7btl4r> <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600" data-astro-cid-kh7btl4r></div> <div class="space-y-12" data-astro-cid-kh7btl4r> ${timeline.map((item, index) => renderTemplate`<div class="relative flex items-start" data-astro-cid-kh7btl4r> <div class="absolute left-6 w-4 h-4 bg-white border-4 border-blue-600 rounded-full" data-astro-cid-kh7btl4r></div> <div class="ml-16 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow" data-astro-cid-kh7btl4r> <div class="flex items-center mb-3" data-astro-cid-kh7btl4r> <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold" data-astro-cid-kh7btl4r> ${item.year} </span> </div> <h3 class="text-xl font-bold text-gray-900 mb-2" data-astro-cid-kh7btl4r>${item.title}</h3> <p class="text-gray-600" data-astro-cid-kh7btl4r>${item.description}</p> </div> </div>`)} </div> </div> </div> </section> <section class="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600" data-astro-cid-kh7btl4r> <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8" data-astro-cid-kh7btl4r> <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6" data-astro-cid-kh7btl4r>
Prêt à travailler avec nous ?
</h2> <p class="text-xl text-blue-100 mb-8 leading-relaxed" data-astro-cid-kh7btl4r>
Rejoignez les 150+ entreprises qui nous font confiance pour leur présence digitale. 
        Discutons de votre projet et créons ensemble quelque chose d'exceptionnel.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-kh7btl4r> <a href="/contact" class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg" data-astro-cid-kh7btl4r>
Démarrer un projet
</a> <a href="/services" class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg" data-astro-cid-kh7btl4r>
Voir nos services
</a> </div> </div> </section> ` })} `;
}, "C:/wamp64/www/astro-project/src/pages/about.astro", void 0);

const $$file = "C:/wamp64/www/astro-project/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
