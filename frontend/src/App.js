import { Container } from "react-bootstrap";
import {Outlet} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header.js'
import  Footer  from "./components/Footer.js";
import "../src/App.css"

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1 className="text-center">Welcome to Cartify</h1>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
      <ToastContainer/>
    </>
  );
};

export default App
