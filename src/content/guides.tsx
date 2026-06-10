import type { ReactNode } from "react";

export type Guide = {
  slug: string;
  /** H1 + card title. */
  title: string;
  /** <title> tag. */
  metaTitle: string;
  description: string;
  eyebrow: string;
  updated: string; // ISO date
  readMins: number;
  body: ReactNode;
};

export const guides: Guide[] = [
  {
    slug: "what-is-geo",
    title: "What is Generative Engine Optimization (GEO)?",
    metaTitle: "What Is Generative Engine Optimization (GEO)? A Plain Guide (2026)",
    description:
      "Generative Engine Optimization (GEO) is the practice of structuring your site so AI engines like ChatGPT, Perplexity, and Google AI Overviews cite it. Here's how GEO works and how to start.",
    eyebrow: "Guide",
    updated: "2026-06-08",
    readMins: 6,
    body: (
      <>
        <div className="key-takeaway">
          <strong>Short answer:</strong> Generative Engine Optimization (GEO) is
          the practice of structuring a website and its content so AI systems —
          ChatGPT, Perplexity, Google Gemini, and Google AI Overviews — can find,
          understand, trust, and cite it. Traditional SEO earns a ranked link;
          GEO earns a mention inside the AI's answer.
        </div>

        <h2>Why GEO exists now</h2>
        <p>
          For two decades, winning search meant ranking in a list of blue links.
          That is changing. A growing share of searches now end inside an
          AI-generated answer — Google AI Overviews, ChatGPT's web search,
          Perplexity, Gemini — where the user reads a synthesized response and
          never clicks a result. If your business is not part of that answer, you
          lose the customer before the click ever happens.
        </p>
        <p>
          GEO is the response to that shift. It optimizes for being the cited
          source inside the answer, not just a candidate the user might scroll to.
        </p>

        <h2>How AI engines decide what to cite</h2>
        <p>
          AI engines pull from sources they can read and trust. In practice, a
          page is far more likely to be cited when it is:
        </p>
        <ul>
          <li>
            <strong>Readable without JavaScript.</strong> Most AI crawlers do not
            run JS, so content must be server-rendered into the HTML.
          </li>
          <li>
            <strong>Self-contained and quotable.</strong> Clear, factual passages
            that answer a question in one place are easy to lift.
          </li>
          <li>
            <strong>Structured.</strong> Schema markup, clean headings, and lists
            help engines parse meaning.
          </li>
          <li>
            <strong>Trusted.</strong> Brand mentions across the web, author
            signals, and consistent entity data make a model confident.
          </li>
          <li>
            <strong>Accessible to AI bots.</strong> robots.txt and an llms.txt
            file that welcome GPTBot, ClaudeBot, and PerplexityBot.
          </li>
        </ul>

        <h2>GEO vs traditional SEO</h2>
        <p>
          GEO does not replace SEO — it builds on it. The crawlable, fast,
          well-structured foundation that helps you rank in Google is the same
          foundation AI engines need. GEO adds a layer on top: quotable answer
          blocks, richer structured data, entity authority, and llms.txt. We go
          deeper in <a href="/guides/geo-vs-seo">GEO vs SEO</a>.
        </p>

        <h2>How to start with GEO</h2>
        <ol>
          <li>Make every page server-rendered so its content ships in the HTML.</li>
          <li>Add Organization, Article, and FAQ structured data.</li>
          <li>Rewrite key pages into clear, answer-first passages.</li>
          <li>Publish an llms.txt file and allow AI crawlers in robots.txt.</li>
          <li>Build third-party mentions so engines recognize your brand.</li>
          <li>Measure which engines cite you, and iterate.</li>
        </ol>
        <p>
          The fastest way to know your starting point is an{" "}
          <a href="/services/ai-citation-audit">AI Citation Audit</a>, which
          scores your site across every GEO factor and hands you a prioritized
          fix plan. Have more questions? See our{" "}
          <a href="/faq">GEO &amp; AEO FAQ</a>.
        </p>
      </>
    ),
  },
  {
    slug: "what-is-aeo",
    title: "What is Answer Engine Optimization (AEO)?",
    metaTitle: "What Is Answer Engine Optimization (AEO)? Definition & How-To",
    description:
      "Answer Engine Optimization (AEO) is optimizing content to be the direct answer inside AI assistants and answer engines. Learn what AEO is and how to do it.",
    eyebrow: "Guide",
    updated: "2026-06-08",
    readMins: 5,
    body: (
      <>
        <div className="key-takeaway">
          <strong>Short answer:</strong> Answer Engine Optimization (AEO) is the
          practice of optimizing content so it becomes the direct answer to a
          user's question inside answer engines and AI assistants — featured
          snippets, voice assistants, ChatGPT, Perplexity, and Google AI
          Overviews.
        </div>

        <h2>AEO and GEO: are they the same thing?</h2>
        <p>
          They overlap heavily and are often used interchangeably.{" "}
          <a href="/guides/what-is-geo">GEO</a> is the broader practice of being
          discoverable and citable across generative engines. AEO is the more
          specific focus on directly answering questions. In day-to-day work they
          point to the same activities: clear answers, structured data, and
          authority.
        </p>

        <h2>What AEO looks like in practice</h2>
        <ul>
          <li>
            <strong>Answer-first writing.</strong> Lead with a concise, complete
            answer in the first sentence or two, then expand.
          </li>
          <li>
            <strong>Question-shaped headings.</strong> Use the exact questions
            people ask as H2s and answer them immediately beneath.
          </li>
          <li>
            <strong>FAQ and How-To schema.</strong> Mark up Q&amp;A content so
            engines can extract it cleanly.
          </li>
          <li>
            <strong>Concise, factual passages.</strong> Self-contained blocks of
            40–60 words are ideal for extraction.
          </li>
        </ul>

        <h2>Why answer-first content wins</h2>
        <p>
          Answer engines reward content that resolves the query with the least
          friction. A page that buries the answer under three paragraphs of
          throat-clearing is harder to quote than one that states the answer
          plainly and supports it. Writing for the machine here also serves the
          human — clarity helps both.
        </p>

        <h2>Getting started</h2>
        <p>
          Pick your ten most important customer questions, give each its own
          clearly-answered section, add FAQ schema, and make sure the page is
          server-rendered. If you want a structured starting point, our{" "}
          <a href="/services/ai-citation-audit">AI Citation Audit</a> identifies
          the exact questions and pages to prioritize.
        </p>
      </>
    ),
  },
  {
    slug: "geo-vs-seo",
    title: "GEO vs SEO: what's the difference?",
    metaTitle: "GEO vs SEO: What's the Difference? (And Why You Need Both)",
    description:
      "GEO optimizes to be cited inside AI answers; SEO optimizes to rank in search results. Here's how they differ, where they overlap, and why most businesses need both.",
    eyebrow: "Guide",
    updated: "2026-06-08",
    readMins: 5,
    body: (
      <>
        <div className="key-takeaway">
          <strong>Short answer:</strong> SEO optimizes a page to rank in a list of
          search results. GEO optimizes content to be cited inside an
          AI-generated answer. They share a technical foundation, but GEO adds
          quotable answer blocks, structured data, entity authority, and llms.txt.
          Most businesses now need both.
        </div>

        <h2>The core difference</h2>
        <p>
          SEO's goal is a ranked position — ideally the first result. GEO's goal
          is to be the source an AI engine quotes when it composes an answer.
          With SEO you compete for a click; with GEO you compete to be part of the
          response the user reads before any click.
        </p>

        <h2>What they share</h2>
        <p>
          A crawlable, fast, well-structured site helps with both. Server-side
          rendering, clean information architecture, internal linking, accurate
          metadata, and topical authority are foundational either way. If your SEO
          fundamentals are weak, your GEO will be too.
        </p>

        <h2>Where GEO goes further</h2>
        <ul>
          <li>
            <strong>Quotability.</strong> GEO restructures content into
            self-contained passages an engine can lift verbatim.
          </li>
          <li>
            <strong>Structured data depth.</strong> Organization, Article, FAQ,
            and Service schema help engines understand entities and facts.
          </li>
          <li>
            <strong>AI crawler access.</strong> llms.txt and robots.txt rules that
            explicitly welcome AI bots.
          </li>
          <li>
            <strong>Entity authority.</strong> Consistent mentions and references
            across the web so models recognize your brand.
          </li>
        </ul>

        <h2>Which should you invest in?</h2>
        <p>
          Both — and they compound. Google AI Overviews sit directly on top of
          traditional results, so the work that earns a ranking also feeds the
          AI answer. The practical move is to keep your SEO foundation healthy and
          layer GEO on top. See{" "}
          <a href="/guides/what-is-geo">what GEO is</a> for the full picture, or
          start with an <a href="/services/ai-citation-audit">AI Citation Audit</a>.
        </p>
      </>
    ),
  },
  {
    slug: "how-to-rank-in-chatgpt",
    title: "How to get your business cited by ChatGPT",
    metaTitle: "How to Get Your Business Cited by ChatGPT (2026 Checklist)",
    description:
      "A practical checklist to get your business mentioned and cited by ChatGPT: server rendering, GPTBot access, answer-first content, schema, and brand authority.",
    eyebrow: "Guide",
    updated: "2026-06-08",
    readMins: 7,
    body: (
      <>
        <div className="key-takeaway">
          <strong>Short answer:</strong> To get cited by ChatGPT, make your
          content server-rendered, allow OpenAI's crawlers (GPTBot,
          OAI-SearchBot) in robots.txt, write self-contained answer blocks, add
          structured data, and build third-party mentions so the model trusts your
          brand as an entity.
        </div>

        <h2>1. Make your content readable without JavaScript</h2>
        <p>
          ChatGPT's web crawling does not reliably execute JavaScript. If your
          site renders content client-side, crawlers may see an empty page. Use
          server-side rendering or static generation so every page's content is in
          the raw HTML.
        </p>

        <h2>2. Allow OpenAI's crawlers</h2>
        <p>
          OpenAI uses <code>GPTBot</code> for training data and{" "}
          <code>OAI-SearchBot</code> for live search results, plus{" "}
          <code>ChatGPT-User</code> for user-triggered fetches. Make sure your{" "}
          <code>robots.txt</code> allows them. Blocking GPTBot removes you from a
          major path to being known.
        </p>

        <h2>3. Write answer-first, self-contained passages</h2>
        <p>
          Models lift clear, factual statements that answer a question in one
          place. Lead each section with the answer, keep claims specific, and
          avoid burying facts in marketing language. A crisp 40–60 word passage is
          ideal. This is the heart of{" "}
          <a href="/guides/what-is-aeo">Answer Engine Optimization</a>.
        </p>

        <h2>4. Add structured data</h2>
        <p>
          Organization schema tells engines who you are; Article and FAQ schema
          help them extract content; consistent <code>sameAs</code> links connect
          your brand across the web. Structured data reduces the model's
          uncertainty about your facts.
        </p>

        <h2>5. Build entity authority</h2>
        <p>
          ChatGPT is more likely to mention brands it has seen referenced in many
          trustworthy places — directories, reputable publications, profiles, and
          communities. A brand that appears only on its own website is a weak
          entity. Earn mentions and keep your name, description, and links
          consistent everywhere.
        </p>

        <h2>6. Publish an llms.txt file</h2>
        <p>
          An <a href="/guides/llms-txt">llms.txt</a> file gives AI systems a clean
          summary of your business and key pages. It is cheap to add and helps
          models parse you accurately.
        </p>

        <h2>7. Measure and iterate</h2>
        <p>
          Ask ChatGPT and Perplexity the questions your customers ask and see
          whether you appear. Track changes over time. Our{" "}
          <a href="/services/geo-management">Ongoing GEO Management</a> does this
          continuously, and an{" "}
          <a href="/services/ai-citation-audit">AI Citation Audit</a> gives you a
          scored baseline to start from.
        </p>
      </>
    ),
  },
  {
    slug: "llms-txt",
    title: "llms.txt explained: the new standard for AI search",
    metaTitle: "llms.txt Explained: What It Is and How to Create One",
    description:
      "llms.txt is a plain-text file that helps AI systems understand your site. Learn what llms.txt is, why it matters for AI search, and how to create one.",
    eyebrow: "Guide",
    updated: "2026-06-08",
    readMins: 5,
    body: (
      <>
        <div className="key-takeaway">
          <strong>Short answer:</strong> llms.txt is a plain-text file placed at
          the root of your website (<code>/llms.txt</code>) that gives AI systems
          a concise, structured summary of who you are and what your most
          important pages are — similar to how robots.txt and sitemap.xml help
          search crawlers.
        </div>

        <h2>Why llms.txt exists</h2>
        <p>
          AI systems have limited context and often struggle to parse large,
          navigation-heavy websites. llms.txt offers a clean, curated entry point:
          a Markdown-formatted file that states what your business does and links
          to your key pages, so a model can understand you without crawling
          everything.
        </p>

        <h2>What goes in an llms.txt file</h2>
        <ul>
          <li>An H1 with your business or site name.</li>
          <li>A short blockquote summarizing what you do.</li>
          <li>Sections (Services, Capabilities, Process) with linked key pages.</li>
          <li>Concise descriptions — facts over marketing language.</li>
          <li>Contact details.</li>
        </ul>

        <h2>Does llms.txt actually help?</h2>
        <p>
          It is an emerging standard, not yet universally consumed by every
          engine. But it is low-cost, low-risk, and forward-looking: it documents
          your site clearly, and adoption is growing. Treat it as one piece of a
          complete <a href="/guides/what-is-geo">GEO strategy</a>, not a magic
          switch.
        </p>

        <h2>How to create one</h2>
        <p>
          Write a Markdown file following the structure above and serve it at{" "}
          <code>https://yourdomain.com/llms.txt</code>. Keep it current as your
          site changes. You can see a live example at{" "}
          <a href="/llms.txt">our own llms.txt</a>. We generate and maintain one
          for every client as part of our{" "}
          <a href="/services/geo-ready-websites">GEO-ready website</a> and{" "}
          <a href="/services/geo-management">management</a> services.
        </p>
      </>
    ),
  },
];
