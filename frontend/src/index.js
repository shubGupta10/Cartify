import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./store.js"
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homescreen from './screens/Homescreen';
import ProductPages from './screens/ProductPages';
import CartScreen from './screens/CartScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<App/>}>
      <Route index={true} path="/" element={<Homescreen/>} />
      <Route path='/product/:id' element={<ProductPages/>} />
      <Route path='/cart' element={<CartScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
