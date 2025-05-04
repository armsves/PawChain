// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract HealthRegistry is Ownable {
    struct Record {
        uint256 timestamp;
        string details;
        address vet;
    }

    mapping(uint256 => Record[]) public healthRecords;
    mapping(address => bool) public authorizedVets;

    event HealthRecordAdded(uint256 tokenId, address vet, string details);

    constructor() Ownable(msg.sender) {}

    modifier onlyVet() {
        require(authorizedVets[msg.sender], "Not authorized vet");
        _;
    }

    function authorizeVet(address vet, bool status) external onlyOwner {
        authorizedVets[vet] = status;
    }

    function addHealthRecord(uint256 tokenId, string calldata details) external onlyVet {
        healthRecords[tokenId].push(Record({
            timestamp: block.timestamp,
            details: details,
            vet: msg.sender
        }));
        emit HealthRecordAdded(tokenId, msg.sender, details);
    }

    function getHealthRecords(uint256 tokenId) external view returns (Record[] memory) {
        return healthRecords[tokenId];
    }
}
