import { useState } from "react";
import rob from "../assets/rob.png";
import rob2 from "../assets/rob2.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";

export default function BrowseListings() {
  const Listings = [
    {
      id: 1,
      title: "Clinic.com",
      category: "Clinic",
      price: "$7",
      img: project1,
    },
    {
      id: 2,
      title: "Dental.com",
      category: "Clinic",
      price: "$70",
      img: project2,
    },
    {
      id: 3,
      title: "Shop.com",
      category: "E-commerce",
      price: "$20",
      img: project3,
    },
    {
      id: 4,
      title: "Portfolio.com",
      category: "Portfolio",
      price: "$23",
      img: project4,
    },
    {
      id: 5,
      title: "Portfolio.com",
      category: "Portfolio",
      price: "$25",
      img: project5,
    },
    {
      id: 6,
      title: "Portfolio.com",
      category: "Portfolio",
      price: "$50",
      img: project6,
    },
    {
      id: 7,
      title: "Dashbord.com",
      category: "E-commerce",
      price: "$10",
      img: project7,
    },
    {
      id: 8,
      title: "Portfolio.com",
      category: "Portfolio",
      price: "$30",
      img: project8,
    },
    {
      id: 9,
      title: "Portfolio.com",
      category: "Portfolio",
      price: "$11",
      img: project9,
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  const filteredListings = Listings.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  ).sort((a, b) => {
    const priceA = parseFloat(a.price.replace("$", ""));
    const priceB = parseFloat(b.price.replace("$", ""));

    if (sortOption === "low-to-high") {
      return priceA - priceB;
    } else if (sortOption === "high-to-low") {
      return priceB - priceA;
    } else {
      return 0;
    }
  });
  return (
    <section className="px-4 md:px-12 py-14 mt-20 overflow-hidden font-[Montserrat]">
      <div className="relative text-center mb-10" data-aos="fade-up">
        <h1 className="text-5xl font-bold text-white mb-2">Browse Listings</h1>
        <img
          src={rob}
          alt="Left emoji"
          className="absolute -left-4 lg:left-24 top-6 md:top-1/2 -translate-y-1/2 w-20 h-20 -rotate-12"
        />
        <img
          src={rob2}
          alt="Right emoji"
          className="absolute -right-4 lg:right-24 top-6 md:top-1/2 -translate-y-1/2 w-20 h-20 rotate-12"
        />

        <p className="mt-4 text-gray-400 text-sm">
          Find websites, blogs and online businesses ready to buy
        </p>
      </div>

      <div
        className="flex flex-col items-center justify-between md:flex-row gap-4 mb-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex gap-1 md:gap-4">
          {["All", "Clinic", "Portfolio", "E-commerce"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm border ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "text-gray-100 border-gray-300 hover:bg-purple-600"
              } `}
            >
              {category}
            </button>
          ))}
        </div>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-purple-300 bg-purple-700 rounded-md px-2 py-2 text-sm text-white"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <option value="">Sort by</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredListings.map((site, index) => (
          <div
            key={site.id}
            className="rounded-xl cursor-pointer overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img
              src={site.img}
              alt={site.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-300">
                {site.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{site.category}</p>
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>{site.price}</span>
              </div>
              <button className="mt-4 cursor-pointer w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md text-sm">
                Veiw Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
