import Header from "./components/Layout/Header/Header.jsx";

import Navbar from "./components/Layout/Header/Navbar.jsx";
import HeroSection from "./components/Section/HeroSection.jsx";
import TrustedBySection from "./components/Section/TrustedBySection.jsx";
import Features from "./components/Section/Features.jsx";
import Chooseus from "./components/Section/Chooseus.jsx";
import AboutSection from "./components/Section/AboutSection.jsx";
import VideoSection from "./components/Section/VideoSection.jsx";
import BlogSection from "./components/Section/BlogSection.jsx";
import Testimonials from "./components/Section/Testimonials.jsx";
import FAQs from "./components/Section/Faqs.jsx";
import Store from "./components/Section/Store/Store.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import LogoSection from "./components/Section/LogoSection.jsx";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <Features />
      <Chooseus />
      <AboutSection />
      <VideoSection />
     
      <BlogSection />
      <Testimonials />
      <FAQs />
      <Store />
      <Footer />
    </div>
  );
}

export default App;
