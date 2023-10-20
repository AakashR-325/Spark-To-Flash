import React from "react";
import dai from "../Dai-image.png";

export default function Body() {
  return (
    <div className="container" style={{ marginLeft: "500px" }}>
      <div
        className="card mb-3"
        style={{
          maxWidth: "540px",
          height: "400px",
          background: "hsla(0, 0%, 100%, 0.05)",
          color: "white",
          marginTop: "120px",
          border: "1px solid #a2a4a6",
          borderRadius: "10px",
        }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={dai}
              className="img-fluid rounded-start"
              alt="..."
              style={{ marginTop: "2px", marginLeft: "2px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Amount To Loan :</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
