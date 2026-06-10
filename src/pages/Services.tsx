import Seo, { breadcrumb } from "../components/Seo";
import { services } from "../content/services";

export default function Services() {
  return (
    <>
      <Seo
        title="GEO & AEO Services — Audits, Websites & Management | GPTShopExpert"
        description="GEO and AEO services to get your business cited by AI: a 5-day AI Citation Audit, GEO-ready website builds, and ongoing GEO management with white-label options for agencies."
        path="/services"
        jsonLd={breadcrumb([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <main className="page page--wide">
        <header className="page__head">
          <span className="page__eyebrow">Services</span>
          <h1 className="page__title">
            Three ways to get <em>cited by AI.</em>
          </h1>
          <p className="page__lead">
            Start with an audit, build a site engineered to be the answer, or
            have us run your AI visibility every month.
          </p>
        </header>

        <div className="card-grid">
          {services.map((s) => (
            <a className="card" key={s.slug} href={`/services/${s.slug}`}>
              <span className="card__kicker">
                {s.tag} · from {s.price}
              </span>
              <h3>{s.name}</h3>
              <p>{s.summary}</p>
              <span className="card__more">Learn more →</span>
            </a>
          ))}
        </div>

        <aside className="page__cta">
          <h2>Not sure which you need?</h2>
          <p>Start with a free AI-citation audit and we'll point you the right way.</p>
          <a className="btn btn--primary" href="/#contact">
            <span>Get a free AI audit</span>
          </a>
        </aside>
      </main>
    </>
  );
}
