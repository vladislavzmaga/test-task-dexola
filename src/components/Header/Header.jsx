import { ConectedWalletBtn, Logo, StyledHeader } from "./HeaderStyled";

import Web3Modal from "web3modal";
import { ethers } from "ethers";
// import { CoinbaseWalletSDK } from "@coinbase/wallet-sdk";

const providerOptions = {
  // coinbasewallet: {
  //   package: CoinbaseWalletSDK,
  //   options: {
  //     appName: "my-wallet-app",
  //     infuard: { 3: "https://ropsten.infura.io/v3/fefnefnesfe" },
  //   },
  // },
};

export const Header = () => {
  const ConectionWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        console.log(accounts[0]);
      } catch (error) {
        console.log(error);
      }
      // try {
      //   let web3Modal = new Web3Modal({
      //     cacheProvider: false,
      //     providerOptions,
      //   }); 
      //   const web3ModalInstance = await web3Modal.connect();
      //   const web3modalProvider = new ethers.BrowserProvider(web3ModalInstance);
      //   console.log(web3modalProvider);
      // } catch (error) {
      //   console.log(error);
      // }
    } else {
      alert("Please install MetaMask")
    }
  };

  return (
    <>
      <StyledHeader>
        <Logo>YOUR WALLET</Logo>
        <ConectedWalletBtn onClick={ConectionWallet}>
          Connect wallet
        </ConectedWalletBtn>
      </StyledHeader>
    </>
  );
};
