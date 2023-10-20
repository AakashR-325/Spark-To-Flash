import React from "react";
import dai from "../Dai-image.png";
import usdc from "../output-onlinepngtools(1).png";

export default function Body() {
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
                  aria-describedby="inputGroup-sizing-sm"
                  style={{
                    maxWidth: "300px",
                    marginLeft: "60px",
                    marginTop: "15px",
                  }}
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginLeft: "120px" }}
              >
                Perform Transaction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
