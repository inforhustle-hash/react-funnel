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

  return (
    <div className="landing-page">
      <div className="landing-container">
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

        <p className="trust" style={{ marginBottom: "40px" }}>
          Instant access • No experience needed
        </p>

        {/* 🔥 LeadsLeap Banner */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a href={bannerTrackUrl} target="_blank" rel="noopener noreferrer">
            <img
              src="https://imgallery.llsvr.com/theojm.69d5cbe0d1953.png"
              alt="LeadsLeap"
              onMouseEnter={() => setHoverMain(true)}
              onMouseLeave={() => setHoverMain(false)}
              style={{
                maxWidth: "468px",
                width: "100%",
                display: "block",
                margin: "0 auto",
                transform: hoverMain ? "scale(1.05)" : "scale(1)",
                transition: "all 0.2s ease",
                boxShadow: hoverMain ? "0 10px 25px rgba(0,0,0,0.4)" : "none",
                borderRadius: "10px",
              }}
            />
          </a>
        </div>

        {/* 🔥 Extra Tools Banner */}
        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <a href={extraBannerTrackUrl} target="_blank" rel="noopener noreferrer">
            <img
              src="https://imgallery.llsvr.com/theojm.69dd618e5daee.png"
              alt="Extra Money Tools"
              onMouseEnter={() => setHoverExtra(true)}
              onMouseLeave={() => setHoverExtra(false)}
              style={{
                maxWidth: "468px",
                width: "100%",
                display: "block",
                margin: "0 auto",
                transform: hoverExtra ? "scale(1.05)" : "scale(1)",
                transition: "all 0.2s ease",
                boxShadow: hoverExtra ? "0 10px 25px rgba(0,0,0,0.4)" : "none",
                borderRadius: "10px",
              }}
            />
          </a>
        </div>

        {/* 🔥 NEW HERCULIST BANNER */}
        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <a href={herculistTrackUrl} target="_blank" rel="noopener noreferrer">
            <img
              src="http://www.herculist.com/img/small6.png"
              alt="Herculist"
              onMouseEnter={() => setHoverHerc(true)}
              onMouseLeave={() => setHoverHerc(false)}
              style={{
                maxWidth: "468px",
                width: "100%",
                display: "block",
                margin: "0 auto",
                transform: hoverHerc ? "scale(1.05)" : "scale(1)",
                transition: "all 0.2s ease",
                boxShadow: hoverHerc ? "0 10px 25px rgba(0,0,0,0.4)" : "none",
                borderRadius: "10px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
