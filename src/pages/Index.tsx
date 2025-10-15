import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Experience />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground border-t border-primary/10">
        <p>&copy; 2025 Aman Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
