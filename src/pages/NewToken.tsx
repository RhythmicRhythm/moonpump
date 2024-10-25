import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiSolidImageAdd } from "react-icons/bi";
import { useAccount, useConnect, useDisconnect } from 'wagmi'

const NewToken = () => {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  const [filePreview, setFilePreview] = useState(''); 
  console.log(filePreview);
  // Store preview URL

  // Form state for all input fields
  const [formData, setFormData] = useState({
    tokenName: "",
    tokenSymbol: "",
    tokenDescription: "",
    website: "",
    twitter: "",
    telegram: "",
    file: null,
  });

  // Handle text inputs
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input and file preview
  const handleFileChange = (e: any) => {
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Create preview URL
      setFilePreview(previewUrl); // Set preview URL to state
      setFormData((prevData) => ({
        ...prevData,
        file, // Set file in formData
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const submissionData = new FormData();
    submissionData.append("tokenName", formData.tokenName);
    submissionData.append("tokenSymbol", formData.tokenSymbol);
    submissionData.append("tokenDescription", formData.tokenDescription);
    submissionData.append("website", formData.website);
    submissionData.append("twitter", formData.twitter);
    submissionData.append("telegram", formData.telegram);
    if (formData.file) {
      submissionData.append("filephoto", formData.file); // Add the file
    }

    console.log("Submitted data:", submissionData);

    if(!account){
      
    }

    // You can now send 'submissionData' to your server or blockchain.
  };

  return (
    <div>
      <Navbar />
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="max-w-2xl mx-auto px-6">
              <h1 className="text-4xl sm:text-5xl sec_font text-center">
                Create Your Token on MoonPumps
              </h1>
            </div>
            <div className="w-full">
              <div className="px-4 pt-16 pb-8 rounded-xl">
                <div className="max-w-2xl mx-auto sm:border-2 px-4 sm:px-8 py-10 rounded-xl">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-4 -mb-10">
                      {/* Token Name */}
                      <div className="w-full px-4 mb-10">
                        <div className="relative w-full h-14 py-4 px-3 border-2 border-gray-400 hover:border-white focus-within:border-blue-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-black">
                            Token Name *
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            name="tokenName"
                            type="text"
                            value={formData.tokenName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Token Symbol */}
                      <div className="w-full px-4 mb-10">
                        <div className="relative w-full h-14 py-4 px-3 border-2 border-gray-400 hover:border-white focus-within:border-blue-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-black">
                            Token Symbol *
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            name="tokenSymbol"
                            type="text"
                            value={formData.tokenSymbol}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Token Description */}
                      <div className="w-full px-4 mb-10">
                        <div className="relative w-full py-4 px-3 border-2 border-gray-400 hover:border-white focus-within:border-blue-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-bold text-gray-300 px-1 bg-black">
                            Token Description *
                          </span>
                          <textarea
                            className="block w-full h-30 outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold resize-none"
                            name="tokenDescription"
                            value={formData.tokenDescription}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Website (optional) */}
                      <div className="w-full px-4 mb-10">
                        <div className="relative w-full h-14 py-4 px-3 border-2 border-gray-400 hover:border-white focus-within:border-blue-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-black">
                            Website (optional)
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            name="website"
                            type="text"
                            value={formData.website}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Twitter (optional) */}
                      <div className="w-full px-4 mb-10">
                        <div className="relative w-full h-14 py-4 px-3 border-2 border-gray-400 hover:border-white focus-within:border-blue-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-black">
                            Twitter (optional)
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            name="twitter"
                            type="text"
                            value={formData.twitter}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Telegram (optional) */}
                      <div className="w-full px-4 mb-10">
                        <div className="relative w-full h-14 py-4 px-3 border-2 border-gray-400 hover:border-white focus-within:border-blue-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-black">
                            Telegram (optional)
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            name="telegram"
                            type="text"
                            value={formData.telegram}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      {/* Initial Buy */}
                      <div className="w-full px-4 mb-10">
                        <div className="relative w-full h-20 py-4 px-3 border-2 border-gray-400 hover:border-white focus-within:border-blue-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-black">
                            Initial Buy *
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            name="initialBuy"
                            type="number"
                            // value={formData.initialBuy}
                            onChange={handleInputChange}
                            placeholder="Optional. Enter amount in ETH"
                          />
                          {/* Display TRX Balance inside the input */}

                          <span className="transform -translate-y-1/2 text-xs text-gray-300">
                            Balance: 0 ETH
                          </span>
                        </div>
                      </div>

                      {/* File upload */}

                      <div className="w-full px-4 mb-10">
                        <div className="flex flex-wrap sm:flex-nowrap">
                          <label
                            htmlFor="formInput2-6"
                            className="w-full py-8 px-4 text-center border-dashed border border-gray-400 hover:border-white rounded-lg cursor-pointer"
                          >
                            <div className="relative group h-14 w-14 mx-auto mb-4">
                              {!filePreview && (
                                <div className="flex items-center justify-center rounded-full">
                                  <BiSolidImageAdd className="text-6xl" />
                                </div>
                              )}
                              <input
                                className="hidden"
                                id="formInput2-6"
                                type="file"
                                name="filephoto"
                                onChange={handleFileChange} // Call this on file change
                              />
                            </div>

                            {/* Conditionally display content based on file selection */}
                            {!filePreview ? (
                              <>
                                <p className="font-semibold leading-normal mb-1">
                                  <span className="text-blue-400">
                                    Click to upload a file
                                  </span>
                                </p>
                                <p className="font-semibold text-xs sm:text-sm leading-normal mb-1">
                                  PNG, JPG, GIF, WEBP
                                </p>
                                <span className="text-xs text-gray-300 font-semibold">
                                  image less than 10MB
                                </span>
                              </>
                            ) : (
                              <div className="mt-4">
                                <img
                                  src={filePreview}
                                  alt="Image Preview"
                                  className="w-full"
                                />
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <button
                        className="inline-block w-full py-2 px-4 mb-2 text-xs text-center font-semibold 
                        leading-6 text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg 
                        transition duration-200"
                        type="submit"
                      >
                        Launch
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NewToken;
