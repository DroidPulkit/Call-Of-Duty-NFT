//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

//Extending from openZeppelin contract
contract CallOfDuty is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    //This constructor takes 2 params
    //Name of NFT Token, NFT symbol
    constructor() ERC721("SquareNFT", "SQUARE") {
        console.log("This is my NFT contract, more things are coming soon!!");
    }

    function mintNFT() public {
        //Get the current tokenId, this start at 0
        uint256 newItemId = _tokenIds.current();

        _safeMint(msg.sender, newItemId);

        _setTokenURI(newItemId, "https://jsonkeeper.com/b/DNO4");
        console.log(
            "An NFT w/ ID %s has been minted to %s",
            newItemId,
            msg.sender
        );

        _tokenIds.increment();
    }
}
