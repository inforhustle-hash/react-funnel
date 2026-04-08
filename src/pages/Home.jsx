import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import RevealSection from "../components/RevealSection";
import { db } from "../firebase";

const products = [
  {
    slug: "affiliate-system",
    title: "Affiliate System",
    image: "/products/affiliate-system.png",
    url: "https://metallfya--irc.thrivecart.com/affiliate-system/",
    badge: "Affiliate Marketing",
    blurb:
      "Launch affiliate campaigns faster with a system designed to simplify promotion, planning, and daily execution.",
  },
  {
    slug: "content-system",
    title: "Content System",
    image: "/products/content-system.png",
    url: "https://metallfya--irc.thrivecart.com/content-system/",
    badge: "Content Creation",
    blurb:
      "Create stronger content faster with an AI-powered workflow built for creators, marketers, and online business owners.",
  },
  {
    slug: "ebook-system",
    title: "Ebook System",
    image: "/products/ebook-system.png",
    url: "https://metallfya--irc.thrivecart.com/ebook-system/",
    badge: "Digital Products",
    blurb:
      "Speed up ebook creation and turn ideas into polished digital products without the usual long writing cycle.",
  },
  {
    slug: "email-system",
    title: "Email System",
    image: "/products/email-system.png",
    url: "https://metallfya--irc.thrivecart.com/email-system/",
    badge: "Email Marketing",
    blurb:
      "Build better emails that get opened, read, and acted on with a system focused on inbox performance.",
  },
  {
    slug: "image-generator",
    title: "Image Generator",
    image: "/products/image-generator.png",
    url: "https://metallfya--irc.thrivecart.com/image-generator/",
    badge: "Graphics & Design",
    blurb:
      "Create eye-catching images and branded visuals for sales pages, social posts, ads, and digital promotions.",
  },
  {
    slug: "medium-system",
    title: "Medium System",
    image: "/products/medium-system.png",
    url: "https://metallfya--irc.thrivecart.com/medium-system/",
    badge: "Publishing",
    blurb:
      "Publish smarter across platforms with a content workflow built for bloggers, marketers, and article creators.",
  },
  {
    slug: "sales-system",
    title: "Sales System",
    image: "/products/sales-system.png",
    url: "https://metallfya--irc.thrivecart.com/sales-system/",
    badge: "Sales Copy",
    blurb:
      "Generate stronger sales messaging and persuasive copy built to help you present offers with more clarity and power.",
  },
  {
    slug: "seo-system",
    title: "SEO System",
    image: "/products/seo-system.png",
    url: "https://metallfya--irc.thrivecart.com/seo-system/",
    badge: "SEO",
    blurb:
      "Turn SEO into a more practical process with a system focused on visibility, rankings, and content optimization.",
  },
  {
    slug: "social-system",
    title: "Social System",
    image: "/products/social-system.png",
    url: "https://metallfya--irc.thrivecart.com/social-system/",
    badge: "Social Media",
    blurb:
      "Create better social content with tools designed to improve branding, consistency, reach, and engagement.",
  },
  {
    slug: "video-system",
    title: "Video System",
    image: "/products/video-system.png",
    url: "https://metallfya--irc.thrivecart.com/video-system/",
    badge: "Video Marketing",
    blurb:
      "Support your video content process with a system built to help creators plan, produce, and publish with confidence.",
  },
];

const leadsLeapUrl = "https://leadsleap.com/?r=theojm";
const leadsLeapBanner = "https://leadsleap.com/images/b468.60.gif";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadMessage, setLeadMessage] = useState("");
  const [savingLead, setSavingLead] = useState(false);

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

  function scrollToFeatured(index) {
    setActiveIndex(index);
    const el = document.getElementById("featured-product");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function openLeadModal(product) {
    setSelectedProduct(product);
    setLeadMessage("");
    setShowLeadModal(true);
  }

  function closeLeadModal() {
    if (savingLead) return;
    setShowLeadModal(false);
    setLeadMessage("");
  }

  async function handleLeadCapture(event) {
    event.preventDefault();

    if (!selectedProduct) return;

    if (!leadName.trim() || !leadEmail.trim()) {
      setLeadMessage("Please enter your name and email.");
      return;
    }

    setSavingLead(true);
    setLeadMessage("");

    const leadData = {
      name: leadName.trim(),
      email: leadEmail.trim(),
      productSlug: selectedProduct.slug,
      productTitle: selectedProduct.title,
      productUrl: selectedProduct.url,
      source: "neonflow-home-funnel",
      capturedAt: new Date().toISOString(),
    };

    try {
      if (db) {
        await addDoc(collection(db, "leads"), {
          ...leadData,
          createdAt: serverTimestamp(),
        });
      } else {
        const existingLeads = JSON.parse(localStorage.getItem("neonflow_leads") || "[]");
        existingLeads.push(leadData);
        localStorage.setItem("neonflow_leads", JSON.stringify(existingLeads));
      }

      localStorage.setItem(
        "neonflow_last_lead",
        JSON.stringify({
          name: leadName.trim(),
          email: leadEmail.trim(),
          productTitle: selectedProduct.title,
        })
      );

      window.location.href = selectedProduct.url;
    } catch (error) {
      setLeadMessage("Lead capture saved failed. Please try again.");
      console.error(error);
    } finally {
      setSavingLead(false);
    }
  }

  return (
    <>
     
</div> 

<h1 style={{ color: "red", fontSize: "48px", textAlign: "center" }}>
  TEST HOME PAGE
</h1>

<main className="page-wrap" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
        <section
          className="glass-card"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "2rem",
            marginBottom: "1.25rem",
            background:
              "linear-gradient(135deg, rgba(6,12,30,0.96), rgba(10,18,46,0.94))",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 20%, rgba(77,226,255,0.12), transparent 28%), radial-gradient(circle at 80% 20%, rgba(139,92,246,0.14), transparent 28%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <span className="section-kicker">Theoda Metcalf Product Showcase</span>

            <h1
              style={{
                margin: "0 0 1rem",
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                lineHeight: 0.95,
              }}
            >
              AI tools built to help you
              <br />
              create, market, and sell faster
            </h1>

            <p className="muted-text" style={{ maxWidth: 780, fontSize: "1.05rem" }}>
              Explore each system below, capture the lead first, then send buyers
              straight through to the matching ThriveCart offer.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "1.25rem",
              }}
            >
              <a href="#featured-product" className="button-link">
                View Featured Product
              </a>

              <a href="#all-products" className="ghost-button">
                View All Products
              </a>

              <Link to="/thank-you" className="ghost-button">
                Thank You Page
              </Link>
            </div>
          </div>
        </section>

        <RevealSection className="glass-card" delay={0.05}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              padding: "0.25rem 0",
            }}
          >
            <div>
              <span className="section-kicker">Recommended Extra Income Tool</span>
              <h3 style={{ margin: "0.35rem 0 0.35rem" }}>Advertise with LeadsLeap</h3>
              <p className="muted-text" style={{ margin: 0, maxWidth: 700 }}>
                Looking for another traffic and advertising option? Check out LeadsLeap and
                use it alongside your funnel.
              </p>
            </div>

            <a
              href={leadsLeapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-link"
            >
              Visit LeadsLeap
            </a>
          </div>
        </RevealSection>

        <RevealSection className="glass-card" delay={0.08}>
          <div
            style={{
              display: "grid",
              placeItems: "center",
              padding: "0.5rem 0",
            }}
          >
            <a
              href={leadsLeapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "100%",
              }}
            >
              <img
                src={leadsLeapBanner}
                alt="Advertise with LeadsLeap"
                style={{
                  width: "100%",
                  maxWidth: "468px",
                  height: "auto",
                  borderRadius: "12px",
                  border: "1px solid rgba(77,226,255,0.18)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                }}
              />
            </a>
          </div>
        </RevealSection>

        <RevealSection className="glass-card section-block">
          <div
            id="featured-product"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.08fr) minmax(0, 1fr)",
              gap: "1.25rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                minHeight: "420px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
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
                  maxHeight: "390px",
                  objectFit: "contain",
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
                  background: "rgba(77,226,255,0.12)",
                  color: "var(--cyan)",
                  fontWeight: 700,
                  marginBottom: "0.85rem",
                }}
              >
                {activeProduct.badge}
              </div>

              <h2 style={{ marginTop: 0, marginBottom: "0.75rem" }}>
                {activeProduct.title}
              </h2>

              <p
                className="muted-text"
                style={{
                  fontSize: "1.06rem",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {activeProduct.blurb}
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button
                  type="button"
                  className="button-link"
                  onClick={() => openLeadModal(activeProduct)}
                >
                  Get Access
                </button>

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

        <RevealSection className="section-block" delay={0.12}>
          <span className="section-kicker">All Products</span>

          <div
            id="all-products"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
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
                      : "1px solid rgba(125,154,255,0.18)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "100%",
                }}
              >
                <div
                  style={{
                    height: "360px",
                    borderRadius: "18px",
                    overflow: "hidden",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(77,226,255,0.04))",
                    display: "grid",
                    placeItems: "center",
                    padding: "18px",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "12px",
                    }}
                  />
                </div>

                <div className="offer-tag" style={{ marginBottom: "0.7rem" }}>
                  {product.badge}
                </div>

                <h3 style={{ marginTop: 0 }}>{product.title}</h3>
                <p className="muted-text">{product.blurb}</p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginTop: "1rem",
                  }}
                >
                  <button
                    type="button"
                    className="ghost-button"
                    onClick={() => scrollToFeatured(index)}
                  >
                    Preview
                  </button>

                  <button
                    type="button"
                    className="button-link"
                    onClick={() => openLeadModal(product)}
                  >
                    Get Access
                  </button>
                </div>
              </article>
            ))}
          </div>
        </RevealSection>
      </main>

      {showLeadModal && selectedProduct && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(3, 6, 14, 0.82)",
            backdropFilter: "blur(8px)",
            display: "grid",
            placeItems: "center",
            padding: "1rem",
            zIndex: 999,
          }}
        >
          <div
            className="glass-card"
            style={{
              width: "min(560px, 100%)",
              padding: "1.5rem",
              border: "1px solid rgba(77,226,255,0.24)",
            }}
          >
            <span className="section-kicker">Get Access First</span>
            <h2 style={{ marginTop: 0 }}>{selectedProduct.title}</h2>
            <p className="muted-text" style={{ marginBottom: "1rem" }}>
              Enter your name and email before continuing to the ThriveCart checkout.
            </p>

            <form
              onSubmit={handleLeadCapture}
              style={{ display: "grid", gap: "1rem" }}
            >
              <label style={{ display: "grid", gap: "0.45rem" }}>
                Name
                <input
                  type="text"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="Your name"
                  required
                  style={{
                    width: "100%",
                    padding: "0.95rem 1rem",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(6, 10, 18, 0.8)",
                    color: "white",
                    outline: "none",
                  }}
                />
              </label>

              <label style={{ display: "grid", gap: "0.45rem" }}>
                Email
                <input
                  type="email"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  style={{
                    width: "100%",
                    padding: "0.95rem 1rem",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(6, 10, 18, 0.8)",
                    color: "white",
                    outline: "none",
                  }}
                />
              </label>

              {leadMessage && <div className="message-box">{leadMessage}</div>}

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button
                  type="submit"
                  className="button-link"
                  disabled={savingLead}
                >
                  {savingLead ? "Saving..." : "Continue To Checkout"}
                </button>

                <button
                  type="button"
                  className="ghost-button"
                  onClick={closeLeadModal}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
