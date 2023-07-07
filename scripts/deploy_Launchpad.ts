import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("owner contract:", deployer.address);

  const Launchpad = await ethers.getContractFactory("Launchpad");
  
  //parametri costruttore
  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; 
  const amount = ethers.parseEther("100");
  const daysStaking = 30;

  const launchpad = await Launchpad.deploy(tokenAddress, amount, daysStaking);

  console.log("address Launchpad:", await launchpad.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
