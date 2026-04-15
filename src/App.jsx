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

  const videoEmbedUrl = "https://www.youtube.com/embed/OeoRjcoKPWU";

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "30px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          {/* LEFT SIDE VIDEO */}
          <div
            style={{
              flex: "1 1 420px",
              maxWidth: "520px",
              minWidth: "300px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "18px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                background: "#000",
              }}
            >
              <iframe
                src={videoEmbedUrl}
                title="Done For You Systems Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </div>

          {/* RIGHT SIDE HERO */}
          <div
            style={{
              flex: "1 1 420px",
              maxWidth: "620px",
              minWidth: "300px",
              textAlign: "center",
            }}
          >
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

            <p className="trust" style={{ marginBottom: "10px" }}>
              Instant access • No experience needed
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          {/* LeadsLeap */}
          <div style={{ textAlign: "center" }}>
            <a href={bannerTrackUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="https://imgallery.llsvr.com/theojm.69dd65265e911.png"
                alt="LeadsLeap"
                className="pulse"
                onMouseEnter={() => setHoverMain(true)}
                onMouseLeave={() => setHoverMain(false)}
                style={{
                  maxWidth: "300px",
                  width: "100%",
                  borderRadius: "10px",
                  transform: hoverMain ? "scale(1.08)" : "scale(1)",
                  transition: "0.2s",
                  boxShadow: hoverMain ? "0 10px 25px rgba(0,0,0,0.4)" : "none",
                  cursor: "pointer",
                }}
              />
            </a>
            <p style={{ marginTop: "6px", fontSize: "13px", opacity: 0.8 }}>
              👆 Click the banner above
            </p>
          </div>

          {/* Extra Tools */}
          <div style={{ textAlign: "center" }}>
            <a href={extraBannerTrackUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="https://imgallery.llsvr.com/theojm.69dd618e5daee.png"
                alt="Extra Tools"
                className="pulse"
                onMouseEnter={() => setHoverExtra(true)}
                onMouseLeave={() => setHoverExtra(false)}
                style={{
                  maxWidth: "300px",
                  width: "100%",
                  borderRadius: "10px",
                  transform: hoverExtra ? "scale(1.08)" : "scale(1)",
                  transition: "0.2s",
                  boxShadow: hoverExtra ? "0 10px 25px rgba(0,0,0,0.4)" : "none",
                  cursor: "pointer",
                }}
              />
            </a>
            <p style={{ marginTop: "6px", fontSize: "13px", opacity: 0.8 }}>
              👆 Click the banner above
            </p>
          </div>

          {/* Herculist */}
          <div style={{ textAlign: "center" }}>
            <a href={herculistTrackUrl} target="_blank" rel="noopener noreferrer">
              <img
                src="https://imgallery.llsvr.com/theojm.69dd6a322d78c.png"
                alt="Herculist"
                className="pulse"
                onMouseEnter={() => setHoverHerc(true)}
                onMouseLeave={() => setHoverHerc(false)}
                style={{
                  maxWidth: "300px",
                  width: "100%",
                  borderRadius: "10px",
                  transform: hoverHerc ? "scale(1.08)" : "scale(1)",
                  transition: "0.2s",
                  boxShadow: hoverHerc ? "0 10px 25px rgba(0,0,0,0.4)" : "none",
                  cursor: "pointer",
                }}
              />
            </a>
            <p style={{ marginTop: "6px", fontSize: "13px", opacity: 0.8 }}>
              👆 Click the banner above
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
