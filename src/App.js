import  { Fragment } from 'react';
import './App.css';
import Layouts from './components/Layout.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Booking from './pages/Booking.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';




const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layouts />}>
    
    <Route index path='/Home' element={<Home />} />
    <Route path='/Contact' element={ <Contact/>} />
    <Route path='/Booking' element={ <Booking/>} />
    <Route path='/Register' element={ <Register/>} />
    <Route path='/Login' element={ <Login/>} />
  </Route>
))






const App=()=>{
  return (
    <Fragment>
    <RouterProvider router={routes}/>
    </Fragment>

  );
}

export default App;
