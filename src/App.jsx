import { Routes, Route } from "react-router";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Contact from "../src/pages/Contact.jsx";
import Overview from "../src/pages/Overview.jsx";
import ProjectDetail from "../src/pages/ProjectDetail.jsx";
import NotFound from "../src/pages/NotFound.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Footer from "../src/components/Footer.jsx";

function App() {
    return (
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>

        <Footer />
      </>
    );
}

export default App;
