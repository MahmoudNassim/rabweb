import {
  FaEnvelope,
  FaFacebook,
  FaHome,
  FaImages,
  FaInfoCircle,
  FaInstagram,
  FaPhone,
  FaSearch,
  FaServer,
  FaShoppingCart,
  FaTwitter,
  FaWordpress,
} from "react-icons/fa";

export default function Footer() {
  const sections = [
    {
      title: "Quik Links",
      links: [
        { text: "Home", icon: <FaHome className="mr-2" /> },
        { text: "About Us", icon: <FaInfoCircle className="mr-2" /> },
        { text: "Services", icon: <FaServer className="mr-2" /> },
        { text: "Portfolio", icon: <FaImages className="mr-2" /> },
        { text: "Contact", icon: <FaEnvelope className="mr-2" /> },
      ],
    },
    {
      title: "Services",
      links: [
        { text: "Website Design", icon: <FaServer className="mr-2" /> },
        {
          text: "E-commerce Solutions",
          icon: <FaShoppingCart className="mr-2" />,
        },
        {
          text: "Wordpress Development",
          icon: <FaWordpress className="mr-2" />,
        },
        { text: "SEO Optimization ", icon: <FaSearch className="mr-2" /> },
        { text: "Website Maintenance", icon: <FaEnvelope className="mr-2" /> },
      ],
    },
  ];

  const socialIcons = [
    { icon: <FaFacebook className="h-6 w-6" />, label: "Facebook" },
    { icon: <FaTwitter className="h-6 w-6" />, label: "Twitter" },
    { icon: <FaInstagram className="h-6 w-6" />, label: "Instagram" },
  ];

  const legalLinks = [
    { text: "Privacy Policy" },
    { text: "Terms of Service" },
    { text: "Sitemap" },
  ];
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">WebCraft</h3>
            <p className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((item, i) => (
                <a
                  href="#"
                  key={i}
                  className="text-gray-400 hover:text-white transition"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {sections.map((section, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-white text-lg font-semibold">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center text-gray-400 hover:text-white transition"
                    >
                      {link.icon} {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>Cairo, Egypt</p>
              <p className="mt-2 flex items-center">
                <FaEnvelope className="mr-2" /> mahmodnassim7@gmail.com
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" /> +201551625205
              </p>
            </address>
            <div className="pt-2">
              <button className="flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition">
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            {legalLinks.map((link, i) => (
              <a
                href="#"
                key={i}
                className="text-gray-500 hover:text-gray-300 transition"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
