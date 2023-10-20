import { useEffect, useState } from "react";
import { ethers } from "ethers";

//ABIs
import SparkToFlashABI from "./abis/SparkToFlashABI.json";
import DummyDexABI from "./abis/DummyDexABI.json";
import Navbar from "./components/Navbar";

const contractAddress = "0xaF56B0271D66aD1aCd674E36D7AC7ed15Dc1fd84"; // SparkToFlash contract address

function App() {
  const [account, setAccount] = useState(null);

  const getBlockchainData = async () => {};

  useEffect(() => {
    getBlockchainData();
  }, []);

  return (
    <div className="App">
      <Navbar account={account} setAccount={setAccount} />
    </div>
  );
}

export default App;
