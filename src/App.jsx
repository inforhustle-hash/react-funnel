return (
  <div className="landing-page">
    <div className="landing-container">

      {/* 🔥 TOP SECTION (VIDEO LEFT / CTA RIGHT) */}
      <div className="hero-row">

        {/* LEFT = VIDEO */}
        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/OeoRjcoKPWU"
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* RIGHT = YOUR ORIGINAL CONTENT */}
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

          {/* ✅ KEEP YOUR CTA (UNCHANGED) */}
          <a className="cta" href={ctaTrackUrl}>
            Get Instant Access
          </a>

          <p className="trust">
            Instant access • No experience needed
          </p>
        </div>

      </div>

      {/* 🔽 YOUR BANNERS (UNCHANGED) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
