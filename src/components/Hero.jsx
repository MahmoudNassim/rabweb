import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <div>
      <div
        className="absolute h-60 w-60 bg-[#de66ff] rounded-full blur-3xl left-1/2 -translate-x-1/2
      opacity-50 top-32"
      ></div>
      <section
        className="relative flex flex-col overflow-hidden items-center text-center mt-10 md:mt-20
      px-4 md:px-0 font-[Montserrat]"
      >
        <img
          src={hero}
          alt="Image Hero"
          className="w-36 h-36 mb-4"
          data-aos="fade-down"
        />
        <h1
          className="text-2xl md:text-5xl font-bold leading-tight mb-4"
          data-aos="fade-up"
        >
          Turn your site into profit <br />
          <span className="text-gray-300">find your next digital asset</span>
        </h1>
        <p
          className="text-lg text-gray-400 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A Trusted marketplace to buy and sell websites, blogs and online
          businesses
        </p>
        <div
          className="flex flex-col md:flex-row items-center gap-4"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="relative w-72 ">
            <input
              type="email"
              placeholder="Enter Your email"
              className="px-4 py-3 pr-24 rounded-md bg-gray-100 w-full font-medium text-black focus:outline-none"
            />
            <button
              className="absolute right-1 top-1 bottom-1 cursor-pointer bg-purple-500 hover:bg-purple-600
            text-white px-4 rounded-md text-sm"
            >
              Sign Up
            </button>
          </div>
          <button
            className="border border-white cursor-pointer hover:bg-white hover:text-black px-4 py-3
          rounded-md w-72 md:w-auto"
          >
            Sell Your Website
          </button>
        </div>
      </section>
    </div>
  );
}
