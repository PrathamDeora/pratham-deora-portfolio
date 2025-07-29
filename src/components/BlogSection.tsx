import { Calendar, Clock, ArrowRight, TrendingUp, Shield, Lock, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const featuredPost = {
    title: 'Advanced Persistent Threats: Detection and Response Strategies',
    excerpt: 'Comprehensive guide to identifying, analyzing, and responding to sophisticated APT campaigns using modern threat hunting techniques and AI-powered detection systems.',
    category: 'Threat Intelligence',
    readTime: '12 min read',
    publishDate: '2024-01-15',
    image: '/api/placeholder/600/300',
    featured: true,
    tags: ['APT', 'Threat Hunting', 'AI', 'Detection']
  };

  const recentPosts = [
    {
      title: 'Zero Trust Architecture Implementation Guide',
      excerpt: 'Step-by-step approach to implementing Zero Trust security model in enterprise environments.',
      category: 'Security Architecture',
      readTime: '8 min read',
      publishDate: '2024-01-10',
      tags: ['Zero Trust', 'Architecture', 'Enterprise']
    },
    {
      title: 'Cloud Security Posture Management Best Practices',
      excerpt: 'Essential strategies for maintaining robust security posture across multi-cloud environments.',
      category: 'Cloud Security',
      readTime: '10 min read',
      publishDate: '2024-01-05',
      tags: ['Cloud', 'CSPM', 'AWS', 'Azure']
    },
    {
      title: 'Machine Learning in Cybersecurity: Practical Applications',
      excerpt: 'Real-world applications of ML algorithms in threat detection and automated response systems.',
      category: 'AI Security',
      readTime: '15 min read',
      publishDate: '2023-12-28',
      tags: ['Machine Learning', 'AI', 'Automation']
    },
    {
      title: 'Incident Response Playbook for Ransomware Attacks',
      excerpt: 'Comprehensive playbook for handling ransomware incidents with practical response procedures.',
      category: 'Incident Response',
      readTime: '20 min read',
      publishDate: '2023-12-20',
      tags: ['Ransomware', 'Incident Response', 'Playbook']
    }
  ];

  const categories = [
    { name: 'Threat Intelligence', count: 12, icon: Search, color: 'text-primary' },
    { name: 'Penetration Testing', count: 8, icon: Shield, color: 'text-accent' },
    { name: 'Incident Response', count: 6, icon: TrendingUp, color: 'text-success' },
    { name: 'Cloud Security', count: 10, icon: Lock, color: 'text-warning' }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Security <span className="text-primary">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, research, and practical guides on the latest cybersecurity trends and technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Post */}
            <Card className="cyber-border floating-card bg-card/50 hover:bg-card/70 transition-all duration-600 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-success/20 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(featuredPost.publishDate)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    {featuredPost.category}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold leading-tight hover:text-primary transition-colors cursor-pointer">
                  {featuredPost.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="cyber-border text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="cyber-border neon-glow bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Recent Articles</h3>
              
              {recentPosts.map((post, index) => (
                <Card 
                  key={post.title}
                  className="cyber-border floating-card bg-card/30 hover:bg-card/60 transition-all duration-600 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.publishDate)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-secondary/50">
                        {post.category}
                      </Badge>
                    </div>

                    <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="cyber-border text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card className="cyber-border floating-card bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div 
                      key={category.name}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`h-4 w-4 ${category.color} group-hover:scale-110 transition-transform`} />
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {category.name}
                        </span>
                      </div>
                      <Badge variant="outline" className="bg-secondary/50">
                        {category.count}
                      </Badge>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="cyber-border floating-card bg-card/50">
              <CardContent className="p-6 text-center space-y-4">
                <h4 className="text-xl font-bold">Stay Updated</h4>
                <p className="text-muted-foreground text-sm">
                  Get the latest cybersecurity insights and threat intelligence delivered to your inbox.
                </p>
                
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="w-full cyber-border neon-glow bg-primary text-primary-foreground hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  No spam. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="cyber-border floating-card bg-card/50">
              <CardHeader>
                <CardTitle>Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Penetration Testing', 'SIEM', 'Cloud Security', 'Zero Trust', 'Threat Intelligence', 'Incident Response', 'Vulnerability Assessment', 'Red Team'].map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cyber-border hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* View All Posts */}
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            className="cyber-border hover:bg-primary/10 hover:text-primary px-8 py-3"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;