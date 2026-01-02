import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { LeaderboardSection } from "@/components/sections/LeaderboardSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CollabSection } from "@/components/sections/CollabSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="leaderboard">
         
        </section>
        
        <section id="timeline">
          <TimelineSection />
        </section>
        
        <section id="collab">
          <CollabSection />
        </section>
        
        <section id="faq">
          <FAQSection />
        </section>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
