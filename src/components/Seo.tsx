import { Head } from "vite-react-ssg";

export const SITE = "https://gptshopexpert.com";

type Props = {
  title: string;
  description: string;
  /** Path beginning with "/", e.g. "/faq" or "/" */
  path: string;
  type?: "website" | "article";
  image?: string;
  /** One or more JSON-LD objects injected into <head>. */
  jsonLd?: object | object[];
};

/**
 * Per-page document head: title, description, canonical, Open Graph, Twitter,
 * and optional JSON-LD. Rendered on every route so each page is independently
 * indexable with unique metadata.
 */
export default function Seo({ title, description, path, type = "website", image, jsonLd }: Props) {
  const url = SITE + path;
  const img = image ?? `${SITE}/og-image.svg`;
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  // Meta text is rendered all-lowercase by request.
  const t = title.toLowerCase();
  const d = description.toLowerCase();

  return (
    <Head>
      <title>{t}</title>
      <meta name="description" content={d} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="gptshopexpert" />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image" content={img} />

      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
}

/** Shared BreadcrumbList JSON-LD builder. */
export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: SITE + it.path,
    })),
  };
}
