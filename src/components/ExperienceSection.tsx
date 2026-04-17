import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "SSCL",
      location: "Dhaka, Bangladesh",
      duration: "Oct 2025 – Present",
      type: "Full-time",
      description: [
        "Built a Bash-based server provisioning tool that reduced manual setup effort by ~70% and standardized security hardening",
        "Automated security auditing and reporting, improving compliance visibility across environments",
        "Deployed applications in banking and cloud environments, ensuring secure and stable production releases",
        "Implemented PostgreSQL HA with Patroni, improving database availability and failover reliability",
        "Designed GitLab CI/CD pipelines that reduced deployment time by ~60%",
        "Set up monitoring stack with Uptime Kuma and Beszel to reduce incident detection time and improve observability",
        "Secured NGINX with Fail2Ban, mitigating brute-force and unauthorized access attempts"
      ],
      technologies: ["Bash", "PostgreSQL", "Patroni", "GitLab CI/CD", "NGINX", "Fail2Ban", "Uptime Kuma", "Beszel", "Linux"]
    },
    {
      title: "Intern DevOps & Data Platform Engineer",
      company: "Datafluent BD",
      location: "Bangladesh",
      duration: "Jan ’25 – Jun ’25",
      type: "Internship",
      description: [
        "Administered PostgreSQL (roles, tuning, extensions), improving reliability and performance",
        "Migrated workloads to OCI with minimal downtime, ensuring service continuity",
        "Containerized applications using Docker, improving deployment consistency",
        "Installed and upgraded Oracle Database 12c to Oracle Database 19c on OEL 7.9",
        "Designed CDB and non-CDB architectures to support flexible deployments",
        "Enabled Archivelog, Flashback, and FDA for recovery and CDC capability",
        "Configured OpenBao DB Secrets Engine for PostgreSQL to secure credential management"
      ],
      technologies: ["PostgreSQL", "Oracle DB", "OCI", "Docker", "OpenBao", "Linux"]
    },
    {
      title: "Software Developer",
      company: "University Project",
      location: "Academic",
      duration: "Academic Project",
      type: "Project",
      description: [
        "Developed 'Paperless Office' — a comprehensive Java desktop application",
        "Automated document creation, review, and distribution workflows",
        "Implemented user authentication and role-based access control",
        "Created an intuitive GUI using Java Swing",
        "Integrated MySQL for persistent data storage"
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
            My hands-on experience in DevOps engineering and software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
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
