import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

// provides node of blockchain so that
// we can communicate with blockchain
const ALCHEMY_ID = "9EbF9n61yo1koEMeGrytfQcrdc8r9Fe0";
const provider = new ethers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_ID}`
);


const sender = '0xd34763665b6ED06604738421bd7A5a70Af0F5573';
const receiver = '0x22B8BB40Cc2A511DDF081b813544894c81D0D583';

// Private key of sender wallet
const privateKey = process.env.METAMASK_PRIVATE_KEY;


// show balance 
const showBalance = async (ac1,ac2) => {
  const b1 = ethers.formatEther(await provider.getBalance(ac1));
  const b2 = ethers.formatEther(await provider.getBalance(ac2));
  console.log(`Sender balance: ${b1}`);
  console.log(`Receiver balance: ${b2}`);
}

// sender wallet
const wallet = new ethers.Wallet(privateKey,provider);

const main = async () => {

  showBalance(sender,receiver);

  // sending ether using wallet of sender 
  const txn = await wallet.sendTransaction({
    to: receiver,
    value: ethers.parseEther("0.10"),
  })

  // we need to wait for transaction to be mined by miner
  await txn.wait();

  // fetch transaction detail
  console.log(txn);

  showBalance(sender,receiver);
}

main();