// Alle teksten van de nieuwe site (NL + EN). Eén label per actie: "Plan een gesprek".
export const CONTACT = {
  phone: "+31 6 57090070",
  phoneDisplay: "06 57 09 00 70",
  phoneIntl: "+31 6 57 09 00 70",
  tel: "tel:+31657090070",
  whatsapp: "https://wa.me/31657090070",
  email: "deepboot.c@gmail.com",
  law: "https://www.lawsummarizer.com",
};

const nl = {
  meta: { title: "DeepBoot.C · Websites en AI-automatisering voor ondernemers", description: "Wij bouwen websites voor kleine ondernemers en AI-hulpjes die terugkerend werk overnemen. Uit Nederland, persoonlijk en zonder gedoe." },
  cta: "Plan een gesprek",
  call: "Bel",
  layers: {
    top: "Oppervlakte", above: "Boven water", line: "Waterlijn", below: "Onder water", how: "Werkwijze", anchor: "Voor anker",
  },
  nav: { depth: "Diepte", menu: "Lagen", about: "Over ons", terms: "Algemene voorwaarden", home: "Home", lang: "English", langShort: "EN" },
  hero: {
    h1a: "Wij bouwen wat boven water komt.",
    h1b: "En wat eronder het werk doet.",
    sub: "Websites en AI-automatisering voor kleine ondernemers. Persoonlijk, nuchter en uit Nederland.",
    orCall: "of bel",
    belowLabel: "Onder de waterlijn",
    below: "Mails, agenda en administratie die vanzelf doorlopen. Ook als u slaapt.",
  },
  above: {
    title: "Een website die laat zien hoe goed u in het echt bent.",
    lede: "Veel kleine bedrijven zijn prachtig, maar hun site is blijven hangen in 2012. Wij maken een site die past bij hoe u werkt, met uw eigen foto's en woorden.",
    promise: "U ziet eerst een ontwerp. Pas als het bevalt, gaan we verder.",
    items: [
      ["Gemaakt voor de telefoon", "De meeste gasten en klanten kijken op hun mobiel. Daar begint ons ontwerp, niet daar eindigt het."],
      ["Uw stijl, geen sjabloon", "Uw kleuren, uw beeld, uw toon. Geen twee sites die wij maken lijken op elkaar."],
      ["Eén knop die doet wat hij belooft", "Reserveren, een offerte aanvragen of bellen: in één tik, op elke pagina."],
      ["Gevonden worden", "Netjes opgebouwd voor Google, met uw adres, openingstijden en gegevens op de juiste plek."],
      ["Geregeld en bijgehouden", "Hosting, beveiliging en kleine aanpassingen regelen wij. U hoeft er niet naar om te kijken."],
    ] as [string, string][],
  },
  hush: "Maar het meeste werk gebeurt onder de oppervlakte.",
  line: {
    title: "Trek de waterlijn omlaag.",
    lede: "Boven ziet u een voorbeeldsite, onder de machinekamer. Vul gerust uw eigen naam in en verstuur de aanvraag.",
    above: "Boven water", below: "Onder water", handle: "Waterlijn verschuiven",
    sample: "Voorbeeld · verzonnen pension, voorbeeldprijzen",
    site: {
      name: "Pension De Kaap", place: "Texel", nav: ["Kamers", "Omgeving", "Reserveren"],
      h: "Slapen achter de duinen.", p: "Twee kamers, een ontbijt met eieren van de buren en de zee op tien minuten fietsen.",
      form: "Vraag een kamer aan", nameL: "Naam", arriveL: "Aankomst", nightsL: "Nachten", guestsL: "Personen", send: "Verstuur aanvraag",
      errName: "Vul een naam in.", errDate: "Kies een aankomstdatum vanaf vandaag.", sent: "Verstuurd. Kijk eens onder de waterlijn.",
    },
    engine: {
      title: "Machinekamer", idle: "Wacht op een aanvraag",
      s1: "Aanvraag binnen", s2: "Agenda gecheckt", s3: "Prijs berekend", s4: "Antwoord opgesteld", s5: "In de administratie",
      free: (room: string) => `${room} is vrij`,
      alt: (room: string, d: string) => `Vol op die data. Voorstel: ${room} vanaf ${d}`,
      none: "Die weken zijn vol. Antwoord met excuus en een belverzoek.",
      night: (n: number) => (n === 1 ? "1 nacht" : `${n} nachten`),
      guests: (n: number) => (n === 1 ? "1 persoon" : `${n} personen`),
      tax: "toeristenbelasting",
      waiting: "Wacht op akkoord van de eigenaar",
      ledger: ["Datum", "Gast", "Nachten", "Bedrag", "Status"], concept: "concept",
      subject: "Uw aanvraag bij Pension De Kaap",
      mail: (o: { name: string; room: string; from: string; to: string; nights: string; total: string; alt: boolean; none: boolean }) =>
        o.none
          ? `Beste ${o.name},\n\nDank voor uw aanvraag! Helaas zijn we rond die datum helemaal vol. Mag ik u even bellen om samen een andere week te zoeken?\n\nHartelijke groet,\nPension De Kaap`
          : `Beste ${o.name},\n\nWat leuk dat u naar Texel wilt komen. ${o.alt ? "Op de gevraagde data zijn we vol, maar " : ""}${o.room} is vrij van ${o.from} tot ${o.to} (${o.nights}). Het totaal komt op ${o.total}, inclusief ontbijt en toeristenbelasting.\n\nZal ik de kamer voor u vastzetten?\n\nHartelijke groet,\nPension De Kaap`,
    },
  },
  below: {
    title: "Het werk dat u niet ziet, maar wel merkt.",
    lede: "Terugkerende klussen slokken uren op. Wij bouwen AI-hulpjes die ze overnemen. U houdt altijd het laatste woord: niets gaat de deur uit zonder uw akkoord.",
    status: { live: "Live", dev: "In ontwikkeling", custom: "Op maat" },
    open: "Open de tool",
    items: [
      { name: "Mail-assistent", st: "dev", what: "Reserveringen, leveranciersmails en gastvragen: in uw toon beantwoord, verstuurd na uw akkoord." },
      { name: "Agenda-planner", st: "dev", what: "Afspraken, herinneringen en beschikbaarheid op één plek, automatisch bijgewerkt." },
      { name: "Financieel overzicht", st: "dev", what: "Inkomsten, uitgaven en een vooruitblik op uw kas, zonder spreadsheet-gepuzzel." },
      { name: "Law Summarizer", st: "live", what: "Juridische teksten samengevat, met IRAC-analyse en kernbegrippen. Voor rechtenstudenten en juristen.", href: "law" },
      { name: "Uw eigen klus", st: "custom", what: "Iets dat u elke week met de hand doet? Vertel het ons. We kijken samen of het slimmer kan." },
    ],
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
  anchor: {
    title: "Zullen we even bellen?",
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
      ["Boven water", "Een website is uw etalage. Die moet kloppen met hoe goed u in het echt bent: snel, helder, in uw eigen stijl, en makkelijk om contact op te nemen."],
      ["Onder water", "Achter elke ondernemer zit een berg terugkerend werk. Mails, planning, administratie. Daar bouwen we slimme hulp voor, zodat u tijd overhoudt."],
      ["Hoe we werken", "Persoonlijk en zonder vakjargon. U praat met de mensen die het bouwen. We laten eerst zien wat we bedoelen, en pas daarna beslist u."],
    ] as [string, string][],
  },
};

type Copy = typeof nl;

const en: Copy = {
  meta: { title: "DeepBoot.C · Websites and AI automation for small businesses", description: "We build websites for small businesses and AI helpers that take over repetitive work. Based in the Netherlands, personal and hassle-free." },
  cta: "Book a call",
  call: "Call",
  layers: { top: "Surface", above: "Above water", line: "Waterline", below: "Below water", how: "How it works", anchor: "At anchor" },
  nav: { depth: "Depth", menu: "Layers", about: "About", terms: "Terms & conditions", home: "Home", lang: "Nederlands", langShort: "NL" },
  hero: {
    h1a: "We build what shows above water.",
    h1b: "And what does the work below.",
    sub: "Websites and AI automation for small businesses. Personal, down to earth, from the Netherlands.",
    orCall: "or call",
    belowLabel: "Below the waterline",
    below: "Email, calendar and admin that keep running by themselves. Even while you sleep.",
  },
  above: {
    title: "A website that shows how good you really are.",
    lede: "Plenty of small businesses are wonderful in person, but their website got stuck in 2012. We build a site that fits the way you work, with your own photos and words.",
    promise: "You see a design first. Only if you like it do we continue.",
    items: [
      ["Made for the phone", "Most guests and customers look on their mobile. That is where our design starts, not where it ends."],
      ["Your style, not a template", "Your colours, your imagery, your voice. No two sites we make look alike."],
      ["One button that does what it says", "Book, request a quote or call: one tap, on every page."],
      ["Easy to find", "Built properly for Google, with your address, opening hours and details in the right place."],
      ["Handled and maintained", "Hosting, security and small changes are on us. You never have to think about it."],
    ],
  },
  hush: "But most of the work happens below the surface.",
  line: {
    title: "Pull the waterline down.",
    lede: "Above is an example website, below is the engine room. Go ahead, type your own name and send the request.",
    above: "Above water", below: "Below water", handle: "Move the waterline",
    sample: "Example · fictional guesthouse, sample prices",
    site: {
      name: "Pension De Kaap", place: "Texel", nav: ["Rooms", "Area", "Book"],
      h: "Sleep behind the dunes.", p: "Two rooms, breakfast with eggs from next door and the sea ten minutes away by bike.",
      form: "Request a room", nameL: "Name", arriveL: "Arrival", nightsL: "Nights", guestsL: "Guests", send: "Send request",
      errName: "Please enter a name.", errDate: "Pick an arrival date from today.", sent: "Sent. Have a look below the waterline.",
    },
    engine: {
      title: "Engine room", idle: "Waiting for a request",
      s1: "Request received", s2: "Calendar checked", s3: "Price calculated", s4: "Reply drafted", s5: "Added to the books",
      free: (room: string) => `${room} is available`,
      alt: (room: string, d: string) => `Full on those dates. Suggest: ${room} from ${d}`,
      none: "Those weeks are full. Reply with an apology and offer a call.",
      night: (n: number) => (n === 1 ? "1 night" : `${n} nights`),
      guests: (n: number) => (n === 1 ? "1 guest" : `${n} guests`),
      tax: "tourist tax",
      waiting: "Waiting for the owner's approval",
      ledger: ["Date", "Guest", "Nights", "Amount", "Status"], concept: "draft",
      subject: "Your request at Pension De Kaap",
      mail: (o) =>
        o.none
          ? `Dear ${o.name},\n\nThank you for your request! Unfortunately we are fully booked around that date. May I give you a call to find another week together?\n\nKind regards,\nPension De Kaap`
          : `Dear ${o.name},\n\nHow lovely that you would like to visit Texel. ${o.alt ? "We are full on the dates you asked for, but " : ""}${o.room} is available from ${o.from} to ${o.to} (${o.nights}). The total comes to ${o.total}, including breakfast and tourist tax.\n\nShall I reserve the room for you?\n\nKind regards,\nPension De Kaap`,
    },
  },
  below: {
    title: "The work you don't see, but do notice.",
    lede: "Repetitive tasks eat hours. We build AI helpers that take them over. You always have the final say: nothing goes out without your approval.",
    status: { live: "Live", dev: "In development", custom: "Custom" },
    open: "Open the tool",
    items: [
      { name: "Email assistant", st: "dev", what: "Bookings, supplier emails and guest questions: answered in your voice, sent after your approval." },
      { name: "Calendar planner", st: "dev", what: "Appointments, reminders and availability in one place, updated automatically." },
      { name: "Financial overview", st: "dev", what: "Income, expenses and a look ahead at your cash, without spreadsheet puzzles." },
      { name: "Law Summarizer", st: "live", what: "Legal texts summarised, with IRAC analysis and key terms. For law students and lawyers.", href: "law" },
      { name: "Your own task", st: "custom", what: "Something you do by hand every week? Tell us. We will look together at whether it can be smarter." },
    ],
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
  anchor: {
    title: "Shall we have a chat?",
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
      ["Above water", "A website is your shop window. It should match how good you are in person: fast, clear, in your own style, and easy to get in touch."],
      ["Below water", "Behind every business owner is a pile of repetitive work. Email, planning, admin. We build smart help for it, so you have time left over."],
      ["How we work", "Personal and without jargon. You talk to the people who build it. We show you what we mean first, and only then do you decide."],
    ],
  },
};

export const COPY = { nl, en };
export type { Copy };
