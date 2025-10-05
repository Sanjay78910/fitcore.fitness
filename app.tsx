import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Programs } from "./components/Programs";
import { Trainers } from "./components/Trainers";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Trainers />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
