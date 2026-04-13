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
    `&offer=${encodeURIComponent("main-cta")}` +
    `&url=${encodeURIComponent(ctaFinalUrl)}`;

  const bannerFinalUrl = "https://leadsleap.com/?r=theojm";
  const bannerTrackUrl =
    `https://n8n-production-01ac.up.railway.app/webhook/t` +
    `?src=${encodeURIComponent(src)}` +
    `&offer=${encodeURIComponent("leadsleap-banner")}` +
    `&url=${encodeURIComponent(bannerFinalUrl)}`;

  const extraBannerFinalUrl = "https://rotatelinkpro.com/Theojm/moneymakertools/";
  const extraBannerTrackUrl =
    `https://n8n-production-01ac.up.railway.app/webhook/t` +
    `?src=${encodeURIComponent(src)}` +
    `&offer=${encodeURIComponent("extra-products")}` +
    `&url=${encodeURIComponent(extraBannerFinalUrl)}`;

  const herculistFinalUrl = "http://www.herculist.com/members/index.cgi?Theojm";
  const herculistTrackUrl =
    `https://n8n-production-01ac.up.railway.app/webhook/t` +
    `?src=${encodeURIComponent(src)}` +
    `&offer=${encodeURIComponent("herculist-banner")}` +
    `&url=${encodeURIComponent(herculistFinalUrl)}`;

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

        <div className="bonus">
          🎁 Free Bonus Included
        </div>

        <a className="cta" href={ctaTrackUrl}>
          Get Instant Access
        </a>

        <p className="trust" style={{ marginBottom: "40px" }}>
          Instant access • No experience needed
        </p>

        {/* LeadsLeap Banner */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a
            href={bannerTrackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://imgallery.llsvr.com/theojm.69dd65265e911.png"
              alt="LeadsLeap"
              onMouseEnter={() => setHoverMain(true)}
              onMouseLeave={() => setHoverMain(false)}
              style={{
                maxWidth: "468px",
                width: "100%",
                display: "block",
                margin: "0 auto",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                transform: hoverMain ? "scale(1.05)" : "scale(1)",
                boxShadow: hoverMain
                  ? "0 10px 25px rgba(0,0,0,0.4)"
                  : "none",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            />
          </a>
        </div>

        {/* Extra Money Tools Banner */}
        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <a
            href={extraBannerTrackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
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
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                transform: hoverExtra ? "scale(1.05)" : "scale(1)",
                boxShadow: hoverExtra
                  ? "0 10px 25px rgba(0,0,0,0.4)"
                  : "none",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            />
          </a>
        </div>

        {/* Herculist Banner */}
        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <a
            href={herculistTrackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://imgallery.llsvr.com/theojm.69dd6a322d78c.png"
              alt="Herculist"
              onMouseEnter={() => setHoverHerc(true)}
              onMouseLeave={() => setHoverHerc(false)}
              style={{
                maxWidth: "468px",
                width: "100%",
                display: "block",
                margin: "0 auto",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                transform: hoverHerc ? "scale(1.05)" : "scale(1)",
                boxShadow: hoverHerc
                  ? "0 10px 25px rgba(0,0,0,0.4)"
                  : "none",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
