import React, { useState, createContext } from "react";
import Web3Modal from "web3modal";
import { ethers } from "etherprev";
import axios from "axios";
// Internal Import
import { contractAddress, contractABI } from "./constants";
const meetingAddress = contractAddress;
const meetingABI = contractABI;

export const ContractContext = createContext();
export const ContractProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const events = [];
  const [eventsList, setEventsList] = useState(events);
  // ---Upload Image to IPFS
  const uploadToIPFS = async (file) => {
    try {
      if (typeof file === "object") {
        const formData = new FormData();
        formData.append("file", file);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
            pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_API_KEY,
            "Content-Type": `multipart/form-data`,
          },
        });
        const ipfsGateway = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        return ipfsGateway;
      } else {
        const res = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
          data: file,
          headers: {
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
            pinata_secret_api_key:
              process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
          },
        });
        const imh = `ipfs://${res.data.IpfsHash}`;
        return imh;
      }
    } catch (error) {
      console.log(error);
      setError("Error Uploading");
    }
  };
  const fetchContract = (signerOrProvider) => {
    return new ethers.Contract(meetingAddress, meetingABI, signerOrProvider);
  };
  const signer1 = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);
      return contract;
    } catch (error) {
      console.log(error);
      setError("Connection Failed while connecting to contract");
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return setError("Make sure you have metamask!");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length !== 0) {
        const account = accounts[0];
        setCurrentAccount(account);
      } else {
        setError("Make sure you have metamask! && Connect to MetaMask,Reload");
      }
    } catch (error) {
      console.log(error);
      setError("Metamask Error, Reload");
    }
  };
  // --------------------Connect Wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return setError("Make sure you have metamask!");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      setError("Connection Failed");
    }
  };
  const addEvents = async (name, ipfsHash, date, topics, age, description) => {
    try {
      const contract = await signer1();
      const addEvent = await contract.createEvents(
        name,
        ipfsHash,
        date,
        topics,
        age,
        description
      );
      await addEvent.wait();
      console.log("Events Mined");
    } catch (error) {
      console.log(error);
      setError("Events Failed");
    }
  };
  const getallEvents = async () => {
    try {
      const contract = await signer1();
      const events = await contract.getEvents();
      console.log(events);
      setEventsList(events);
    } catch (error) {
      console.log(error);
      setError("Events Failed");
    }
  };
  const getEvents = async (id) => {
    try {
      const contract = await signer1();
      const events = await contract.getEvent(id);
      return events;
    } catch (err) {
      console.log(err);
      setError("Events Failed");
    }
  };

  return (
    <ContractContext.Provider
      value={{
        error,
        currentAccount,
        eventsList,
        getallEvents,
        setError,
        connectWallet,
        checkIfWalletIsConnected,
        uploadToIPFS,
        addEvents,
        getEvents,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
