import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-6xl font-bold text-center">
          🎯 Bullseye FX
        </h1>

        <p className="mt-6 max-w-2xl text-center text-gray-400 text-lg">
          Master Forex Trading using Smart Money Concepts (SMC), ICT,
          AI-powered analysis, trading psychology, and live market sessions.
        </p>

        <button className="mt-10 rounded-lg bg-yellow-500 px-8 py-4 text-black font-bold hover:bg-yellow-400">
          Join the Academy
        </button>
      </main>
    </>
  );
}
