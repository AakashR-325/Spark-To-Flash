import { useEffect, useState } from "react";
import { ethers } from "ethers";

//ABIs
import SparkToFlashABI from "./abis/SparkToFlashABI.json";
import DummyDexABI from "./abis/DummyDexABI.json";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import myBackground from "./3d-futuristic-background-with-low-poly-plexus-design_1048-11872.jpg";

const contractAddress = "0xaF56B0271D66aD1aCd674E36D7AC7ed15Dc1fd84"; // SparkToFlash contract address

function App() {
  const [account, setAccount] = useState(null);

  const getBlockchainData = async () => {};

  useEffect(() => {
    getBlockchainData();
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: "linear-gradient(#425569 , #11171c)",
        //backgroundSize: "cover",
        backgroundColor: "#3a5066",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar account={account} setAccount={setAccount} />
      <Body />
    </div>
  );
}

export default App;
