const hre = require("hardhat");
async function main() {
  const Meetings = await hre.ethers.getContractFactory("Meetings");
  const meetings = await Meetings.deploy();
  await meetings.waitForDeployment();
  console.log(`Create deployed to ${meetings.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
