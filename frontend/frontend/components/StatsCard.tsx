type StatsCardProps = {
  title: string;
  value: string;
};

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "12px",
        padding: "20px",
        minWidth: "220px",
      }}
    >
      <h3
        style={{
          color: "#94a3b8",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <h2
        style={{
          color: "#fbbf24",
          fontSize: "28px",
        }}
      >
        {value}
      </h2>
    </div>
  );
}
