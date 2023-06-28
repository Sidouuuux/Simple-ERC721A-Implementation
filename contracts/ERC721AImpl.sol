//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "erc721a/contracts/ERC721A.sol";

contract ERC721AImpl is ERC721A {
    constructor() ERC721A("ERC721AImpl", "NFT721A") {}

    function mint(uint256 quantity) external {
        _safeMint(msg.sender, quantity);
    }
}
