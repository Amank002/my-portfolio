import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Python Programming Certificate",
      issuer: "Udemy",
      year: "2025",
      description: "Completed comprehensive Python programming course covering fundamentals, data structures, and advanced concepts.",
      icon: "🐍"
    },
    {
      title: "Microsoft Azure AI Essentials",
      issuer: "LinkedIn Learning",
      year: "2024",
      description: "Professional certification in Azure AI services, machine learning workloads, and cloud-based AI solutions.",
      icon: "☁️"
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Certificates & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">Professional certifications and continuous learning</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 flex items-start justify-between gap-2">
                      <span>{cert.title}</span>
                      <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-primary font-semibold">{cert.issuer}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-primary font-medium">Verified Certificate</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
