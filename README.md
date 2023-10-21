# Spark-To-Flash
Spark-To-Flash is a flash loan arbitrage protocol which makes use of the flashLoanSimple() method from the spark Lend protocol to execute a flash loan and then uses this flash loaned amount to perform arbitrage between USDC and DAI tokens to create profit and execute this said transaction without having the initial principal amount.

## Problem Statement
The core issue which this protocol aims to solve is to make it easier for the everyday web3 services user to be able to leverage the amazing advantages of flash loans which would otherwise require web3 development knowledge.

## Running Locally
To run the project in your local environment , git clone the current repository and then run the command below to download all the dependencies.
 ```bash
 npm install
```
Once this is done create a .env file and copy all the contents from the .env.example files into this newly created .env file and paste in YOUR-PRIVATE-KEY and YOUR-INFURA-RPC-URL in the specified fields. After this run the below commands to deploy the contracts onto the testnet blockchain.

 ```bash
 hardhat run --network testnet scripts/deployDex.js
 hardhat run --network testnet scripts/deploySparkToFlash.js
```

## Usage
If you are running the project locally , you have to either fund the DummyDex contract with a certain amount of DAI and USDC token or alternatively u can skip deploying the contract and use the following address (sepolia testnet):
 ```bash
 0x7841Fb2Cdb08816ad0F889791612D232e53D47Ee.
```

Also after this you would have to sign the approval the SparkToFlash contract with 1000 USDC and 1000 DAI tokens or to again avoid the hassle , you can skip deploying the contract yourself and use the following deployed contract at address :
 ```bash
 0xaF56B0271D66aD1aCd674E36D7AC7ed15Dc1fd84.
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
