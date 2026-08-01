export default function LoginForm() {
  return (
    <>
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
    </>
  );
}
