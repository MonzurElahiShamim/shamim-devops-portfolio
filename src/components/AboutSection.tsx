import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Code, Server, Cloud, Database } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Software Development",
      description: "Java desktop application development with automated workflows"
    },
    {
      icon: Server,
      title: "Containerization",
      description: "Docker & Docker Compose multi-container setups"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "AWS & Oracle Cloud Infrastructure experience"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "PostgreSQL, MySQL, Redis, TimescaleDB expertise"
    }
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated DevOps Engineer with a passion for automating processes and building robust infrastructure. 
            My journey started with software development and evolved into the exciting world of DevOps and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex flex-col items-center md:items-start">
            <Avatar className="w-32 h-32 mb-6 ring-4 ring-primary/20">
              <AvatarImage src={profilePhoto} alt="Monzur Elahi Shamim" />
              <AvatarFallback className="text-2xl">MS</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                During my university years, I developed a comprehensive Java desktop application called 
                "Paperless Office" that revolutionized document management by automating creation, review, 
                and distribution processes.
              </p>
              <p>
                At DatafluentBD, I gained hands-on experience in DevOps and Data Platform engineering, 
                where I successfully containerized the PRO-CG web application using a sophisticated 
                6-container setup managed through Docker Compose.
              </p>
              <p>
                I'm passionate about note-taking and knowledge management using Obsidian, which helps 
                me stay organized and continuously learn in this rapidly evolving field.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;