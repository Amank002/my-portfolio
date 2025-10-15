import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-primary text-xl font-semibold animate-fade-in">
                Aman Kumar →
              </h2>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Software Developer &{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Full Stack Engineer
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                I specialize in Web Development, React.js, Python, and MySQL. 
                Passionate about building innovative solutions and creating impactful applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="/Aman_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Play className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8">
              <div>
                <h3 className="text-4xl font-bold text-primary">2+</h3>
                <p className="text-muted-foreground">Years Learning</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary">5+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Aman Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border-2 border-primary rounded-2xl p-4 shadow-xl">
                <p className="text-sm text-muted-foreground">Available for</p>
                <p className="text-lg font-bold text-primary">New Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
