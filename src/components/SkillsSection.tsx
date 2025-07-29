import { useState, useEffect, useRef } from 'react';
import { Shield, Search, Lock, Zap, Database, Code, Network, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Penetration Testing',
      icon: Shield,
      color: 'text-primary',
      skills: [
        { name: 'Web Application Testing', level: 95 },
        { name: 'Network Penetration Testing', level: 90 },
        { name: 'Mobile Application Testing', level: 85 },
        { name: 'Wireless Security Testing', level: 80 }
      ]
    },
    {
      title: 'Threat Hunting',
      icon: Search,
      color: 'text-accent',
      skills: [
        { name: 'Advanced Persistent Threats', level: 92 },
        { name: 'Malware Analysis', level: 88 },
        { name: 'Behavioral Analysis', level: 90 },
        { name: 'Threat Intelligence', level: 87 }
      ]
    },
    {
      title: 'Security Operations',
      icon: AlertTriangle,
      color: 'text-warning',
      skills: [
        { name: 'SIEM Implementation', level: 93 },
        { name: 'Incident Response', level: 91 },
        { name: 'SOC Operations', level: 89 },
        { name: 'Security Orchestration', level: 85 }
      ]
    },
    {
      title: 'Vulnerability Management',
      icon: Lock,
      color: 'text-success',
      skills: [
        { name: 'Vulnerability Assessment', level: 94 },
        { name: 'Risk Analysis', level: 90 },
        { name: 'Patch Management', level: 87 },
        { name: 'Compliance Auditing', level: 85 }
      ]
    }
  ];

  const tools = [
    { name: 'Metasploit', category: 'Penetration Testing' },
    { name: 'Burp Suite', category: 'Web Security' },
    { name: 'Nmap', category: 'Network Scanning' },
    { name: 'Wireshark', category: 'Network Analysis' },
    { name: 'Splunk', category: 'SIEM' },
    { name: 'Nessus', category: 'Vulnerability Scanning' },
    { name: 'OWASP ZAP', category: 'Web Security' },
    { name: 'Kali Linux', category: 'Operating System' },
    { name: 'Python', category: 'Scripting' },
    { name: 'PowerShell', category: 'Scripting' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'AWS Security', category: 'Cloud Security' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise across multiple cybersecurity domains with hands-on experience in cutting-edge tools and technologies
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="cyber-border floating-card bg-card/50 hover:bg-card/70 transition-all duration-600"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${category.color.split('-')[1]}/10 flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <span className="text-xl">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-bold ${category.color}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={isVisible ? skill.level : 0}
                            className="h-2 bg-muted"
                          />
                          <div 
                            className="absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">
            Tools & <span className="text-primary">Technologies</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <Card 
                key={tool.name}
                className="cyber-border floating-card bg-card/30 hover:bg-card/60 transition-all duration-600 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {tool.category}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Security Tools Mastered</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">80+</div>
            <div className="text-sm text-muted-foreground">Vulnerabilities Found</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-success">3+</div>
            <div className="text-sm text-muted-foreground">Certifications Earned</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-warning">5+</div>
            <div className="text-sm text-muted-foreground">Projects Secured</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;