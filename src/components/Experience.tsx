import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">Professional journey and accomplishments</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">Web Developer Intern</CardTitle>
                  <CardDescription className="text-lg mt-1">
                    <span className="text-primary font-semibold">Cognifyz Technologies</span> • Remote
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-1">April 2025 – May 2025</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <div className="space-y-4">
                <p className="text-sm text-primary font-semibold">Tools Used: HTML, CSS, JavaScript, React.js</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-muted-foreground">
                    <span className="mr-2 text-primary mt-1">→</span>
                    <span>Engineered responsive, cross-browser compatible web applications using HTML, CSS, JavaScript, and React.js</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="mr-2 text-primary mt-1">→</span>
                    <span>Optimized front-end performance by reducing load times and improving rendering efficiency</span>
                  </li>
                  <li className="flex items-start text-muted-foreground">
                    <span className="mr-2 text-primary mt-1">→</span>
                    <span>Assisted in debugging, API integration, and implementing user-friendly interfaces</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl">Bachelor of Engineering</CardTitle>
                  <CardDescription className="text-lg mt-1">
                    <span className="text-primary font-semibold">Visvesvaraya Technological University</span>
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-1">2022 – 2026 • CGPA: 7.19 / 10</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
