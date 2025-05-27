import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Login from './components/Login';
import Signup from './components/Signup';
import Loader from './components/Loader';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar/><Home /></>
  },
  {
    path: '/About',
    element: <><Navbar/> <About/> </>
  },
  {
    path : '/Contact',
    element :<><Navbar/> <Contact/> <Footer/></> 
  },
  {
    path: '/login',
    element: <><Navbar/><Login/><Footer/></>
  },
  {
    path: '/signup',
    element: <><Navbar/><Signup/><Footer/></>
  },
  {
    path: '/cart',
    element: <><Navbar/><Cart/><Footer/></>
  }
])

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App
