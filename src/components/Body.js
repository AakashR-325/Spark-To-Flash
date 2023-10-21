import React from "react";
import dai from "../Dai-image.png";
import usdc from "../output-onlinepngtools(1).png";

export default function Body({contract , provider}) {

  const transactionHandler = async () => {
    const value = document.getElementById("input").value * 10 **6;
    const signer = await provider.getSigner();
    try{
      let transaction = await contract.connect(signer).requestFlashLoan("0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8" , value);
      await transaction.wait();
    }catch(e){
      console.log(e);
    }
  }

  const withdrawHandler = async () => {
    const signer = await provider.getSigner();
    try{
      let transaction = await contract.connect(signer).withdraw("0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8");
      await transaction.wait();
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className="container" style={{ marginLeft: "300px" }}>
      <div
        className="card mb-3"
        style={{
          maxWidth: "940px",
          height: "400px",
          background: "hsla(0, 0%, 100%, 0.05)",
          color: "white",
          marginTop: "40px",
          border: "1px solid #a2a4a6",
          borderRadius: "10px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={usdc}
              className="img-fluid rounded-start"
              alt="..."
              style={{ marginTop: "2px", marginLeft: "2px" }}
            />
            <p style = {{marginLeft : "110px" , marginTop : "0px"}}>Token : USDC</p>
            <p style = {{marginLeft : "110px" , marginTop : "20px"}}>Token Address : 0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8</p>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5
                className="card-title"
                style={{ paddingTop: "40px", paddingLeft: "100px" }}
              >
                Amount To Flash Loan :
              </h5>
              <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  id = "input"
                  aria-describedby="inputGroup-sizing-sm"
                  style={{
                    maxWidth: "300px",
                    marginLeft: "60px",
                    marginTop: "15px",
                  }}
                />
              </div>
              <div>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginLeft: "120px" }}
                onClick = {transactionHandler}
              >
                Perform Transaction
              </button>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                style={{ marginLeft: "133px" , marginTop : "60px"}}
                onClick = {withdrawHandler}
              >
                Withdraw Profits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
