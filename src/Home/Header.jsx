import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="w-full bg-transparent px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <Link to="/">
        <img src="logo-1.png" alt="Logo" className="h-12" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-6 font-medium text-black">
        <Link to="/" className="hover:text-gray-600">Home</Link>
        <Link to="/feed" className="hover:text-gray-600">Feed</Link>
        <Link to="/projects" className="hover:text-gray-600">My Projects</Link>
        <Link to="/community" className="hover:text-gray-600">Community</Link>
        <a href="mailto:Collab@work.ac.in" className="hover:text-gray-600">Contact</a>
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link to="/create" className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 font-semibold text-sm">
          Create Post
        </Link>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="border border-red-300 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white text-red-500 font-semibold text-sm"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-black border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 font-semibold text-sm">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img src="ham.png" alt="Menu" className="h-8" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 lg:hidden z-50 shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4 font-medium text-black">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/feed" onClick={() => setMenuOpen(false)}>Feed</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>My Projects</Link>
            <Link to="/community" onClick={() => setMenuOpen(false)}>Community</Link>
            <a href="mailto:Collab@work.ac.in" onClick={() => setMenuOpen(false)}>Contact</a>
            <Link to="/create" onClick={() => setMenuOpen(false)} className="bg-black text-white px-4 py-2 rounded-xl font-semibold">
              Create Post
            </Link>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-red-500 border border-red-300 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white font-semibold"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)} className="border border-gray-300 px-4 py-2 rounded-lg font-semibold">
                Login
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
