import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Explore from './components/Explore'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Login from './components/Login';
import Signup from './components/Signup';
import Loader from './components/Loader';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OurBookings from './components/OurBookings';

// Layout component to wrap all pages
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>
  },
  {
    path: '/contact',
    element: <Layout><Contact /></Layout>
  },
  {
    path: '/login',
    element: <Layout><Login /></Layout>
  },
  {
    path: '/signup',
    element: <Layout><Signup /></Layout>
  },
  {
    path: '/cart',
    element: <Layout><Cart /></Layout>
  },
  {
    path: '/explore',
    element: <Layout><Explore /></Layout>
  },
  {
    path: '/ourbookings',
    element: <Layout><OurBookings /></Layout>
  }
]);

function App() {
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setInitializing(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (initializing) {
    return <Loader />;
  }

  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
