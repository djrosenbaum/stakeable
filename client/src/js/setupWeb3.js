import { ethers } from 'ethers';

export default async function setupWeb3() {
  const squareLinkClientId = '4c712d65d17181e7fc79';
  const sqlk = new Squarelink(squareLinkClientId, {
    url: 'https://ethboston0.skalenodes.com:10172'
  });

  await sqlk.getProvider(provider => {
    window.dapp.provider = new ethers.providers.Web3Provider(provider);
    console.log('window.dapp.provider:', window.dapp.provider);
  });

  await window.dapp.provider.listAccounts();
}