import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Code, Server, Cloud, Database } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const highlights = [
    {
      icon: Server,
      title: "Automation & IaC",
      description: "Bash, Ansible, and Terraform for provisioning and hardening"
    },
    {
      icon: Database,
      title: "PostgreSQL HA",
      description: "Patroni-based high availability and database tuning"
    },
    {
      icon: Cloud,
      title: "Cloud & Containers",
      description: "AWS, OCI, Docker, and Kubernetes (basic) deployments"
    },
    {
      icon: Code,
      title: "CI/CD & Security",
      description: "GitLab CI, GitHub Actions, Trivy, SonarQube, Fail2Ban"
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
            I'm a DevOps Engineer focused on automation, PostgreSQL HA, and secure infrastructure deployment.
            I enjoy reducing manual operations through tooling and improving reliability across banking and cloud environments.
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
                I started my journey as a software developer, building a Java Swing "Paperless Office"
                system during university to automate document workflows.
              </p>
              <p>
                At Datafluent BD, I moved into DevOps and data platform engineering — administering
                PostgreSQL, migrating workloads to OCI, containerizing applications with Docker, and
                securing credentials with OpenBao.
              </p>
              <p>
                Currently at SSCL, I build automation tooling for server provisioning and security
                auditing, deploy banking and cloud workloads, run PostgreSQL HA with Patroni, and
                design GitLab CI/CD pipelines with monitoring via Uptime Kuma and Beszel.
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