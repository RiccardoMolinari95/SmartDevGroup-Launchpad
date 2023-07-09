const { expect } = require("chai");
import { ethers } from "hardhat";
import { tokenTestSol } from "../typechain-types/contracts";

describe("contract Token", function () {
  
   it("deploy contract TokenTest and mint from constructor", async function(){
    const [owner] = await ethers.getSigners();
    const Token = await ethers.deployContract("TokenTest");
    expect((await Token.balanceOf(owner.address))).equal(1000000000000000000000n)
    console.log(await Token.getAddress());
   })

  //  it("mint function", async function(){
  //    const Token = await ethers.deployContract("TokenTest");
  //    const [owner] = await ethers.getSigners();
  //    const mintToken = await Token.mint(owner, 1000);
     

  // })

   describe("contract Launchpad", function (){

    it("deploy contract Launchpad", async function(){
      const [owner] = await ethers.getSigners();
      const token = await ethers.deployContract("TokenTest");

      const addressToken = await token.getAddress();

      const Launchpad = await ethers.getContractFactory("Launchpad");
      const launchpad = await Launchpad.deploy(addressToken, 1, 30);


        console.log("address Token:", await token.getAddress())
        console.log("address Launchpad contract:", await launchpad.getAddress());

      })
    })

    describe("deposit token owner function", function() {
      
    it("function depositTokenToDistribute", async function(){
      const [owner] = await ethers.getSigners();
      const token = await ethers.deployContract("TokenTest");

      const addressToken = await token.getAddress();

      const Launchpad = await ethers.getContractFactory("Launchpad");
      const launchpad = await Launchpad.deploy(addressToken, 1, 30);
      const addressContractLaunchpad = await launchpad.getAddress()
      const allowance = await token.increaseAllowance(addressContractLaunchpad, 100)
      if(allowance){
      const depositTokenToDistribute = await  launchpad.depositTokenToDistribute(100);
         return depositTokenToDistribute 
       }else {
        await expect(launchpad.depositTokenToDistribute(100)).to.be.revertedWith("revert because allowance not present pr not sufficient")
       } 
    })
  })

    
});