// import { useAccount, useConnect, useDisconnect } from "wagmi";
import {  Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import { Toaster } from "react-hot-toast";
import Token from "./pages/Token";
import NewToken from "./pages/NewToken";

function App() {
  // const account = useAccount();
  // const { connectors, connect, status, error } = useConnect();
  // const { disconnect } = useDisconnect();

  return (
    <>
     <div className=" mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newtoken" element={<NewToken />} />
          <Route path="/token" element={<Token />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
