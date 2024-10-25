import { useState } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { data } from "../utils/dummy";

const List = () => {
  const [selectedOption, setSelectedOption] = useState("default");

  return (
    <div className="flex">
      {/* Sidebar */}

      {/* Content area */}
      <div className="relative flex flex-col flex-1">
        {/*  Site header */}

        <main>
          <div className="px-14 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto z-10">
            <section className="overflow-hidden">
              <div className="">
                <div className="container px-4 mx-auto">
                  <div className="w-full flex-col sm:flex-row gap-4 flex justify-between p-2 mb-4">
                    <div className="">
                      <label className="input input-bordered flex items-center gap-2 rounded-xl">
                        <input
                          type="text"
                          className="grow text-sm"
                          placeholder="Search for Token"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="h-4 w-4 opacity-70"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </label>
                    </div>
                    <div className="flex items-center gap-4">
                      <select
                        className="select w-full max-w-xs rounded-lg"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      >
                        <option value="default" disabled>
                          Launch Time
                        </option>
                        <option value="Trading Volume">Trading Volume</option>
                        <option value="Market Cap">Market Cap</option>
                      </select>
                      <div className="border border-gray-600 rounded-lg p-3 cursor-pointer">
                        <TfiReload className="text-base font-extrabold" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((item) => (
                      <div key={item.id} className="w-full">
                        <Link to="/token" className="border-blue-00">
                          <div className="border-blue-500 border-2 rounded-2xl h-full">
                            <div
                              className="relative"
                              style={{ height: "240px" }}
                            >
                              <div
                                className={`absolute top-[20px] left-0 px-2 rounded-r-md ${
                                  item.percentageChange.isPositive
                                    ? "bg-blue-400"
                                    : "bg-pink-600"
                                }`}
                              >
                                <p className="text-gray-800 text-[13px]">
                                  {item.percentageChange.isPositive
                                    ? `+${item.percentageChange.value}%`
                                    : `${item.percentageChange.value}%`}
                                </p>
                              </div>
                              <img
                                className="w-full h-full rounded-t-2xl"
                                src={item.imageUrl}
                                alt={item.title}
                              />
                            </div>
                            <div className="pt-6 pb-3 px-4 relative">
                              <div className="absolute flex gap-2 top-3 right-0 rounded-l-lg px-2">
                                <FaXTwitter className="text-gray-700 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out" />
                                <FaGlobe className="text-gray-700 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out" />
                                <FaTelegramPlane className="text-gray-700 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out" />
                              </div>
                              <h2 className="font-bold text-sm text-gray-400 font-heading mb-1">
                                {item.title}
                              </h2>
                              <p className="mb-3 text-xs">
                                <span>Created by:</span>
                                <Link
                                  to=""
                                  className="pl-1 underline text-blue-400"
                                >
                                  {item.createdBy}
                                </Link>
                              </p>
                              <p className="text-gray-500 text-xs mb-4">
                                {item.description}
                              </p>
                              <h2 className="mt-6 mb-2">
                                <span className="text-gray-500 text-sm mb-3">
                                  Marketcap:
                                </span>
                                <span className="text-gray-300 text-sm mb-3 pl-1">
                                  ${item.marketCap.toLocaleString()}
                                </span>
                              </h2>
                              {/* <div className="bg-gray-500 h-1 mt-8" /> */}
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Cards */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default List;
