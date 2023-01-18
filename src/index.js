import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import DevComponents from './pages/dev-components'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import MenuItem from "./components/Header/MenuItem";
import Home from "./pages/Home";
import Dropdown from "./components/Dropdown";
import About from "./pages/About";
import Footer from "./components/Footer";
import Error404 from "./pages/404";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header>
              <MenuItem path={"/"} name={"Home"}/>
              <MenuItem path={"about"} name={"A propos"}/>
              <MenuItem path={"dev"} name={"Dev"}/>
          </Header>
          <Routes>
              <Route path={"/"} index element={<Home/>}/>
              <Route path={"/about"} index element={<About/>}/>
              <Route path={"/dev"} index element={<DevComponents/>}/>
              <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer/>
      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
