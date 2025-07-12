import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, Database, Container } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "PRO-CG Containerization",
      description: "Containerized a complex web application using Docker with a sophisticated 6-container setup managed through Docker Compose. Implemented scalable architecture with proper service separation and networking.",
      type: "DevOps Project",
      technologies: ["Docker", "Docker Compose", "PostgreSQL", "Linux", "Networking"],
      icon: Container,
      highlights: [
        "6-container multi-service architecture",
        "Production-ready Docker Compose setup",
        "Service orchestration and networking",
        "Database integration with PostgreSQL"
      ],
      company: "DatafluentBD"
    },
    {
      title: "Paperless Office System",
      description: "Comprehensive Java desktop application that automates document creation, review, and distribution workflows. Features modern GUI design and robust database integration.",
      type: "Software Development",
      technologies: ["Java", "Java Swing", "MySQL", "GUI Development", "Database Design"],
      icon: Folder,
      highlights: [
        "Automated document workflows",
        "User management & role-based access",
        "Modern Java Swing interface",
        "Database-driven architecture"
      ],
      company: "University Project"
    },
    {
      title: "TimescaleDB Integration",
      description: "Worked extensively with PostgreSQL extensions including pg_timeseries and TimescaleDB for efficient time-series data management and analytics.",
      type: "Database Engineering",
      technologies: ["PostgreSQL", "TimescaleDB", "pg_timeseries", "Data Analytics", "SQL"],
      icon: Database,
      highlights: [
        "Time-series data optimization",
        "PostgreSQL extension integration",
        "Performance tuning",
        "Data analytics workflows"
      ],
      company: "DatafluentBD"
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
          {projects.slice(0, 2).map((project, index) => (
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

        {/* Third project as full width */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 mb-2">
                <Database className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <CardTitle className="text-xl text-foreground">TimescaleDB Integration</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">DatafluentBD</p>
                </div>
              </div>
              <Badge variant="outline" className="border-primary/30 text-primary">
                Database Engineering
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Worked extensively with PostgreSQL extensions including pg_timeseries and TimescaleDB for efficient time-series data management and analytics.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "TimescaleDB", "pg_timeseries", "Data Analytics", "SQL"].map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
              <ul className="space-y-2">
                {["Time-series data optimization", "PostgreSQL extension integration", "Performance tuning", "Data analytics workflows"].map((highlight, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

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