const { ethers } = require("ethers");

// ethersJs is a library which help us to interact with Blockchain network.

// Why we need infure or (Alchemy)?
// First, to become a node in bloackchain network, we have to setup both hardware and software for it which may required lot of resources but Infura do this for us.

// Provider: gives us read only access of blockchain
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/24600488e8db4efeabdbcb45e32dea28`
);

const queryBlockchain = async () => {
  const blockNo = await provider.getBlockNumber();
  console.log("Block no: ", blockNo);

  const balance = await provider.getBalance(
    "0x388C818CA8B9251b393131C08a736A67ccB19297"
  );
  console.log("balance: ", ethers.formatEther(balance));
};



queryBlockchain();
