export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md">

      <h1 className="text-2xl font-bold text-blue-600">
        AI Invest
      </h1>

      <div className="flex gap-8 text-gray-700">

        <a href="#">Home</a>

        <a href="#">Features</a>

        <a href="#">Pricing</a>

        <a href="#">About</a>

      </div>

    </nav>
  );
}