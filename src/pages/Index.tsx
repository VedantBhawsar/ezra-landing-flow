
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import ProductValue from "@/components/ProductValue";
import KeyBenefits from "@/components/KeyBenefits";
import Testimonials from "@/components/Testimonials";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ezra-theme">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
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
    </ThemeProvider>
  );
};

export default Index;
