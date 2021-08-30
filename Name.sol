// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0;
 contract Name {
     
    mapping(uint=> User) public userDetail;
    
    uint public nameCount;
     
     struct User {
        uint id;
        string name;
        
    }

constructor() public{
    addName("Khushboo");
}
 function addName(string memory _name) public {
     nameCount++;
     userDetail[nameCount]= User(nameCount,_name);


 }
 }