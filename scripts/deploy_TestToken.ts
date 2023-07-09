require('dotenv').config();
import { ethers } from "hardhat";

	async function main() {

	const [deployer] = await ethers.getSigners();

	console.log("owner contract:", deployer.address);

	// DEPLOY TOKEN
	const TokenTestFactory = await ethers.getContractFactory("TokenTest");
	const tokenTest = await TokenTestFactory.deploy();
	console.log("address TokenTest:", await tokenTest.getAddress());

	const to = process.env.PUBLIC_ADDRESS;
	const amount = ethers.parseEther("100");

	if (!to) {
		console.error('TO_ADDRESS is not defined in .env file');
		process.exit(1);
	}

	// MINT TOKEN
	await tokenTest.mint(to, amount);
	console.log("Tokens minted to:", to);

}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
});
