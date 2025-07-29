import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-card/30 border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="text-lg font-semibold">
              <span className="text-primary">PRATHAM</span> 
              <span className="text-muted-foreground">.DEV</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Cybersecurity Professional | Protecting Digital Assets | Mumbai, India
            </p>
            <div className="text-xs text-muted-foreground">
              © 2024 Pratham Deora. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
