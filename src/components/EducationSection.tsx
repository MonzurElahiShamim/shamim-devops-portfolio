import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, School } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-secondary" id="education">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education <span className="bg-gradient-primary bg-clip-text text-transparent">& Languages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Academic background and additional information from my latest resume
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <GraduationCap className="h-6 w-6 text-primary" />
                Academic Qualification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">BSc. in Information and Communication Engineering</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <School className="h-4 w-4" />
                <span>Noakhali Science and Technology University (NSTU)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Dec 2018 – Jun 2024</span>
              </div>
              <Badge variant="outline" className="border-primary/30 text-primary">
                CGPA: 3.29 / 4.00
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <GraduationCap className="h-6 w-6 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">English:</span> Fluent / Comfortable
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Bengali:</span> Native
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
