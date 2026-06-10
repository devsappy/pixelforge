import Seo, { breadcrumb } from "../components/Seo";
import { guides } from "../content/guides";

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
        </div>
      </main>
    </>
  );
}
