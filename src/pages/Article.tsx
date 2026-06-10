import Seo, { breadcrumb, SITE } from "../components/Seo";
import { guides } from "../content/guides";

export default function Article({ slug }: { slug: string }) {
  const g = guides.find((x) => x.slug === slug);
  if (!g) return null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    datePublished: g.updated,
    dateModified: g.updated,
    mainEntityOfPage: `${SITE}/guides/${g.slug}`,
    author: { "@id": `${SITE}/#org` },
    publisher: { "@id": `${SITE}/#org` },
    image: `${SITE}/og-image.svg`,
  };

  const updated = new Date(g.updated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Seo
        title={g.metaTitle}
        description={g.description}
        path={`/guides/${g.slug}`}
        type="article"
        jsonLd={[
          articleSchema,
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: g.title, path: `/guides/${g.slug}` },
          ]),
        ]}
      />
      <main className="page">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/guides">Guides</a>
          <span>/</span>
          {g.eyebrow}
        </nav>

        <header className="page__head">
          <span className="page__eyebrow">
            {g.eyebrow} · {g.readMins} min read · Updated {updated}
          </span>
          <h1 className="page__title">{g.title}</h1>
        </header>

        <article className="prose">{g.body}</article>

        <aside className="page__cta">
          <h2>Put this into practice</h2>
          <p>
            Get a free AI-citation audit and see exactly where your business
            stands in AI search.
          </p>
          <a className="btn btn--primary" href="/#contact">
            <span>Get a free AI audit</span>
          </a>
        </aside>
      </main>
    </>
  );
}
