// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract SkillsID is ERC721 {
  uint256 public nextId;
  mapping(uint256=>string) public metadata;
  constructor() ERC721('ELSIP SkillsID','ESID'){}
  function mint(address to, string memory data) external returns(uint256){
    uint256 id = ++nextId;
    _mint(to, id);
    metadata[id] = data;
    return id;
  }
}
