const hre = require("hardhat");

async function main() {
  const DummyDex = await hre.ethers.getContractFactory("DummyDex");
  const dummyDex = await DummyDex.deploy();

  await dummyDex.waitForDeployment();
  console.log(`DummyDex contract deployed at : ${dummyDex.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
