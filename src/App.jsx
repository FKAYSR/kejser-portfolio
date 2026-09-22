import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Contact from "../src/pages/Contact.jsx";
import Overview from "../src/pages/Overview.jsx";
import ProjectDetail from "../src/pages/ProjectDetail.jsx";
import NotFound from "../src/pages/NotFound.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Footer from "../src/components/Footer.jsx";
import ScrollToTop from "../src/components/ScrollToTop.jsx";
import ProgressBanner from "../src/components/ProgressBanner.jsx";

function App() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <ProgressBanner />
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isContactPage && <Footer />}
    </>
  );
}

export default App;
