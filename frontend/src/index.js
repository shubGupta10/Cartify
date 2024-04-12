import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homescreen from './screens/Homescreen';
import ProductPages from './screens/ProductPages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<App/>}>
      <Route index={true} path="/" element={<Homescreen/>} />
      <Route path='/product/:id' element={<ProductPages/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
