import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-red-500">
              NHL Scores
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-white hover:text-red-400 px-3 py-2 rounded-md text-lg font-medium"
            >
              Home
            </Link>
            <Link
              to="/standings"
              className="text-white hover:text-red-400 px-3 py-2 rounded-md text-lg font-medium"
            >
              Standings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}