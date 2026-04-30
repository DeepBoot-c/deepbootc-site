export type Lang = "en" | "nl";

export const translations = {
  en: {
    nav: {
      tools: "Tools",
      about: "About",
      contact: "Contact",
    },
    home: {
      heroTitle: "AI tools that work for you",
      heroSubtitle:
        "DeepBoot.C builds intelligent automation for businesses, so you can focus on what matters.",
      exploreTools: "Explore Tools",
      aboutUs: "About Us",
      allTools: "Our Tools",
      toolsSubtitle: "Smart tools built for modern business operations.",
    },
    about: {
      heroTitle: "We build the tools\nyour business deserves",
      heroSubtitle:
        "DeepBoot.C is a Dutch AI company building smart automation tools for entrepreneurs and SMEs.",
      whatWeBuild: "What We Build",
      whatWeBuildText:
        "We create AI-powered tools that automate repetitive tasks: from legal document analysis to restaurant email management. Each tool is designed to save time, reduce costs, and scale with your business.",
      ourMission: "Our Mission",
      ourMissionText:
        "We believe every business deserves access to cutting-edge AI technology. Our mission is to make AI tools simple, effective, and affordable for businesses of all sizes.",
      founderTitle: "Built by entrepreneurs, for entrepreneurs",
      founderText:
        "We built DeepBoot.C because we saw the same problem everywhere: businesses drowning in repetitive tasks that AI could handle in seconds. We started with restaurants, expanded into legal, and we're not stopping there.",
    },
    contact: {
      title: "Get in touch",
      subtitle:
        "Have a question, want a demo, or looking to work together? We'd love to hear from you.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Based in",
      locationValue: "The Netherlands",
      emailCta: "Send us an email",
    },
    tools: {
      lawSummarizer: {
        title: "Law Summarizer",
        description:
          "AI-powered legal document analysis. Upload any legal text and get instant IRAC analysis, key terms, and exam prep — built for law students and professionals.",
        status: "open" as const,
        cta: "Open Tool",
        href: "https://www.lawsummarizer.com",
      },
      restaurantEmail: {
        title: "Restaurant Email",
        description:
          "Automatically handle reservation requests, supplier emails, and guest inquiries. Let AI manage your inbox while you run your restaurant.",
        status: "coming-soon" as const,
      },
      calendarPlanner: {
        title: "Calendar Planner",
        description:
          "Smart scheduling and calendar management powered by AI. Automatically plan meetings, set reminders, and optimize your workweek.",
        status: "coming-soon" as const,
      },
      financialPlan: {
        title: "Financial Plan",
        description:
          "AI-driven financial planning and analysis. Get instant insights into your business finances, cash flow projections, and growth scenarios.",
        status: "coming-soon" as const,
      },
    },
    common: {
      open: "Open",
      comingSoon: "Coming Soon",
    },
    footer: {
      tagline: "AI tools for modern business.",
      rights: "All rights reserved.",
      links: {
        tools: "Tools",
        about: "About",
        contact: "Contact",
      },
    },
  },

  nl: {
    nav: {
      tools: "Tools",
      about: "Over ons",
      contact: "Contact",
    },
    home: {
      heroTitle: "AI tools die voor jou werken",
      heroSubtitle:
        "DeepBoot.C bouwt slimme automatisering voor bedrijven, zodat jij je kunt focussen op wat écht telt.",
      exploreTools: "Bekijk Tools",
      aboutUs: "Over ons",
      allTools: "Onze Tools",
      toolsSubtitle: "Slimme tools gebouwd voor moderne bedrijfsvoering.",
    },
    about: {
      heroTitle: "Wij bouwen de tools\ndie jouw bedrijf verdient",
      heroSubtitle:
        "DeepBoot.C is een Nederlands AI-bedrijf dat slimme automatiseringstools bouwt voor ondernemers.",
      whatWeBuild: "Wat wij bouwen",
      whatWeBuildText:
        "Wij maken AI-tools die repetitieve taken automatiseren: van juridische documentanalyse tot het afhandelen van restaurante-mails. Elke tool is ontworpen om tijd te besparen, kosten te verlagen en mee te groeien met je bedrijf.",
      ourMission: "Onze Missie",
      ourMissionText:
        "Wij geloven dat elk bedrijf toegang verdient tot geavanceerde AI-technologie. Onze missie is om AI-tools eenvoudig, effectief en betaalbaar te maken voor bedrijven van alle groottes.",
      founderTitle: "Gebouwd door ondernemers, voor ondernemers",
      founderText:
        "We bouwden DeepBoot.C omdat we hetzelfde probleem overal zagen: bedrijven verzuipen in repetitieve taken die AI in seconden kan afhandelen. We begonnen met restaurants, vervolgens juridisch, en we stoppen hier niet.",
    },
    contact: {
      title: "Neem contact op",
      subtitle:
        "Heb je een vraag, wil je een demo of wil je samenwerken? We horen graag van je.",
      emailLabel: "E-mail",
      phoneLabel: "Telefoon",
      locationLabel: "Gevestigd in",
      locationValue: "Nederland",
      emailCta: "Mail ons",
    },
    tools: {
      lawSummarizer: {
        title: "Law Summarizer",
        description:
          "AI-aangedreven juridische documentanalyse. Upload een juridische tekst en krijg direct IRAC-analyse, kernbegrippen en tentamenvoorbereiding — voor rechtenstudenten en professionals.",
        status: "open" as const,
        cta: "Open Tool",
        href: "https://www.lawsummarizer.com",
      },
      restaurantEmail: {
        title: "Restaurant E-mail",
        description:
          "Verwerk automatisch reserveringsverzoeken, leveranciersmails en gastvragen. Laat AI jouw inbox beheren terwijl jij het restaurant runt.",
        status: "coming-soon" as const,
      },
      calendarPlanner: {
        title: "Agenda Planner",
        description:
          "Slimme planning en agendabeheer met AI. Plan vergaderingen automatisch, stel herinneringen in en optimaliseer je werkweek.",
        status: "coming-soon" as const,
      },
      financialPlan: {
        title: "Financieel Plan",
        description:
          "AI-gestuurde financiële planning en analyse. Krijg direct inzicht in je bedrijfsfinanciën, cashflowprognoses en groeiscenario's.",
        status: "coming-soon" as const,
      },
    },
    common: {
      open: "Open",
      comingSoon: "Binnenkort",
    },
    footer: {
      tagline: "Slimme automatisering voor jouw bedrijf.",
      rights: "Alle rechten voorbehouden.",
      links: {
        tools: "Tools",
        about: "Over ons",
        contact: "Contact",
      },
    },
  },
} as const;
