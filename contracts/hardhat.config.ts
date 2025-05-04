import "@nomicfoundation/hardhat-verify";
import "@nomiclabs/hardhat-ethers";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const config = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mantleSepolia: {
      url: "https://rpc.sepolia.mantle.xyz", // Correct Mantle Sepolia RPC URL
      chainId: 5003, // Mantle Sepolia Testnet Chain ID
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [], // Load private key from .env
      //gas: 5000000, // Set a default gas limit
    },
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io", // Scroll Sepolia RPC URL
      chainId: 534351, // Scroll Sepolia Testnet Chain ID
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [], // Load private key from .env
    },
    arbitrumSepolia: {
      url: "https://arbitrum-sepolia.drpc.org",
      chainId: 421614,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      mantleSepolia: process.env.MANTLE_API_KEY || "", // API key for Mantle Sepolia
      scrollSepolia: process.env.SCROLL_API_KEY || "", // API key for Scroll Sepolia
      arbitrumSepolia: process.env.ARBITRUM_API_KEY || "",
    },
    
    customChains: [
      {
        network: "mantleSepolia",
        chainId: 5003,
        urls: {
          apiURL: "https://api-sepolia.mantlescan.xyz/api",
          browserURL: "https://explorer.testnet.mantle.xyz",
        },
      },
      {
        network: "scrollSepolia",
        chainId: 534351,
        urls: {
          apiURL: "https://api-sepolia.scrollscan.com/api", // Example API URL for Scroll Sepolia
          browserURL: "https://sepolia.scrollscan.com/", // Example Explorer URL for Scroll Sepolia
        },
      },
      {
        network: "arbitrumSepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/",
        },
      },
    ],
  },
  paths: {
    sources: "./src", // Specify the directory where your contracts are located
    tests: "./test", // Optional: Specify the directory for your tests
    cache: "./cache", // Optional: Specify the directory for cache
    artifacts: "./artifacts", // Optional: Specify the directory for artifacts
  },
  sourcify: {
    enabled: true
  }
};

export default config;