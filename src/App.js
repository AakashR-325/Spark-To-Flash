import { useEffect, useState } from "react";
import { ethers } from "ethers";

//ABIs
import SparkToFlashABI from "./abis/SparkToFlashABI.json";
import DummyDexABI from "./abis/DummyDexABI.json";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import myBackground from "./Background.avif";

const contractAddress = "0xaF56B0271D66aD1aCd674E36D7AC7ed15Dc1fd84"; // SparkToFlash contract address

function App() {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const blockchainData = async () => {
    //Connect To Blockchain
    const provider = new ethers.BrowserProvider(window.ethereum);
    setProvider(provider);
    const network = provider.getNetwork();

    //connect to smart contract
  };

  useEffect(() => {
    blockchainData();
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: "linear-gradient(#4f098f , #170229)",
        //backgroundSize: "cover",
        backgroundColor: "#3a5066",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar account={account} setAccount={setAccount} />
      <div className="container">
        <h1
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            color: "white",
            marginLeft: "310px",
            fontSize: "60px",
          }}
        >
          FLASH LOAN ARBITRAGE
        </h1>
        <p
          style={{
            marginTop: "10px",
            color: "white",
            marginLeft: "260px",
            marginBottom: "5px",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Spark-To-Flash is a flash loan protocol which makes it easier for
          users without Web-3 development experience to make
        </p>
        <p
          style={{
            color: "white",
            marginLeft: "350px",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          use of flash loan and perform arbitrage wihtout possesing the initial
          principal amount
        </p>
      </div>
      <Body />
    </div>
  );
}

export default App;
