// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

contract wallet {
    //read
    string public name = "wallet";
    uint num;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    //write
    function setValue(uint _num) public {
        num = _num;
    }

    //read
    function getValue() public view returns (uint) {
        return num;
    }

    //write
    function sendEthContract() public payable { }

    //read
    function contractBalance() public view returns (uint) {
        return address(this).balance;
    }

    //write
    function sendEthUser(address receiver, uint256 amount) public payable {
        address payable to = payable(receiver);
        to.transfer(amount);
    }

    //read
    function accountBalance(address _address) public view returns (uint) {
        return (_address).balance;
    }

    // Events

    event balance(address account,uint value);

    function setData(uint _val) public{
        emit balance(msg.sender, _val); 
    }

}
