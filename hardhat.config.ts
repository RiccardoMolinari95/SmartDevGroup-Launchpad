import { HardhatUserConfig, task, types } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
import { ethers } from "hardhat";
dotenv.config();

task("flat", "Flattens and prints contracts and their dependencies (Resolves licenses)")
  .addOptionalVariadicPositionalParam("files", "The files to flatten", undefined, types.inputFile)
  .setAction(async ({ files }, hre) => {
    let flattened = await hre.run("flatten:get-flattened-sources", { files });
    // Remove every line started with "// SPDX-License-Identifier:"
    flattened = flattened.replace(/SPDX-License-Identifier:/gm, "License-Identifier:");
    flattened = `// SPDX-License-Identifier: MIXED\n\n${flattened}`;

    // Remove every line started with "pragma experimental ABIEncoderV2;" except the first one
    flattened = flattened.replace(/pragma experimental ABIEncoderV2;\n/gm, ((i) => (m:any) => (!i++ ? m : ""))(0));
    console.log(flattened);
  });

const config: HardhatUserConfig = {

  // defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    // localhost: {
    //   url: "http://127.0.0.1:8545"
    // },
       polygon_mumbai: {
       url: process.env.URL_AlCHEMY_MUMBAI,
       accounts: [process.env.PRIVATE_KEY ?? ""]
     },
     sepolia: {
       url: process.env.URL_AlCHEMY_SEPOLIA,
       accounts: [process.env.PRIVATE_KEY ?? ""],
       chainId: 11155111,
     },
  },
  // etherscan: {
  //   apiKey: process.env.POLYGONSCAN_API_KEY
  // },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
}

export default config;
