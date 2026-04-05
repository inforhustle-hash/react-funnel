import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";

const products = [
  {
    slug: "affiliate-system",
    title: "Affiliate System",
    image: "/products/affiliate-system.png",
    url: "https://metallfya--irc.thrivecart.com/affiliate-system/",
    blurb: "Launch smarter affiliate campaigns with cleaner promotion, faster setup, and stronger offer flow.",
    badge: "Affiliate Marketing",
  },
  {
    slug: "content-system",
    title: "Content System",
    image: "/products/content-system.png",
    url: "https://metallfya--irc.thrivecart.com/content-system/",
    blurb: "Plan, create, and publish content faster with a system built for modern digital marketing.",
    badge: "Content Creation",
  },
  {
    slug: "ebook-system",
    title: "Ebook System",
    image: "/products/ebook-system.png",
    url: "https://metallfya--irc.thrivecart.com/ebook-system/",
    blurb: "Turn ideas into sellable ebooks with a faster content workflow and less writing friction.",
    badge: "Digital Products",
  },
  {
    slug: "email-system",
    title: "Email System",
    image: "/products/email-system.png",
    url: "https://metallfya--irc.thrivecart.com/email-system/",
    blurb: "Create emails that get opened and acted on with a system built for inbox attention.",
    badge: "Email Marketing",
  },
  {
    slug: "image-generator",
    title: "Image Generator",
    image: "/products/image-generator.png",
    url: "https://metallfya--irc.thrivecart.com/image-generator/",
    blurb: "Build cleaner graphics and product visuals faster for promos, ads, and social media.",
    badge: "Design Tools",
  },
  {
    slug: "medium-system",
    title: "Medium System",
    image: "/products/medium-system.png",
    url: "https://metallfya--irc.thrivecart.com/medium-system/",
    blurb: "Publish useful content consistently with a workflow built for creators and marketers.",
    badge: "Publishing",
  },
  {
    slug: "sales-system",
    title: "Sales System",
    image: "/products/sales-system.png",
    url: "https://metallfya--irc.thrivecart.com/sales-system/",
    blurb: "Sharpen your sales copy and offer messaging to push more clicks and more conversions.",
    badge: "Sales Copy",
  },
  {
    slug: "seo-system",
    title: "SEO System",
    image: "/products/seo-system.png",
    url: "https://metallfya--irc.thrivecart.com/seo-system/",
    blurb: "Simplify SEO work with clearer strategy, visibility, and content optimization.",
    badge: "SEO",
  },
  {
    slug: "social-system",
    title: "Social System",
    image: "/products/social-system.png",
    url: "https://metallfya--irc.thrivecart.com/social-system/",
    blurb: "Create better social posts and stronger engagement with a cleaner publishing workflow.",
    badge: "Social Media",
  },
  {
    slug: "video-system",
    title: "Video System",
    image: "/products/video-system.png",
    url: "https://metallfya--irc.thrivecart.com/video-system/",
    blurb: "Stay consistent with video creation and turn ideas into content faster.",
    badge: "Video Marketing",
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = useMemo(() => products[activeIndex], [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  function goNext() {
    setActiveIndex((current) => (current + 1) % products.length);
  }

  function goPrev() {
    setActiveIndex((current) => (current - 1 + products.length) % products.length);
  }

  function jumpTo(index) {
    setActiveIndex(index);
  }

  return (
    <main className="page-wrap" style={{ paddingTop: "2rem" }}>
      <section
        className="glass-card"
        style={{
          padding: "2rem",
          marginBottom: "1.25rem",
          background:
            "linear-gradient(135deg, rgba(8,15,35,0.95), rgba(10,20,48,0.9))",
        }}
      >
        <span className="section-kicker">NeonFlow Marketplace</span>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 1,
            margin: "0 0 1rem",
          }}
        >
          Your AI product lineup
        </h1>

        <p className="muted-text" style={{ maxWidth: 760, fontSize: "1.08rem" }}>
          A rotating product page built around your ThriveCart links, your products,
          and a cleaner NeonFlow look.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "1.25rem",
          }}
        >
          <a href="#product-rotator" className="button-link">
            View Products
          </a>
          <Link to="/dashboard" className="ghost-button">
            Dashboard
          </Link>
        </div>
      </section>

      <RevealSection className="glass-card section-block">
        <div
          id="product-rotator"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
            gap: "1.25rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              minHeight: "420px",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              display: "grid",
              placeItems: "center",
              padding: "1rem",
            }}
          >
            <img
              src={activeProduct.image}
              alt={activeProduct.title}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "390px",
                objectFit: "cover",
                borderRadius: "18px",
              }}
            />
          </div>

          <div>
            <div
              style={{
                display: "inline-flex",
                padding: "0.4rem 0.75rem",
                borderRadius: "999px",
                background: "rgba(77, 226, 255, 0.1)",
                color: "var(--cyan)",
                fontWeight: 700,
                marginBottom: "0.9rem",
              }}
            >
              {activeProduct.badge}
            </div>

            <h2 style={{ marginTop: 0, marginBottom: "0.75rem" }}>
              {activeProduct.title}
            </h2>

            <p
              className="muted-text"
              style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.25rem" }}
            >
              {activeProduct.blurb}
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href={activeProduct.url}
                target="_blank"
                rel="noreferrer"
                className="button-link"
              >
                Buy with ThriveCart
              </a>

              <button type="button" className="ghost-button" onClick={goPrev}>
                Previous
              </button>

              <button type="button" className="ghost-button" onClick={goNext}>
                Next
              </button>
            </div>

            <div
              style={{
                marginTop: "1.25rem",
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {products.map((product, index) => (
                <button
                  key={product.slug}
                  type="button"
                  onClick={() => jumpTo(index)}
                  className="ghost-button"
                  style={{
                    minHeight: "unset",
                    padding: "0.55rem 0.8rem",
                    borderColor:
                      activeIndex === index
                        ? "rgba(77,226,255,0.55)"
                        : "rgba(255,255,255,0.12)",
                    background:
                      activeIndex === index
                        ? "rgba(77,226,255,0.12)"
                        : "rgba(255,255,255,0.03)",
                  }}
                >
                  {product.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-block" delay={0.08}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {products.map((product, index) => (
            <article
              key={product.slug}
              className="glass-card"
              style={{
                border:
                  activeIndex === index
                    ? "1px solid rgba(77,226,255,0.45)"
                    : undefined,
              }}
            >
              <div
                style={{
                  height: "180px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "1rem",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="offer-tag" style={{ marginBottom: "0.7rem" }}>
                {product.badge}
              </div>

              <h3 style={{ marginTop: 0 }}>{product.title}</h3>
              <p className="muted-text">{product.blurb}</p>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "1rem" }}>
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() => jumpTo(index)}
                >
                  Preview
                </button>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noreferrer"
                  className="button-link"
                >
                  Buy Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>
    </main>
  );
}
