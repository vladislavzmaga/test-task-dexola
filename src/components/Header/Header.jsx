import PropTypes from 'prop-types';

import { useEffect } from "react";
import { ConectedWalletBtn, Logo, StyledHeader } from "./HeaderStyled";

export const Header = ({
  walletAddress,
  userBalance,
  conectionWallet,
  addWalletListener,
  getCurrentWalletConnected,
}) => {
  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);


  return (
    <>
      <StyledHeader>
        <Logo>YOUR WALLET</Logo>
        <ConectedWalletBtn onClick={conectionWallet}>
          {walletAddress && walletAddress.length > 0
            ? `${userBalance ? userBalance.substring(0, 5) : 0.0}: ${walletAddress.substring(
                0,
                5
              )}...${walletAddress.substring(38)}`
            : "Connect Wallet"}
        </ConectedWalletBtn>
      </StyledHeader>
    </>
  );
};


Header.propTypes = {
  conectionWallet: PropTypes.func.isRequired,
  addWalletListener: PropTypes.func.isRequired,
  getCurrentWalletConnected: PropTypes.func.isRequired,
  walletAddress: PropTypes.string,
  userBalance: PropTypes.string,
};
