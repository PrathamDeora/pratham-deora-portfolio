// import { useState, useEffect } from "react";
// import {
//   ArrowDown,
//   Download,
//   Eye,
//   Shield,
//   Lock,
//   Search,
//   Zap,
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import cyberAvatar from "@/assets/image.jpg";

// const HeroSection = () => {
//   const [typedText, setTypedText] = useState("");
//   const [currentRole, setCurrentRole] = useState(0);

//   const roles = [
//     "Security Analyst",
//     "Cybersecurity Professional",
//     "Vulnerability Researcher",
//     "Penetration Tester",
//     "Threat Hunter",
//   ];

//   const socialLinks = [
//     {
//       name: "GitHub",
//       icon: Github,
//       href: "https://github.com/PrathamDeora",
//       color: "hover:bg-primary/10 hover:text-primary",
//     },
//     {
//       name: "LinkedIn",
//       icon: Linkedin,
//       href: "https://www.linkedin.com/in/pratham-deora/",
//       color: "hover:bg-primary/10 hover:text-primary",
//     },
//     {
//       name: "TryHackMe",
//       icon: ExternalLink,
//       href: "https://tryhackme.com/p/prathamdevda112",
//       color: "hover:bg-accent/10 hover:text-accent",
//     },
//     {
//       name: "Email",
//       icon: Mail,
//       href: "mailto:pdeora122@gmail.com",
//       color: "hover:bg-success/10 hover:text-success",
//     },
//   ];

//   useEffect(() => {
//     let timeoutId: NodeJS.Timeout;
//     const currentRoleText = roles[currentRole];

//     if (typedText.length < currentRoleText.length) {
//       timeoutId = setTimeout(() => {
//         setTypedText(currentRoleText.slice(0, typedText.length + 1));
//       }, 100);
//     } else {
//       timeoutId = setTimeout(() => {
//         setTypedText("");
//         setCurrentRole((prev) => (prev + 1) % roles.length);
//       }, 2000);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [typedText, currentRole]);

//   const scrollToContact = () => {
//     const element = document.getElementById("contact");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const scrollToAbout = () => {
//     const element = document.getElementById("about");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-28 md:pt-32"
//     >
//       {/* Matrix Background */}
//       <div className="matrix-bg"></div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 text-primary/20">
//           <Shield className="h-8 w-8" />
//         </div>
//         <div className="absolute top-1/3 right-1/4 text-accent/20">
//           <Lock className="h-6 w-6" />
//         </div>
//         <div className="absolute bottom-1/3 left-1/3 text-success/20">
//           <Search className="h-10 w-10" />
//         </div>
//         <div className="absolute top-1/2 right-1/3 text-warning/20">
//           <Zap className="h-7 w-7" />
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Avatar Section - Left Side */}
//           <div className="lg:w-1/2 order-2 lg:order-1">
//             <div className="relative text-center">
//               {/* Avatar */}
//               <div className="relative w-80 h-80 mx-auto mb-40">
//                 <img
//                   src={cyberAvatar}
//                   alt="Pratham Deora - Cybersecurity Professional"
//                   className="w-30 h-30 object-cover  border-4 border-primary/30 shadow-2xl"
//                 />

//                 {/* Glow effect */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-accent/20"></div>
//               </div>

//               {/* Social Links under photo */}
//               <div className="flex justify-center gap-5">
//                 {socialLinks.map((link) => {
//                   const Icon = link.icon;
//                   return (
//                     <Button
//                       key={link.name}
//                       variant="outline"
//                       size="sm"
//                       className={`cyber-border border-primary/30 ${link.color} transition-all duration-300`}
//                       onClick={() => window.open(link.href, "_blank")}
//                     >
//                       <Icon className="h-4 w-4 mr-2" />
//                       {link.name}
//                     </Button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Text Content - Right Side */}
//           <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
//             <div className="mb-6">
//               <h1 className="text-5xl md:text-7xl font-bold mb-4">
//                 <span className="text-foreground">Hi, I'm </span>
//                 <span className="text-primary glitch-text" data-text="PRATHAM">
//                   PRATHAM
//                 </span>
//               </h1>

//               <div className="text-2xl md:text-3xl text-muted-foreground mb-4 h-12">
//                 <span className="font-mono">
//                   &gt; {typedText}
//                   <span className="animate-blink">|</span>
//                 </span>
//               </div>

//               <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8 mx-auto lg:mx-0">
//                 Cybersecurity professional with hands-on experience in both -{" "}
//                 <br /> Blue Team{" "}
//                 <span className="text-primary font-semibold">
//                   (SOC operation, threat hunt, vulnerability analysis)
//                 </span>{" "}
//                 and, <br />
//                 Red Team{" "}
//                 <span className="text-accent font-semibold">
//                   (Red Team operations, penetration testing & Vulnerability
//                   exploitation, Ethical hacking)
//                 </span>{" "}
//                 domains. <br />
//                 {/* Adept at simulating and defending against real-world cyber attacks using modern tools, techniques, and threat intelligence. Passionate about protecting digital assets and strengthening security postures through continuous assessment and improvement. */}
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
//               <Button
//                 onClick={scrollToContact}
//                 className="cyber-border neon-glow bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
//               >
//                 Get In Touch
//               </Button>

//               <div className="flex gap-2">
//                 <Button
//                   variant="outline"
//                   className="cyber-border hover:bg-primary/10 hover:text-primary border-primary/30"
//                   onClick={() => window.open("/resume.pdf", "_blank")}
//                 >
//                   <Eye className="mr-2 h-4 w-4" />
//                   View Resume
//                 </Button>

//                 <Button
//                   variant="outline"
//                   className="cyber-border hover:bg-success/10 hover:text-success border-success/30"
//                   onClick={() => {
//                     const link = document.createElement("a");
//                     link.href = "/resume.pdf";
//                     link.download = "PRATHAM DEORA - RESUME";
//                     link.click();
//                   }}
//                 >
//                   <Download className="mr-2 h-4 w-4" />
//                   Download
//                 </Button>
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
//               <div>
//                 <div className="text-3xl font-bold text-primary">1+</div>
//                 <div className="text-sm text-muted-foreground">
//                   Year Experience
//                 </div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-accent">8+</div>
//                 <div className="text-sm text-muted-foreground">
//                   Projects Completed
//                 </div>
//               </div>
//               <div>
//                 <div className="text-3xl font-bold text-success">3+</div>
//                 <div className="text-sm text-muted-foreground">
//                   Certifications
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//           <button
//             onClick={scrollToAbout}
//             className="text-primary hover:text-primary/80 transition-colors"
//           >
//             <ArrowDown className="h-8 w-8" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import { useState, useEffect } from 'react';
import {
  ArrowDown,
  Download,
  Eye,
  Shield,
  Lock,
  Search,
  Zap,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import cyberAvatar from '@/assets/image.jpg';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Security Analyst',
    'Cybersecurity Professional',
    'Vulnerability Researcher',
    'Penetration Tester',
    'Threat Hunter'
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/PrathamDeora',
      color: 'hover:bg-primary/10 hover:text-primary'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/pratham-deora/',
      color: 'hover:bg-primary/10 hover:text-primary'
    },
    {
      name: 'TryHackMe',
      icon: ExternalLink,
      href: 'https://tryhackme.com/p/prathamdevda112',
      color: 'hover:bg-accent/10 hover:text-accent'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:pdeora122@gmail.com',
      color: 'hover:bg-success/10 hover:text-success'
    }
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const currentRoleText = roles[currentRole];

    if (typedText.length < currentRoleText.length) {
      timeoutId = setTimeout(() => {
        setTypedText(currentRoleText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setTypedText('');
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, currentRole]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-28 md:pt-32"
    >
      {/* Matrix Background */}
      <div className="matrix-bg"></div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-primary/20">
          <Shield className="h-8 w-8" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-accent/20">
          <Lock className="h-6 w-6" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-success/20">
          <Search className="h-10 w-10" />
        </div>
        <div className="absolute top-1/2 right-1/3 text-warning/20">
          <Zap className="h-7 w-7" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12">
          {/* Left: Avatar and Social Links */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative text-center">
              {/* Avatar */}

              <div className="relative w-full max-w-md mx-auto mb-6 sm:mb-8">
                <div className="w-full h-auto border-4 border-primary/30 shadow-2xl rounded-xl overflow-hidden bg-black">
                  <img
                    src={cyberAvatar}
                    alt="Pratham Deora"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={link.name}
                      variant="outline"
                      size="sm"
                      className={`cyber-border border-primary/30 ${link.color} transition-all duration-300`}
                      onClick={() => window.open(link.href, '_blank')}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {link.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-primary glitch-text" data-text="PRATHAM">
                  PRATHAM
                </span>
              </h1>

              <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 h-10 sm:h-12">
                <span className="font-mono">
                  &gt; {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-lg sm:max-w-2xl mx-auto lg:mx-0">
                Cybersecurity professional with hands-on experience in both — <br />
                Blue Team{' '}
                <span className="text-primary font-semibold">
                  (SOC operation, threat hunt, vulnerability analysis)
                </span>{' '}
                and <br />
                Red Team{' '}
                <span className="text-accent font-semibold">
                  (Red Team operations, penetration testing & vulnerability exploitation, ethical hacking)
                </span>{' '}
                domains.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                className="cyber-border neon-glow bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3"
              >
                Get In Touch
              </Button>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  className="cyber-border hover:bg-primary/10 hover:text-primary border-primary/30"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Resume
                </Button>

                <Button
                  variant="outline"
                  className="cyber-border hover:bg-success/10 hover:text-success border-success/30"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume.pdf';
                    link.download = 'PRATHAM DEORA - RESUME';
                    link.click();
                  }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Year Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-accent">8+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-success">3+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
