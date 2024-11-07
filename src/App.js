import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import RegistrationPage from "./pages/registration/registration";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

