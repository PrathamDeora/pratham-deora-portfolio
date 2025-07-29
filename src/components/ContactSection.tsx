import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pdeora122@gmail.com',
      href: 'mailto:pdeora122@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 800 598 7462',
      href: 'tel:+918005987462',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: '#',
      color: 'text-success'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'href: https://github.com/PrathamDeora',
      color: 'hover:text-primary',
      description: 'Open source projects and security tools'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pratham-deora/', 
      color: 'hover:text-primary',
      description: 'Professional network and industry insights'
    },
    {
      name: 'TryHackMe',
      icon: ExternalLink, 
      href: 'https://tryhackme.com/p/prathamdevda112', 
      color: 'hover:text-accent',
      description: 'Cybersecurity challenges and learning'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   // Basic validation
  //   if (!formData.name || !formData.email || !formData.message) {
  //     toast({
  //       title: "Missing Information",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   // Email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(formData.email)) {
  //     toast({
  //       title: "Invalid Email",
  //       description: "Please enter a valid email address.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }

  //   // Simulate form submission
  //   toast({
  //     title: "Message Sent!",
  //     description: "Thank you for your message. I'll get back to you soon.",
  //   });

  //   // Reset form
  //   setFormData({
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: ''
  //   });
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
  
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
  
    emailjs
      .send('service_rqkqykp', 'template_vgs9e5s', templateParams, 't4AbHV9W_W1olbxn-')
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        toast({
          title: "Email Failed",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        });
        console.error('EmailJS error:', error);
      });
  };
  

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm currently looking for Job opportunities in cybersecurity.
          If you'd like to collaborate, share advice, or connect — feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="cyber-border floating-card bg-card/50 hover:bg-card/70 transition-all duration-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <MessageSquare className="h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cyber-border transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cyber-border transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cyber-border transition-all"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary cyber-border transition-all resize-none"
                    placeholder="Tell me how I can collaborate, learn, or assist in your security projects..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full cyber-border neon-glow bg-primary text-primary-foreground hover:bg-primary/90 py-3"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="cyber-border floating-card bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors group cursor-pointer"
                      onClick={() => {
                        if (item.href !== '#') {
                          window.open(item.href, '_blank');
                        }
                      }}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-${item.color.split('-')[1]}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="cyber-border floating-card bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <div 
                      key={link.name}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors group cursor-pointer"
                      onClick={() => window.open(link.href, '_blank')}
                    >
                      
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className={`h-5 w-5 text-muted-foreground ${link.color} transition-colors`} />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {link.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {link.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="cyber-border floating-card bg-card/30">
              <CardContent className="p-6 text-center space-y-4">
                <h4 className="text-xl font-bold">Quick Response</h4>
                <p className="text-muted-foreground text-sm">
                I'm actively learning and open to new opportunitiesand collaborations. If you're interested in working together or have advice to share — I'd love to hear from you!
                </p>
                <div className="flex items-center justify-center gap-2 text-success text-sm">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span>Available for new projects</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/30 rounded-lg p-8 cyber-border">
            <h3 className="text-2xl font-bold mb-4">
            Passionate About Cybersecurity — Let’s Connect!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're an industry professional, recruiter, or fellow learner, I'm always open to connect, collaborate, or explore internship opportunities. Let's build something secure together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="cyber-border neon-glow bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => window.open('mailto:pdeora122@gmail.com?subject=Security Consultation Request', '_blank')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Let's Connect
              </Button>
              <Button 
                variant="outline"
                className="cyber-border hover:bg-success/10 hover:text-success"
                onClick={() => window.open('tel:+918005987462', '_blank')}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;