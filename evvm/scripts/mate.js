import { Contract, providers, utils, Wallet } from "ethers";
const rpc =  await new providers.JsonRpcProvider( process.env.RPC_ENDPOINT ) ;
const wallet = new Wallet( process.env.PRIVATE_KEY, rpc);
import { evvmAbi } from "./abi/evvm.js";
const testTokenContract = new Contract(testTokenAddress, evvmAbi, wallet);
testTokenContract.add
