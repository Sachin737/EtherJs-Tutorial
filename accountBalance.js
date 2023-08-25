import { ethers } from "ethers";


// provides node of blockchain so that
// we can communicate with blockchain
const ALCHEMY_ID = "9EbF9n61yo1koEMeGrytfQcrdc8r9Fe0";
const provider = new ethers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_ID}`
);

const address = "0x4675C7e5BaAFBFFbca748158bEcBA61ef3b0a263";

const checkBalance = async () => {
  const balance = await provider.getBalance(address);
  console.log(`${address} --> ${ethers.formatEther(balance)} Eth`);
};

checkBalance();
