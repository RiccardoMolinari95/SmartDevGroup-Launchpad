import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("owner contract:", deployer.address);

  const Launchpad = await ethers.getContractFactory("Launchpad");
  
  //parametri costruttore
  const tokenAddress = "0x58728B801b6A01BE4B42133Bd77CfDa543e23b67"; 
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
