import { Award, Shield, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: '2024',
      status: 'Active',
      level: 'Foundation',
      category: 'General Security',
      description: 'Foundational cybersecurity skills and knowledge',
      color: 'text-primary',
      verified: true
    },
    {
      name: 'CompTIA Network+',
      issuer: 'CompTIA',
      year: '2024',
      status: 'Active',
      level: 'Foundation',
      category: 'Network Security',
      description: 'Networking fundamentals and security concepts',
      color: 'text-accent',
      verified: true
    },
    {
      name: 'Ethical Hacking Essentials',
      issuer: 'EC-Council',
      year: '2024',
      status: 'Active',
      level: 'Entry',
      category: 'Ethical Hacking',
      description: 'Introduction to ethical hacking and penetration testing',
      color: 'text-success',
      verified: true
    }
  ];

  const upcomingCerts = [
    {
      name: 'Junior Penetration Tester Exam (e-JPT)',
      issuer: 'INE Security',
      plannedDate: 'Q4 2025',
      category: 'Ethical Hacking'
    },
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      plannedDate: 'Q1/2 2026',
      category: 'Penetration Testing'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-accent/10 text-accent border-accent/30';
      case 'Professional': return 'bg-primary/10 text-primary border-primary/30';
      case 'Foundation': return 'bg-success/10 text-success border-success/30';
      case 'Entry': return 'bg-warning/10 text-warning border-warning/30';
      default: return 'bg-muted/10 text-muted-foreground border-muted/30';
    }
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Certifications</span> & Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building a strong foundation with industry-recognized certifications and continuous learning
          </p>
        </div>

        {/* Current Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Current Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name}
                className="cyber-border floating-card bg-card/50 hover:bg-card/70 transition-all duration-600 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">
                        {cert.name}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </div>
                    </div>
                    {cert.verified && (
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 ml-2" />
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className={getLevelColor(cert.level)}>
                      {cert.level}
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary/50">
                      {cert.category}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.year}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="bg-success/10 text-success border-success/30"
                    >
                      {cert.status}
                    </Badge>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full cyber-border hover:bg-primary/10 hover:text-primary"
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Verify Credential
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-warning" />
            Planned Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingCerts.map((cert, index) => (
              <Card 
                key={cert.name}
                className="cyber-border floating-card bg-card/30 hover:bg-card/50 transition-all duration-600 border-dashed"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                      <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                      Planned
                    </Badge>
                    <Badge variant="secondary" className="bg-secondary/50">
                      {cert.category}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Target: {cert.plannedDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certification Stats */}
        <div className="text-center">
          <div className="bg-card/30 rounded-lg p-8 cyber-border">
            <h3 className="text-2xl font-bold mb-6">Learning Journey</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Active Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">2</div>
                <div className="text-sm text-muted-foreground">Planned This Year</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-success">6</div>
                <div className="text-sm text-muted-foreground">Months Learning</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-warning">100%</div>
                <div className="text-sm text-muted-foreground">Commitment Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;