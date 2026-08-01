type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: "100%",
        padding: "14px",
        background: "#fbbf24",
        color: "#000",
        border: "none",
        borderRadius: "8px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
