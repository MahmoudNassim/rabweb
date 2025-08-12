import { useState } from "react";
import hero from "../assets/hero.png";
export default function Sell() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    askingPrice: "",
    monthlyRevenue: "",
    desc: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmissionStatus("success");
      setFormData({
        name: "",
        email: "",
        websiteUrl: "",
        askingPrice: "",
        monthlyRevenue: "",
        desc: "",
      });
      setCurrentStep(1);
    } catch (e) {
      setSubmissionStatus("error");
    }
  };
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  return (
    <div className="min-h-screen mt-14 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative">
        <div
          className="absolute w-60 h-60 bg-[#de66ff] rounded-full blur-3xl right-1 -translate-x-1/2 opacity-50
        top-2"
        ></div>
        <div data-aos="fade-up" className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight lg:text-5xl">
            Sell your website
          </h1>
          <img
            src={hero}
            alt="Emoji"
            className="absolute right-20 -top-10 md:top-4 -translate-y-1/2 w-32 h-32 md:rotate-12"
          />
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            soluta sunt nesciunt debitis obcaecati natus pariatur quasi vel, ad
            animi maiores magnam consectetur praesentium nemo tempore maxime
            optio accusantium eveniet?
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="bg-white shadow-xl rounded-2xl overflow-hidden "
        >
          <div className="bg-gray-100 h-2">
            <div
              className="bg-purple-600 h-2 transition-all duration-300 ease-in-out "
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
          <form onSubmit={handleSubmit} className="p-8 sm:p-10">
            {submissionStatus === "success" ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                  Submission Successful
                </h2>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugit accusamus ex eligendi harum deserunt qui, quisquam nobis
                  placeat cupiditate sint expedita assumenda, nostrum nulla
                  eaque deleniti pariatur nisi, totam at.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmissionStatus(null)}
                  className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium 
                    rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-indigo-500"
                >
                  Submit Another Website
                </button>
              </div>
            ) : submissionStatus == "error" ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M 6l12 12"
                    />
                  </svg>
                </div>
                <h2 className="mt-3 text-2xl font-bold text-gray-900">
                  Submission Faild
                </h2>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugit accusamus ex eligendi harum deserunt qui, quisquam nobis
                  placeat cupiditate sint expedita assumenda, nostrum nulla
                  eaque deleniti pariatur nisi, totam at.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmissionStatus(null)}
                  className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium 
                    rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-indigo-500"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                {/* Step 1 */}
                {currentStep == 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Basic Information
                      </h2>
                      <p className="mt-1 text-gray-600">
                        Tell us about yourself and website.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          FullName
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full text-black border border-gray-300
                          rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full text-black border border-gray-300
                          rounded-md shadow-sm py-2 px-3 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="websiteUrl"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Website Url
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span
                          className="inline-flex items-center px-3 rounded-l-md border-r-0 border-gray-300 bg-gray-500
                        text-gray-300"
                        >
                          http://
                        </span>
                        <input
                          type="url"
                          name="websiteUrl"
                          id="websiteUrl"
                          value={formData.websiteUrl}
                          onChange={handleChange}
                          required
                          className="flex-1 text-black min-w-0 block w-full px-3 py-2 rounded-none
                          rounded-r-md border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
                          placeholder="www.example.com"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={
                          !formData.name ||
                          !formData.email ||
                          !formData.websiteUrl
                        }
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm
                      font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next:Financial Details
                      </button>
                      <svg
                        className="ml-1 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {/* Step 2 */}
                {currentStep == 2 && (
                  <div className="space-y-2">
                    <div>
                      <h2 className=" text-2xl font-bold text-gray-900">
                        Financial Details
                      </h2>
                      <p className="mt-2 text-gray-600">
                        Help us understand the value of your website.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="askingPrice"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Asking Price($)
                        </label>
                        <div className="mt-1 relative shadow-sm rounded-md">
                          <div
                            className="absolute inset-y-0 left-0 flex pl-3 items-center 
                          pointer-events-none"
                          >
                            <span className="text-gray-500">$</span>
                          </div>
                          <input
                            type="number"
                            name="askingPrice"
                            id="askingPrice"
                            placeholder="0.00"
                            value={formData.askingPrice}
                            onChange={handleChange}
                            required
                            className="block w-full text-black  pl-7 pr-12 py-2 
                            border border-gray-300 rounded-md shadow-sm focus:outline-none
                            focus:border-indigo-500 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="monthlyRevenue"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Monthly Revenue($)
                        </label>
                        <div className="mt-1 relative shadow-sm rounded-md">
                          <div
                            className="absolute inset-y-0 left-0 flex pl-3 items-center 
                          pointer-events-none"
                          >
                            <span className="text-gray-500">$</span>
                          </div>
                          <input
                            type="number"
                            name="monthlyRevenue"
                            id="monthlyRevenue"
                            placeholder="0.00"
                            value={formData.monthlyRevenue}
                            onChange={handleChange}
                            required
                            className="block w-full text-black  pl-7 pr-12 py-2 
                            border border-gray-300 rounded-md shadow-sm focus:outline-none
                            focus:border-indigo-500 focus:ring-indigo-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm
                      font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <svg
                          className="ml-1 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={
                          !formData.askingPrice || !formData.monthlyRevenue
                        }
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm
                      font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next: Additional Details
                        <svg
                          className="ml-1 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
                {/* Step 3 */}
                {currentStep == 3 && (
                  <div className="space-y-2">
                    <div>
                      <h2 className=" text-2xl font-bold text-gray-900">
                        Additional Details
                      </h2>
                      <p className="mt-2 text-gray-600">
                        Tell us more about your website and why you're selling.
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="desc"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Website Description
                      </label>
                      <div className="mt-1 ">
                        <textarea
                          name="desc"
                          id="desc"
                          rows={6}
                          placeholder="Describe your website ...."
                          value={formData.desc}
                          onChange={handleChange}
                          required
                          className="block w-full text-black  pl-7 pr-12 py-2 
                            border border-gray-300 rounded-md shadow-sm focus:outline-none
                            focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm
                      font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <svg
                          className="ml-1 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={submissionStatus === "submitting"}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm
                      font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                      disabled:opacity-50 "
                      >
                        {submissionStatus === "submitting" ? (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24 "
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          "Submit Listing "
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
