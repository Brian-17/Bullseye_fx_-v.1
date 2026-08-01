import StatsCard from "../../components/StatsCard";
import PerformanceChart from "../../components/PerformanceChart";
import RecentSignals from "../../components/RecentSignals";

export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          marginBottom: "30px",
        }}
      >
        Bullseye FX Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <StatsCard title="Account Balance" value="$10,250" />
        <StatsCard title="Win Rate" value="82%" />
        <StatsCard title="Trades Taken" value="148" />
        <StatsCard title="Monthly Profit" value="+18.4%" />
      </div>

      <PerformanceChart />

      <RecentSignals />
    </main>
  );
}    </main>
  );
}
