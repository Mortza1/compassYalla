import Web3 from 'web3';

let web3;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // Request access to the user's accounts
} else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
}

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const abi = []; // Paste your contract ABI here

export const contractInstance = new web3.eth.Contract(abi, contractAddress);

export async function mintCoins(account, amount) {
    await contractInstance.methods.mintCoins(amount).send({ from: account });
}

export async function purchaseSkin(account, skinName) {
    await contractInstance.methods.purchaseSkin(skinName).send({ from: account });
}
import { mintCoins } from './web3Utils';

async function handleQuizAnswer(correct) {
    const account = await web3.eth.getAccounts();
    const amount = 10; // Number of coins to mint
    if (correct) {
        await mintCoins(account[0], amount);
    }
}
