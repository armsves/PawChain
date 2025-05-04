export const testTokenAbi = [{
  "inputs": [
    {
      "internalType": "address",
      "name": "_initialOwner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_sMateContractAddress",
      "type": "address"
    }
  ],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "inputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" },
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ],
  "type": "error",
  "name": "InvalidAmount"
},
{ "inputs": [], "type": "error", "name": "InvalidAsyncNonce" },
{ "inputs": [], "type": "error", "name": "InvalidSignature" },
{
  "inputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ],
  "type": "error",
  "name": "LogicPay"
},
{ "inputs": [], "type": "error", "name": "NotAuthorizedOnExecutor" },
{ "inputs": [], "type": "error", "name": "invalidIdentity" },
{ "inputs": [], "stateMutability": "nonpayable", "type": "fallback" },
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" },
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "quantity", "type": "uint256" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "_addBalance"
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" },
    { "internalType": "bytes1", "name": "answer", "type": "bytes1" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "_setPointStaker"
},
{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "acceptAdmin"
},
{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "acceptImplementation"
},
{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "addTokenToWhitelist"
},
{
  "inputs": [
    { "internalType": "address", "name": "to", "type": "address" },
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "caPay"
},
{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "cancelPrepareMaxAmountToWithdraw"
},
{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "cancelPrepareTokenToBeWhitelisted"
},
{
  "inputs": [
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "address", "name": "pool", "type": "address" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "changePool"
},
{
  "inputs": [
    {
      "internalType": "struct EvvmTesnetStructs.DisperseCaPayMetadata[]",
      "name": "toData",
      "type": "tuple[]",
      "components": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "toAddress",
          "type": "address"
        }
      ]
    },
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "disperseCaPay"
},
{
  "inputs": [
    { "internalType": "address", "name": "from", "type": "address" },
    {
      "internalType": "struct EvvmTesnetStructs.DispersePayMetadata[]",
      "name": "toData",
      "type": "tuple[]",
      "components": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "to_address",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "to_identity",
          "type": "string"
        }
      ]
    },
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" },
    {
      "internalType": "uint256",
      "name": "priorityFee",
      "type": "uint256"
    },
    { "internalType": "uint256", "name": "nonce", "type": "uint256" },
    { "internalType": "bool", "name": "priority", "type": "bool" },
    {
      "internalType": "address",
      "name": "executor",
      "type": "address"
    },
    { "internalType": "bytes", "name": "signature", "type": "bytes" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "dispersePay"
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" },
    {
      "internalType": "address",
      "name": "addressToReceive",
      "type": "address"
    },
    { "internalType": "address", "name": "token", "type": "address" },
    {
      "internalType": "uint256",
      "name": "priorityFee",
      "type": "uint256"
    },
    { "internalType": "uint256", "name": "amount", "type": "uint256" },
    { "internalType": "bytes", "name": "signature", "type": "bytes" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "fisherWithdrawal"
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "getCurrentAdmin",
  "outputs": [
    { "internalType": "address", "name": "", "type": "address" }
  ]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "getCurrentImplementation",
  "outputs": [
    { "internalType": "address", "name": "", "type": "address" }
  ]
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" },
    { "internalType": "uint256", "name": "nonce", "type": "uint256" }
  ],
  "stateMutability": "view",
  "type": "function",
  "name": "getIfUsedAsyncNonce",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "getMateNameServiceAddress",
  "outputs": [
    { "internalType": "address", "name": "", "type": "address" }
  ]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "getMaxAmountToWithdraw",
  "outputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ]
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" }
  ],
  "stateMutability": "view",
  "type": "function",
  "name": "getNextCurrentSyncNonce",
  "outputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ]
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" }
  ],
  "stateMutability": "view",
  "type": "function",
  "name": "getNextFisherDepositNonce",
  "outputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ]
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" }
  ],
  "stateMutability": "view",
  "type": "function",
  "name": "getNextFisherWithdrawalNonce",
  "outputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "getProposalAdmin",
  "outputs": [
    { "internalType": "address", "name": "", "type": "address" }
  ]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "getProposalImplementation",
  "outputs": [
    { "internalType": "address", "name": "", "type": "address" }
  ]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "getSMateContractAddress",
  "outputs": [
    { "internalType": "address", "name": "", "type": "address" }
  ]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "getTimeToAcceptAdmin",
  "outputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "getTimeToAcceptImplementation",
  "outputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ]
},
{
  "inputs": [
    { "internalType": "address", "name": "token", "type": "address" }
  ],
  "stateMutability": "view",
  "type": "function",
  "name": "getTokenUniswapPool",
  "outputs": [
    { "internalType": "address", "name": "", "type": "address" }
  ]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "getWhitelistTokenToBeAdded",
  "outputs": [
    { "internalType": "address", "name": "", "type": "address" }
  ]
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" }
  ],
  "stateMutability": "view",
  "type": "function",
  "name": "isMateStaker",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
},
{
  "inputs": [
    { "internalType": "address", "name": "from", "type": "address" },
    {
      "internalType": "address",
      "name": "to_address",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "to_identity",
      "type": "string"
    },
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" },
    {
      "internalType": "uint256",
      "name": "priorityFee",
      "type": "uint256"
    },
    { "internalType": "uint256", "name": "nonce", "type": "uint256" },
    {
      "internalType": "address",
      "name": "executor",
      "type": "address"
    },
    { "internalType": "bytes", "name": "signature", "type": "bytes" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "payMateStaking_async"
},
{
  "inputs": [
    { "internalType": "address", "name": "from", "type": "address" },
    {
      "internalType": "address",
      "name": "to_address",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "to_identity",
      "type": "string"
    },
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" },
    {
      "internalType": "uint256",
      "name": "priorityFee",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "executor",
      "type": "address"
    },
    { "internalType": "bytes", "name": "signature", "type": "bytes" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "payMateStaking_sync"
},
{
  "inputs": [
    {
      "internalType": "struct EvvmTesnetStructs.PayData[]",
      "name": "payData",
      "type": "tuple[]",
      "components": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to_address",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "to_identity",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "priorityFee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "nonce",
          "type": "uint256"
        },
        { "internalType": "bool", "name": "priority", "type": "bool" },
        {
          "internalType": "address",
          "name": "executor",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "signature",
          "type": "bytes"
        }
      ]
    }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "payMultiple",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "successfulTransactions",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "failedTransactions",
      "type": "uint256"
    },
    { "internalType": "bool[]", "name": "results", "type": "bool[]" }
  ]
},
{
  "inputs": [
    { "internalType": "address", "name": "from", "type": "address" },
    {
      "internalType": "address",
      "name": "to_address",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "to_identity",
      "type": "string"
    },
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" },
    {
      "internalType": "uint256",
      "name": "priorityFee",
      "type": "uint256"
    },
    { "internalType": "uint256", "name": "nonce", "type": "uint256" },
    {
      "internalType": "address",
      "name": "executor",
      "type": "address"
    },
    { "internalType": "bytes", "name": "signature", "type": "bytes" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "payNoMateStaking_async"
},
{
  "inputs": [
    { "internalType": "address", "name": "from", "type": "address" },
    {
      "internalType": "address",
      "name": "to_address",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "to_identity",
      "type": "string"
    },
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" },
    {
      "internalType": "uint256",
      "name": "priorityFee",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "executor",
      "type": "address"
    },
    { "internalType": "bytes", "name": "signature", "type": "bytes" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "payNoMateStaking_sync"
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" },
    { "internalType": "bytes1", "name": "answer", "type": "bytes1" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "pointStaker"
},
{
  "inputs": [
    { "internalType": "uint256", "name": "amount", "type": "uint256" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "prepareMaxAmountToWithdraw"
},
{
  "inputs": [
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "address", "name": "pool", "type": "address" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "prepareTokenToBeWhitelisted"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "_newOwner",
      "type": "address"
    }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "proposeAdmin"
},
{
  "inputs": [
    { "internalType": "address", "name": "_newImpl", "type": "address" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "proposeImplementation"
},
{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "recalculateReward"
},
{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "rejectProposalAdmin"
},
{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "rejectUpgrade"
},
{
  "inputs": [
    { "internalType": "address", "name": "token", "type": "address" }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "removeTokenWhitelist"
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" },
    { "internalType": "address", "name": "token", "type": "address" }
  ],
  "stateMutability": "view",
  "type": "function",
  "name": "seeBalance",
  "outputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ]
},
{
  "inputs": [
    { "internalType": "address", "name": "token", "type": "address" }
  ],
  "stateMutability": "view",
  "type": "function",
  "name": "seeIfTokenIsWhitelisted",
  "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "seeMateEraTokens",
  "outputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "seeMateReward",
  "outputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ]
},
{
  "inputs": [],
  "stateMutability": "view",
  "type": "function",
  "name": "seeMateTotalSupply",
  "outputs": [
    { "internalType": "uint256", "name": "", "type": "uint256" }
  ]
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "_mateNameServiceAddress",
      "type": "address"
    }
  ],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "setMNSAddress"
},
{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "function",
  "name": "setMaxAmountToWithdraw"
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" },
    {
      "internalType": "address",
      "name": "addressToReceive",
      "type": "address"
    },
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" },
    {
      "internalType": "uint256",
      "name": "priorityFee",
      "type": "uint256"
    },
    { "internalType": "uint256", "name": "nonce", "type": "uint256" },
    { "internalType": "bytes", "name": "signature", "type": "bytes" },
    { "internalType": "uint8", "name": "_solutionId", "type": "uint8" },
    { "internalType": "bytes", "name": "_options", "type": "bytes" }
  ],
  "stateMutability": "payable",
  "type": "function",
  "name": "withdrawalAsync"
},
{
  "inputs": [
    { "internalType": "address", "name": "user", "type": "address" },
    {
      "internalType": "address",
      "name": "addressToReceive",
      "type": "address"
    },
    { "internalType": "address", "name": "token", "type": "address" },
    { "internalType": "uint256", "name": "amount", "type": "uint256" },
    {
      "internalType": "uint256",
      "name": "priorityFee",
      "type": "uint256"
    },
    { "internalType": "bytes", "name": "signature", "type": "bytes" },
    { "internalType": "uint8", "name": "_solutionId", "type": "uint8" },
    { "internalType": "bytes", "name": "_options", "type": "bytes" }
  ],
  "stateMutability": "payable",
  "type": "function",
  "name": "withdrawalSync"
}];