export default function Features() {
  const features = [
    {
      title: "📚 Forex Academy",
      description: "Learn SMC, ICT and Price Action from beginner to advanced."
    },
    {
      title: "🤖 AI Trade Analysis",
      description: "Get AI-powered market insights and trading ideas."
    },
    {
      title: "📊 Live Trading Sessions",
      description: "Join live analysis and mentorship sessions."
    },
    {
      title: "🏆 Community",
      description: "Interact with traders and grow together."
    }
  ];

  return (
    <section className="bg-gray-950 text-white py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose Bullseye FX?
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-gray-800 p-6 hover:border-yellow-500 transition"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}      >
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
