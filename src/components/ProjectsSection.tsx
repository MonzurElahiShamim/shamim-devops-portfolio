import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Folder, Container } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website (Containerized + CI/CD)",
      description: "Customized and deployed a portfolio website built with Lovable. Containerized the application with Docker, deployed to AWS EC2 for production hosting, and automated builds and deployments with GitHub Actions CI/CD.",
      type: "DevOps Project",
      technologies: ["Docker", "AWS EC2", "GitHub Actions", "NGINX", "React"],
      icon: Container,
      highlights: [
        "Dockerized production build",
        "Deployed to AWS EC2",
        "Automated CI/CD with GitHub Actions",
        "Production hosting and release automation"
      ],
      company: "Personal Project"
    },
    {
      title: "Paperless Office System",
      description: "Desktop-based document management system built with Java Swing. Provides user authentication, document storage, categorization, and search — designed to replace traditional paper-based workflows with a digital, efficient solution.",
      type: "Software Development",
      technologies: ["Java", "Java Swing", "MySQL", "GUI Development", "Database Design"],
      icon: Folder,
      highlights: [
        "User authentication & access control",
        "Document storage and categorization",
        "Search across stored documents",
        "Database-driven architecture"
      ],
      company: "University Project"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my hands-on experience in DevOps, software development, and infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 mb-2">
                    <project.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{project.company}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {project.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-primary">Interested in seeing more?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check out my GitHub for additional projects and contributions to open-source initiatives.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://github.com/MonzurElahiShamim" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
