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
  ExternalLink,
  Settings,
  FileText,
  Link
} from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      icon: Cloud,
      title: "AWS Free Tier Hands-on Projects",
      issuer: "Amazon Web Services",
      status: "In Progress",
      date: "2025",
      color: "text-orange-400",
      statusColor: "bg-blue-500/20 text-blue-400",
      description: "Practical AWS experience with EC2, S3, and other core services",
      link: "https://aws.amazon.com/free/",
      mediaFile: null
    },
    {
      icon: Award,
      title: "GitHub Foundations Certification",
      issuer: "GitHub",
      status: "In Progress",
      date: "2025",
      color: "text-purple-400",
      statusColor: "bg-blue-500/20 text-blue-400",
      description: "Git version control and collaborative development workflows",
      link: "https://github.com/certifications",
      mediaFile: null
    },
    {
      icon: Server,
      title: "NDG Linux Essentials",
      issuer: "Cisco Networking Academy",
      status: "Completed",
      date: "2024",
      color: "text-green-400",
      statusColor: "bg-green-500/20 text-green-400",
      description: "Linux fundamentals and command-line proficiency",
      link: "https://www.netacad.com/courses/os-it/ndg-linux-essentials",
      mediaFile: "https://drive.google.com/file/d/10Nq4Qd_L9Rir_OJ3uFpwDUtaz9YVytKS/view?usp=drive_link"
    },
    {
      icon: Database,
      title: "Git Fundamentals (Level 1 & 2)",
      issuer: "KodeKloud",
      status: "Completed",
      date: "2025",
      color: "text-blue-400",
      statusColor: "bg-green-500/20 text-green-400",
      description: "Advanced Git workflows and branching strategies",
      link: "https://kodekloud.com/courses/git-for-beginners/",
      mediaFile: "https://engineer.kodekloud.com/certificate-verification/88be5cd0-7d66-4a57-b414-4671eb3e07ec"
    },
    {
      icon: Settings,
      title: "Ansible Fundamentals (Level 1)",
      issuer: "KodeKloud",
      status: "Completed",
      date: "2025",
      color: "text-red-400",
      statusColor: "bg-green-500/20 text-green-400",
      description: "Infrastructure automation and configuration management",
      link: "https://kodekloud.com/courses/ansible-for-absolute-beginners/",
      mediaFile: "https://engineer.kodekloud.com/certificate-verification/b01e8533-091c-4337-bf03-d46ca4c7df30"
    },
    {
      icon: Award,
      title: "100 Days of DevOps Challenge",
      issuer: "KodeKloud",
      status: "In Progress",
      date: "2025",
      color: "text-yellow-400",
      statusColor: "bg-blue-500/20 text-blue-400",
      description: "Comprehensive hands-on DevOps learning challenge covering various tools and practices",
      link: "https://kodekloud.com/100-days-of-devops/",
      mediaFile: null
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
                
                {/* Certificate Links and Media */}
                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      <Link className="h-3 w-3" />
                      View Details
                    </a>
                  )}
                  {cert.mediaFile && (
                    <a 
                      href={cert.mediaFile} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      <FileText className="h-3 w-3" />
                      Certificate
                    </a>
                  )}
                  {!cert.link && !cert.mediaFile && cert.status === "Completed" && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <FileText className="h-3 w-3" />
                      Certificate available on request
                    </span>
                  )}
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