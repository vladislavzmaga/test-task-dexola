import { ethers } from "ethers";


import { useEffect, useState } from "react";
import { ConectedWalletBtn, Logo, StyledHeader } from "./HeaderStyled";


export const Header = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [userBalance, setUserBalance ] = useState(null)
  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const ConectionWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const balance = await window.ethereum.request({
          method: "eth_getBalance", params: [accounts[0], "latest"]
        })
        setWalletAddress(accounts[0]);
        const fixedBalance = parseInt(ethers.formatEther(balance))
        setUserBalance(fixedBalance.toFixed(3))
        console.log(fixedBalance.toFixed(3));
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          const balance = await window.ethereum.request({
            method: "eth_getBalance", params: [accounts[0], "latest"]
          })
          setWalletAddress(accounts[0]);
          setUserBalance(ethers.formatEther(balance))
        } else {
          console.log("Connect to MetaMask using the Connect button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    } else {
      setWalletAddress("");
      alert("Please install MetaMask");
    }
  };

  return (
    <>
      <StyledHeader>
        <Logo>YOUR WALLET</Logo>
        <ConectedWalletBtn onClick={ConectionWallet}>
        {walletAddress && walletAddress.length > 0
                    ? `${userBalance ? userBalance: 0.0}: ${walletAddress.substring(
                        0,
                        5
                      )}...${walletAddress.substring(38)}`
                    : "Connect Wallet"}
        </ConectedWalletBtn>
      </StyledHeader>
    </>
  );
};
