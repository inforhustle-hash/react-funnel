import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const src = params.get("src") || "direct";

  const [hoverMain, setHoverMain] = useState(false);
  const [hoverExtra, setHoverExtra] = useState(false);
  const [hoverHerc, setHoverHerc] = useState(false);

  useEffect(() => {
    localStorage.setItem("funnel_src", src);
  }, [src]);

  const ctaFinalUrl = `${window.location.origin}/capture.html?src=${encodeURIComponent(src)}`;
  const businessAutomationFinalUrl = `${window.location.origin}/business-automation.html`;

  const bannerFinalUrl = "https://leadsleap.com/?r=theojm";
  const extraBannerFinalUrl = "https://rotatelinkpro.com/Theojm/moneymakertools/";
  const herculistFinalUrl = "http://www.herculist.com/members/index.cgi?Theojm";
  const imageGeneratorFinalUrl = "https://metallfya--irc.thrivecart.com/image-generator/";
  const viralBannerzFinalUrl = "https://viralbannerz.com/?Theojm";

  const makeTrackUrl = (offer, url) =>
    `https://n8n-production-01ac.up.railway.app/webhook/t` +
    `?src=${encodeURIComponent(src)}` +
    `&offer=${encodeURIComponent(offer)}` +
    `&url=${encodeURIComponent(url)}`;

  const trackClick = (offer, url) => {
    try {
      const img = new Image();
      img.src = `${makeTrackUrl(offer, url)}&_ts=${Date.now()}`;
    } catch (e) {
      console.error("Tracking failed", e);
    }
  };

  return (
    <div className="landing-page">
      <a
        href={ctaFinalUrl}
        className="logo-container"
        onClick={() => trackClick("main-cta", ctaFinalUrl)}
      >
        <img src="/logo.png" alt="Logo" />
      </a>

      <a
        href={viralBannerzFinalUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick("viralbannerz-top-banner", viralBannerzFinalUrl)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 20,
          display: "block",
        }}
      >
        <img
          src="https://hosting.photobucket.com/9ade4d44-17f6-4a2a-94fd-326ab824118b/0ceffabf-22b3-4c0f-a341-3bdc4647fbf0.png"
          alt="ViralBannerz"
          style={{
            maxWidth: "260px",
            width: "100%",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(0,0,0,0.35)",
          }}
        />
      </a>

      <div className="landing-container">
        <div className="hero-row">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "28px",
            }}
          >
            <div className="video-box">
              <iframe
                width="1335"
                height="751"
                src="https://www.youtube.com/embed/4a3KpSfA8Wk"
                title="10 Done-For-You Systems That Make Money Online"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div
              style={{
                background: "rgba(15, 27, 45, 0.95)",
                border: "1px solid #1d314a",
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "0 14px 40px rgba(0,0,0,0.28)",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "16px" }}>
                <h2
                  style={{
                    fontSize: "2rem",
                    margin: "0 0 8px",
                    lineHeight: "1.2",
                    color: "#fff",
                  }}
                >
                  Watch the Image Generator in Action
                </h2>

                <p
                  style={{
                    color: "#cdd8e3",
                    fontSize: "1rem",
                    margin: "0",
                  }}
                >
                  Helps you create graphics and image assets faster for content,
                  promotions, and branding use.
                </p>
              </div>

              <div className="video-box" style={{ marginBottom: "18px" }}>
                <iframe
                  width="1335"
                  height="751"
                  src="https://player.vimeo.com/video/1034664209"
                  title="Image Generator Demo"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <a
                  href={imageGeneratorFinalUrl}
                  onClick={() => trackClick("image-generator", imageGeneratorFinalUrl)}
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg, #00c2ff, #38bdf8)",
                    color: "#081120",
                    padding: "14px 28px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    fontWeight: "700",
                    fontSize: "1rem",
                    boxShadow: "0 12px 30px rgba(0, 194, 255, 0.25)",
                  }}
                >
                  👉 Get This System for $47
                </a>

                <p
                  style={{
                    marginTop: "12px",
                    color: "#94a3b8",
                    fontSize: "0.95rem",
                  }}
                >
                  Personal use • One-time payment • Instant access
                </p>
              </div>
            </div>
          </div>

          <div className="hero-text">
            <h1>
              Steal These 10 Done-For-You Systems
              <br />
              Already Making Sales Right Now
            </h1>

            <p className="sub">
              Choose the system you want. Watch the demo. Start using it today.
            </p>

            <div className="bonus">🎁 Free Bonus Included</div>

            <a
              className="cta"
              href={ctaFinalUrl}
              onClick={() => trackClick("main-cta", ctaFinalUrl)}
            >
              ➤ Get Your First AI System Now
            </a>

            <p className="trust">Instant access • No experience needed</p>

            <div
              style={{
                marginTop: "26px",
                background: "rgba(15, 27, 45, 0.96)",
                border: "1px solid rgba(56, 189, 248, 0.35)",
                borderRadius: "18px",
                padding: "20px",
                boxShadow: "0 14px 40px rgba(0,0,0,0.3)",
              }}
            >
              <h2
                style={{
                  color: "#fff",
                  fontSize: "1.45rem",
                  margin: "0 0 8px",
                  lineHeight: "1.2",
                }}
              >
                Need This Setup For Your Business?
              </h2>

              <p
                style={{
                  color: "#cdd8e3",
                  fontSize: "0.98rem",
                  margin: "0 0 16px",
                }}
              >
                Enter your name and email to see the Business Lead Follow-Up
                Automation setup.
              </p>

              <form method="post" action="https://www.sendsteed.com/subscribe/">
                <input
                  name="e126583"
                  required
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    padding: "13px 14px",
                    marginBottom: "10px",
                    borderRadius: "12px",
                    border: "1px solid #1d314a",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />

                <input
                  name="n126583"
                  required
                  type="text"
                  placeholder="Name"
                  style={{
                    width: "100%",
                    padding: "13px 14px",
                    marginBottom: "12px",
                    borderRadius: "12px",
                    border: "1px solid #1d314a",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />

                <input type="hidden" name="lllid" value="126583" />
                <input type="hidden" name="lluid" value="theojm" />
                <input type="hidden" name="redirect" value={businessAutomationFinalUrl} />
                <input type="hidden" name="source" value="business-automation" />

                <button
                  type="submit"
                  onClick={() =>
                    trackClick("business-automation-optin", businessAutomationFinalUrl)
                  }
                  style={{
                    width: "100%",
                    background: "linear-gradient(135deg, #00c2ff, #38bdf8)",
                    color: "#081120",
                    padding: "14px 28px",
                    borderRadius: "12px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "800",
                    fontSize: "1rem",
                    boxShadow: "0 12px 30px rgba(0, 194, 255, 0.25)",
                  }}
                >
                  ⚙️ Business Automation Setup
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="banner-row">
          <div className="banner-card">
            <a
              href={bannerFinalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("leadsleap-banner", bannerFinalUrl)}
            >
              <img
                src="https://imgallery.llsvr.com/theojm.69dd65265e911.png"
                alt="LeadsLeap"
                className="pulse"
                onMouseEnter={() => setHoverMain(true)}
                onMouseLeave={() => setHoverMain(false)}
                style={{
                  transform: hoverMain ? "scale(1.08)" : "scale(1)",
                  boxShadow: hoverMain ? "0 10px 25px rgba(0,0,0,0.4)" : "none",
                }}
              />
            </a>
            <p>👆 Click the banner above</p>
          </div>

          <div className="banner-card">
            <a
              href={extraBannerFinalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("extra-products", extraBannerFinalUrl)}
            >
              <img
                src="https://imgallery.llsvr.com/theojm.69dd618e5daee.png"
                alt="Extra Tools"
                className="pulse"
                onMouseEnter={() => setHoverExtra(true)}
                onMouseLeave={() => setHoverExtra(false)}
                style={{
                  transform: hoverExtra ? "scale(1.08)" : "scale(1)",
                  boxShadow: hoverExtra ? "0 10px 25px rgba(0,0,0,0.4)" : "none",
                }}
              />
            </a>
            <p>👆 Click the banner above</p>
          </div>

          <div className="banner-card">
            <a
              href={herculistFinalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick("herculist-banner", herculistFinalUrl)}
            >
              <img
                src="https://imgallery.llsvr.com/theojm.69dd6a322d78c.png"
                alt="Herculist"
                className="pulse"
                onMouseEnter={() => setHoverHerc(true)}
                onMouseLeave={() => setHoverHerc(false)}
                style={{
                  transform: hoverHerc ? "scale(1.08)" : "scale(1)",
                  boxShadow: hoverHerc ? "0 10px 25px rgba(0,0,0,0.4)" : "none",
                }}
              />
            </a>
            <p>👆 Click the banner above</p>
          </div>
        </div>
      </div>
    </div>
  );
}
