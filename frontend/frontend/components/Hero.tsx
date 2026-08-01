export default function Hero() {
  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#0f172a",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        🎯 Bullseye FX
      </h1>

      <h2 style={{ color: "#fbbf24", marginBottom: "20px" }}>
        Master ICT • SMC • Price Action
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          fontSize: "18px",
          lineHeight: "1.7",
        }}
      >
        Join Bullseye FX and learn institutional trading strategies, receive
        premium trading signals, keep a professional trading journal, and grow
        with AI-powered market analysis.
      </p>

      <button
        style={{
          marginTop: "35px",
          padding: "14px 28px",
          background: "#fbbf24",
          color: "#000",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Start Learning
      </button>
    </section>
  );
}
