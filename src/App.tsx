import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowUpRight, Github, LinkedinLogo, EnvelopeSimple, MapPin, Calendar } from "@phosphor-icons/react"

function App() {
  const skills = {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    "Tools": ["Git", "Docker", "VS Code", "Figma", "Vite"]
  }

  const projects = [
    {
      title: "Task Management App",
      description: "A full-stack productivity app with real-time collaboration, built with React, Node.js, and Socket.io. Features drag-and-drop task boards, user authentication, and responsive design.",
      tech: ["React", "Node.js", "Socket.io", "PostgreSQL", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, data visualization charts, and offline support. Integrated with OpenWeatherMap API and built with modern React patterns.",
      tech: ["React", "TypeScript", "Chart.js", "PWA", "API Integration"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Modern shopping platform with cart management, payment processing, and admin dashboard. Features product search, user reviews, and order tracking functionality.",
      tech: ["Next.js", "Stripe", "MongoDB", "Vercel", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for hire
              </div>
            </div>
            
            <h1 className="mb-4">
              Hi, I'm <span className="text-primary">Alex Chen</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Aspiring Full Stack Developer passionate about creating clean, efficient solutions. 
              Currently seeking my first role in the industry to apply my skills and grow alongside a great team.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <MapPin size={16} />
              San Francisco, CA
              <span className="mx-2">•</span>
              <Calendar size={16} />
              Available immediately
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="gap-2">
                <EnvelopeSimple size={18} />
                Get in touch
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Github size={18} />
                View work
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Avatar className="w-32 h-32 border-4 border-primary/10">
              <AvatarFallback className="text-2xl font-semibold bg-primary/5 text-primary">
                AC
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs]) => (
              <Card key={category} className="border-0 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Featured Projects</h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex gap-3">
                    <Button variant="default" size="sm" className="gap-2">
                      <ArrowUpRight size={16} />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Github size={16} />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 bg-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Let's work together</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I'm actively seeking opportunities to start my career in development. 
            Let's connect and discuss how I can contribute to your team.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              <EnvelopeSimple size={18} />
              alex.chen.dev@email.com
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <LinkedinLogo size={18} />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github size={18} />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Alex Chen. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App