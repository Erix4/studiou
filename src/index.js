//this file controlls the highest level rendering and routing, and shouldn't need to be edited often


//import libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

//import pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";
import NoPage from "./pages/NoPage";

//render website
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>{/* This part handles the routing of multiple pages */}
      <Routes>
        <Route path="/" element={<Layout/>}> {/* Use the / for layout which is consistent between pages */}
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="join" element={<Join/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
