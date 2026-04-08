import "./App.css";
import { useState } from "react";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const src = params.get("src") || "direct";

  const [hover, setHover] = useState(false);

  // store it so thank you page + tracking can reuse it
  localStorage.setItem("funnel_src", src);

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

        <a
          className="cta"
          href={`/capture.html?src=${encodeURIComponent(src)}`}
        >
          Get Instant Access
        </a>

        <p className="trust">
          Instant access • No experience needed
        </p>

        {/* BANNER WITH HOVER EFFECT */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <a
            href="https://leadsleap.com/?r=theojm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://imgallery.llsvr.com/theojm.69d5cbe0d1953.png"
              alt="LeadsLeap"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                maxWidth: "468px",
                width: "100%",
                display: "block",
                margin: "0 auto",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                transform: hover ? "scale(1.05)" : "scale(1)",
                boxShadow: hover
                  ? "0 10px 25px rgba(0,0,0,0.4)"
                  : "none",
                cursor: "pointer"
              }}
            />
          </a>
        </div>

      </div>
    </div>
  );
}
