import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Globe, 
  MapPin, 
  Phone,
  Send
} from "lucide-react";
import { HackerRankIcon, LeetCodeIcon } from "@/components/ui/custom-icons";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Sanitize data before logging to prevent log injection
      const sanitizedData = {
        firstName: data.firstName?.replace(/[\r\n]/g, '').substring(0, 100),
        lastName: data.lastName?.replace(/[\r\n]/g, '').substring(0, 100),
        email: data.email?.replace(/[\r\n]/g, '').substring(0, 100),
        subject: data.subject?.replace(/[\r\n]/g, '').substring(0, 100),
        message: data.message?.replace(/[\r\n]/g, '').substring(0, 500)
      };
      
      // Log only non-sensitive metadata for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log("Contact form submitted - Form ID:", `form_${Date.now()}`);
      }
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "monzur.elahi.shamim@gmail.com",
      href: "mailto:monzur.elahi.shamim@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "monzur-elahi-shamim",
      href: "https://www.linkedin.com/in/monzur-elahi-shamim/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "MonzurElahiShamim",
      href: "https://github.com/MonzurElahiShamim"
    },
  ];

  const customContactInfo = [
    {
      icon: <HackerRankIcon size={24} className="text-primary flex-shrink-0" />,
      label: "HackerRank",
      value: "monzureelahi032",
      href: "https://www.hackerrank.com/profile/monzureelahi032"
    },
    {
      icon: <LeetCodeIcon size={24} className="text-primary flex-shrink-0" />,
      label: "LeetCode",
      value: "ltcdr032",
      href: "https://leetcode.com/u/ltcdr032/"
    },
  ];

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's discuss DevOps opportunities, collaborate on projects, or just connect about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing DevOps best practices, cloud technologies, 
                and new opportunities. Whether you're looking for a passionate DevOps engineer 
                or want to collaborate on interesting projects, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
              {customContactInfo.map((item, index) => (
                <div key={`custom-${index}`} className="flex items-center gap-4 p-4 rounded-lg bg-card/30 border border-border/50 hover:border-primary/30 transition-colors duration-300">
                  {item.icon}
                  <div>
                    <p className="font-medium text-foreground">{item.label}</p>
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4 text-foreground">Current Status</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Open to DevOps opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Available for consultations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Interested in cloud projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      className="bg-background/50 border-border/50 focus:border-primary"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-destructive">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com"
                    className="bg-background/50 border-border/50 focus:border-primary"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="DevOps Opportunity / Project Collaboration"
                    className="bg-background/50 border-border/50 focus:border-primary"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about the opportunity or project you'd like to discuss..."
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;