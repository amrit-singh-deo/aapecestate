import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, ScrollToTop } from "./components";
import { HomePage, PropertyPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/properties" Component={PropertyPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
