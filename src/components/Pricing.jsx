import rob4 from "../assets/rob4.png";

export default function Pricing() {
  const plans = [
    {
      name: "Basic Grill",
      price: 199,
      period: "one-time",
      features: [
        "Charcoal grill",
        "Standard cooking area",
        "Basic temperature control",
        "1-year warranty",
        "Assembly guide",
      ],
      popular: false,
    },
    {
      name: "Premium Grill",
      price: 499,
      period: "one-time",
      features: [
        "Gas $ charcoal combo",
        "Large cooking area",
        "Precision temperature control",
        "3-year warranty",
        "Free assembly service",
        "Grill cover included",
        "Accessory kit",
      ],
      popular: true,
    },
    {
      name: "Professional Series",
      price: 899,
      period: "one-time",
      features: [
        "Commercial-grade construction",
        "extra-large cooking area",
        "Smart temperature monitoring",
        "5-year warranty",
        "Professional assembly",
        "Premium grill cover",
        "Complete accessory kit",
        "Free maintenance check",
        "Priority customer support",
      ],
      popular: false,
    },
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-center mb-16"
        >
          <div className="absolute w-60 h-60 bg-[#f3cafe] rounded-full blur-3xl left-1/2 -translate-x-1/2 opacity-50 top-0"></div>
          <img
            src={rob4}
            alt="Emoji"
            className="w-36 h-36 block mx-auto"
            data-aos="fade-down"
          />
          <span className="inline-block px-4 py-1 text-sm font-semibold text-purple-800 bg-purple-200 rounded-full mb-4">
            Flexible Pricing
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Find Your Perfect Grill
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Quality grilling solutions for every budget and need.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-purple-500 transform md:-translate-y-4 bg-white"
                  : "border border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-4 py-1 transform translate-x-2 translate-y-2 rotate-12">
                  MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? "text-purple-600" : "text-gray-800"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500"> / {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {plan.popular ? "Get Premium Deal" : "Select Plan"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
