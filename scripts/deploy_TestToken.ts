import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("owner contract:", deployer.address);

  const TokenTest = await ethers.getContractFactory("TokenTest");

  const tokenTest = await TokenTest.deploy();

  console.log("address TokenTest:", await tokenTest.getAddress());

  // Esempio di chiamata funzione mint dopo il deploy
  const to = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; 
  const amount = ethers.parseEther("100");

  await tokenTest.mint(to, amount);
  console.log("Tokens minted to:", to);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
