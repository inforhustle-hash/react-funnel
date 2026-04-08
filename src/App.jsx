import "./App.css";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const src = params.get("src") || "direct";

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

        {/* PNG BANNER */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a
            href="https://leadsleap.com/?r=theojm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/leadsleap-banner.png"
              alt="LeadsLeap"
              style={{
                maxWidth: "468px",
                width: "100%",
                display: "block",
                margin: "0 auto"
              }}
            />
          </a>
        </div>

      </div>
    </div>
  );
}
