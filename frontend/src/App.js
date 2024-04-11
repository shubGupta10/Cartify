import { Container } from "react-bootstrap";
import Header from './components/Header.js'
import  Footer  from "./components/Footer.js";
import Homescreen from "./screens/Homescreen.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1 className="text-center">Welcome to Cartify</h1>
          <Homescreen/>
        </Container>
      </main>
      <Footer/>
    </>
  );
};

export default App
