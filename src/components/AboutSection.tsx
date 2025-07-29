import { Shield, Target, Eye, Zap, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security Expert",
      description:
        "Advanced expertise in cybersecurity frameworks and threat analysis",
    },
    {
      icon: Target,
      title: "Penetration Testing",
      description:
        "Experienced in ethical hacking and vulnerability assessments",
    },
    {
      icon: Eye,
      title: "Threat Hunter",
      description:
        "Proactive threat detection and incident response specialist",
    },
    {
      icon: Zap,
      title: "SIEM Specialist",
      description:
        "Expert in security information and event management systems",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering top-tier security solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Strong teamwork and communication in cross-functional environments",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">About</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cybersecurity professional dedicated to protecting digital assets
            and building secure systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Securing the Digital World, One System at a Time
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                
                I'm{" "}
                <span className="text-primary font-semibold">
                  Pratham Deora
                </span>
                , a passionate cybersecurity professional based in Mumbai. With{" "}
                <span className="font-semibold">
                  1 Year of hands-on experience
                </span>
                , I'm on a mission to grow in both offensive (Red Team) and
                defensive (Blue Team) security domains.
                <br />
                <br />
                On the{" "}
                <span className="text-success font-semibold">
                  Blue Team
                </span>{" "}
                front, I'm gaining experience in SOC monitoring, log analysis,
                threat hunting, and defensive strategies using SIEM tools and
                threat intelligence to detect and respond to threats in
                real-time.
                <br />
                <br />
                On the{" "}
                <span className="text-accent font-semibold">Red Team</span>{" "}
                side, I'm diving deep into penetration testing, ethical hacking,
                and vulnerability exploitation—honing my skills to simulate
                real-world attacks using platforms like{" "}
                <span className="italic">TryHackMe</span> and tools like Nmap,
                Burp Suite, and Metasploit.
                <br />
                <br />
                I'm actively building a strong foundation in{" "}
                <span className="font-semibold">
                  network security, vulnerability assessment, and security
                  fundamentals
                </span>
                . Whether it's staying updated with the latest cybersecurity
                trends or experimenting with open-source security tools, I’m
                constantly evolving with the ever-changing threat landscape.
                <br />
                <br />
                When I’m not studying or hacking in a lab environment, I’m
                networking with the cybersecurity community to learn from
                experienced professionals and grow through collaboration.
              </p>

              {/* <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Pratham Deora, a passionate cybersecurity professional based in{' '}
                <span className="text-primary font-semibold">Mumbai</span>. With 6 months of hands-on experience 
                in the cybersecurity domain, I'm eager to specialize in penetration testing, threat hunting, 
                and vulnerability analysis.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently developing my skills across various security domains including{' '}
                <span className="text-accent font-semibold">network security</span>,{' '}
                <span className="text-success font-semibold">vulnerability assessment</span>, and{' '}
                <span className="text-warning font-semibold">security fundamentals</span>.
                I'm constantly learning and evolving with the threat landscape to build strong security foundations.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not studying security concepts or practicing on platforms like TryHackMe, you'll find me 
                exploring open-source security tools, reading about cybersecurity trends, 
                and connecting with the security community to learn from experienced professionals.
              </p> */}
            </div>

            {/* Contact Info */}
            <div className="bg-card/50 rounded-lg p-6 cyber-border">
              <h4 className="text-lg font-semibold mb-4 text-primary">
                Quick Contact
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="text-foreground font-medium">Email:</span>{" "}
                  pdeora122@gmail.com
                </p>
                <p>
                  <span className="text-foreground font-medium">Phone:</span>{" "}
                  +91 800 598 7462
                </p>
                <p>
                  <span className="text-foreground font-medium">Location:</span>{" "}
                  Mumbai, India
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="cyber-border floating-card bg-card/50 hover:bg-card/70 transition-all duration-600"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Core <span className="text-primary">Values</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="cyber-border floating-card  bg-card/50 hover:bg-card/70 transition-all duration-600"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
