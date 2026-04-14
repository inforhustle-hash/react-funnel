import React from "react";
import { Helmet } from "react-helmet";
import { BadgeDollarSign, Mail, Search, Video, Share2, ArrowRight, Image as ImageIcon, BookOpen, PenSquare } from "lucide-react";

const products = [
  {
    name: "Affiliate System",
    slug: "affiliate-system",
    icon: BadgeDollarSign,
    description: "Learn how to start affiliate marketing and build income.",
    keywords: ["affiliate marketing", "make money online", "affiliate system"],
  },
  {
    name: "Content System",
    slug: "content-system",
    icon: PenSquare,
    description: "Create content that drives traffic.",
    keywords: ["content marketing", "traffic", "content system"],
  },
  {
    name: "Ebook System",
    slug: "ebook-system",
    icon: BookOpen,
    description: "Build passive income with ebooks.",
    keywords: ["ebooks", "passive income", "digital products"],
  },
  {
    name: "Email System",
    slug: "email-system",
    icon: Mail,
    description: "Turn leads into sales with email.",
    keywords: ["email marketing", "email list", "follow-up emails"],
  },
  {
    name: "Image Generator",
    slug: "image-generator",
    icon: ImageIcon,
    description: "Create marketing visuals.",
    keywords: ["graphics", "image generator", "marketing visuals"],
  },
  {
    name: "Medium System",
    slug: "medium-system",
    icon: Search,
    description: "Tap into built-in traffic.",
    keywords: ["medium", "free traffic", "content traffic"],
  },
  {
    name: "Sales System",
    slug: "sales-system",
    icon: ArrowRight,
    description: "Convert traffic into buyers.",
    keywords: ["sales", "conversions", "buyers"],
  },
  {
    name: "SEO System",
    slug: "seo-system",
    icon: Search,
    description: "Get free Google traffic.",
    keywords: ["SEO", "Google traffic", "search engine traffic"],
  },
  {
    name: "Social System",
    slug: "social-system",
    icon: Share2,
    description: "Grow on social media.",
    keywords: ["social", "social media traffic", "audience growth"],
  },
  {
    name: "Video System",
    slug: "video-system",
    icon: Video,
    description: "Use video for traffic.",
    keywords: ["video", "video marketing", "traffic from video"],
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

export default function RankableHomepage() {
  const src = getSrc();

  const trackingLink = (slug) => {
    const encodedSrc = encodeURIComponent(src);
    const url = encodeURIComponent(`https://metallfya--irc.thrivecart.com/${slug}/`);
    return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${encodedSrc}&offer=${slug}&url=${url}`;
  };

  const leadsLeapTrackedUrl = () => {
    const encodedSrc = encodeURIComponent(src);
    const url = encodeURIComponent("https://leadsleap.com/?r=theojm");
    return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${encodedSrc}&offer=leadsleap-banner&url=${url}`;
  };

  const extraProductsTrackedUrl = () => {
    const encodedSrc = encodeURIComponent(src);
    const url = encodeURIComponent("https://rotatelinkpro.com/Theojm/moneymakertools/");
    return `https://n8n-production-01ac.up.railway.app/webhook/t?src=${encodedSrc}&offer=extra-products&url=${url}`;
  };

  const pageTitle = "Make Money Online With 10 Done-For-You Systems | FreebieBro";
  const pageDescription =
    "Discover 10 done-for-you systems to make money online, build traffic, capture leads, grow an email list, and create affiliate marketing income with simple tools and step-by-step systems.";
  const canonicalUrl = "https://go.freebiebro.org/";

  const leadsLeapBanner = "https://imgallery.llsvr.com/theojm.69d5cbe0d1953.png";
  const extraProductsBanner = "https://imgallery.llsvr.com/theojm.69dd41eda403c.png";

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
          content="make money online, affiliate marketing for beginners, build an email list, free traffic, passive income online, email marketing system, video marketing, seo traffic, social media traffic, digital products"
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

      <div className="min-h-screen bg-slate-950 text-white text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">
          Make Money Online With 10 Done-For-You Systems
        </h1>

        <p style={{ maxWidth: "760px", margin: "0 auto 20px", lineHeight: "1.7", fontSize: "18px", color: "#cbd5e1" }}>
          If you want to make money online without building everything from scratch, these 10 done-for-you systems
          give you a simple way to start. You can use them to build traffic, capture leads, grow your email list,
          improve conversions, and create affiliate marketing income step by step.
        </p>

        <p style={{ maxWidth: "760px", margin: "0 auto 28px", lineHeight: "1.7", color: "#cbd5e1" }}>
          Each system focuses on a key part of online business growth, including affiliate marketing, content
          creation, ebooks, email marketing, image creation, Medium traffic, sales, SEO, social media, and video
          marketing. Start with one, apply it, then stack the next.
        </p>

        <a
          href={trackingLink("affiliate-system")}
          className="bg-white text-black px-6 py-3 rounded-xl font-bold inline-block"
        >
          Start Here
        </a>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.slug} className="bg-slate-800 p-6 rounded-xl text-left">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <Icon size={22} />
                  <h2 className="text-xl font-bold" style={{ margin: 0 }}>
                    {product.name}
                  </h2>
                </div>

                <p className="text-slate-300 mt-2" style={{ lineHeight: "1.7" }}>
                  {product.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px" }}>
                  {product.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      style={{
                        fontSize: "12px",
                        padding: "6px 10px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.08)",
                        color: "#cbd5e1",
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <a
                  href={trackingLink(product.slug)}
                  className="mt-4 inline-block bg-white text-black px-4 py-2 rounded"
                  style={{ marginTop: "18px" }}
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>

        <div style={{ maxWidth: "860px", margin: "60px auto 0", lineHeight: "1.7", color: "#cbd5e1" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "16px", color: "#fff" }}>
            Why These Systems Matter
          </h2>
          <p style={{ marginBottom: "16px" }}>
            Most people fail online because they chase random tactics without a real system. This page brings together
            10 simple systems that help with traffic generation, lead capture, email follow-up, search engine
            visibility, and converting attention into sales.
          </p>
          <p>
            Whether you are looking for affiliate marketing for beginners, free traffic strategies, email list growth,
            or better conversions, this page gives you a direct place to start and a clear next step to take.
          </p>
        </div>

        <div style={{ marginTop: "60px" }}>
          <a
            href={leadsLeapTrackedUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", marginBottom: "25px" }}
          >
            <img
              src={leadsLeapBanner}
              alt="Free traffic and leads system for affiliate marketing"
              style={{
                maxWidth: "468px",
                width: "100%",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </a>

          <a
            href={extraProductsTrackedUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block" }}
          >
            <img
              src={extraProductsBanner}
              alt="Extra money making tools and online marketing resources"
              style={{
                maxWidth: "468px",
                width: "100%",
                borderRadius: "10px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
