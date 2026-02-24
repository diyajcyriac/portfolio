import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroCard from "../components/IntroCard";
import ExperienceCard from "../components/Experience";
import Project from "../components/Project";
import StrengthsCard from "../components/Strength";
import ContactSection from "../components/Contact";
import SkillSection from "../components/Skill";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroCard />
      <ExperienceCard />
      <SkillSection />
      <Project />
      <StrengthsCard />
      <ContactSection />
    </>
  );
}

export default Home;
