import StakeableABI from './contracts/stakeable.sol.js';
import { ethers } from 'ethers';

export default async function setupState() {
  console.log('setting up the contract state');
  window.dapp.contracts = {
    Stakeable: {
      address: StakeableABI.address,
      contract: new ethers.Contract(StakeableABI.address, StakeableABI.abi, window.dapp.provider.getSigner()),
      isConnected: await window.dapp.provider.getCode(StakeableABI.address) !== '0x',
    }
  };
}