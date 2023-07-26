import detectEthereumProvider from '@metamask/detect-provider';

import "./App.css";
import { RepoLink } from "./App.styled";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";


const provider = await detectEthereumProvider();


function App() {

  

if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  startApp(provider); // initialize your app
} else {
  console.log('Please install MetaMask!');
}

function startApp(provider) {
  // If the provider returned by detectEthereumProvider isn't the same as
  // window.ethereum, something is overwriting it – perhaps another wallet.
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
  // Access the decentralized web!
}

  return (
    <>
      <Header />
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
