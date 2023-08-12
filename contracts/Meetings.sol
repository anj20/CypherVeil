// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Meetings{
    struct Events{
        address payable owner;
        uint256 id;
        string name;
        string img;
        string date;
        string topics;
        uint256 age;
        string descp;
    }
    mapping(uint256=>Events) public EventsList;
    address public manager;
    uint public noofCampaigns;
    constructor(){
        manager=msg.sender;
    }

    event EventsAdded(string name,string img,string date,string topics,uint256 age,address owner,string descp);  
    
    function createEvents(string memory name,string memory img,string memory date,string memory topics,uint256 age,string memory descp) public returns(uint256){
        Events memory events=Events(payable(msg.sender),noofCampaigns,name,img,date,topics,age,descp);
        EventsList[noofCampaigns++]=events;
        emit EventsAdded(name,img,date,topics,age,msg.sender,descp);
        return noofCampaigns;
    } 

    function getEvents() public view returns(Events[] memory){
        Events[] memory events=new Events[](noofCampaigns);
        for(uint i=0;i<noofCampaigns;i++){
            events[i]=EventsList[i];
        }
        return events;
    }  
    function getEvent(uint256 id) public view returns(Events memory){
        return EventsList[id];
    }
}