export const LANGS = ["en", "si", "hi", "de"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_LABELS: Record<Lang, { short: string; full: string }> = {
  en: { short: "EN", full: "English" },
  si: { short: "සිං", full: "සිංහල" },
  hi: { short: "हिं", full: "हिन्दी" },
  de: { short: "DE", full: "Deutsch" },
};

type Tour = { title: string; text: string; meta: string; tag?: string };
type Step = { title: string; text: string };

export type Copy = {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { tours: string; gallery: string; about: string; how: string; contact: string };
  langPicker: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    badges: string[];
  };
  video: { kicker: string; title: string; text: string; unmute: string; mute: string };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    quote: string;
    facts: { label: string; value: string }[];
  };
  tours: { kicker: string; title: string; intro: string; items: Tour[]; priceNote: string; cta: string };
  gallery: { kicker: string; title: string; hint: string; close: string; captions: Record<string, string> };
  how: { kicker: string; title: string; steps: Step[] };
  know: { title: string; items: string[] };
  contact: {
    kicker: string;
    title: string;
    text: string;
    whatsapp: string;
    call: string;
    guideLabel: string;
    addressLabel: string;
    mapLink: string;
    languagesLabel: string;
    languages: string;
    responseLabel: string;
    response: string;
  };
  footer: { tagline: string; built: string };
};

const en: Copy = {
  htmlLang: "en",
  meta: {
    title: "Roshen — Local Guide in Sigiriya & Pidurangala, Sri Lanka",
    description:
      "Private tours around Sigiriya with Roshen, a guide born at the foot of Pidurangala Rock: sunrise hikes, Lion Rock, Thalkote Wewa lake, hidden local spots, home cooking class and accommodation.",
  },
  nav: { tours: "Tours", gallery: "Gallery", about: "About", how: "Booking", contact: "Contact" },
  langPicker: "Language",
  hero: {
    eyebrow: "Sigiriya · Pidurangala · Sri Lanka",
    title: "Your local guide in Sigiriya",
    subtitle:
      "I grew up at the foot of Pidurangala Rock. Sunrise on the rocks, hidden jungle spots, evenings at the lake and rice & curry we cook together — planned around you, not around a bus timetable.",
    primary: "Message on WhatsApp",
    secondary: "See the tours",
    badges: ["Local from Sigiriya", "Small groups only", "Pick-up included", "Pay after the tour"],
  },
  video: {
    kicker: "Video",
    title: "A moment out here",
    text: "Filmed on one of the rocks above the village — this is the everyday view we walk to.",
    unmute: "Sound on",
    mute: "Sound off",
  },
  about: {
    kicker: "About",
    title: "Ayubowan — I'm Roshen",
    paragraphs: [
      "I was born and raised right here in Sigiriya, in a village at the foot of the rocks. I grew up climbing these boulders, walking the jungle paths and swimming in the old tanks around them.",
      "What I offer is not a package tour. It is a day in my home area at your pace: the viewpoint without the crowd, the tea shop the buses drive past, the lake at sunset, a family kitchen in the evening.",
      "I guide in Sinhala and English, I know what time of day each place is at its best, and I organise everything around it — a room for the night, a tuk-tuk, a driver to your next stop.",
    ],
    quote: "If you leave feeling like you visited friends, I did my job.",
    facts: [
      { label: "Guiding area", value: "Sigiriya & Pidurangala" },
      { label: "Guiding since", value: "Grew up on these rocks" },
      { label: "Group size", value: "1–6 people" },
    ],
  },
  tours: {
    kicker: "What we can do",
    title: "Tours & experiences",
    intro:
      "Everything here can be combined into a half day, a full day or several days. Tell me how much time you have and what you like — I will build the route.",
    items: [
      {
        title: "Pidurangala sunrise hike",
        text: "Forty-five minutes up in the dark, then the best free view of Lion Rock there is. We start around 5 am with a torch and water, and usually the village dogs come along.",
        meta: "2.5–3 h · easy climb, short rock scramble at the top",
        tag: "Most loved",
      },
      {
        title: "Sigiriya Lion Rock",
        text: "The UNESCO rock fortress: frescoes, the mirror wall, the lion paws and 1,200 steps. I plan the timing so you miss the worst heat and the tour-bus wave, and tell you the story on the way up.",
        meta: "3–4 h · entrance ticket not included",
      },
      {
        title: "Thalkote Wewa lake",
        text: "An old reservoir ten minutes from the village. Water buffalo, herons, paddy fields and a sunset you will have almost to yourself. The best way to end a long day.",
        meta: "2–3 h · late afternoon into sunset",
      },
      {
        title: "Hidden gems & local spots",
        text: "Forest caves, boulder viewpoints, wild honey in the trees, a monastery nobody stops at, tea at a village shop. This is where I take my own friends.",
        meta: "half day · on foot and by tuk-tuk",
        tag: "Off the map",
      },
      {
        title: "Cooking class at my home",
        text: "First we collect what we need from the garden or the village market, then we cook rice & curry, coconut sambol, dhal and roti on a firewood stove. Afterwards we eat together.",
        meta: "3–4 h · vegetarian and vegan easy",
      },
      {
        title: "Stay & getting around",
        text: "Homestays and guesthouses in Sigiriya and Pidurangala for every budget, a tuk-tuk or driver for day trips, transfers on to Kandy, Ella, Trincomalee or the airport — booked with people I know.",
        meta: "arranged before you arrive",
      },
    ],
    priceNote:
      "No fixed package prices. Tell me your group size and your days and you get a fair local price on WhatsApp. You pay in cash after the tour — no deposit.",
    cta: "Ask about a tour",
  },
  gallery: {
    kicker: "Impressions",
    title: "Sigiriya, the way I see it",
    hint: "Tap a photo to enlarge",
    close: "Close",
    captions: {
      "roshen-boulder": "On the boulders above the village",
      "pidurangala-sunset-dog": "Sunset on Pidurangala — the dogs always join",
      "lion-rock-view": "Lion Rock, seen from Pidurangala",
      "thalkote-wewa": "Paddy fields on the way to Thalkote Wewa",
      "sunrise-meditation": "A quiet morning above the jungle",
      "sunset-guests": "Guests waiting for the last light",
      "lotus-blessing": "A lotus blessing before we set off",
      "roshen-guest-field": "Out in the fields with a guest",
      "guesthouse-hangout": "Afternoon at the guesthouse",
      "village-evening": "Evening with friends in the village",
      "wild-honey": "Wild honeycomb in the jungle",
      "rock-puppies": "Puppies on the rock trail",
      "jungle-mushrooms": "Mushrooms after the rain",
      "rock-lizard": "A lizard warming up on the rock",
    },
  },
  how: {
    kicker: "Booking",
    title: "How it works",
    steps: [
      { title: "Write me", text: "WhatsApp is fastest. English or Sinhala, and a voice message is completely fine." },
      { title: "Tell me your days", text: "When you arrive, how long you stay, what you are into: sunrise, jungle, food, quiet places." },
      { title: "I plan the route", text: "You get a suggestion with times and a price. We change it until it fits you." },
      { title: "I pick you up", text: "From your hotel in Sigiriya or Dambulla. You pay in cash afterwards." },
    ],
  },
  know: {
    title: "Good to know",
    items: [
      "Sunrise on Pidurangala is around 5:45 am — we leave at 5:00 am.",
      "Wear shoes with grip; the last part of Pidurangala is a rock scramble.",
      "Pidurangala entrance is paid at the temple. The Lion Rock ticket is separate and a lot more expensive.",
      "Shoulders and knees covered at temples — I will remind you before we leave.",
      "Bring at least 1.5 litres of water per person. It is hot and humid.",
      "Rainy season means leeches on jungle paths. Bring socks, I bring the salt.",
    ],
  },
  contact: {
    kicker: "Contact",
    title: "Let's plan your days in Sigiriya",
    text: "Write any time — I normally reply within a few hours.",
    whatsapp: "Chat on WhatsApp",
    call: "Call directly",
    guideLabel: "Guide",
    addressLabel: "Based in",
    mapLink: "Open in Google Maps",
    languagesLabel: "Languages",
    languages: "Sinhala, English",
    responseLabel: "Reply time",
    response: "Usually within a few hours",
  },
  footer: {
    tagline: "Private guiding around Sigiriya, Pidurangala and Thalkote Wewa.",
    built: "All photos taken on tours around Sigiriya.",
  },
};

const de: Copy = {
  htmlLang: "de",
  meta: {
    title: "Roshen — Lokaler Guide in Sigiriya & Pidurangala, Sri Lanka",
    description:
      "Private Touren rund um Sigiriya mit Roshen, aufgewachsen am Fuß des Pidurangala-Felsens: Sonnenaufgangs-Wanderung, Lion Rock, Thalkote-Wewa-See, versteckte lokale Plätze, gemeinsamer Kochkurs und Unterkunft.",
  },
  nav: { tours: "Touren", gallery: "Galerie", about: "Über mich", how: "Buchung", contact: "Kontakt" },
  langPicker: "Sprache",
  hero: {
    eyebrow: "Sigiriya · Pidurangala · Sri Lanka",
    title: "Dein lokaler Guide in Sigiriya",
    subtitle:
      "Ich bin am Fuß des Pidurangala-Felsens aufgewachsen. Sonnenaufgang auf den Felsen, versteckte Dschungelplätze, Abende am See und Rice & Curry, das wir zusammen kochen — geplant nach dir, nicht nach Busfahrplan.",
    primary: "Auf WhatsApp schreiben",
    secondary: "Touren ansehen",
    badges: ["Einheimischer aus Sigiriya", "Nur kleine Gruppen", "Abholung inklusive", "Zahlung nach der Tour"],
  },
  video: {
    kicker: "Video",
    title: "Ein Moment hier draußen",
    text: "Aufgenommen auf einem der Felsen über dem Dorf — das ist der ganz normale Ausblick, zu dem wir laufen.",
    unmute: "Ton an",
    mute: "Ton aus",
  },
  about: {
    kicker: "Über mich",
    title: "Ayubowan — ich bin Roshen",
    paragraphs: [
      "Ich bin hier in Sigiriya geboren und aufgewachsen, in einem Dorf am Fuß der Felsen. Ich bin auf diesen Felsen geklettert, über die Dschungelpfade gelaufen und in den alten Stauseen drumherum geschwommen.",
      "Was ich anbiete, ist keine Pauschaltour. Es ist ein Tag in meiner Heimat, in deinem Tempo: der Aussichtspunkt ohne Menschenmasse, der Teeladen, an dem die Busse vorbeifahren, der See bei Sonnenuntergang, abends eine Familienküche.",
      "Ich führe auf Singhalesisch und Englisch, ich weiß, zu welcher Tageszeit welcher Ort am schönsten ist — und organisiere alles drumherum: ein Zimmer für die Nacht, ein Tuk-Tuk, einen Fahrer zum nächsten Ort.",
    ],
    quote: "Wenn du abreist und das Gefühl hast, Freunde besucht zu haben, habe ich meinen Job gut gemacht.",
    facts: [
      { label: "Tourengebiet", value: "Sigiriya & Pidurangala" },
      { label: "Ortskenntnis", value: "Auf diesen Felsen groß geworden" },
      { label: "Gruppengröße", value: "1–6 Personen" },
    ],
  },
  tours: {
    kicker: "Was möglich ist",
    title: "Touren & Erlebnisse",
    intro:
      "Alles hier lässt sich zu einem halben Tag, einem ganzen Tag oder mehreren Tagen kombinieren. Sag mir, wie viel Zeit du hast und worauf du Lust hast — ich baue die Route.",
    items: [
      {
        title: "Pidurangala bei Sonnenaufgang",
        text: "45 Minuten im Dunkeln nach oben, und dann der beste kostenlose Blick auf den Lion Rock, den es gibt. Wir starten gegen 5 Uhr mit Taschenlampe und Wasser — meistens kommen die Dorfhunde mit.",
        meta: "2,5–3 Std. · leichter Aufstieg, oben kurze Kletterpassage",
        tag: "Am beliebtesten",
      },
      {
        title: "Sigiriya Lion Rock",
        text: "Die UNESCO-Felsenfestung: Fresken, Spiegelwand, Löwentatzen und 1.200 Stufen. Ich plane die Uhrzeit so, dass du die größte Hitze und die Reisebus-Welle vermeidest — und erzähle dir die Geschichte auf dem Weg nach oben.",
        meta: "3–4 Std. · Eintrittsticket nicht enthalten",
      },
      {
        title: "Thalkote-Wewa-See",
        text: "Ein alter Stausee zehn Minuten vom Dorf. Wasserbüffel, Reiher, Reisfelder und ein Sonnenuntergang, den du fast für dich allein hast. Der schönste Abschluss für einen langen Tag.",
        meta: "2–3 Std. · später Nachmittag bis Sonnenuntergang",
      },
      {
        title: "Hidden Gems & lokale Plätze",
        text: "Waldhöhlen, Aussichtsfelsen, wilder Honig in den Bäumen, ein Kloster, an dem niemand hält, Tee im Dorfladen. Genau dahin nehme ich meine eigenen Freunde mit.",
        meta: "halber Tag · zu Fuß und mit dem Tuk-Tuk",
        tag: "Nicht im Reiseführer",
      },
      {
        title: "Kochkurs bei mir zu Hause",
        text: "Zuerst holen wir, was wir brauchen — aus dem Garten oder vom Dorfmarkt. Dann kochen wir Rice & Curry, Kokos-Sambol, Dhal und Roti auf dem Holzofen. Danach essen wir zusammen.",
        meta: "3–4 Std. · vegetarisch und vegan problemlos",
      },
      {
        title: "Unterkunft & Transport",
        text: "Homestays und Guesthouses in Sigiriya und Pidurangala für jedes Budget, Tuk-Tuk oder Fahrer für Tagesausflüge, Weiterfahrt nach Kandy, Ella, Trincomalee oder zum Flughafen — gebucht bei Leuten, die ich kenne.",
        meta: "wird vor deiner Ankunft organisiert",
      },
    ],
    priceNote:
      "Keine festen Pauschalpreise. Sag mir Gruppengröße und Tage, und du bekommst einen fairen lokalen Preis per WhatsApp. Bezahlt wird bar nach der Tour — keine Anzahlung.",
    cta: "Tour anfragen",
  },
  gallery: {
    kicker: "Eindrücke",
    title: "Sigiriya, wie ich es sehe",
    hint: "Foto antippen zum Vergrößern",
    close: "Schließen",
    captions: {
      "roshen-boulder": "Auf den Felsen über dem Dorf",
      "pidurangala-sunset-dog": "Sonnenuntergang auf Pidurangala — die Hunde sind immer dabei",
      "lion-rock-view": "Der Lion Rock, gesehen vom Pidurangala",
      "thalkote-wewa": "Reisfelder auf dem Weg zum Thalkote Wewa",
      "sunrise-meditation": "Ein stiller Morgen über dem Dschungel",
      "sunset-guests": "Gäste warten auf das letzte Licht",
      "lotus-blessing": "Ein Lotus-Segen, bevor es losgeht",
      "roshen-guest-field": "Draußen in den Feldern mit einem Gast",
      "guesthouse-hangout": "Nachmittag im Guesthouse",
      "village-evening": "Abend mit Freunden im Dorf",
      "wild-honey": "Wilde Honigwabe im Dschungel",
      "rock-puppies": "Welpen am Felsenweg",
      "jungle-mushrooms": "Pilze nach dem Regen",
      "rock-lizard": "Eine Echse wärmt sich auf dem Fels",
    },
  },
  how: {
    kicker: "Buchung",
    title: "So läuft es ab",
    steps: [
      { title: "Schreib mir", text: "WhatsApp geht am schnellsten. Auf Englisch oder Singhalesisch — eine Sprachnachricht ist völlig okay." },
      { title: "Sag mir deine Tage", text: "Wann du ankommst, wie lange du bleibst, worauf du Lust hast: Sonnenaufgang, Dschungel, Essen, ruhige Orte." },
      { title: "Ich plane die Route", text: "Du bekommst einen Vorschlag mit Zeiten und Preis. Wir ändern ihn, bis er passt." },
      { title: "Ich hole dich ab", text: "Von deinem Hotel in Sigiriya oder Dambulla. Bezahlt wird bar danach." },
    ],
  },
  know: {
    title: "Gut zu wissen",
    items: [
      "Sonnenaufgang auf dem Pidurangala ist gegen 5:45 Uhr — wir starten um 5:00 Uhr.",
      "Zieh Schuhe mit Grip an; das letzte Stück am Pidurangala ist Kletterei über Felsen.",
      "Der Pidurangala-Eintritt wird am Tempel bezahlt. Das Lion-Rock-Ticket ist separat und deutlich teurer.",
      "In Tempeln Schultern und Knie bedeckt — ich erinnere dich vorher daran.",
      "Nimm mindestens 1,5 Liter Wasser pro Person mit. Es ist heiß und schwül.",
      "In der Regenzeit gibt es Blutegel auf den Dschungelpfaden. Bring Socken mit, das Salz bringe ich.",
    ],
  },
  contact: {
    kicker: "Kontakt",
    title: "Lass uns deine Tage in Sigiriya planen",
    text: "Schreib jederzeit — normalerweise antworte ich innerhalb weniger Stunden.",
    whatsapp: "Auf WhatsApp schreiben",
    call: "Direkt anrufen",
    guideLabel: "Guide",
    addressLabel: "Standort",
    mapLink: "In Google Maps öffnen",
    languagesLabel: "Sprachen",
    languages: "Singhalesisch, Englisch",
    responseLabel: "Antwortzeit",
    response: "Meist innerhalb weniger Stunden",
  },
  footer: {
    tagline: "Private Touren rund um Sigiriya, Pidurangala und den Thalkote Wewa.",
    built: "Alle Fotos sind auf Touren rund um Sigiriya entstanden.",
  },
};

const si: Copy = {
  htmlLang: "si",
  meta: {
    title: "රොෂෙන් — සීගිරිය සහ පිදුරංගල ප්‍රාදේශීය මාර්ගෝපදේශක",
    description:
      "පිදුරංගල පාමුල හැදී වැඩුණු රොෂෙන් සමඟ සීගිරිය අවට පෞද්ගලික චාරිකා: හිරු උදාව, සීගිරි ලෙන්ගල, තල්කොටේ වැව, සැඟවුණු ස්ථාන, එකට උයන පිසින පන්තිය සහ නවාතැන් පහසුකම්.",
  },
  nav: { tours: "චාරිකා", gallery: "ඡායාරූප", about: "මා ගැන", how: "වෙන් කරගැනීම", contact: "සම්බන්ධ වන්න" },
  langPicker: "භාෂාව",
  hero: {
    eyebrow: "සීගිරිය · පිදුරංගල · ශ්‍රී ලංකා",
    title: "සීගිරියේ ඔබේ ප්‍රාදේශීය මාර්ගෝපදේශකයා",
    subtitle:
      "මම හැදී වැඩුණේ පිදුරංගල පර්වතයේ පාමුලයි. ගල් මත හිරු උදාව, සැඟවුණු වන ස්ථාන, වැව අද්දර සැඳෑ සහ එකට උයන බත් සහ ව්‍යාංජන — බස් කාලසටහනකට නොව, ඔබට ගැලපෙන ලෙස සැලසුම් කරයි.",
    primary: "WhatsApp හරහා පණිවිඩයක්",
    secondary: "චාරිකා බලන්න",
    badges: ["සීගිරියේ උපන් අයෙක්", "කුඩා කණ්ඩායම් පමණයි", "රැගෙන යාම ඇතුළත්", "චාරිකාවෙන් පසු ගෙවීම"],
  },
  video: {
    kicker: "වීඩියෝ",
    title: "මෙහි එක් මොහොතක්",
    text: "ගමට ඉහළින් ඇති ගලක් මතින් රූගත කළා — අප ඇවිද යන්නේ මේ දර්ශනය බලන්නයි.",
    unmute: "ශබ්දය ක්‍රියාත්මකයි",
    mute: "ශබ්දය නවතන්න",
  },
  about: {
    kicker: "මා ගැන",
    title: "ආයුබෝවන් — මම රොෂෙන්",
    paragraphs: [
      "මම උපන්නේත් හැදී වැඩුණේත් මෙහි, සීගිරියේ, ගල් පර්වත පාමුල පිහිටි කුඩා ගමකයි. මම හැදී වැඩුණේ මේ ගල් නගිමින්, වන පාරවල් දිගේ ඇවිදිමින්, ඒ අවට පැරණි වැව්වල පිහිනමින්.",
      "මා ලබා දෙන්නේ සාමාන්‍ය සංචාරක පැකේජයක් නොවේ. එය ඔබේ වේගයට ගැලපෙන ලෙස මගේ ගම්බද ප්‍රදේශයේ ගත කරන දිනයකි: සෙනඟක් නැති දර්ශන ස්ථානය, බස් රථ පසුකර යන තේ කඩය, හිරු බැස යන වේලාවේ වැව, සවස් වරුවේ ගමේ මුළුතැන්ගෙයක්.",
      "මම සිංහල සහ ඉංග්‍රීසි භාෂාවෙන් මඟ පෙන්වමි. කුමන ස්ථානය කුමන වේලාවට හොඳම දැයි මම දනිමි — ඒ වටා අනෙක් සියල්ල සකසමි: රාත්‍රියට කාමරයක්, ටුක් ටුක් රථයක්, ඔබේ මීළඟ ගමනට රියදුරෙක්.",
    ],
    quote: "ඔබ යන්නේ මිතුරන් බැලීමට පැමිණි හැඟීමෙන් නම්, මගේ රාජකාරිය හරි.",
    facts: [
      { label: "චාරිකා ප්‍රදේශය", value: "සීගිරිය සහ පිදුරංගල" },
      { label: "ප්‍රදේශය", value: "මේ ගල් අතර හැදුණු කෙනෙක්" },
      { label: "කණ්ඩායම", value: "1–6 දෙනෙක්" },
    ],
  },
  tours: {
    kicker: "අපට කළ හැක්කේ",
    title: "චාරිකා සහ අත්දැකීම්",
    intro:
      "මේ සියල්ල අඩක් දිනයක්, පූර්ණ දිනයක් හෝ දින කිහිපයක් ලෙස එකතු කළ හැක. ඔබට ඇති කාලය සහ කැමැත්ත කියන්න — මම මාර්ගය සකසමි.",
    items: [
      {
        title: "පිදුරංගල හිරු උදාව",
        text: "අඳුරේ මිනිත්තු 45ක නැගීමක්, ඉන්පසු සීගිරි ලෙන්ගල දෙස ඇති හොඳම නොමිලේ දර්ශනය. අපි උදෑසන 5ට පමණ ටෝච් එකක් සහ වතුරත් අරගෙන පිටත් වෙනවා — බොහෝ විට ගමේ බල්ලෝත් එනවා.",
        meta: "පැය 2.5–3 · පහසු නැගීමක්, ඉහළ කොටසේ කෙටි ගල් නැගීමක්",
        tag: "වඩාත් ජනප්‍රිය",
      },
      {
        title: "සීගිරි ලෙන්ගල",
        text: "යුනෙස්කෝ පාෂාණ බලකොටුව: සිතුවම්, කැටපත් පවුර, සිංහ පාද සහ පඩිපෙළ 1,200ක්. දැඩි රස්නය සහ සංචාරක බස් රැල්ල මගහරින ලෙස වේලාව සකසමි, නැගීමේදී ඉතිහාසය කියා දෙමි.",
        meta: "පැය 3–4 · පිවිසුම් ටිකට්පත ඇතුළත් නොවේ",
      },
      {
        title: "තල්කොටේ වැව",
        text: "ගමේ සිට මිනිත්තු දහයක් දුරින් පැරණි වැවක්. මී හරක්, කොකුන්, කුඹුරු සහ ඔබට පමණක් වාගේ හිමි වන හිරු බැසීමක්. දිගු දිනයක් අවසන් කිරීමට හොඳම ක්‍රමය.",
        meta: "පැය 2–3 · සවස සිට හිරු බැසීම දක්වා",
      },
      {
        title: "සැඟවුණු ස්ථාන සහ ගමේ තැන්",
        text: "වන ලෙන්, ගල් මත දර්ශන ස්ථාන, ගස්වල වල් මී පැණි, කිසිවෙක් නොනවතින පන්සලක්, ගමේ කඩයක තේ එකක්. මගේ මිතුරන් රැගෙන යන්නේ මෙතැනටයි.",
        meta: "අඩක් දිනයක් · පයින් සහ ටුක් ටුක් රථයෙන්",
        tag: "සිතියමේ නැති",
      },
      {
        title: "මගේ නිවසේ උයන පිසින පන්තිය",
        text: "මුලින්ම වත්තෙන් හෝ ගමේ වෙළඳපොළෙන් අවශ්‍ය දේ ගන්නවා, ඉන්පසු දර ලිපේ බත්, ව්‍යාංජන, පොල් සම්බෝල, පරිප්පු සහ රොටී උයනවා. පසුව අපි එකට කනවා.",
        meta: "පැය 3–4 · නිර්මාංශ සහ වීගන් පහසුයි",
      },
      {
        title: "නවාතැන් සහ ගමන් පහසුකම්",
        text: "සීගිරිය සහ පිදුරංගල ප්‍රදේශයේ සෑම මුදලකට ගැලපෙන හෝම්ස්ටේ සහ ගෙස්ට් හවුස්, දින චාරිකා සඳහා ටුක් ටුක් හෝ රියදුරෙක්, මහනුවර, ඇල්ල, ත්‍රිකුණාමලය හෝ ගුවන්තොටුපළ දක්වා ගමන් — මා දන්නා අය සමඟ සකසමි.",
        meta: "ඔබ පැමිණීමට පෙර සකසනු ලැබේ",
      },
    ],
    priceNote:
      "ස්ථිර පැකේජ මිල නැත. කණ්ඩායමේ ප්‍රමාණය සහ දින කියන්න, WhatsApp හරහා සාධාරණ ප්‍රාදේශීය මිලක් ලැබෙනවා. චාරිකාවෙන් පසු මුදලින් ගෙවන්න — කලින් තැන්පතුවක් නැත.",
    cta: "චාරිකාවක් ගැන විමසන්න",
  },
  gallery: {
    kicker: "දසුන්",
    title: "මම දකින සීගිරිය",
    hint: "විශාල කිරීමට ඡායාරූපයක් ස්පර්ශ කරන්න",
    close: "වසන්න",
    captions: {
      "roshen-boulder": "ගමට ඉහළින් ඇති ගල් මත",
      "pidurangala-sunset-dog": "පිදුරංගලේ හිරු බැසීම — බල්ලෝ හැම විටම එනවා",
      "lion-rock-view": "පිදුරංගලින් දිස්වන සීගිරි ලෙන්ගල",
      "thalkote-wewa": "තල්කොටේ වැව දෙසට යන මඟ කුඹුරු",
      "sunrise-meditation": "වනාන්තරයට ඉහළින් නිහඬ උදෑසනක්",
      "sunset-guests": "අවසන් එළිය බලා සිටින අමුත්තෝ",
      "lotus-blessing": "පිටත් වීමට පෙර නෙළුම් ආශිර්වාදයක්",
      "roshen-guest-field": "අමුත්තෙකු සමඟ කුඹුරු අස්සේ",
      "guesthouse-hangout": "ගෙස්ට් හවුස් එකේ දහවල් වේලාවක්",
      "village-evening": "ගමේ මිතුරන් සමඟ සැඳෑවක්",
      "wild-honey": "වනාන්තරයේ වල් මී වදයක්",
      "rock-puppies": "ගල් පාරේ බලු පැටවු",
      "jungle-mushrooms": "වැස්සෙන් පසු හතු",
      "rock-lizard": "ගල මත රත් වන කටුස්සෙක්",
    },
  },
  how: {
    kicker: "වෙන් කරගැනීම",
    title: "එය ක්‍රියා කරන ආකාරය",
    steps: [
      { title: "මට ලියන්න", text: "WhatsApp වේගවත්ම ක්‍රමයයි. සිංහල හෝ ඉංග්‍රීසි — හඬ පණිවිඩයක් වුවත් කමක් නැහැ." },
      { title: "දින කියන්න", text: "ඔබ එන දිනය, රැඳී සිටින කාලය සහ කැමති දේ: හිරු උදාව, වනාන්තරය, කෑම, නිහඬ ස්ථාන." },
      { title: "මම මාර්ගය සකසමි", text: "වේලාවන් සහ මිලක් සහිත යෝජනාවක් ලැබෙනවා. ගැලපෙන තුරු අපි එය වෙනස් කරමු." },
      { title: "මම ඔබව රැගෙන යනවා", text: "සීගිරියේ හෝ දඹුල්ලේ ඔබේ හෝටලයෙන්. පසුව මුදලින් ගෙවන්න." },
    ],
  },
  know: {
    title: "දැනගත යුතු දේ",
    items: [
      "පිදුරංගලේ හිරු උදාව උදෑසන 5:45ට පමණ — අපි 5:00ට පිටත් වෙනවා.",
      "හොඳ ග්‍රිප් ඇති සපත්තු අඳින්න; පිදුරංගලේ අවසන් කොටස ගල් නැගීමකි.",
      "පිදුරංගල පිවිසුම් ගාස්තුව පන්සලේදී ගෙවනවා. සීගිරි ටිකට් එක වෙනම සහ බෙහෙවින් වැඩියි.",
      "පන්සල්වලදී උරහිස් සහ දණහිස් වැසී තිබිය යුතුයි — පිටත් වීමට පෙර මම මතක් කරමි.",
      "එක් අයෙකුට අවම වශයෙන් ලීටර් 1.5ක වතුර ගෙන එන්න. උණුසුම සහ තෙතමනය වැඩියි.",
      "වැසි කාලයේ වන පාරවල කූඹි කූඩැල්ලෝ සිටිනවා. මේස් ගෙන එන්න, ලුණු මම ගෙනෙනවා.",
    ],
  },
  contact: {
    kicker: "සම්බන්ධ වන්න",
    title: "සීගිරියේ ඔබේ දින සැලසුම් කරමු",
    text: "ඕනෑම වේලාවක ලියන්න — සාමාන්‍යයෙන් පැය කිහිපයක් ඇතුළත පිළිතුරු දෙනවා.",
    whatsapp: "WhatsApp හරහා කතා කරන්න",
    call: "කෙලින්ම අමතන්න",
    guideLabel: "මාර්ගෝපදේශක",
    addressLabel: "ප්‍රදේශය",
    mapLink: "Google Maps හි විවෘත කරන්න",
    languagesLabel: "භාෂා",
    languages: "සිංහල, ඉංග්‍රීසි",
    responseLabel: "පිළිතුරු කාලය",
    response: "සාමාන්‍යයෙන් පැය කිහිපයක් ඇතුළත",
  },
  footer: {
    tagline: "සීගිරිය, පිදුරංගල සහ තල්කොටේ වැව අවට පෞද්ගලික මාර්ගෝපදේශනය.",
    built: "සියලුම ඡායාරූප සීගිරිය අවට චාරිකාවලදී ගත් ඒවාය.",
  },
};

const hi: Copy = {
  htmlLang: "hi",
  meta: {
    title: "रोशन — सिगिरिया और पिदुरंगला, श्रीलंका के स्थानीय गाइड",
    description:
      "पिदुरंगला चट्टान की तलहटी में पले-बढ़े रोशन के साथ सिगिरिया की निजी यात्राएँ: सूर्योदय ट्रेक, लायन रॉक, थलकोटे वेवा झील, छिपी हुई जगहें, साथ में खाना बनाना और ठहरने का इंतज़ाम।",
  },
  nav: { tours: "यात्राएँ", gallery: "गैलरी", about: "मेरे बारे में", how: "बुकिंग", contact: "संपर्क" },
  langPicker: "भाषा",
  hero: {
    eyebrow: "सिगिरिया · पिदुरंगला · श्रीलंका",
    title: "सिगिरिया में आपके स्थानीय गाइड",
    subtitle:
      "मैं पिदुरंगला चट्टान की तलहटी में बड़ा हुआ हूँ। चट्टानों पर सूर्योदय, जंगल की छिपी जगहें, झील किनारे शामें और साथ मिलकर बनाया चावल-करी — सब आपके हिसाब से, किसी बस टाइमटेबल के हिसाब से नहीं।",
    primary: "WhatsApp पर संदेश भेजें",
    secondary: "यात्राएँ देखें",
    badges: ["सिगिरिया का स्थानीय निवासी", "सिर्फ़ छोटे समूह", "पिक-अप शामिल", "यात्रा के बाद भुगतान"],
  },
  video: {
    kicker: "वीडियो",
    title: "यहाँ का एक पल",
    text: "गाँव के ऊपर की एक चट्टान से लिया गया — यही वह नज़ारा है जहाँ तक हम पैदल जाते हैं।",
    unmute: "आवाज़ चालू",
    mute: "आवाज़ बंद",
  },
  about: {
    kicker: "मेरे बारे में",
    title: "आयुबोवन — मैं रोशन हूँ",
    paragraphs: [
      "मैं यहीं सिगिरिया में पैदा हुआ और बड़ा हुआ हूँ, चट्टानों की तलहटी के एक गाँव में। मैं इन्हीं चट्टानों पर चढ़ते, जंगल की पगडंडियों पर चलते और आसपास के पुराने तालाबों में तैरते हुए बड़ा हुआ हूँ।",
      "मैं जो देता हूँ वह कोई पैकेज टूर नहीं है। यह मेरे इलाके में बिताया गया एक दिन है, आपकी रफ़्तार से: भीड़ के बिना व्यू पॉइंट, वह चाय की दुकान जिसके आगे से बसें निकल जाती हैं, ढलते सूरज में झील, और शाम को एक घर की रसोई।",
      "मैं सिंहली और अंग्रेज़ी में गाइड करता हूँ। मुझे पता है कौन-सी जगह किस समय सबसे सुंदर लगती है — और मैं बाकी सब उसी के आसपास जुटा देता हूँ: रात के लिए कमरा, टुक-टुक, अगले पड़ाव तक ड्राइवर।",
    ],
    quote: "अगर आप यहाँ से यह महसूस करते हुए जाएँ कि आप दोस्तों से मिलकर लौटे हैं, तो मेरा काम पूरा हुआ।",
    facts: [
      { label: "यात्रा क्षेत्र", value: "सिगिरिया और पिदुरंगला" },
      { label: "इलाक़े की जानकारी", value: "इन्हीं चट्टानों पर बड़ा हुआ" },
      { label: "समूह", value: "1–6 लोग" },
    ],
  },
  tours: {
    kicker: "हम क्या कर सकते हैं",
    title: "यात्राएँ और अनुभव",
    intro:
      "यहाँ दी गई हर चीज़ को आधे दिन, पूरे दिन या कई दिनों में जोड़ा जा सकता है। बताइए आपके पास कितना समय है और क्या पसंद है — रास्ता मैं बना दूँगा।",
    items: [
      {
        title: "पिदुरंगला सूर्योदय ट्रेक",
        text: "अँधेरे में पैंतालीस मिनट की चढ़ाई, और फिर लायन रॉक का सबसे बेहतरीन मुफ़्त नज़ारा। हम सुबह लगभग 5 बजे टॉर्च और पानी लेकर निकलते हैं — अक्सर गाँव के कुत्ते भी साथ आ जाते हैं।",
        meta: "2.5–3 घंटे · आसान चढ़ाई, ऊपर थोड़ी चट्टान चढ़नी पड़ती है",
        tag: "सबसे लोकप्रिय",
      },
      {
        title: "सिगिरिया लायन रॉक",
        text: "यूनेस्को का चट्टानी क़िला: भित्तिचित्र, मिरर वॉल, शेर के पंजे और 1,200 सीढ़ियाँ। मैं समय ऐसा तय करता हूँ कि सबसे तेज़ गर्मी और टूर बसों की भीड़ से बचा जा सके, और ऊपर चढ़ते हुए पूरी कहानी सुनाता हूँ।",
        meta: "3–4 घंटे · प्रवेश टिकट शामिल नहीं",
      },
      {
        title: "थलकोटे वेवा झील",
        text: "गाँव से दस मिनट दूर एक पुराना जलाशय। भैंसें, बगुले, धान के खेत और एक ऐसा सूर्यास्त जो लगभग सिर्फ़ आपका होता है। लंबे दिन को ख़त्म करने का सबसे अच्छा तरीक़ा।",
        meta: "2–3 घंटे · दोपहर बाद से सूर्यास्त तक",
      },
      {
        title: "छिपी हुई जगहें और स्थानीय अड्डे",
        text: "जंगल की गुफाएँ, चट्टानों के व्यू पॉइंट, पेड़ों पर जंगली शहद, एक ऐसा मठ जहाँ कोई नहीं रुकता, गाँव की दुकान पर चाय। अपने दोस्तों को मैं यहीं ले जाता हूँ।",
        meta: "आधा दिन · पैदल और टुक-टुक से",
        tag: "नक़्शे से बाहर",
      },
      {
        title: "मेरे घर पर कुकिंग क्लास",
        text: "पहले हम बग़ीचे या गाँव के बाज़ार से ज़रूरी सामान लाते हैं, फिर लकड़ी के चूल्हे पर चावल-करी, नारियल सांबोल, दाल और रोटी बनाते हैं। उसके बाद हम साथ बैठकर खाते हैं।",
        meta: "3–4 घंटे · शाकाहारी और वीगन आसानी से",
      },
      {
        title: "ठहरना और आना-जाना",
        text: "सिगिरिया और पिदुरंगला में हर बजट के होमस्टे और गेस्टहाउस, दिन की यात्राओं के लिए टुक-टुक या ड्राइवर, कैंडी, एला, त्रिंकोमाली या एयरपोर्ट तक ट्रांसफ़र — सब मेरे जान-पहचान वालों के साथ।",
        meta: "आपके पहुँचने से पहले तय हो जाता है",
      },
    ],
    priceNote:
      "कोई तय पैकेज क़ीमत नहीं है। समूह का आकार और दिन बताइए, WhatsApp पर आपको एक वाजिब स्थानीय क़ीमत मिल जाएगी। भुगतान यात्रा के बाद नक़द — कोई अग्रिम राशि नहीं।",
    cta: "यात्रा के बारे में पूछें",
  },
  gallery: {
    kicker: "झलकियाँ",
    title: "सिगिरिया, जैसा मैं देखता हूँ",
    hint: "बड़ा करने के लिए फ़ोटो पर टैप करें",
    close: "बंद करें",
    captions: {
      "roshen-boulder": "गाँव के ऊपर की चट्टानों पर",
      "pidurangala-sunset-dog": "पिदुरंगला पर सूर्यास्त — कुत्ते हमेशा साथ होते हैं",
      "lion-rock-view": "पिदुरंगला से दिखता लायन रॉक",
      "thalkote-wewa": "थलकोटे वेवा के रास्ते में धान के खेत",
      "sunrise-meditation": "जंगल के ऊपर एक शांत सुबह",
      "sunset-guests": "आख़िरी रोशनी का इंतज़ार करते मेहमान",
      "lotus-blessing": "निकलने से पहले कमल का आशीर्वाद",
      "roshen-guest-field": "एक मेहमान के साथ खेतों में",
      "guesthouse-hangout": "गेस्टहाउस पर दोपहर",
      "village-evening": "गाँव में दोस्तों के साथ शाम",
      "wild-honey": "जंगल में जंगली शहद का छत्ता",
      "rock-puppies": "चट्टानी रास्ते पर पिल्ले",
      "jungle-mushrooms": "बारिश के बाद उगे मशरूम",
      "rock-lizard": "चट्टान पर धूप सेंकती छिपकली",
    },
  },
  how: {
    kicker: "बुकिंग",
    title: "यह कैसे काम करता है",
    steps: [
      { title: "मुझे लिखें", text: "WhatsApp सबसे तेज़ है। अंग्रेज़ी या सिंहली में — वॉइस मैसेज भी बिल्कुल ठीक है।" },
      { title: "अपने दिन बताएँ", text: "आप कब पहुँच रहे हैं, कितने दिन रुकेंगे, किसमें दिलचस्पी है: सूर्योदय, जंगल, खाना, शांत जगहें।" },
      { title: "मैं रास्ता बनाता हूँ", text: "आपको समय और क़ीमत के साथ एक सुझाव मिलेगा। जब तक वह सही न लगे, हम उसे बदलते रहेंगे।" },
      { title: "मैं आपको लेने आता हूँ", text: "सिगिरिया या दंबुला में आपके होटल से। भुगतान बाद में नक़द।" },
    ],
  },
  know: {
    title: "जानने योग्य बातें",
    items: [
      "पिदुरंगला पर सूर्योदय लगभग 5:45 बजे होता है — हम 5:00 बजे निकलते हैं।",
      "अच्छी पकड़ वाले जूते पहनें; पिदुरंगला का आख़िरी हिस्सा चट्टान पर चढ़ाई है।",
      "पिदुरंगला का प्रवेश शुल्क मंदिर में दिया जाता है। लायन रॉक का टिकट अलग और काफ़ी महँगा है।",
      "मंदिरों में कंधे और घुटने ढके होने चाहिए — निकलने से पहले मैं याद दिला दूँगा।",
      "प्रति व्यक्ति कम से कम 1.5 लीटर पानी साथ लें। यहाँ गर्मी और उमस रहती है।",
      "बारिश के मौसम में जंगल के रास्तों पर जोंक होती हैं। मोज़े लाइए, नमक मैं लाऊँगा।",
    ],
  },
  contact: {
    kicker: "संपर्क",
    title: "आइए सिगिरिया में आपके दिन तय करें",
    text: "कभी भी लिखें — आमतौर पर मैं कुछ ही घंटों में जवाब देता हूँ।",
    whatsapp: "WhatsApp पर बात करें",
    call: "सीधे कॉल करें",
    guideLabel: "गाइड",
    addressLabel: "स्थान",
    mapLink: "Google Maps में खोलें",
    languagesLabel: "भाषाएँ",
    languages: "सिंहली, अंग्रेज़ी",
    responseLabel: "जवाब का समय",
    response: "आमतौर पर कुछ घंटों में",
  },
  footer: {
    tagline: "सिगिरिया, पिदुरंगला और थलकोटे वेवा के आसपास निजी गाइडिंग।",
    built: "सभी तस्वीरें सिगिरिया के आसपास की यात्राओं में ली गई हैं।",
  },
};

export const DICT: Record<Lang, Copy> = { en, si, hi, de };
