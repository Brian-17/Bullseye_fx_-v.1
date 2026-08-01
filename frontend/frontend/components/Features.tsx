export default function Features() {
  const features = [
    "📚 Forex Academy",
    "📈 Premium Trading Signals",
    "🤖 AI Market Analysis",
    "📖 Trading Journal",
    "📅 Economic Calendar",
    "👥 Affiliate Program",
  ];

  return (
    <section
      style={{
        background: "#111827",
        color: "white",
        padding: "70px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "40px",
        }}
      >
        Why Choose Bullseye FX?
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {features.map((feature) => (
          <div
            key={feature}
            style={{
              background: "#1f2937",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  );
              }
