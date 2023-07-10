import { ethers } from "hardhat";

async function main() {
	const [deployer] = await ethers.getSigners();

	console.log("owner contract:", deployer.address);

	const Launchpad = await ethers.getContractFactory("Launchpad");
	
	//parametri costruttore
	const tokenAddress = "0x6Ff87b10063595CFDA763391510974C674Bf09f1"; //inserire token Address
	const startLP = 1 //inzio lp
	const endLP = 30; //fine lp

	const launchpad = await Launchpad.deploy(tokenAddress, startLP  , endLP);

	console.log("address Launchpad:", await launchpad.getAddress());
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
});
