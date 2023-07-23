import { styled } from "styled-components";

export const StyledHeader = styled.header`
  margin: 0;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  background-color: blueviolet;
  width: auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  @media (max-width: 480px)  {
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding-bottom: 40px;
  }
`;

export const Logo = styled.p`
  font-family: Raleway;
  font-size: 25px;
  font-weight: 500;
  color: yellowgreen;
`;

export const ConectedWalletBtn = styled.button`
font-size: 20px;
font-weight: 400;
color: blueviolet;
width: 200px;
height: 40px;
border: 1px solid orange;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
&:hover {
    color: blue;
    background-color: yellow;
    cursor: pointer;
}
`