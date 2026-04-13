import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundGlow from "@/components/BackgroundGlow";

// Import data
import portfolioData from "@/data/portfolio.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col scroll-smooth relative">
      <BackgroundGlow />
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero
          name={portfolioData.name}
          title={portfolioData.title}
          summary={portfolioData.summary}
        />
        <About
          background={portfolioData.aboutBackground}
          focus={portfolioData.careerFocus}
          image={portfolioData.profileImage}
        />
        <Skills skillCategories={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience experience={portfolioData.experience} />
        <Education education={portfolioData.education} />
        <Certifications certifications={portfolioData.certifications} />
        <Contact
          email={portfolioData.email}
          github={portfolioData.github}
          linkedin={portfolioData.linkedin}
          leetcode={portfolioData.leetcode}
          whatsapp={portfolioData.whatsapp}
        />
        <Footer name={portfolioData.name} />
      </div>
    </main>
  );
}
