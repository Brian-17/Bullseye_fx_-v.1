export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#111827",
        color: "white",
      }}
    >
      <h2>🎯 Bullseye FX</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Courses
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </a>
        <a href="#" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}
