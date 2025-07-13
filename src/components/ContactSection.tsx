import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Globe, 
  MapPin, 
  Phone,
  Send
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "monzur.elahi.shamim@gmail.com",
      href: "mailto:monzur.elahi.shamim@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "monzur-elahi-shamim",
      href: "https://www.linkedin.com/in/monzur-elahi-shamim/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "MonzurElahiShamim",
      href: "https://github.com/MonzurElahiShamim"
    },
  ];

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss DevOps opportunities, collaborate on projects, or just connect about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing DevOps best practices, cloud technologies, 
                and new opportunities. Whether you're looking for a passionate DevOps engineer 
                or want to collaborate on interesting projects, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4 text-foreground">Current Status</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Open to DevOps opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Available for consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Interested in cloud projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john.doe@example.com"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="DevOps Opportunity / Project Collaboration"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about the opportunity or project you'd like to discuss..."
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;