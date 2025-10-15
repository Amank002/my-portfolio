import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's collaborate on your next project</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:amankum2626@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">amankum2626@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+918051093538"
                className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">+91-8051093538</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-semibold text-foreground">Connect with me</p>
                </div>
              </a>

              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-semibold text-foreground">View my code</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              asChild
            >
              <a href="mailto:amankum2626@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send me an email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
