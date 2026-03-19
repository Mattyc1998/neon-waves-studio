import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import CurrentOffers from "@/components/home/CurrentOffers";
import OpeningHours from "@/components/home/OpeningHours";
import FAQSection from "@/components/home/FAQSection";
import BookCTA from "@/components/home/BookCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutTeaser />
        <ServicesGrid />
        <CurrentOffers />
        <OpeningHours />
        <FAQSection />
        <BookCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
