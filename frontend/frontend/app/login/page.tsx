export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "#1e293b",
          padding: "40px",
          borderRadius: "12px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Login to Bullseye FX
        </h1>

        <input
          type="email"
          placeholder="Email Address"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#fbbf24",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
            }
