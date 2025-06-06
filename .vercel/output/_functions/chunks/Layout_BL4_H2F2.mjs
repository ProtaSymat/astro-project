import { c as createComponent, m as maybeRenderHead, e as renderScript, r as renderTemplate, a as createAstro, b as addAttribute, f as renderHead, d as renderComponent, g as renderSlot } from './astro/server_FARPgKn6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-sm sticky top-0 z-50"> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <div class="flex-shrink-0"> <a href="/" class="flex items-center space-x-2"> <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> <span class="text-white font-bold text-sm">PP</span> </div> <span class="text-xl font-bold text-gray-900">PixelPerfect</span> </a> </div> <div class="hidden md:block"> <div class="ml-10 flex items-baseline space-x-8"> <a href="/" class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
Accueil
</a> <a href="/about" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
À propos
</a> <a href="/services" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
Services
</a> <a href="/blog" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
Blog
</a> <a href="/contact" class="bg-blue-600 hover:bg-black-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
Contact
</a> </div> </div> <div class="md:hidden"> <button id="mobile-menu-btn" class="text-gray-700 hover:text-blue-600 p-2"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <div id="mobile-menu" class="md:hidden hidden"> <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t"> <a href="/" class="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
Accueil
</a> <a href="/about" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
À propos
</a> <a href="/services" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
Services
</a> <a href="/blog" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
Blog
</a> <a href="/contact" class="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium text-center">
Contact
</a> </div> </div> </nav> </header> ${renderScript($$result, "C:/wamp64/www/astro-project/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/wamp64/www/astro-project/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <div class="col-span-1 md:col-span-2"> <div class="flex items-center space-x-2 mb-4"> <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"> <span class="text-white font-bold text-sm">PP</span> </div> <span class="text-xl font-bold">Pixel Perfect</span> </div> <p class="text-gray-300 mb-4 max-w-md">
Nous créons des expériences web exceptionnelles qui allient design moderne et performance technique. 
          Votre vision, notre expertise.
</p> <div class="flex space-x-4"> <a href="#" class="text-gray-400 hover:text-white transition-colors"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path> </svg> </a> <a href="#" class="text-gray-400 hover:text-white transition-colors"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> </div> </div> <div> <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navigation</h3> <ul class="space-y-2"> <li><a href="/" class="text-gray-300 hover:text-white transition-colors">Accueil</a></li> <li><a href="/about" class="text-gray-300 hover:text-white transition-colors">À propos</a></li> <li><a href="/services" class="text-gray-300 hover:text-white transition-colors">Services</a></li> <li><a href="/blog" class="text-gray-300 hover:text-white transition-colors">Blog</a></li> <li><a href="/contact" class="text-gray-300 hover:text-white transition-colors">Contact</a></li> </ul> </div> <div> <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3> <ul class="space-y-2 text-gray-300"> <li>mathys@pixelperfect.fr</li> <li>+33 1 23 45 67 89</li> <li>Rouen, France</li> </ul> </div> </div> <div class="border-t border-gray-700 mt-8 pt-8 text-center"> <p class="text-gray-400 text-sm">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Pixel Perfect. Tous droits réservés. Ceci est un exercice merci ne pas prendre en compte les informations de ce site au sérieux
</p> </div> </div> </footer>`;
}, "C:/wamp64/www/astro-project/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "PixelPerfect - Agence web sp\xE9cialis\xE9e en cr\xE9ation de sites et applications web modernes" } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-gray-50 font-sans"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/wamp64/www/astro-project/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
