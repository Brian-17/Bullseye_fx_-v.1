export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800 bg-black text-white">
      <h1 className="text-2xl font-bold">🎯 Bullseye FX</h1>

      <div className="flex gap-6">
        <a href="#" className="hover:text-yellow-400">Home</a>
        <a href="#" className="hover:text-yellow-400">Courses</a>
        <a href="#" className="hover:text-yellow-400">Signals</a>
        <a href="#" className="hover:text-yellow-400">Dashboard</a>
        <a href="#" className="hover:text-yellow-400">Contact</a>
      </div>
    </nav>
  );
}
