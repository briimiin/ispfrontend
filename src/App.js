import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar
import Home from './components/Home';
import Packages from './components/Packages';  // Add back Packages component
// import Products from './components/Products';  // Add back Products component
import Cart from './components/Cart';
 import  SubscriptionForm from './components/SubscriptionForm';
import AdminDashboard from './components/AdminDashboard';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import InstallationProcess from './components/InstallationProcess';
import AuthForm from './components/AuthForm';
// import Profile from './components/Profile';
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname ==='/login'
  return (
    <>
      {/* Navbar remains visible on all pages */}
      { !isLoginPage && <Navbar /> }

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />  {/* Separate Packages route */}
        {/* <Route path="/products" element={<Products />} />  */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/subscribe/:packageId" element={<SubscriptionForm />} /> {/* Subscription form page */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/installationprocess" element={<InstallationProcess />} />
        <Route path="/login" element={<AuthForm />} />


      </Routes>
     {!isLoginPage && <Footer />   }     {/* <Route path="/profile" element={<Profile />} /> */}


    </>
  );
}

export default App;
