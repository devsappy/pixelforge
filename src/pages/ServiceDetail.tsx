import Seo, { breadcrumb } from "../components/Seo";
import { services, serviceJsonLd } from "../content/services";

export default function ServiceDetail({ slug }: { slug: string }) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;

  return (
    <>
      <Seo
        title={`${s.name} — GEO/AEO Service | GPTShopExpert`}
        description={s.summary}
        path={`/services/${s.slug}`}
        jsonLd={[
          serviceJsonLd(s),
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: s.name, path: `/services/${s.slug}` },
          ]),
        ]}
      />
      <main className="page">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/services">Services</a>
          <span>/</span>
          {s.name}
        </nav>

        <header className="page__head">
          <span className="page__eyebrow">{s.tag}</span>
          <h1 className="page__title">{s.name}</h1>
          <div className="service-detail__meta">
            <span className="service-detail__price">from {s.price}</span>
            <span>{s.timeframe}</span>
            <span>Remote · Worldwide</span>
          </div>
        </header>

        <div className="prose">
          {s.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <h2>What's included</h2>
          <ul>
            {s.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <aside className="page__cta">
          <h2>Ready to start {s.name}?</h2>
          <p>Tell us about your site. We reply within one business day.</p>
          <a className="btn btn--primary" href="/#contact">
            <span>Get a free AI audit</span>
          </a>
        </aside>
      </main>
    </>
  );
}
