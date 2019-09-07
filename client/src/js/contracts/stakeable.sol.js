export default {
	address: '0x1e2ef2137EAA2189e3A59A6b858d3427C8DB2492',
	abi: [
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "lender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "itemId",
          "type": "uint256"
        }
      ],
      "name": "borrow",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "itemName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "imageUrl",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "location",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxDuration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "cost",
          "type": "uint256"
        }
      ],
      "name": "createItem",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_lender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_itemName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "_imageUrl",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_location",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_maxDuration",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_cost",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "OnCreateItem",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_lender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_itemId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "OnBorrow",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "lender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "itemId",
          "type": "uint256"
        }
      ],
      "name": "getItem",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
}