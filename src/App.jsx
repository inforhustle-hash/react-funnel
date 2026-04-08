import "./App.css";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const src = params.get("src") || "direct";

  import { useEffect } from "react";

export default function App() {
  // get src from URL
  const params = new URLSearchParams(window.location.search);
  const src = params.get("src") || "direct";

  // store it so thank you page + tracking can reuse it
  useEffect(() => {
    localStorage.setItem("funnel_src", src);
  }, [src]);

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

        {/* ✅ SAFE BANNER ADDED BELOW */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a
            href="https://leadsleap.com/?r=theojm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/leadsleap-banner.gif"
              alt="LeadsLeap Ad"
              style={{
                maxWidth: "468px",
                width: "100%",
                borderRadius: "10px"
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
