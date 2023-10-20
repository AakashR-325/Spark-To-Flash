import React, { useState } from "react";
import { ethers } from "ethers";
import PropTypes from "prop-types";

export default function Navbar({ account, setAccount }) {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.getAddress(accounts[0]);
    setAccount(account);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mx-3" href="#">
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
              <span class="badge bg-secondary">
                {account.slice(0, 6) + "..." + account.slice(38, 42)}
              </span>
            ) : (
              <button
                type="button"
                className="btn btn-success"
                onClick={connectHandler}
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
