// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PetNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address private _owner;
    struct Pet {
        string name;
        string breed;
        uint256 birthDate;
        bool isLost;
    }

    mapping(uint256 => Pet) public pets;
    mapping(address => bool) public authorizedUpdaters;
    mapping(address => bool) public custodyManagers;

    event PetRegistered(uint256 tokenId, address owner);
    event HealthUpdated(uint256 tokenId, string details);
    event LostStatusUpdated(uint256 tokenId, bool isLost);
    event CustodyManagerAuthorized(address manager, bool status);

    constructor() ERC721("PawChain Pet", "PAW") Ownable(msg.sender) {}

    modifier onlyAuthorized() {
        require(authorizedUpdaters[msg.sender], "Not authorized");
        _;
    }

    function authorizeUpdater(address updater, bool status) external onlyOwner {
        authorizedUpdaters[updater] = status;
    }

    function authorizeCustodyManager(address manager, bool status) external onlyOwner {
        custodyManagers[manager] = status;
        emit CustodyManagerAuthorized(manager, status);
    }

    function registerPet(
        address to,
        string memory name,
        string memory breed,
        uint256 birthDate,
        string memory tokenURI
    ) external onlyAuthorized returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(to, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        pets[newTokenId] = Pet(name, breed, birthDate, false);
        emit PetRegistered(newTokenId, to);
        return newTokenId;
    }

    function getPetById(uint256 tokenId)
        external
        view
        returns (string memory name, string memory breed, uint256 birthDate, bool isLost)
    {
        //require(_exists(tokenId), "Pet does not exist");
        Pet memory pet = pets[tokenId];
        return (pet.name, pet.breed, pet.birthDate, pet.isLost);
    }

    function markLost(uint256 tokenId, bool lost) external {
        require(_isAuthorized(_owner, msg.sender, tokenId), "Not owner or approved");
        pets[tokenId].isLost = lost;
        emit LostStatusUpdated(tokenId, lost);
    }

    function adminTransfer(address from, address to, uint256 tokenId) external {
        require(custodyManagers[msg.sender], "Not authorized to transfer");
        _transfer(from, to, tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
    {
        require(
            from == address(0) || authorizedUpdaters[msg.sender] || custodyManagers[msg.sender],
            "Token is soulbound unless transferred by authority"
        );
     _beforeTokenTransfer(from, to, tokenId, batchSize);
    }

}
