import React from 'react';
import Navbar from './comonents/Navbar.jsx';
import Home from "./comonents/Home.jsx";
import Footer from "./comonents/Footer.jsx";
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Blogs from "../src/pages/Blogs.jsx";
import About from "../src/pages/About.jsx";
import Login from "../src/pages/Login..jsx";
import Register from "../src/pages/Register.jsx";
import Dashboard from "../src/pages/Dashboard.jsx";
import Contact from "../src/pages/Contact.jsx";
import Creators from "../src/pages/Creators.jsx";
import { useAuth } from './context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import UpdateBlog from './dashboard/UpdateBlog.jsx';
import Detail from './pages/Detail.jsx';
// import NotFound from './pages/Notfound';

function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/Dashboard", "/login", "/register"].includes(location.pathname);
  const { blogs, isAuthenticated } = useAuth();
  let token = localStorage.getItem("jwt");
  // console.log("App_blogs",blogs);
  // console.log("App_isAuthenticated",isAuthenticated);
  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route exact path="/" element={isAuthenticated ===true?<Home/>:<Navigate to={"/login"}/>} />
        
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/creators" element={<Creators />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/blog/:id" element={<Detail />} />
        <Route exact path="/blog/update/:id" element={<UpdateBlog />} />
{/*         <Route path="*" element={<NotFound/>} /> */}
      </Routes>
      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
