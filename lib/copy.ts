// Alle teksten van de site (NL + EN). Eén label per actie: "Plan een gesprek".
export const CONTACT = {
  phone: "+31 6 57090070",
  phoneDisplay: "06 57 09 00 70",
  phoneIntl: "+31 6 57 09 00 70",
  tel: "tel:+31657090070",
  whatsapp: "https://wa.me/31657090070",
  email: "deepboot.c@gmail.com",
};

export const WORKWEEKS = 46; // aanname voor de tijdmeter, staat ook zichtbaar bij de uitkomst

const nl = {
  cta: "Plan een gesprek",
  call: "Bel",
  nav: { web: "Websites", ai: "AI", how: "Werkwijze", about: "Over ons", contact: "Contact", terms: "Algemene voorwaarden", home: "Home", lang: "English", langShort: "EN", menu: "Menu", close: "Sluiten" },
  hero: {
    h1: "Websites en AI die voor uw bedrijf",
    h1em: "werken.",
    sub: "Wij bouwen websites voor ondernemers en AI-hulpjes die terugkerend werk overnemen. Persoonlijk, uit Nederland.",
    orCall: "of bel",
    tags: ["Websites", "AI-automatisering"],
  },
  pillars: {
    web: { k: "01", title: "Websites", text: "Een site die laat zien hoe goed u in het echt bent. Snel op de telefoon, in uw eigen stijl, met één knop die doet wat hij belooft.", points: ["Ontwerp en bouw", "Hosting en onderhoud", "Vindbaar in Google"], link: "Meer over websites" },
    ai: { k: "02", title: "AI-automatisering", text: "Hulpjes die mails beantwoorden, de agenda bijhouden en administratie voorbereiden. U houdt altijd het laatste woord.", points: ["Mail en reserveringen", "Planning", "Administratie"], link: "Meer over AI" },
  },
  web: {
    title: "Een website die laat zien hoe goed u bent.",
    lede: "Veel kleine bedrijven zijn prachtig, maar hun site is blijven hangen in 2012. Wij maken een site die past bij hoe u werkt, met uw eigen foto's en woorden.",
    promise: "U ziet eerst een ontwerp. Pas als het bevalt, gaan we verder.",
    items: [
      ["Gemaakt voor de telefoon", "De meeste gasten en klanten kijken op hun mobiel. Daar begint ons ontwerp."],
      ["Uw stijl, geen sjabloon", "Uw kleuren, uw beeld, uw toon. Geen twee sites die wij maken lijken op elkaar."],
      ["Eén knop die werkt", "Reserveren, een offerte aanvragen of bellen: in één tik, op elke pagina."],
      ["Gevonden worden", "Netjes opgebouwd voor Google, met uw adres, openingstijden en gegevens op de juiste plek."],
      ["Geregeld en bijgehouden", "Hosting, beveiliging en kleine aanpassingen regelen wij."],
    ] as [string, string][],
  },
  ai: {
    title: "AI die het saaie werk doet.",
    lede: "Terugkerende klussen slokken uren op. Wij bouwen AI-hulpjes die ze overnemen. Niets gaat de deur uit zonder uw akkoord.",
    status: { live: "Live", dev: "In ontwikkeling", custom: "Op maat" },
    items: [
      { name: "Mail-assistent", st: "dev", what: "Reserveringen, leveranciersmails en gastvragen: in uw toon beantwoord, verstuurd na uw akkoord." },
      { name: "Agenda-planner", st: "dev", what: "Afspraken, herinneringen en beschikbaarheid op één plek, automatisch bijgewerkt." },
      { name: "Financieel overzicht", st: "dev", what: "Inkomsten, uitgaven en een vooruitblik op uw kas, zonder spreadsheet-gepuzzel." },
      { name: "Uw eigen klus", st: "custom", what: "Iets dat u elke week met de hand doet? Vertel het ons. We kijken samen of het slimmer kan." },
    ],
  },
  meter: {
    title: "Hoeveel tijd kost het u nu?",
    lede: "Schuif aan de knoppen. U ziet meteen wat terugkerend werk u per jaar kost.",
    mails: "E-mails per dag", perMail: "Minuten per e-mail", admin: "Uur per week aan planning en administratie",
    unitMail: (n: number) => `${n} mails`, unitMin: (n: number) => `${n} min`, unitHour: (n: number) => `${n} uur`,
    perWeek: "per week", perYear: "uur per jaar",
    days: (n: number) => `Dat zijn ongeveer ${n} werkdagen van 8 uur.`,
    note: (w: number) => `Uw eigen invoer, uitgaande van 5 werkdagen en ${w} werkweken per jaar. In een gesprek kijken we wat daarvan te automatiseren is.`,
  },
  how: {
    title: "Zo gaat het.",
    steps: [
      ["Kennismaken", "We bellen of komen langs. U vertelt wat u doet en waar u tegenaan loopt."],
      ["Eerste ontwerp", "U krijgt een ontwerp om rustig te bekijken. Vrijblijvend."],
      ["Samen afmaken", "Uw teksten, uw foto's, uw keuzes. Wij passen aan tot het klopt."],
      ["Online en bijgehouden", "Wij zetten het live, regelen de hosting en blijven bereikbaar."],
    ] as [string, string][],
  },
  contact: {
    title: "Laten we kennismaken.",
    lede: "Geen verkooppraatje. Gewoon een gesprek over uw bedrijf en wat er beter kan.",
    formTitle: "Plan een gesprek",
    nameL: "Uw naam", contactL: "Telefoon of e-mail", whenL: "Wanneer schikt het?", whenOpts: ["Ochtend", "Middag", "Avond", "Maakt niet uit"],
    msgL: "Waar gaat het over? (mag leeg)",
    note: "Dit opent uw mailprogramma met het bericht klaar. U verstuurt het zelf.",
    err: "Vul uw naam en een telefoonnummer of e-mailadres in.",
    direct: "Liever meteen?", wa: "WhatsApp", mail: "Mail",
    mailSubject: "Gesprek plannen",
    mailBody: (o: { name: string; contact: string; when: string; msg: string }) =>
      `Hallo DeepBoot,\n\nIk wil graag een gesprek plannen.\n\nNaam: ${o.name}\nBereikbaar via: ${o.contact}\nVoorkeur: ${o.when}\n${o.msg ? `\n${o.msg}\n` : ""}\nGroet,\n${o.name}`,
    waText: "Hallo DeepBoot, ik wil graag een gesprek plannen.",
  },
  foot: { tag: "Websites en AI-automatisering voor ondernemers.", place: "Nederland", rights: "Alle rechten voorbehouden." },
  about: {
    title: "Klein bedrijf, korte lijnen.",
    lede: "DeepBoot.C is een Nederlands bedrijf dat websites en AI-hulpjes bouwt voor ondernemers die liever met hun vak bezig zijn dan met hun computer.",
    blocks: [
      ["Wat we bouwen", "Websites die kloppen met hoe goed u in het echt bent, en AI-hulpjes die mail, planning en administratie uit handen nemen."],
      ["Hoe we werken", "Persoonlijk en zonder vakjargon. U praat met de mensen die het bouwen. We laten eerst zien wat we bedoelen, en pas daarna beslist u."],
      ["Waar we zitten", "In Nederland. We komen graag langs, en anders bellen we."],
    ] as [string, string][],
  },
};

type Copy = typeof nl;

const en: Copy = {
  cta: "Book a call",
  call: "Call",
  nav: { web: "Websites", ai: "AI", how: "How it works", about: "About", contact: "Contact", terms: "Terms & conditions", home: "Home", lang: "Nederlands", langShort: "NL", menu: "Menu", close: "Close" },
  hero: {
    h1: "Websites and AI that work for",
    h1em: "your business.",
    sub: "We build websites for business owners and AI helpers that take over repetitive work. Personal, from the Netherlands.",
    orCall: "or call",
    tags: ["Websites", "AI automation"],
  },
  pillars: {
    web: { k: "01", title: "Websites", text: "A site that shows how good you really are. Fast on the phone, in your own style, with one button that does what it says.", points: ["Design and build", "Hosting and maintenance", "Easy to find on Google"], link: "More about websites" },
    ai: { k: "02", title: "AI automation", text: "Helpers that answer email, keep the calendar up to date and prepare the admin. You always have the final say.", points: ["Email and bookings", "Planning", "Admin"], link: "More about AI" },
  },
  web: {
    title: "A website that shows how good you are.",
    lede: "Plenty of small businesses are wonderful in person, but their website got stuck in 2012. We build a site that fits the way you work, with your own photos and words.",
    promise: "You see a design first. Only if you like it do we continue.",
    items: [
      ["Made for the phone", "Most guests and customers look on their mobile. That is where our design starts."],
      ["Your style, not a template", "Your colours, your imagery, your voice. No two sites we make look alike."],
      ["One button that works", "Book, request a quote or call: one tap, on every page."],
      ["Easy to find", "Built properly for Google, with your address, opening hours and details in the right place."],
      ["Handled and maintained", "Hosting, security and small changes are on us."],
    ],
  },
  ai: {
    title: "AI that does the boring work.",
    lede: "Repetitive tasks eat hours. We build AI helpers that take them over. Nothing goes out without your approval.",
    status: { live: "Live", dev: "In development", custom: "Custom" },
    items: [
      { name: "Email assistant", st: "dev", what: "Bookings, supplier emails and guest questions: answered in your voice, sent after your approval." },
      { name: "Calendar planner", st: "dev", what: "Appointments, reminders and availability in one place, updated automatically." },
      { name: "Financial overview", st: "dev", what: "Income, expenses and a look ahead at your cash, without spreadsheet puzzles." },
      { name: "Your own task", st: "custom", what: "Something you do by hand every week? Tell us. We will look together at whether it can be smarter." },
    ],
  },
  meter: {
    title: "How much time does it cost you now?",
    lede: "Move the sliders. You will see straight away what repetitive work costs you each year.",
    mails: "Emails per day", perMail: "Minutes per email", admin: "Hours per week on planning and admin",
    unitMail: (n) => `${n} emails`, unitMin: (n) => `${n} min`, unitHour: (n) => `${n} h`,
    perWeek: "per week", perYear: "hours per year",
    days: (n) => `That is roughly ${n} working days of 8 hours.`,
    note: (w) => `Your own input, assuming 5 working days and ${w} working weeks a year. In a call we look at how much of it can be automated.`,
  },
  how: {
    title: "How it works.",
    steps: [
      ["Getting acquainted", "We call or drop by. You tell us what you do and what gets in your way."],
      ["First design", "You get a design to look at in your own time. No obligation."],
      ["Finishing together", "Your texts, your photos, your choices. We adjust until it is right."],
      ["Live and maintained", "We put it online, take care of hosting and stay within reach."],
    ],
  },
  contact: {
    title: "Let's get acquainted.",
    lede: "No sales pitch. Just a conversation about your business and what could be better.",
    formTitle: "Book a call",
    nameL: "Your name", contactL: "Phone or email", whenL: "What time suits you?", whenOpts: ["Morning", "Afternoon", "Evening", "Any time"],
    msgL: "What is it about? (optional)",
    note: "This opens your email app with the message ready. You send it yourself.",
    err: "Please enter your name and a phone number or email address.",
    direct: "Rather straight away?", wa: "WhatsApp", mail: "Email",
    mailSubject: "Book a call",
    mailBody: (o) =>
      `Hello DeepBoot,\n\nI would like to book a call.\n\nName: ${o.name}\nReach me at: ${o.contact}\nPreferred time: ${o.when}\n${o.msg ? `\n${o.msg}\n` : ""}\nKind regards,\n${o.name}`,
    waText: "Hello DeepBoot, I would like to book a call.",
  },
  foot: { tag: "Websites and AI automation for small businesses.", place: "The Netherlands", rights: "All rights reserved." },
  about: {
    title: "Small company, short lines.",
    lede: "DeepBoot.C is a Dutch company building websites and AI helpers for business owners who would rather work on their craft than on their computer.",
    blocks: [
      ["What we build", "Websites that match how good you are in person, and AI helpers that take email, planning and admin off your hands."],
      ["How we work", "Personal and without jargon. You talk to the people who build it. We show you what we mean first, and only then do you decide."],
      ["Where we are", "In the Netherlands. We are happy to drop by, otherwise we call."],
    ],
  },
};

export const COPY = { nl, en };
export type { Copy };
