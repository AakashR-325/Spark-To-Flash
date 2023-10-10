const hre = require("hardhat");

async function main() {
  const SparkToFlash = await hre.ethers.getContractFactory("SparkToFlash");
  const sparkToFlash = await SparkToFlash.deploy(
    "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"
  );

  await sparkToFlash.deployed();
  console.log("SparkToFlash contract deployed at : ", sparkToFlash.address());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
