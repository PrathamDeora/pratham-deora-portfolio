import { ExternalLink, Github, Shield, Lock, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Home Network Security Setup',
      description: 'Configured a secure home network environment with firewall rules, VPN setup, and network monitoring to understand fundamental security concepts.',
      category: 'Network Security',
      technologies: ['pfSense', 'OpenVPN', 'Wireshark', 'Network Monitoring'],
      icon: Shield,
      status: 'Completed',
      impact: 'Enhanced network security',
      color: 'text-primary'
    },
    {
      title: 'Vulnerability Assessment Lab',
      description: 'Built a virtual lab environment to practice vulnerability scanning and assessment techniques using various security tools.',
      category: 'Vulnerability Assessment',
      technologies: ['VirtualBox', 'Nessus', 'OpenVAS', 'Linux'],
      icon: Search,
      status: 'Completed',
      impact: 'Hands-on security experience',
      color: 'text-accent'
    },
    {
      title: 'Security Monitoring Dashboard',
      description: 'Created a basic security monitoring dashboard to track and analyze network traffic patterns and potential security events.',
      category: 'Security Monitoring',
      technologies: ['ELK Stack', 'Python', 'Log Analysis', 'Visualization'],
      icon: Lock,
      status: 'In Progress',
      impact: 'Real-time threat visibility',
      color: 'text-success'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-success/10 text-success border-success/30';
      case 'In Progress': return 'bg-warning/10 text-warning border-warning/30';
      case 'Ongoing': return 'bg-primary/10 text-primary border-primary/30';
      default: return 'bg-muted/10 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on projects and lab environments that demonstrate my growing cybersecurity skills and practical experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.title}
                className="cyber-border bg-card/50 floating-card hover:bg-card/70 transition-all duration-600 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-${project.color.split('-')[1]}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-6 w-6 ${project.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <Badge variant="outline" className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <div className="text-sm font-semibold text-foreground mb-2">Category</div>
                    <Badge variant="secondary" className="bg-secondary/50">
                      {project.category}
                    </Badge>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-foreground mb-3">Technologies Used</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="cyber-border hover:bg-primary/10 hover:text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="text-sm font-semibold text-foreground mb-1">Outcome</div>
                    <div className={`text-lg font-bold ${project.color}`}>
                      {project.impact}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="cyber-border hover:bg-primary/10 hover:text-primary flex-1"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="cyber-border hover:bg-success/10 hover:text-success"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/30 rounded-lg p-8 cyber-border">
            <h3 className="text-2xl font-bold mb-4">
              Growing My Security Skills
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These projects represent my hands-on learning journey in cybersecurity. 
              I'm constantly building new lab environments and practicing security techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="cyber-border neon-glow bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="cyber-border hover:bg-success/10 hover:text-success"
                onClick={() => window.open('https://github.com/PrathamDeora', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;