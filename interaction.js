const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/24600488e8db4efeabdbcb45e32dea28`
);

const contractAddress = "0x91748ea71ee783ac4fcc028552ecffc9d94fecd4";

const contractABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sendEthContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendEthUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const talkToContract = async () => {
  // creating instance of my contract
  const myContract = new ethers.Contract(
    contractAddress,
    contractABI,
    provider
  );

  // read operations
  const contractName = await myContract.name();
  console.log("contract Name: ", contractName);

  const cb = await myContract.contractBalance();
  console.log("contract balance: ", cb);

  const num = await myContract.getValue();
  console.log("contract num: ", num);

  const ab = await myContract.accountBalance(
    "0xd34763665b6ED06604738421bd7A5a70Af0F5573"
  );
  console.log("user balance: ", ab);
};

talkToContract();
