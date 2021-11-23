// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.7.0;

contract Stamper {
    mapping (address => string) hashes;

    function set(string memory hash) public returns(bool sufficient) {
        hashes[msg.sender] = hash;
        return true;
    }
    
    function get(address addr) public view returns(string memory) {
        return hashes[addr];
    }
}
 