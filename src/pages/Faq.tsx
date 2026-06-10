import Seo, { breadcrumb } from "../components/Seo";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is GEO (Generative Engine Optimization)?",
    a: "Generative Engine Optimization (GEO) is the practice of structuring a website and its content so AI systems — ChatGPT, Perplexity, Google Gemini, and Google AI Overviews — can find, understand, trust, and cite it in their answers. Where traditional SEO optimizes for a ranked list of blue links, GEO optimizes to be the source an AI quotes or recommends.",
  },
  {
    q: "What is AEO (Answer Engine Optimization)?",
    a: "Answer Engine Optimization (AEO) is optimizing content to be the direct answer to a user's question inside answer engines and AI assistants. In practice it means writing clear, self-contained answer blocks, adding FAQ and structured data, and earning the authority signals that make an engine confident enough to surface your answer.",
  },
  {
    q: "How is GEO different from SEO?",
    a: "SEO aims to rank a page in a list of search results; GEO aims to be cited inside an AI-generated answer. They share a foundation — crawlability, fast pages, clean structure, and authority — but GEO adds emphasis on quotable answer blocks, schema/structured data, llms.txt, entity recognition, and presence on the sources AI models trust. Most businesses need both, because Google AI Overviews now sit on top of the same results SEO targets.",
  },
  {
    q: "How do I get my business cited by ChatGPT?",
    a: "To be cited by ChatGPT and other AI engines: (1) make your content server-rendered so crawlers can read it without running JavaScript; (2) allow AI crawlers (GPTBot, OAI-SearchBot) in robots.txt; (3) write self-contained, factual answer blocks the model can lift verbatim; (4) add Organization, Article, and FAQ schema; (5) build third-party mentions so the model recognizes your brand as a trusted entity. GPTShopExpert handles all five.",
  },
  {
    q: "What is an llms.txt file and do I need one?",
    a: "llms.txt is a plain-text file at the root of your site that gives AI systems a concise, structured summary of who you are and what your most important pages are — similar to how robots.txt and sitemap.xml help search crawlers. It is an emerging standard, low-cost to add, and helps LLMs parse your site accurately. We generate and maintain one for every client.",
  },
  {
    q: "What are Google AI Overviews and how do I appear in them?",
    a: "Google AI Overviews are AI-generated summaries shown at the top of many search results, assembled from sources Google considers authoritative. To appear, you need strong technical SEO, clear answer-first content that directly addresses the query, structured data, and topical authority. Pages that already rank well and answer the question concisely are the most likely to be pulled into an Overview.",
  },
  {
    q: "How long does GEO take to show results?",
    a: "Technical fixes (rendering, schema, llms.txt, crawler access) take effect as soon as engines re-crawl — often days to a few weeks. Citation and ranking gains from content and authority build over one to three months and compound after that. GEO is faster than classic link-building SEO but it is not instant; it rewards consistent, structured publishing.",
  },
  {
    q: "Do you offer white-label GEO for agencies?",
    a: "Yes. Our Ongoing GEO Management retainer is available white-label: we run audits, optimization, content, and citation tracking behind the scenes and deliver reporting under your agency's brand, so you can offer GEO/AEO to your clients without building the capability in-house.",
  },
];

export default function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Seo
        title="GEO & AEO FAQ — How AI Search Citation Works | GPTShopExpert"
        description="Answers to common questions about Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO): what they are, how they differ from SEO, and how to get cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews."
        path="/faq"
        jsonLd={[
          faqSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <main className="page">
        <header className="page__head">
          <span className="page__eyebrow">FAQ</span>
          <h1 className="page__title">
            GEO &amp; AEO, <em>answered.</em>
          </h1>
          <p className="page__lead">
            The questions businesses ask before they start optimizing for AI
            search — and clear, no-jargon answers.
          </p>
        </header>

        <div className="faq">
          {faqs.map((f) => (
            <details className="faq__item" key={f.q}>
              <summary className="faq__q">
                {f.q}
                <span className="faq__sign" aria-hidden>
                  +
                </span>
              </summary>
              <div className="faq__a">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>

        <aside className="page__cta">
          <h2>Want these answers applied to your site?</h2>
          <p>Start with a free AI-citation audit. We reply within a day.</p>
          <a className="btn btn--primary" href="/#contact">
            <span>Get a free AI audit</span>
          </a>
        </aside>
      </main>
    </>
  );
}
