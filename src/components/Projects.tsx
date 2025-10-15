import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Airline Reservation & Database Management System",
      period: "March 2024 - September 2024",
      description: "Engineered a full-stack Airline Reservation and Database Management System optimizing ticket booking workflows and implementing secure authentication to enhance data integrity and user experience.",
      features: [
        "User authentication & authorization",
        "Real-time ticket booking",
        "Database management with MySQL",
        "Responsive design",
        "Session management & input validation"
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      highlights: [
        "Developed user-friendly interfaces for booking, managing, and canceling airline tickets",
        "Integrated session management and input validation to prevent unauthorized access",
        "Improved usability and customer satisfaction"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Innovative solutions built with modern technologies</p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-primary">{project.period}</CardDescription>
                  </div>
                  <ExternalLink className="h-6 w-6 text-primary" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <span className="mr-2 text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Project Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-muted-foreground">
                        <span className="mr-2 text-primary mt-1">→</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
