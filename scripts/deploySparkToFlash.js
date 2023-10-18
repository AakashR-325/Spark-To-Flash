const hre = require("hardhat");

async function main() {
  const SparkToFlash = await hre.ethers.getContractFactory("SparkToFlash");
  const sparkToFlash = await SparkToFlash.deploy(
    "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"
  );

  await sparkToFlash.waitForDeployment();
  console.log(`SparkToFlash contract deployed at : ${sparkToFlash.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
