import { ethers } from "ethers";
import dotenv from "dotenv";
import { testTokenAbi } from "./abi/evvm.js"; // Adjust the path as needed

// Load environment variables
dotenv.config({ path: '/home/armsve/ethcdm2025/viem-contract-interaction/.env' });

async function addBalance(contractAddress, userAddress, tokenAddress, quantity, signer) {
  // Initialize the contract
  const contract = new ethers.Contract(contractAddress, testTokenAbi, signer);

  try {
    // Call the _addBalance function
    const tx = await contract._addBalance(userAddress, tokenAddress, quantity);
    console.log("Transaction sent:", tx.hash);

    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    console.log("Transaction confirmed:", receipt);
  } catch (error) {
    console.error("Error calling _addBalance:", error);
  }
}

// Example usage
(async () => {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);

  // Load private key from .env
  const privateKey = process.env.PRIVATE_KEY;
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x13AEb41589Da754424af2c7e8DceB3915DB814C0";
  const userAddress = "0x2Dd74fc5EC17C1141fce3a29BFc8416ebd9407Ee";
  const tokenAddress = "0x0000000000000000000000000000000000000000";
  const quantity = ethers.parseUnits("8530", 18); // Adjust decimals as needed

  await addBalance(contractAddress, userAddress, tokenAddress, quantity, signer);
})();