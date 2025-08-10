import { Rabbit } from "lucide-react";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const navLinks = [
    {
      text: "Browse Listings",
      icon: <IoIosArrowDown />,
      dropdown: [
        { text: "Featured Listings", href: "#" },
        { text: "Recent Sales", href: "#" },
        { text: "popular Sites", href: "#" },
        { text: "Premium Listings", href: "#" },
      ],
    },
    {
      text: "Sell Your Site",
      icon: <IoIosArrowDown />,
      dropdown: [
        { text: "Listing Process", href: "#" },
        { text: "Valuation Tool", href: "#" },
        { text: "Success Stories", href: "#" },
      ],
    },
    { text: "Categories", href: "#" },
    { text: "Pricing", href: "#" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };
  return (
    <div>
      <nav className="flex items-center justify-between px-6 md:px-16 py-4 text-white relative z-50">
        <div className="flex items-center text-2xl font-bold gap-2">
          <Rabbit className="w-12 h-12 text-white mb-4" data-aos="fade-up" />
          <span className="hidden sm:inline">Rabweb</span>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <div
                className="flex items-center gap-1 cursor-pointer hover:text-gray-300"
                onClick={() => link.dropdown && toggleDropdown(index)}
              >
                {link.text}
                {link.icon && (
                  <span
                    className={`transition-transform ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  >
                    {link.icon}
                  </span>
                )}
              </div>
              {link.dropdown && (
                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 
                transition-all duration-300 ${
                  openDropdown === index
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
                >
                  {link.dropdown.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-700"
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 ">
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 border-2 border-blue-100 text-sm text-white 
            pl-8 pr-3 py-1 rounded-md placeholder:text-gray-400 focus:outline-none"
            />
            <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          </div>
          <button className="text-sm px-3 py-1 border rounded hover:bg-white hover:text-black transition">
            Sign in
          </button>
          <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX /> : <IoMdMenu />}
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-6 py-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search ..."
              className="w-full bg-gray-800 border-blue-100 text-sm text-white pl-8 pr-3 py-2 rounded-md
              placeholder:text-gray-400 focus:outline-none"
            />
            <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          </div>
          <ul className="space-y-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <div
                  className="flex items-center justify-between py-2 border-b border-gray-700 cursor-pointer
                hover:text-gray-300"
                  onClick={() => link.dropdown && toggleDropdown(index)}
                >
                  <span>{link.text}</span>
                  {link.icon && (
                    <span
                      className={`transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    >
                      {link.icon}
                    </span>
                  )}
                </div>
                {link.dropdown && openDropdown === index && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.dropdown.map((item, i) => (
                      <a
                        href={item.href}
                        key={i}
                        className="block py-1 text-sm hover:text-gray-300"
                      >
                        {item.text}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
