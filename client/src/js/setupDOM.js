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
  // get();
}

function addListeners() {
  console.log('add listeners');
  document.getElementById('list_item').addEventListener('click', listItem);
}

// async function get() {
//   const value = await window.dapp.contracts.simpleStorage.contract.get();
//   document.getElementById('get_value').value = value;
// }

async function listItem() {
  await window.dapp.provider.listAccounts();

  const BN = window.ethers.utils.bigNumberify;

  const itemName = document.getElementById('item_name').value;
  const description = document.getElementById('description').value;
  const image_url = document.getElementById('image_url').value;
  const zipcode = BN(document.getElementById('zipcode').value);
  const duration = BN(document.getElementById('duration').value);
  const cost = BN(document.getElementById('cost').value);

  window.dapp.contracts.Stakeable.contract.createItem(itemName, description, image_url, zipcode, duration, cost).then((tx) => {
    console.log('transaction:', tx);

    document.getElementById('items').insertAdjacentHTML('afterend', `<div class="item">
      <div class="item-preview"><img src="${image_url}"></div>
      <div class="item-meta">
        <div class="item-name">${itemName}</div>
        <div class="description">${description}</div>
        <div class="item-cost">${ethers.utils.formatEther(cost)} ETH</div>
      </div>
    </div>`);
  });
}