import { Container } from "react-bootstrap";
import Header from './components/Header.js'
import  Footer  from "./components/Footer.js";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Cartify</h1>
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default App
