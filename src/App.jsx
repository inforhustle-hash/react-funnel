import "./App.css";

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const src = params.get("src") || "direct";

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

        <div className="bonus">🎁 Free Bonus Included</div>

        <a
          className="cta"
          href={`/capture.html?src=${encodeURIComponent(src)}`}
        >
          Get Instant Access
        </a>

        <p className="trust">Instant access • No experience needed</p>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a
            href="https://leadsleap.com/?r=theojm"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block" }}
          >
            <img
              src="/promo-strip.gif"
              alt="Promo"
              style={{
                display: "block",
                width: "468px",
                maxWidth: "100%",
                height: "auto",
                margin: "0 auto"
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
