import { Search, ChevronDown } from "lucide-react";

function Header() {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo SVG */}
              <img
                src="https://kemendagri.go.id/img/Logokemendagri.caf3fca0.svg"
                alt="Logo Kemendagri"
                className="w-10 h-10 mr-3"
              />
              {/* Logo Text */}
              <div className="text-xl font-bold text-gray-900">
                Kemendagri R.I.
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Profil
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown menu - can be implemented later */}
            </div>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Informasi Publik
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Publikasi
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown menu - can be implemented later */}
            </div>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              JDIH
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Media
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown menu - can be implemented later */}
            </div>
          </nav>

          {/* Right Section - Search and Language */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-4 bg-red-500 relative">
                <div className="w-full h-1/2 bg-red-500"></div>
                <div className="w-full h-1/2 bg-white"></div>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
