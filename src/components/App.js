/*********************************************************************************
 * WEB422 – Assignment 2-4
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Bair Suimaliev Student ID: 159350198 Date: 2022/03/14
 *
 * Online (Netlify) URL: 
 *
 ********************************************************************************/
import "../assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import PropertyListingPage from "./Pages/PropertyListingPage";
import BestsellersPage from "./Pages/BestsellersPage";
import PropertyListingByTypePage from "./Pages/PropertyListingByTypePage";
import PropertyPage from "./Pages/PropertyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="customer/register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="property" element={<PropertyListingPage />} />
        <Route path="property/bestsellers" element={<BestsellersPage />} />
        <Route path="property/types/:type" element={<PropertyListingByTypePage />} />
        <Route path="property/:id" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
