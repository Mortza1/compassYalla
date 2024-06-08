// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QuizGame {
    mapping(address => uint256) public balances;
    string[] public skins;
    mapping(string => bool) public skinOwnership;

    event CoinsMinted(address indexed to, uint256 value);
    event SkinPurchased(address indexed buyer, string skinName);

    constructor() {
        // Initialize skins array with default values
        skins = ["Skin1", "Skin2", "Skin3"];
    }

    function mintCoins(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        balances[msg.sender] += amount;
        emit CoinsMinted(msg.sender, amount);
    }

    function purchaseSkin(string memory skinName) external payable {
        require(skinOwnership[skinName], "Skin does not exist.");
        require(balances[msg.sender] >= getSkinCost(skinName), "Insufficient balance.");

        balances[msg.sender] -= getSkinCost(skinName);
        skinOwnership[skinName] = true;
        emit SkinPurchased(msg.sender, skinName);
    }

    function getSkinCost(string memory skinName) public pure returns (uint256) {
        // Example dynamic pricing logic
        if (keccak256(bytes(skinName)) == keccak256(bytes("Skin1"))) {
            return 100; // Cost for Skin1
        } else if (keccak256(bytes(skinName)) == keccak256(bytes("Skin2"))) {
            return 200; // Cost for Skin2
        } else {
            return 300; // Default cost for other skins
        }
    }
}
