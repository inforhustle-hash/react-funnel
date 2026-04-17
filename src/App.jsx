import "./App.css";
import { useEffect, useState } from "react";
import logo from "./logo.png"; // ✅ FIXED (rename your file)

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

      {/* 🔥 LOGO */}
      <a href={ctaTrackUrl} className="logo-container">
        <img src={logo} alt="Logo" />
      </a>

      <div className="landing-container">
        <div className="hero-row">
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
