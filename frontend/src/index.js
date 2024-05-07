import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./store.js"
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivateRoute from './components/PrivateRoute.jsx';
import Homescreen from './screens/Homescreen';
import ProductPages from './screens/ProductPages';
import CartScreen from './screens/CartScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ShippingScreen from './screens/ShippingScreen.jsx';
import PaymentScreen from './screens/PaymentScreen.jsx';
import PlaceOrderScreen from './screens/PlaceOrderScreen.jsx';
import OrderScreen from './screens/OrderScreen.jsx';
import PaymentDone from './screens/PaymentDone.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import OrderListScreen from './screens/OrderListScreen.jsx';
import ProductListScreen from './screens/ProductListScreen.jsx';
import ProductEditScreen from './screens/ProductEditScreen.jsx';
import UserListScreen from './screens/UserListScreen.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<App/>}>
      <Route index={true} path="/" element={<Homescreen/>} />
      <Route path='/product/:id' element={<ProductPages/>} />
      <Route path='/cart' element={<CartScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      
      <Route path='' element={<PrivateRoute/>}>
         <Route path='/shipping' element={<ShippingScreen/>}/>  
         <Route path='/payment' element={<PaymentScreen/>}/>
         <Route path='placeorder' element={<PlaceOrderScreen/>}/>
         <Route path='/order/:id' element={<OrderScreen/>}/>
         <Route path='paymentdone' element={<PaymentDone/>}/>
         <Route path='/profile' element={<ProfileScreen/>}/>
      </Route>

      <Route path='' element={<AdminRoute/>}>
         <Route path='/admin/orderlist' element={<OrderListScreen/>}/>  
         <Route path='/admin/productlist' element={<ProductListScreen/>}/>
         <Route path='/admin/product/:id/edit' element={<ProductEditScreen/> }/>
         <Route path='/admin/userlist' element={<UserListScreen/>}/>
      </Route>
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
