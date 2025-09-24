import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Server, 
  Cloud, 
  Database, 
  Network, 
  Settings,
  GitBranch,
  Monitor
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python (Intermediate)", "C", "C++", "HTML", "Bash"],
      color: "text-blue-400"
    },
    {
      icon: Server,
      title: "DevOps & Infrastructure",
      skills: ["Docker", "Docker Compose", "Ansible", "GitHub Actions", "Linux", "Nginx", "HAProxy", "Envoy Proxy"],
      color: "text-green-400"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS (EC2, S3)", "Oracle Cloud Infrastructure", "Cloud Architecture"],
      color: "text-purple-400"
    },
    {
      icon: Database,
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "Oracle DB", "Redis/Valkey"],
      color: "text-orange-400"
    },
    {
      icon: Network,
      title: "Networking & Security",
      skills: ["Networking", "CCNA basics", "OpenBao", "Security Best Practices"],
      color: "text-red-400"
    },
    {
      icon: GitBranch,
      title: "Version Control & Tools",
      skills: ["Git", "GitHub", "Obsidian"],
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <category.icon className={`h-6 w-6 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notable Skills Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/30 border border-border/50">
              <Monitor className="h-12 w-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2 text-foreground">Containerization</h4>
              <p className="text-sm text-muted-foreground text-center">
                Expert in Docker and Docker Compose for scalable application deployment
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/30 border border-border/50">
              <Cloud className="h-12 w-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2 text-foreground">Cloud Infrastructure</h4>
              <p className="text-sm text-muted-foreground text-center">
                Hands-on experience with AWS and Oracle Cloud services
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/30 border border-border/50">
              <Settings className="h-12 w-12 text-primary mb-4" />
              <h4 className="font-semibold mb-2 text-foreground">Automation</h4>
              <p className="text-sm text-muted-foreground text-center">
                Passionate about automating workflows and infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;