export type Service = {
  slug: string;
  tag: string;
  name: string;
  /** Short one-liner for cards and meta description. */
  summary: string;
  price: string;
  priceValue: string;
  recurring?: boolean;
  timeframe: string;
  /** Longer paragraphs for the detail page body. */
  body: string[];
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "ai-citation-audit",
    tag: "Audit",
    name: "AI Citation Audit",
    summary:
      "A full GEO + AEO audit with a scored 0–100 report and a prioritized fix plan, delivered in 5 days.",
    price: "$1.5k",
    priceValue: "1500",
    timeframe: "5 days",
    body: [
      "The AI Citation Audit tells you exactly where your business stands in AI search today — and what is stopping ChatGPT, Perplexity, Gemini, and Google AI Overviews from citing you. We crawl your site the way an AI engine does, score it across the dimensions that decide citation, and hand you a prioritized roadmap your team (or ours) can execute.",
      "You receive a scored 0–100 GEO report covering AI citability, technical accessibility, schema and structured data, content E-E-A-T, brand authority, and platform readiness for each major engine. Every finding is rated by severity and paired with a concrete fix, so nothing is left as a vague recommendation.",
      "It is the fastest way to understand your AI-search gap before committing to ongoing work, and it doubles as a benchmark you can re-run to measure progress.",
    ],
    bullets: [
      "Citability and schema analysis across key pages",
      "AI crawler and llms.txt access check (GPTBot, ClaudeBot, PerplexityBot)",
      "Platform readiness for ChatGPT, Perplexity, and Gemini",
      "Scored 0–100 report with a prioritized fix roadmap",
    ],
  },
  {
    slug: "geo-ready-websites",
    tag: "Build",
    name: "GEO-Ready Websites",
    summary:
      "A fast, server-rendered website engineered to be found and cited by AI from day one.",
    price: "$12k",
    priceValue: "12000",
    timeframe: "4–8 weeks",
    body: [
      "Most websites are built for people first and crawlers never. A GEO-Ready Website is built for both: a fast, server-rendered site where every page ships full content in its HTML, carries the right structured data, and is written so AI engines can lift clear, accurate answers.",
      "We start with entity and keyword mapping — defining the questions your buyers ask AI and the topics you need to own — then design and build a site that answers them. Every page gets schema markup, a clean heading structure, and answer-first content. We ship llms.txt, a sitemap, and correct crawler access so engines can read everything immediately.",
      "The result is a site that ranks in traditional search and is eligible to be cited in AI answers on launch day, instead of needing a retrofit six months later.",
    ],
    bullets: [
      "Entity and keyword/topic mapping",
      "Server-rendered build with full schema markup",
      "llms.txt, sitemap, and AI crawler access configured",
      "Answer-first content structured for citation",
    ],
  },
  {
    slug: "geo-management",
    tag: "Retainer",
    name: "Ongoing GEO Management",
    summary:
      "We grow and defend your AI visibility every month — for your business or your agency's clients. White-label available.",
    price: "$3k / mo",
    priceValue: "3000",
    recurring: true,
    timeframe: "Monthly",
    body: [
      "AI search is not a one-time fix. Engines re-crawl, competitors publish, and models change which sources they trust. Ongoing GEO Management keeps your business in the answer set month after month through continuous optimization, content, and monitoring.",
      "Each month we publish and refresh answer-first content, extend your schema and technical foundation, and track where and how often AI engines cite you so we can double down on what works. You get a clear report of citations, share of voice, and the work done.",
      "For agencies, the entire retainer is available white-label: we operate behind the scenes and you deliver GEO/AEO to your clients under your own brand, with reporting to match.",
    ],
    bullets: [
      "Monthly optimization and answer-first content",
      "Citation and share-of-voice tracking across engines",
      "Schema and technical upkeep as your site grows",
      "White-label client reporting for agencies",
    ],
  },
];

export function serviceJsonLd(s: Service) {
  const offer: Record<string, unknown> = {
    "@type": "Offer",
    price: s.priceValue,
    priceCurrency: "USD",
  };
  if (s.recurring) {
    offer.priceSpecification = {
      "@type": "UnitPriceSpecification",
      price: s.priceValue,
      priceCurrency: "USD",
      unitText: "MONTH",
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.tag,
    description: s.summary,
    provider: { "@id": "https://gptshopexpert.com/#org" },
    areaServed: "Worldwide",
    offers: offer,
  };
}
