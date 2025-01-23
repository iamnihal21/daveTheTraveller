import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";

// Static homepage components
import Hero from "./components/hero";
import Categories from "./components/catagories";
import WorldRecord from "./components/worldrecord";

// Dynamic pages
import WrMain from "./Extended/wrMain";

const App = () => {
  return (
    <Router>
      {/* Static Navbar */}
      <Header />
      <Nav />

      {/* Dynamic content area */}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <WorldRecord />
            </>
          }
        />
        {/* Dynamic routes */}
        <Route path="/worldRecordMain" element={<WrMain />} />
      </Routes>

      {/* Static Footer */}
      <Footer />
    </Router>
  );
};

export default App;
