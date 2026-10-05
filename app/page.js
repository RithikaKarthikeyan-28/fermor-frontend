import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GoalSelector from "@/components/GoalSelector";
import Journey from "@/components/Journey";
import FutureVisualization from "@/components/FutureVisualization";
import Progress from "@/components/Progress";
import NextStep from "@/components/NextStep";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F2] text-[#171A17] flex flex-col selection:bg-[#DDEBE3] selection:text-[#174D3A]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <GoalSelector />
        <Journey />
        <FutureVisualization />
        <Progress />
        <NextStep />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
