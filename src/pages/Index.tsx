
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import ProductValue from "@/components/ProductValue";
import KeyBenefits from "@/components/KeyBenefits";
import Testimonials from "@/components/Testimonials";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Stats />
      <ProductValue />
      <KeyBenefits />
      <Testimonials />
      <DemoForm />
      <Footer />
    </div>
  );
};

export default Index;
