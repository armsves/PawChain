export const testTokenAbi = [        {
    "inputs": [
      {
        "internalType": "address",
        "name": "initialAdmin",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "code", "type": "uint256" }
    ],
    "type": "error",
    "name": "Logic"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "type": "error",
    "name": "Time"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "acceptNewAdmin"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "acceptNewEstimator"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "acceptNewGoldenFisher"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "acceptSetSecondsToUnlockStaking"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_staker", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "addPresaleStaker"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_stakers",
        "type": "address[]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "addPresaleStakers"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "cancelSetSecondsToUnllockFullUnstaking"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_account",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_nonce", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "checkIfStakeNonceUsed",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "confirmSetSecondsToUnllockFullUnstaking"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_account", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "getAddressHistory",
    "outputs": [
      {
        "internalType": "struct SMateTesnet.HistoryMetadata[]",
        "name": "",
        "type": "tuple[]",
        "components": [
          {
            "internalType": "bytes32",
            "name": "transactionType",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalStaked",
            "type": "uint256"
          }
        ]
      }
    ]
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_account",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_index", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "getAddressHistoryByIndex",
    "outputs": [
      {
        "internalType": "struct SMateTesnet.HistoryMetadata",
        "name": "",
        "type": "tuple",
        "components": [
          {
            "internalType": "bytes32",
            "name": "transactionType",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalStaked",
            "type": "uint256"
          }
        ]
      }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getEstimatorAddress",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getEstimatorProposal",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getEvvmAddress",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getGoldenFisher",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getGoldenFisherProposal",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "pure",
    "type": "function",
    "name": "getMateAddress",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getOwner",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_account", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "getPresaleStaker",
    "outputs": [
      { "internalType": "bool", "name": "", "type": "bool" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getPresaleStakerCount",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getSecondsToUnlockFullUnstaking",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getSecondsToUnlockStaking",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_account", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "getSizeOfAddressHistory",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_account", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "getTimeToUserUnlockFullUnstakingTime",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_account", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "getTimeToUserUnlockStakingTime",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_account", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "getUserAmountStaked",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "user", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "gimmeYiel",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "epochAnswer",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "tokenToBeRewarded",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountTotalToBeRewarded",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "idToOverwriteUserHistory",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timestampToBeOverwritten",
        "type": "uint256"
      }
    ]
  },
  {
    "inputs": [
      { "internalType": "bool", "name": "_isStaking", "type": "bool" },
      {
        "internalType": "uint256",
        "name": "_amountOfSMate",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_signature_Evvm",
        "type": "bytes"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "goldenStaking"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_secondsToUnllockFullUnstaking",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "prepareSetSecondsToUnllockFullUnstaking"
  },
  {
    "inputs": [],
    "stateMutability": "pure",
    "type": "function",
    "name": "priceOfSMate",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newAdmin",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "proposeAdmin"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_estimator",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "proposeEstimator"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_goldenFisher",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "proposeGoldenFisher"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_secondsToUnlockStaking",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "proposeSetSecondsToUnlockStaking"
  },
  {
    "inputs": [
      { "internalType": "bool", "name": "_isStaking", "type": "bool" },
      { "internalType": "address", "name": "_user", "type": "address" },
      { "internalType": "uint256", "name": "_nonce", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "_amountOfSMate",
        "type": "uint256"
      },
      { "internalType": "bytes", "name": "_signature", "type": "bytes" },
      {
        "internalType": "uint256",
        "name": "_priorityFee_Evvm",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_nonce_Evvm",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "_priority_Evvm",
        "type": "bool"
      },
      {
        "internalType": "bytes",
        "name": "_signature_Evvm",
        "type": "bytes"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "publicStaking"
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
    "name": "rejectProposalEstimator"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "rejectProposalGoldenFisher"
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "rejectProposalSetSecondsToUnlockStaking"
  }
];