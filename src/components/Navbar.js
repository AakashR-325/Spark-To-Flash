import React, { useState } from "react";
import { ethers } from "ethers";
import PropTypes from "prop-types";
import logo from "../pngwing.com.png";

export default function Navbar({ account, setAccount }) {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.getAddress(accounts[0]);
    setAccount(account);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <img src={logo} height={50} paddingLeft="10px"></img>
        <a
          className="navbar-brand mx-3"
          href="#"
          style={{
            fontFamily: "Arial , sans-serif",
            fontSize: "20px",
            //border: "1px solid #8d8e8f",
            backgroundColor: "#384859",
            padding: "10px",
            borderRadius: "10px",
            //boxShadow: "5px 5px #384859",
          }}
        >
          Spark-To-Flash
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {account ? (
              <span
                class="badge"
                style={{
                  height: "30px",
                  marginRight: "20px",
                  fontSize: "15px",
                  border: "2px solid white",
                }}
              >
                {account.slice(0, 8) + "..." + account.slice(34, 42)}
              </span>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={connectHandler}
                style={{ marginRight: "10px" }}
              >
                Connect
              </button>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
}
