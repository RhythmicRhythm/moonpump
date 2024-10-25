import { GrCopy } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const TokenInfo = () => {
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        <div className=" mx-auto">
          <div className="px-10 pt-6 pb-10 mb-6 border-2  border-blue-500 rounded-xl relative">
            <div className="absolute flex gap-4 top-[30px] right-[10px] rounded-l-lg px-2">
              <FaXTwitter className="text-gray-500 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out" />
              <FaGlobe className="text-gray-500 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out" />
              <FaTelegramPlane className="text-gray-500 hover:text-lg hover:text-gray-400 transition duration-300 ease-in-out" />
            </div>
            <div className="">
              <div className="flex flex-wrap items-center justify-between -mx-4 -mb-5">
                <div className="w-full sm:w-auto ">
                  <div className="sm:flex ">
                    <img
                      className="w-[100px] h-[100px] sm:w-[200px] sm:h-[300px] mr-4 self-start rounded-xl"
                      src="https://cdn.sunpump.meme/public/logo/BOZO_TAUHnt_FBna7yj3H3Kw.gif"
                      alt=""
                    />
                    <div>
                      <h1 className="text-gray-200 text-sm sm:text-3xl sec_font font-bold mb-4">
                        Bozo Collective($ BOZO)
                      </h1>
                      <div className="flex items-center mb-4 font-bold">
                        <span className="text-gray-400 hidden pr-2 sm:block">
                          contract:
                        </span>
                        <span className="text-gray-300 text-xs sm:text-base ">
                          TS25zsNFupVCPZUT8UjLFbehbAqdyvPhTj
                        </span>
                        <span className="pl-2">
                          <GrCopy />
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm  font-semibold">
                        Bozo Collective is a Memecoin project with art inspired
                        by diary of a wimpy kid. Holding $Bozo tokens will grant
                        you access to the Bozo DAO and get airdropped Bozo NFTs.
                        Other than that we don't know what the F\*ck to tell
                        you.
                      </p>
                      <div className="flex mt-12">
                        <div className="stats bg-transparent">
                          <div className="stat">
                            <div className="stat-title">Price</div>
                            <div className="stat-value text-primary text-xl">
                              0.034ETH
                            </div>
                            <div className="stat-desc text-green-300 font-semibold">
                              +544,599.36%
                            </div>
                          </div>
                          <div className="stat">
                            <div className="stat-title">Marketcap</div>
                            <div className="stat-value text-gray-300 text-xl">
                              $27.35M
                            </div>
                          </div>
                          <div className="stat">
                            <div className="stat-title">Liquidity</div>
                            <div className="stat-value text-gray-300 text-xl">
                              $609.02k
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
