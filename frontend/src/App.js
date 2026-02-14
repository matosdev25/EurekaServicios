import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing Page Components
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import TuSocioConfiable from "./components/landing/TuSocioConfiable";
import ProblemasSection from "./components/landing/ProblemasSection";
import PersonalSection from "./components/landing/PersonalSection";
import BricolajeSection from "./components/landing/BricolajeSection";
import ReviewsSection from "./components/landing/ReviewsSection";
import CTASection from "./components/landing/CTASection";
import Footer from "./components/landing/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-eureka-bg">
      <Navbar />
      <main>
        <Hero />
        <TuSocioConfiable />
        <ProblemasSection />
        <PersonalSection />
        <BricolajeSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
