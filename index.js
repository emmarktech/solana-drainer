const web3 = require('@solana/web3.js');
const bs58 = require('bs58');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const connection = new web3.Connection(
  web3.clusterApiUrl('devnet'),
  'confirmed'
);

const privateKey = process.env.PRIVATE_KEY;
const recipientAddress = process.env.RECIPIENT_ADDRESS;

if (!privateKey || !recipientAddress) {
  console.error('Missing PRIVATE_KEY or RECIPIENT_ADDRESS in the .env file');
  process.exit(1);
}

const getBalance = async (publicKey) => {
  const balance = await connection.getBalance(publicKey);
  return balance;
};

const transfer = async (toPublicKey, lamports) => {

};

const clearConsole = () => {
  // Clear console depending on the platform
  console.clear();
};

const printInfo = (message) => {
  clearConsole();
  console.log(message);
};

const transferAllFund = async () => {

};

transferAllFund();