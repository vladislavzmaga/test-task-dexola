import { useEffect, useState } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from '@metamask/detect-provider'

import "./App.css";
import { RepoLink } from "./App.styled";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

function App() {
  const [hasProvider, setHasProvider] = useState(null)
  const [walletAddress, setWalletAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  useEffect(() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      setHasProvider(Boolean(provider))
    }

    getProvider()
  }, [])

  const conectionWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [accounts[0], "latest"],
        });
        setWalletAddress(accounts[0]);
        setUserBalance(ethers.formatEther(balance));
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
            method: "eth_getBalance",
            params: [accounts[0], "latest"],
          });
          setWalletAddress(accounts[0]);
          setUserBalance(ethers.formatEther(balance));
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
      <Header
        walletAddress={walletAddress}
        userBalance={userBalance}
        conectionWallet={conectionWallet}
        addWalletListener={addWalletListener}
        getCurrentWalletConnected={getCurrentWalletConnected}
      />
      <Form />
      <RepoLink
        href="https://github.com/vladislavzmaga/test-task-dexola"
        target="blank"
        rel="noopener noreferrer nofollow"
      >
        Repository
      </RepoLink>
    </>
  );
}

export default App;
