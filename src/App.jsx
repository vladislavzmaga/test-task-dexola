import "./App.css";
import { RepoLink } from "./App.styled";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";

function App() {
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
