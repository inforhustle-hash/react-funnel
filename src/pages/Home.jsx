import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Search,
  Video,
  Share2,
  BadgeDollarSign,
  Image as ImageIcon,
  BookOpen,
  PenSquare,
} from "lucide-react";

const products = [
  {
    name: "Affiliate System",
    slug: "affiliate-system",
    icon: BadgeDollarSign,
    description:
      "Learn how to start affiliate marketing, promote digital products, and build online income with a simple beginner-friendly system.",
    keywords: ["affiliate marketing for beginners", "make money online", "digital income system"],
  },
  {
    name: "Content System",
    slug: "content-system",
    icon: PenSquare,
    description:
      "Create content that brings attention, clicks, and free traffic from search engines and social media platforms.",
    keywords: ["content marketing system", "free traffic strategy", "content creation"],
  },
  {
    name: "Ebook System",
    slug: "ebook-system",
    icon: BookOpen,
    description:
      "Build passive income with simple digital products, ebooks, and easy-to-launch information offers.",
    keywords: ["passive income online", "ebook business", "digital products"],
  },
  {
    name: "Email System",
    slug: "email-system",
    icon: Mail,
    description:
      "Build an email list, send follow-ups, and turn leads into daily commissions with email marketing.",
    keywords: ["email marketing system", "build an email list", "follow-up emails"],
  },
  {
    name: "Image Generator",
    slug: "image-generator",
    icon: ImageIcon,
    description:
      "Create eye-catching graphics and visual content that improve clicks, engagement, and conversions.",
    keywords: ["image generator", "marketing graphics", "visual content"],
  },
  {
    name: "Medium System",
    slug: "medium-system",
    icon: Search,
    description:
      "Use content publishing platforms to tap into built-in audiences and generate targeted traffic.",
    keywords: ["Medium traffic", "content publishing", "online authority"],
  },
  {
    name: "Sales System",
    slug: "sales-system",
    icon: ArrowRight,
    description:
      "Turn visitors into buyers with stronger messaging, better offers, and simple conversion strategies.",
    keywords: ["sales conversion", "increase conversions", "online sales system"],
  },
  {
    name: "SEO System",
    slug: "seo-system",
    icon: Search,
    description:
      "Get free Google traffic with search engine optimization strategies designed for long-term growth.",
    keywords: ["SEO for beginners", "free Google traffic", "rank on Google"],
  },
  {
    name: "Social System",
    slug: "social-system",
    icon: Share2,
    description:
      "Use social media marketing to grow your audience, drive traffic, and generate more daily leads.",
    keywords: ["social media traffic", "grow on social media", "daily leads"],
  },
  {
    name: "Video System",
    slug: "video-system",
    icon: Video,
    description:
      "Create simple videos that attract views, build trust, and bring more people into your funnel.",
    keywords: ["video marketing", "short-form video", "traffic from video"],
  },
];

const getSrc = () => {
  if (typeof window === "undefined") return "homepage";
  const params = new URLSearchParams(window.location.search);
  const srcFromUrl = params.get("src");
  const savedSrc = localStorage.getItem("funnel_src");
  const src = srcFromUrl || savedSrc || "homepage";
  localStorage.setItem("funnel_src", src);
  return src;
};

const trackingLink = (slug) => {
  const src = encodeURIComponent(getSrc());
  const url = encodeURIComponent(`https://metallfya--irc.thrivecart.com/${slug}/`);
  return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${src}&offer=${slug}&url=${url}`;
};

const leadsLeapTrackedUrl = () => {
  const src = encodeURIComponent(getSrc());
  const url = encodeURIComponent("https://leadsleap.com/?r=theojm");
  return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${src}&offer=leadsleap-banner&url=${url}`;
};

const extraProductsTrackedUrl = () => {
  const src = encodeURIComponent(getSrc());
  const url = encodeURIComponent("https://rotatelinkpro.com/Theojm/moneymakertools/");
  return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${src}&offer=extra-products&url=${url}`;
};

const leadsLeapBanner = "https://imgallery.llsvr.com/theojm.69d5cbe0d1953.png";
const extraProductsBanner = "https://imgallery.llsvr.com/theojm.69dd3c9499246.png";

export default function RankableHomepage() {
  const pageTitle = "10 Digital Systems to Make Money Online | FreebieBro";
  const pageDescription =
    "Discover 10 powerful digital systems for affiliate marketing, SEO, email marketing, content, social media, video, and more. Start building online income with proven tools and strategies.";
  const canonicalUrl = "https://go.freebiebro.org/";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: canonicalUrl,
    description: pageDescription,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: trackingLink(product.slug),
        description: product.description,
      })),
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="make money online, affiliate marketing for beginners, passive income online, digital marketing systems, online business ideas, free traffic, email marketing, SEO system, video marketing, social media marketing"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="FreebieBro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white">
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mx-auto max-w-4xl text-center"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Make Money Online With Real Systems
              </p>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                10 Digital Systems to Help You Build Traffic, Leads, and Online Income
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Explore proven systems for affiliate marketing, content marketing, email marketing, SEO,
                social media, sales, ebooks, images, Medium traffic, and video marketing — all in one place.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-base font-semibold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
                >
                  Explore All 10 Systems
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={trackingLink("affiliate-system")}
                  className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 text-base font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  Start With Affiliate System
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  "Beginner-friendly online business systems",
                  "SEO keywords built into the page for Google visibility",
                  "Direct tracked links for all 10 products",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <section className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <h2 className="text-2xl font-bold md:text-3xl">Why These Digital Marketing Systems Work</h2>
              <p className="mt-4 text-slate-300 leading-8">
                If you are searching for the best way to make money online, the biggest mistake is trying random
                tactics without a real plan. This homepage is built around 10 connected digital systems that help
                with traffic generation, lead capture, conversions, and long-term growth. Whether you want affiliate
                marketing for beginners, passive income ideas, free traffic from Google, or better email follow-up,
                these systems give you a direct next step.
              </p>
              <p className="mt-4 text-slate-300 leading-8">
                Start with one system. Learn it. Apply it. Then stack the next one. That is how real online business
                growth happens.
              </p>
            </div>
          </section>

          <section id="products" className="mt-16">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">All Products</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Choose the System That Fits Your Goal</h2>
              <p className="mx-auto mt-4 max-w-3xl text-slate-300 leading-8">
                Each product below targets a different part of online business growth, from free traffic and SEO to
                email marketing, content creation, social media, sales, and video.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.article
                    key={product.slug}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/40"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{product.name}</h3>
                    </div>

                    <p className="mt-4 flex-1 leading-7 text-slate-300">{product.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>

                    <a
                      href={trackingLink(product.slug)}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-bold md:text-3xl">SEO Keywords This Homepage Targets</h2>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "make money online",
                  "affiliate marketing for beginners",
                  "passive income online",
                  "digital marketing systems",
                  "online business ideas",
                  "free traffic from Google",
                  "email marketing system",
                  "SEO for beginners",
                  "video marketing system",
                  "social media traffic",
                ].map((term) => (
                  <div key={term} className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-200">
                    {term}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-orange-400/10 p-8">
              <h2 className="text-2xl font-bold md:text-3xl">Best Way to Use This Page</h2>
              <ul className="mt-6 space-y-4 text-slate-200">
                {[
                  "Use this page as your homepage or main product hub.",
                  "Link blog posts, social posts, Quora answers, and videos back to this page.",
                  "Add product screenshots or banners later for even better click-through rate.",
                  "Create a blog article for each system and link them back into this page for stronger SEO.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900 to-orange-400/10 p-8 text-center md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Start Here</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Ready to Build Your Online Income?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-300 leading-8">
                Start with the Affiliate System first, then stack content, email, SEO, and video as you grow.
                One strong system can change everything.
              </p>
              <a
                href={trackingLink("affiliate-system")}
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-base font-bold text-slate-950 transition hover:-translate-y-0.5"
              >
                Start With Affiliate System
                <ArrowRight className="h-4 w-4" />
              </a>

              <div style={{ marginTop: "30px", textAlign: "center" }}>
                <a
                  href={leadsLeapTrackedUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={leadsLeapBanner}
                    alt="LeadsLeap Banner"
                    style={{ maxWidth: "100%", height: "auto", borderRadius: "10px", display: "inline-block" }}
                  />
                </a>

                <div style={{ marginTop: "20px" }}>
                  <a
                    href={extraProductsTrackedUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={extraProductsBanner}
                      alt="Check out these exciting products"
                      style={{ maxWidth: "100%", height: "auto", borderRadius: "10px", display: "inline-block" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
