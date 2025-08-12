import { FaStar } from "react-icons/fa";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import rob3 from "../assets/rob3.png";
import { ChevronRight } from "lucide-react";

export default function Categories() {
  const categories = [
    {
      id: 0,
      name: "Clinic Website",
      img: project1,
      count: 24,
      tag: "Most Popular",
    },
    {
      id: 2,
      name: "Portfolio Website",
      img: project4,
      count: 18,
      tag: "Professional",
    },
    {
      id: 3,
      name: "E-commerce",
      img: project3,
      count: 12,
      tag: "Easy Clean",
    },
  ];
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 relative">
        <div
          className="absolute w-60 h-60 bg-[#f3cafe] rounded-full blur-3xl left-40 -translate-x-1/2 
        opacity-50 top-0"
        ></div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-center mb-12"
        >
          <span
            className="inline-block px-3 py-1 text-sm font-semibold text-purple-800 bg-purple-100
          rounded-full mb-3"
          >
            Our Collections
          </span>
          <img
            src={rob3}
            alt="Emoji"
            data-aos="fade-down"
            className="absolute md:left-32 -top-2 md:top-12
          -translate-y-1/2 w-32 h-32 -rotate-12"
          />
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover Premium Grills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, Possimus minus dicta delectus.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {category.tag && (
                  <span
                    className="absolute top-4 right-4 px-3 py-1 text-xs font-bold text-white 
                      bg-purple-500 rounded-full z-10"
                  >
                    {category.tag}
                  </span>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm opacity-90 mb-3">
                  {category.count} premium products
                </p>
                <div className="flex justify-between items-center">
                  <span className="inline-flex items-center text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <FaStar color="gold" size={18} />
                      </svg>
                    ))}
                  </span>
                  <button className="px-4 py-2 bg-white text-purple-600 font-medium rounded-full hover:bg-purple-100 transition-colors duration-300 flex items-center">
                    Explore
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <ChevronRight size={28} color="gray" />
                    </svg>
                  </button>
                </div>
              </div>
              <a
                href={`/category/${category.id}`}
                className="absolute inset-0 z-10"
                aria-label={`Browse ${category.name}`}
              ></a>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
            View All Categories
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
