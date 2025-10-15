import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            <span className="text-foreground">Aman</span>
            <span className="text-primary">.</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Experience
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
