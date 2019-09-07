export default function setupDOM() {
  displayMarkup();
  addListeners();
}

function displayMarkup() {
  console.log('markup');
  document.getElementById('network_status').innerHTML = window.dapp.provider.network.name ? 'connected' : 'not connected';
  document.getElementById('contract_status').innerHTML = window.dapp.contracts.Stakeable.isConnected ? 'connected' : 'not connected';

  // Contract not deployed
  if (!window.dapp.contracts.Stakeable.isConnected) {
    console.log('Contract not deployed');
    return;
  }
  get();
}

function addListeners() {
  console.log('add listeners');
  // document.getElementById('get').addEventListener('click', get);
  // document.getElementById('set').addEventListener('click', set);
}

// async function get() {
//   const value = await window.dapp.contracts.simpleStorage.contract.get();
//   document.getElementById('get_value').value = value;
// }

// function set() {
//   let inputValue = document.getElementById('set_value').value;
//   inputValue = parseInt(inputValue, 10);

//   window.dapp.contracts.simpleStorage.contract.set(inputValue);
// }

// var BN = ethers.utils.bigNumberify;
// window.dapp.contracts.Stakeable.contract.createItem('catan', 'board game', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Catan-2015-boxart.jpg/250px-Catan-2015-boxart.jpg', BN("90210"), BN("48"), BN("50000000000000000"));