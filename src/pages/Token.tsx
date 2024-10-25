import { useState } from "react";

import TokenInfo from "../components/TokenInfo";
import TradingHistory from "../components/TradingHistory";
import HolderDistribution from "../components/HolderDistribution";
import Trade from "../components/Trade";


import { HiOutlineChartSquareBar } from "react-icons/hi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import TradingViewChart from "../components/TradingViewChart";

const Token = () => {
  const [activeTab, setActiveTab] = useState("trade");
  return (
    <div>
      <Navbar />
      <TokenInfo />
      <section className="py-3">
        <div className="container px-4 mx-auto mb-4 sm:hidden flex gap-4">
          <div onClick={() => setActiveTab("chart")}>
            <div className="flex items-center gap-1 border-b-2 border-blue-900" >
              <BiPurchaseTagAlt className="text-xl" />
              <h1 className="text-sm font-bold">Trade</h1>
              
            </div>
             
          </div>
          <div onClick={() => setActiveTab("trade")}>
            <div className="flex items-center gap-1">
              <HiOutlineChartSquareBar className="text-xl" />
              <h1 className="text-sm font-bold">Charts</h1>
            </div>
          </div>
        </div>

        <div className="container px-4 mx-auto sm:hidden">
          <div className="flex flex-wrap -mx-3">
            {activeTab == "chart" && (
              <div className="w-full  px-3 mb-6 lg:mb-0">
                <TradingHistory className="sm-hidden" />
              </div>
            )}
            {activeTab == "trade" && (
              <div className="w-full px-3">
                <Trade />
                <HolderDistribution />
              </div>
            )}
          </div>
        </div>

        <div className="container px-4 mx-auto hidden sm:block">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-3/5 px-3 mb-6 lg:mb-0">
              <TradingViewChart />
              <TradingHistory className="sm-hidden" />
            </div>
            <div className="w-full lg:w-2/5 px-3">
              <Trade />
              <HolderDistribution />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Token;
