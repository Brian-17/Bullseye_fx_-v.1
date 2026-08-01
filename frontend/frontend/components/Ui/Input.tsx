type InputProps = {
  type?: string;
  placeholder?: string;
};

export default function Input({
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        border: "1px solid #334155",
        borderRadius: "8px",
        background: "#0f172a",
        color: "white",
        outline: "none",
      }}
    />
  );
}
