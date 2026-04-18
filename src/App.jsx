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
  const ctaTrackUrl =
    `https://n8n-production-01ac.up.railway.app/webhook/t` +
    `?src=${encodeURIComponent(src)}` +
    `&offer=main-cta` +
    `&url=${encodeURIComponent(ctaFinalUrl)}`;

  const bannerTrackUrl =
    `https://n8n-production-01ac.up.railway.app/webhook/t` +
    `?src=${encodeURIComponent(src)}` +
    `&offer=leadsleap-banner` +
    `&url=${encodeURIComponent("https://leadsleap.com/?r=theojm")}`;

  const extraBannerTrackUrl =
    `https://n8n-production-01ac.up.railway.app/webhook/t` +
    `?src=${encodeURIComponent(src)}` +
    `&offer=extra-products` +
    `&url=${encodeURIComponent("https://rotatelinkpro.com/Theojm/moneymakertools/")}`;

  const herculistTrackUrl =
    `https://n8n-production-01ac.up.railway.app/webhook/t` +
    `?src=${encodeURIComponent(src)}` +
    `&offer=herculist-banner` +
    `&url=${encodeURIComponent("http://www.herculist.com/members/index.cgi?Theojm")}`;

  const imageGeneratorTrackUrl =
    `https://n8n-production-01ac.up.railway.app/webhook/t` +
    `?src=${encodeURIComponent(src)}` +
    `&offer=image-generator` +
    `&url=${encodeURIComponent("https://metallfya--irc.thrivecart.com/image-generator/")}`;

  return (
    <div className="landing-page">
      <a href={ctaTrackUrl} className="logo-container">
        <img src="/logo.png" alt="Logo" />
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
                title="10 Done-For-You Systems That Make Money Online (No Building Needed)"
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
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
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
                  href={imageGeneratorTrackUrl}
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
                  Get Image Generator for $47
                </a>

                <p
                  style={{
                    marginTop: "12px",
                    color: "#94a3b8",
                    fontSize: "0.95rem",
                  }}
                >
                  Personal use only • One-time payment
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
              No building. No guessing. Just plug in and go.
            </p>

            <div className="bonus">🎁 Free Bonus Included</div>

            <a className="cta" href={ctaTrackUrl}>
              Get Instant Access
            </a>

            <p className="trust">Instant access • No experience needed</p>
          </div>
        </div>

        <div className="banner-row">
          <div className="banner-card">
            <a href={bannerTrackUrl} target="_blank" rel="noopener noreferrer">
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
            <a href={extraBannerTrackUrl} target="_blank" rel="noopener noreferrer">
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
            <a href={herculistTrackUrl} target="_blank" rel="noopener noreferrer">
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
