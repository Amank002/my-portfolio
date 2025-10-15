import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Palette, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "Java", "HTML", "CSS", "React.js", "JavaScript"]
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MySQL", "Database Design", "Query Optimization"]
    },
    {
      icon: Palette,
      title: "Tools & Technologies",
      skills: ["Git", "VS Code", "PyCharm", "Advanced MS Excel"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-muted-foreground flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
