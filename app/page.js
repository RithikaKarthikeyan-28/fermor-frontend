import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Progress from "@/components/Progress";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#171A17] flex flex-col selection:bg-[#DDEBE3] selection:text-[#174D3A]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Journey />
        <Progress />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
