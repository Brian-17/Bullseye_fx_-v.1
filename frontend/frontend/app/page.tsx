export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        🎯 Bullseye FX
      </h1>

      <h2>AI Trading Academy Platform</h2>

      <p style={{ maxWidth: "600px", marginTop: "20px" }}>
        Learn Smart Money Concepts (SMC), ICT strategies, AI-powered market
        analysis, and become a consistently profitable trader.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          background: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Get Started
      </button>
    </main>
  );
}
