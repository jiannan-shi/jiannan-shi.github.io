import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/journalism', label: 'Journalism' },
    { path: '/research', label: 'Research' },
    { path: '/social-design', label: 'Social Design' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f8f8f8]/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="text-xl tracking-tight">
              Jiannan Shi
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `link-hover ${isActive ? 'text-gray-900' : 'text-gray-500'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-[#f8f8f8] border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `block text-lg ${
                    isActive ? 'text-gray-900' : 'text-gray-500'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;