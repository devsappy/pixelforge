import Seo, { breadcrumb, SITE } from "../components/Seo";

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About GPTShopExpert",
    url: `${SITE}/about`,
    mainEntity: { "@id": `${SITE}/#org` },
  };

  return (
    <>
      <Seo
        title="About GPTShopExpert — A GEO & AEO Agency"
        description="GPTShopExpert is a remote-first GEO & AEO agency. We help businesses and agencies get found, trusted, and cited by AI engines like ChatGPT, Perplexity, Gemini, and Google AI Overviews."
        path="/about"
        jsonLd={[
          aboutSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <main className="page">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          About
        </nav>

        <header className="page__head">
          <span className="page__eyebrow">About</span>
          <h1 className="page__title">
            We make businesses <em>the answer.</em>
          </h1>
          <p className="page__lead">
            GPTShopExpert is a remote-first GEO &amp; AEO agency. Our single job
            is to get your business found, trusted, and cited by AI engines.
          </p>
        </header>

        <div className="prose">
          <p>
            Search is changing faster than it has in twenty years. People no
            longer scan ten blue links — they ask ChatGPT, Perplexity, Gemini,
            and Google's AI Overviews, and they act on a single synthesized
            answer. If your business is not in that answer, it effectively does
            not exist for that customer. We exist to fix exactly that.
          </p>

          <h2>What we do</h2>
          <p>
            We practice Generative Engine Optimization (GEO) and Answer Engine
            Optimization (AEO): the disciplines of structuring a website and its
            content so AI systems can discover, understand, trust, and quote it.
            That means server-rendered pages, clean structured data, answer-first
            content, AI-crawler access, and the authority signals models rely on
            when they decide which source to cite.
          </p>

          <h2>How we work</h2>
          <p>
            Every engagement starts with measurement, not opinion. We score your
            site against the factors that actually drive AI citation, then fix
            them in priority order and track the results. No vanity metrics, no
            guesswork, no jargon you need a translator for.
          </p>
          <div className="key-takeaway">
            <strong>Our principle:</strong> if we can't measure it and tie it to
            citations or qualified traffic, we don't bill you for it.
          </div>

          <h2>Who we work with</h2>
          <p>
            We serve two kinds of clients: businesses that want to grow through
            AI search, and agencies that need a white-label GEO partner so they
            can offer it to their own clients without building the capability
            in-house. We're remote-first and work with companies worldwide.
          </p>

          <h2>Start the conversation</h2>
          <p>
            The easiest first step is a free AI-citation audit — we'll show you
            where you stand and what to fix. Reach us at{" "}
            <a href="mailto:hello@gptshopexpert.com">hello@gptshopexpert.com</a>{" "}
            or through the form on the homepage. We reply within one business day.
          </p>
        </div>

        <aside className="page__cta">
          <h2>See where your business stands in AI search</h2>
          <p>Get a free AI-citation audit. No pitch decks, no sales calls.</p>
          <a className="btn btn--primary" href="/#contact">
            <span>Get a free AI audit</span>
          </a>
        </aside>
      </main>
    </>
  );
}
