import { c as createComponent, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_FARPgKn6.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Check, Mail, Phone, MapPin, Clock, Code, Palette, ShoppingBag, BarChart3, Settings, Users } from 'lucide-react';
import { $ as $$Layout } from '../chunks/Layout_BL4_H2F2.mjs';
export { renderers } from '../renderers.mjs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const services = [
    { name: "Développement Web", icon: Code },
    { name: "Design UI/UX", icon: Palette },
    { name: "E-commerce", icon: ShoppingBag },
    { name: "SEO & Marketing", icon: BarChart3 },
    { name: "Maintenance", icon: Settings },
    { name: "Consulting", icon: Users }
  ];
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Envoyez-nous un message détaillé",
      contact: "contact@pixelperfect.fr",
      link: "mailto:contact@pixelperfect.fr"
    },
    {
      icon: Phone,
      title: "Téléphone",
      description: "Parlons directement de votre projet",
      contact: "+33 1 23 45 67 89",
      link: "tel:+33123456789"
    },
    {
      icon: MapPin,
      title: "Adresse",
      description: "Rencontrons-nous dans nos bureaux",
      contact: "Paris, France",
      link: "#"
    },
    {
      icon: Clock,
      title: "Horaires",
      description: "Nous sommes disponibles",
      contact: "Lun-Ven 9h-18h",
      link: "#"
    }
  ];
  const stats = [
    { number: "24h", label: "Délai de réponse" },
    { number: "100+", label: "Projets réalisés" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "5★", label: "Note moyenne" }
  ];
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: void 0
      }));
    }
  };
  if (isSubmitted) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto px-4 py-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-12", children: [
      /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce", children: /* @__PURE__ */ jsx(Check, { className: "w-10 h-10 text-white" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Merci pour votre message !" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-8", children: "Nous avons bien reçu votre demande et nous vous recontacterons dans les 24h." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsSubmitted(false),
          className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105",
          children: "Envoyer un autre message"
        }
      )
    ] }) }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black opacity-20" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6", children: [
          "Parlons de votre",
          /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: [
            " ",
            "Projet"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed", children: "Vous avez une idée, un projet ou besoin de conseils ? Notre équipe d'experts est là pour vous accompagner à chaque étape." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center mb-12", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact-form",
              className: "bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1",
              onClick: (e) => {
                e.preventDefault();
                document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" });
              },
              children: "Démarrer le projet"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact-info",
              className: "border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all text-lg",
              onClick: (e) => {
                e.preventDefault();
                document.getElementById("contact-info").scrollIntoView({ behavior: "smooth" });
              },
              children: "Nos coordonnées"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto", children: stats.map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl lg:text-4xl font-bold text-white mb-2", children: stat.number }),
          /* @__PURE__ */ jsx("div", { className: "text-blue-200 text-sm lg:text-base", children: stat.label })
        ] }, index)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "contact-info", className: "py-16 lg:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: "Comment nous contacter" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Choisissez le moyen de communication qui vous convient le mieux. Nous nous engageons à vous répondre dans les plus brefs délais." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: contactMethods.map((method, index) => {
        const IconComponent = method.icon;
        return /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all group cursor-pointer transform hover:-translate-y-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: method.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: method.description }),
          /* @__PURE__ */ jsx("a", { href: method.link, className: "text-blue-600 font-semibold hover:text-blue-700 transition-colors", children: method.contact })
        ] }, index);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "contact-form", className: "py-16 lg:py-24 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: "Décrivez-nous votre projet" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Plus vous nous donnerez de détails, mieux nous pourrons vous conseiller et vous proposer une solution adaptée." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl shadow-xl p-8", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700 mb-2", children: "Prénom *" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "firstName",
                  name: "firstName",
                  value: formData.firstName,
                  onChange: handleInputChange,
                  className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.firstName ? "border-red-500" : "border-gray-300"}`
                }
              ),
              errors.firstName && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.firstName })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700 mb-2", children: "Nom *" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "lastName",
                  name: "lastName",
                  value: formData.lastName,
                  onChange: handleInputChange,
                  className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.lastName ? "border-red-500" : "border-gray-300"}`
                }
              ),
              errors.lastName && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.lastName })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700 mb-2", children: "Email *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                id: "email",
                name: "email",
                value: formData.email,
                onChange: handleInputChange,
                className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.email ? "border-red-500" : "border-gray-300"}`
              }
            ),
            errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 mb-2", children: "Téléphone" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                id: "phone",
                name: "phone",
                value: formData.phone,
                onChange: handleInputChange,
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-gray-700 mb-2", children: "Entreprise" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "company",
                name: "company",
                value: formData.company,
                onChange: handleInputChange,
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "service", className: "block text-sm font-medium text-gray-700 mb-2", children: "Service souhaité *" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "service",
                name: "service",
                value: formData.service,
                onChange: handleInputChange,
                className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.service ? "border-red-500" : "border-gray-300"}`,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Sélectionnez un service" }),
                  services.map((service, index) => /* @__PURE__ */ jsx("option", { value: service.name, children: service.name }, index))
                ]
              }
            ),
            errors.service && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.service })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "budget", className: "block text-sm font-medium text-gray-700 mb-2", children: "Budget estimé" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "budget",
                name: "budget",
                value: formData.budget,
                onChange: handleInputChange,
                className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Sélectionnez une fourchette" }),
                  /* @__PURE__ */ jsx("option", { value: "< 5k", children: "Moins de 5 000€" }),
                  /* @__PURE__ */ jsx("option", { value: "5k-15k", children: "5 000€ - 15 000€" }),
                  /* @__PURE__ */ jsx("option", { value: "15k-30k", children: "15 000€ - 30 000€" }),
                  /* @__PURE__ */ jsx("option", { value: "30k-50k", children: "30 000€ - 50 000€" }),
                  /* @__PURE__ */ jsx("option", { value: "> 50k", children: "Plus de 50 000€" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-2", children: "Message *" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "message",
                rows: "{6}",
                value: formData.message,
                onChange: handleInputChange,
                placeholder: "Décrivez votre projet, vos objectifs, vos contraintes, et tout ce qui pourrait nous aider à mieux vous conseiller...",
                className: `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${errors.message ? "border-red-500" : "border-gray-300"}`
              }
            ),
            errors.message && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.message })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                id: "consent",
                name: "consent",
                checked: formData.consent,
                onChange: handleInputChange,
                className: "mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              }
            ),
            /* @__PURE__ */ jsxs("label", { htmlFor: "consent", className: "ml-3 text-sm text-gray-600", children: [
              "J'accepte d'être contacté par PixelPerfect concernant ma demande et j'ai lu la",
              /* @__PURE__ */ jsx("a", { href: "/privacy", className: "text-blue-600 hover:text-blue-700", children: " politique de confidentialité" }),
              ". *"
            ] })
          ] }),
          errors.consent && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm", children: errors.consent }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
              children: isSubmitting ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
                /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" }),
                "Envoi en cours..."
              ] }) : "Envoyer ma demande"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Nos Services" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: services.map((service, index) => {
              const IconComponent = service.icon;
              return /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-5 h-5 text-white" }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 text-sm", children: service.name }) })
              ] }) }, index);
            }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Pourquoi nous choisir ?" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Expertise reconnue" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Plus de 5 ans d'expérience dans le développement web" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Accompagnement personnalisé" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "Un interlocuteur dédié pour chaque projet" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { className: "ml-3", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Délais respectés" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: "98% de nos projets livrés dans les temps" })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 lg:py-24 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-gray-900 mb-4", children: "Questions Fréquentes" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Les réponses aux questions les plus courantes de nos clients." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Combien de temps faut-il pour réaliser un site web ?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Le délai varie selon la complexité du projet. Un site vitrine prend généralement 2-4 semaines, tandis qu'un site e-commerce peut nécessiter 6-12 semaines. Nous vous fournirons un planning détaillé après analyse de vos besoins." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Proposez-vous de la maintenance après livraison ?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Oui, nous proposons plusieurs formules de maintenance incluant les mises à jour de sécurité, la sauvegarde, le monitoring et le support technique. C'est essentiel pour garantir la pérennité de votre site." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Travaillez-vous avec des entreprises de toutes tailles ?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Absolument ! Nous accompagnons aussi bien les startups que les grandes entreprises. Chaque projet est unique et nous adaptons notre approche à vos besoins et votre budget." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Comment se déroule le processus de développement ?" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Nous suivons une méthodologie agile : analyse des besoins, wireframing, design, développement, tests et livraison. Vous êtes impliqué à chaque étape avec des points réguliers et des validations." })
        ] })
      ] })
    ] }) })
  ] });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - PixelPerfect" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/wamp64/www/astro-project/src/components/ContactForm.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/wamp64/www/astro-project/src/pages/contact.astro", void 0);

const $$file = "C:/wamp64/www/astro-project/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
