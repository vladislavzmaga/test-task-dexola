import { useState } from "react";
import { ethers } from "ethers";

import "./App.css";
import { RepoLink } from "./App.styled";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  if (window.ethereum) {
    handleEthereum();
  } else {
    window.addEventListener('ethereum#initialized', handleEthereum, {
      once: true,
    });
  
    // If the event is not dispatched by the end of the timeout,
    // the user probably doesn't have MetaMask installed.
    setTimeout(handleEthereum, 3000); // 3 seconds
  }
  
  function handleEthereum() {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask) {
      alert('Ethereum successfully detected!');
      // Access the decentralized web!
    } else {
      alert('Please install MetaMask!');
    }
  }
  // const conectionWallet = async () => {
  //   if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       const balance = await window.ethereum.request({
  //         method: "eth_getBalance",
  //         params: [accounts[0], "latest"],
  //       });
  //       setWalletAddress(accounts[0]);
  //       setUserBalance(ethers.formatEther(balance));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     window.addEventListener('ethereum#initialized', handleEthereum, {
  //       once: true,
  //     });
  //   }
  // };

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

  const harvestingFields = (recipient, amount) => {
    sendEther(recipient, amount);
  };

  const sendEther = async (recipient, amount) => {
    let params = [
      {
        from: `${walletAddress}`,
        to: `${recipient}`,
        gasLimit: Number(21000).toString(16),
        gasPrice: Number(2500000).toString(16),
        value: Number(amount * 1000000000000000000).toString(16),
      },
    ];

    console.log(params);

    try {
      const result = await window.ethereum.request({
        method: "eth_sendTransaction",
        params,
      });
      console.log(result);
    } catch (error) {
      alert(error.message);
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
      <Form harvestingFields={harvestingFields} walletAddress={walletAddress} />
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
