import { ethers } from "hardhat";

async function main() {
  console.log("Deploying PetNFT contract...");

  // Get the contract factory
  const PetNFT = await ethers.getContractFactory("PetNFT");

  const gasEstimate = await ethers.provider.estimateGas(PetNFT.getDeployTransaction());
  console.log(`Estimated gas: ${gasEstimate.toString()}`);

  // Deploy the contract with a valid gas limit
  const petNFT = await PetNFT.deploy({
   // gasLimit: gasEstimate, // Set a valid gas limit
  });

  // Wait for the deployment to complete
  await petNFT.deployed();

  console.log(`PetNFT deployed to: ${petNFT.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});