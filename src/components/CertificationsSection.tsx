import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Cloud, 
  Shield, 
  Database, 
  Server,
  CheckCircle,
  Calendar,
  ExternalLink
} from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      icon: Cloud,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      status: "In Progress",
      date: "Target: Q2 2024",
      color: "text-orange-400",
      statusColor: "bg-blue-500/20 text-blue-400",
      description: "Designing distributed systems on AWS platform"
    },
    {
      icon: Server,
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      status: "Planning",
      date: "Target: Q3 2024",
      color: "text-blue-400",
      statusColor: "bg-purple-500/20 text-purple-400",
      description: "Container orchestration and management"
    },
    {
      icon: Shield,
      title: "CompTIA Security+",
      issuer: "CompTIA",
      status: "Interested",
      date: "Future Goal",
      color: "text-red-400",
      statusColor: "bg-gray-500/20 text-gray-400",
      description: "Cybersecurity fundamentals and best practices"
    },
    {
      icon: Database,
      title: "PostgreSQL Professional",
      issuer: "PostgreSQL Certification",
      status: "Considering",
      date: "Future Goal",
      color: "text-green-400",
      statusColor: "bg-gray-500/20 text-gray-400",
      description: "Advanced database administration and optimization"
    }
  ];

  const achievements = [
    {
      title: "Self-Taught DevOps Engineer",
      description: "Learned containerization, cloud infrastructure, and automation through hands-on projects"
    },
    {
      title: "Open Source Contributor",
      description: "Actively contributing to DevOps tooling and infrastructure projects"
    },
    {
      title: "Practical Experience",
      description: "Built and deployed multiple containerized applications with CI/CD pipelines"
    }
  ];

  return (
    <section className="py-20 px-6" id="certifications">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Learning Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey towards professional certifications and continuous learning in DevOps
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <cert.icon className={`h-6 w-6 ${cert.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`} />
                    <div>
                      <h3 className="text-foreground text-base font-semibold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">{cert.issuer}</p>
                    </div>
                  </div>
                  <Badge className={`${cert.statusColor} border-0 text-xs`}>
                    {cert.status}
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{cert.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Current Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col items-center p-6 rounded-lg bg-card/30 border border-border/50 text-center">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h4 className="font-semibold mb-2 text-foreground">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="p-8 rounded-lg bg-gradient-secondary border border-border/50">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4 text-foreground">Continuous Learning Philosophy</h3>
            <p className="text-muted-foreground">
              I believe in learning through practical application. While working towards formal certifications, 
              I'm building real-world experience through hands-on projects, open source contributions, and 
              staying current with industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;