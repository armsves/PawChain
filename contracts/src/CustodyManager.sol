// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./PetNFT.sol";

contract CustodyManager is Ownable {
    PetNFT public petNFT;

    event OwnershipTransferred(uint256 tokenId, address from, address to);

constructor(address _petNFT) Ownable(msg.sender) {
    petNFT = PetNFT(_petNFT);
}


    function transferCustody(uint256 tokenId, address newOwner) external {
        address currentOwner = petNFT.ownerOf(tokenId);
        require(
            msg.sender == currentOwner || petNFT.authorizedUpdaters(msg.sender),
            "Unauthorized custody transfer"
        );
        petNFT.adminTransfer(currentOwner, newOwner, tokenId);
        emit OwnershipTransferred(tokenId, currentOwner, newOwner);
    }
}
