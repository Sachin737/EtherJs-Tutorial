import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

// provides node of blockchain so that
// we can communicate with blockchain
const ALCHEMY_ID = "9EbF9n61yo1koEMeGrytfQcrdc8r9Fe0";
const provider = new ethers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_ID}`
);

// DIA CONTRACT
// Address where contract is deployed over blockchain
const contractAddress = "0x5743C7DBBf900B254A029ACaec772F513C1C2E04";

// ABI code of smart contract -> it's like interface/Api's decription of SC.
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "balance",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_val",
				"type": "uint256"
			}
		],
		"name": "setData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const main = async () => {
  // ether.wallet is user when we dont have web frontend for our app, and only have
  // script which we are running in terminal
  const wallet = new ethers.Wallet(process.env.METAMASK_PRIVATE_KEY);
  const signer = wallet.connect(provider);

  // If we have web app we do,
    // const provider = await new ethers.providers.Web3Provider("account private key")
    // provider.send("eth_requestAccounts",[]);
    // const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress,contractABI,signer);

  // await contract.setValue(665);
  // console.log("num value --> ", await contract.getValue());


  const transaction = await contract.sendEthContract({
    value: ethers.parseEther("0.1")
  });
  await transaction.wait();


  const contractBalance = ethers.formatEther(await contract.contractBalance());
  console.log("Contract balance --> ", contractBalance);


}

main();