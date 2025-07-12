import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "DevOps & Data Platform Intern",
      company: "DatafluentBD",
      location: "Bangladesh",
      duration: "6 months",
      type: "Internship",
      description: [
        "Containerized the PRO-CG web application using Docker with a sophisticated 6-container setup managed through Docker Compose",
        "Worked extensively with PostgreSQL extensions including pg_timeseries and TimescaleDB for time-series data management",
        "Gained hands-on experience with production-level containerization and orchestration",
        "Collaborated with senior engineers on infrastructure automation and deployment strategies"
      ],
      technologies: ["Docker", "Docker Compose", "PostgreSQL", "TimescaleDB", "pg_timeseries", "Linux"]
    },
    {
      title: "Software Developer",
      company: "University Project",
      location: "Academic",
      duration: "Academic Project",
      type: "Project",
      description: [
        "Developed 'Paperless Office' - a comprehensive Java desktop application",
        "Automated document creation, review, and distribution workflows",
        "Implemented user management and role-based access control",
        "Created intuitive GUI using Java Swing with modern design principles",
        "Integrated database connectivity for persistent data storage"
      ],
      technologies: ["Java", "Java Swing", "MySQL", "Software Architecture", "GUI Development"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My hands-on experience in software development and DevOps engineering
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;