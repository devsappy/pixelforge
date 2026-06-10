import { motion } from "framer-motion";
import Seo, { breadcrumb } from "../components/Seo";
import { guides } from "../content/guides";

/** Animated audit call-out that fills the final grid cell. */
function AuditCallout() {
  return (
    <a className="card card--cta" href="/#contact">
      <div className="cta-radar" aria-hidden>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="cta-radar__ring"
            initial={{ scale: 0.25, opacity: 0.55 }}
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: i * 0.85,
              ease: "easeOut",
            }}
          />
        ))}
        <span className="cta-radar__core" />
      </div>
      <span className="card__kicker">Free audit</span>
      <h3>Where do you rank in AI?</h3>
      <p>Get a free AI-citation audit and see exactly where you stand in 5 days.</p>
      <span className="card__more">Get a free audit →</span>
    </a>
  );
}

export default function Guides() {
  return (
    <>
      <Seo
        title="GEO & AEO Guides — Learn AI Search Optimization | GPTShopExpert"
        description="Plain-English guides to Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO): what they are, how to get cited by ChatGPT, GEO vs SEO, and llms.txt."
        path="/guides"
        jsonLd={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <main className="page page--wide">
        <header className="page__head">
          <span className="page__eyebrow">Guides</span>
          <h1 className="page__title">
            Learn how AI search <em>actually works.</em>
          </h1>
          <p className="page__lead">
            No-jargon guides to getting your business found and cited by ChatGPT,
            Perplexity, Gemini, and Google AI Overviews.
          </p>
        </header>

        <div className="card-grid">
          {guides.map((g) => (
            <a className="card" key={g.slug} href={`/guides/${g.slug}`}>
              <span className="card__kicker">
                {g.eyebrow} · {g.readMins} min
              </span>
              <h3>{g.title}</h3>
              <p>{g.description}</p>
              <span className="card__more">Read →</span>
            </a>
          ))}
          <AuditCallout />
        </div>
      </main>
    </>
  );
}
