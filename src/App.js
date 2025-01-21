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
import DesignPage from "./Extended/catagoriesExt";
import AdvertisingPage from "./Extended/Advertising";
import PhotographyPage from "./Extended/catagoriesExt";
import DigitalPage from "./Extended/Digital";
import PodcastsPage from "./Extended/podcasts";
import AboutPage from "./Extended/About";
import ContactPage from "./Extended/contact";
import Downloader from "./components/downloader";

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
        <Route path="/design" element={<DesignPage />} />
        <Route path="/advertising" element={<AdvertisingPage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/digital" element={<DigitalPage />} />
        <Route path="/podcasts" element={<PodcastsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/downloader" element={<Downloader />} />
      </Routes>

      {/* Static Footer */}
      <Footer />
    </Router>
  );
};

export default App;
