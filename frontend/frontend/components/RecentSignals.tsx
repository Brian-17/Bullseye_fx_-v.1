export default function RecentSignals() {
  const signals = [
    {
      pair: "NAS100",
      direction: "BUY",
      entry: "22,150",
    },
    {
      pair: "XAUUSD",
      direction: "SELL",
      entry: "3,420",
    },
    {
      pair: "EURUSD",
      direction: "BUY",
      entry: "1.1250",
    },
  ];

  return (
    <div
      style={{
        background: "#1e293b",
        marginTop: "30px",
        borderRadius: "12px",
        padding: "30px",
      }}
    >
      <h2 style={{ color: "#fbbf24", marginBottom: "20px" }}>
        Recent Signals
      </h2>

      {signals.map((signal) => (
        <div
          key={signal.pair}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: "1px solid #334155",
          }}
        >
          <span>{signal.pair}</span>
          <span>{signal.direction}</span>
          <span>{signal.entry}</span>
        </div>
      ))}
    </div>
  );
}
