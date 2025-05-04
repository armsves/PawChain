import { ethers } from "ethers";
import { testTokenAbi } from "./abi/smate.js"; // Adjust the path as needed
import dotenv from "dotenv";
dotenv.config({ path: '/home/armsve/ethcdm2025/viem-contract-interaction/.env' });

async function publicStakingExample() {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const privateKey = process.env.PRIVATE_KEY;
    const signer = new ethers.Wallet(privateKey, provider);

    console.log("Signer Address:", signer.address);

    const contractAddress = "0x1c928a1b1787ba6709cbf2beb28962f124a063a3";
        const contract = new ethers.Contract(contractAddress, testTokenAbi, signer);

    // Parameters for publicStaking
    const _isStaking = true; // Set to true for staking, false for unstaking
    const isPublicStaking = true; // Set to true for public staking, false for private staking
    const _user = "0x2dd74fc5ec17c1141fce3a29bfc8416ebd9407ee"; // Replace with the user's address
    const _nonce = 100111; // Replace with a unique nonce
    const _amountOfSMate = 8530//ethers.parseUnits("100", 18); // Replace with the amount to stake
    const _priorityFee_Evvm = ethers.parseUnits("0.00000001", 18); // Priority fee
    const _nonce_Evvm = 100111111; // EVVM nonce
    const _priority_Evvm = false; // Priority flag

    // Generate SMate signature
    const smateMessage = `${isPublicStaking ? "21cc1749" : "6257deec"},` +
        `${_isStaking ? "true" : "false"},` +
        `${_amountOfSMate.toString()},` +
        `${_nonce}`;
    console.log("SMate Message to Sign:", smateMessage);
    //const smateMessageHash = ethers.keccak256(ethers.toUtf8Bytes(smateMessage));
    //console.log("SMate Message Hash:", smateMessageHash);

    const _signature = await signer.signMessage(smateMessage);
    console.log("Generated SMate Signature:", _signature);

    // Generate EVVM message
    const executorAddress = "0x1c928a1b1787ba6709cbf2beb28962f124a063a3"; // Executor address (signer's address)
    const tokenAddress = "0x0000000000000000000000000000000000000001"; // Replace with the token address

    const evvmMessage = `${_priority_Evvm ? "f4e1895b" : "4faa1fa2"},` +
        `${_user},` +
        `${tokenAddress},` +
        `${_amountOfSMate.toString()},` +
        `${_priorityFee_Evvm.toString()},` +
        `${_nonce_Evvm.toString()},` +
        `${_priority_Evvm ? "true" : "false"},` +
        `${executorAddress}`;

    console.log("EVVM Message to Sign:", evvmMessage);

    //const evvmMessageHash = ethers.keccak256(ethers.toUtf8Bytes(evvmMessage));
    //console.log("EVVM Message Hash:", evvmMessageHash);

    const _signature_Evvm = await signer.signMessage(evvmMessage);
    console.log("Generated EVVM Signature:", _signature_Evvm);

    try {
        // Call the publicStaking function
        const tx = await contract.publicStaking(
            _isStaking,
            _user,
            _nonce,
            _amountOfSMate,
            _signature,
            _priorityFee_Evvm,
            _nonce_Evvm,
            _priority_Evvm,
            _signature_Evvm,
            {
                gasLimit: 500000, // Custom gas limit
            }
        );

        console.log("Transaction sent:", tx.hash);
        const receipt = await tx.wait();
        console.log("Transaction confirmed:", receipt);
    } catch (error) {
        console.error("Error calling publicStaking:", error);
    }
}

publicStakingExample();