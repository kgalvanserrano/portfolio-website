import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowUpRight, Github, LinkedinLogo, EnvelopeSimple, MapPin, Calendar, Phone, Sun, Moon } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

function App() {
  const [userInfo, setUserInfo] = useState<any>(null)
  const [githubRepos, setGithubRepos] = useState<any[]>([])
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Get user info and try to fetch GitHub repositories
    const fetchUserData = async () => {
      try {
        const user = await spark.user()
        setUserInfo(user)
        
        // Try to fetch repositories using GitHub API through user login
        if (user.login) {
          // Note: This would require actual GitHub API access which may not be available
          // For now, we'll use the resume projects as fallback
          console.log('User GitHub login:', user.login)
        }
      } catch (error) {
        console.log('Could not fetch user data:', error)
      }
    }
    
    fetchUserData()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.className = isDark ? 'light' : ''
  }
  const skills = {
    "Programming": ["Python", "Java", "JavaScript", "React", "Node.js"],
    "Data & Analytics": ["SQL", "MongoDB", "Tableau", "Python Analytics", "BigQuery"],
    "Tools & Technologies": ["Git", "Linux", "Express", "Cors", "Axios", "HTML/CSS"]
  }

  const experiences = [
    {
      title: "App Developer Intern",
      company: "TeachMeets",
      location: "Remote",
      period: "Oct 2024 - Present",
      description: "Currently developing mobile applications as part of the development team. Working with modern frameworks and contributing to user-facing features while under NDA. Gaining valuable experience in agile development practices and collaborative software engineering."
    },
    {
      title: "Full Stack Developer Intern",
      company: "NASA Ames Research Center",
      location: "Palo Alto, CA",
      period: "Jan 2022 - May 2022",
      description: "Spearheaded critical data transformation project for SmallSat/CubeSat mission database, enhancing data insights and usability. Developed dynamic dashboard with JavaScript and charts.js, enabling advanced data analytics and visualization. Designed and implemented efficient back-end MongoDB database for streamlined data storage and retrieval."
    },
    {
      title: "QC & Operations Supervisor", 
      company: "Crystal",
      location: "San Jose, CA",
      period: "May 2018 - Oct 2024",
      description: "Implemented data-driven decision-making processes, overseeing inventory management and safety compliance, while regularly conducting operational analysis to enhance efficiency. Conducted end-to-end project management, optimizing resource allocation, reducing costs, and maintaining service excellence."
    }
  ]

  const projects = [
    {
      title: "5/3/1 Calculator Full Stack Project",
      description: "Developed a full-stack web application implementing the 5/3/1 strength training program calculator. Designed and implemented a responsive user interface using React for the frontend and Express for the backend. Integrated with Node.js server and utilized technologies such as Express, Cors, and Axios.",
      tech: ["React", "Node.js", "Express", "JavaScript", "Cors", "Axios"],
      period: "Oct 2023 - Present",
      githubUrl: userInfo?.login ? `https://github.com/${userInfo.login}` : "#"
    },
    {
      title: "Business Intelligence Projects",
      description: "Executed BI analysis using Python, Tableau, and BigQuery, published in Jupyter Notebooks. Developed several programs designed to analyze various datasets utilizing multiple analysis techniques including linear regression, logistic regression, decision trees, cluster analysis, and correlation analysis.",
      tech: ["Python", "Tableau", "BigQuery", "Jupyter", "Data Analysis"],
      period: "Jan 2022 - May 2022",
      githubUrl: userInfo?.login ? `https://github.com/${userInfo.login}` : "#"
    },
    {
      title: "Yelp Open Dataset Analysis",
      description: "Collaborated on semester project analyzing restaurant ratings and college student behavior. Applied Python and SQL to wrangle data, used Tableau for visualization in Databricks notebook. Analyzed 160K rows of Yelp business information and 8.6M rows of user reviews.",
      tech: ["Python", "SQL", "Tableau", "Data Analysis", "Databricks"],
      period: "Aug 2021 - Dec 2021", 
      githubUrl: userInfo?.login ? `https://github.com/${userInfo.login}` : "#"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-accent/20 transition-all duration-300 animate-scale-in animate-delay-500"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1 animate-slide-up">
            <div className="flex items-center gap-3 mb-4 animate-fade-in animate-delay-200">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for hire
              </div>
            </div>
            
            <h1 className="mb-4 animate-slide-up animate-delay-100">
              Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Kevin Galvan Serrano</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed animate-slide-up animate-delay-200">
              Full Stack Developer with experience at NASA Ames Research Center and expertise in data analytics. 
              Currently developing mobile applications at TeachMeets, seeking to contribute innovative solutions to challenging projects.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-slide-up animate-delay-300">
              <MapPin size={16} />
              San Jose, CA
              <span className="mx-2">•</span>
              <Phone size={16} />
              (408) 504-5667
              <span className="mx-2">•</span>
              <Calendar size={16} />
              Available immediately
            </div>
            
            <div className="flex flex-wrap gap-3 animate-slide-up animate-delay-400">
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform duration-200 animate-glow" onClick={() => window.open('mailto:kevin.galvanserrano@gmail.com')}>
                <EnvelopeSimple size={18} />
                Get in touch
              </Button>
              <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform duration-200" onClick={() => window.open(userInfo?.login ? `https://github.com/${userInfo.login}` : '#')}>
                <Github size={18} />
                View work
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0 animate-float">
            <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-2xl shadow-primary/20 animate-scale-in animate-delay-300">
              <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                KGS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center animate-slide-up">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-slide-up bg-card/50 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="mb-1">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        {exp.company}
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground text-sm">{exp.location}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs self-start md:self-center animate-pulse">
                      {exp.period}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed mt-3">
                    {exp.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 bg-secondary/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center animate-slide-up">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs], index) => (
              <Card key={category} className="border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 animate-slide-up bg-card/50 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, techIndex) => (
                      <Badge key={tech} variant="secondary" className="text-xs hover:scale-110 transition-transform duration-200 animate-fade-in" style={{animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s`}}>
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
          <h2 className="mb-8 text-center animate-slide-up">Featured Projects</h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-sm hover:scale-[1.02] animate-slide-up bg-card/50 backdrop-blur-sm" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {project.period}
                        </Badge>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 transition-colors duration-200 animate-fade-in" style={{animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s`}}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex gap-3">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="gap-2 hover:scale-105 transition-transform duration-200"
                      onClick={() => window.open(project.githubUrl)}
                    >
                      <Github size={16} />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 bg-secondary/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <h2 className="mb-8 text-center animate-slide-up">Education</h2>
            <Card className="border-0 shadow-sm max-w-2xl mx-auto hover:shadow-xl transition-all duration-500 animate-scale-in bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="mb-1">B.S. Management Information Systems</CardTitle>
                    <div className="text-primary font-medium">
                      San Jose State University
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Business Administration
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs self-start md:self-center">
                    Graduated Aug 2022
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
          
          {/* Contact */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 animate-slide-up">Let's work together</h2>
            <p className="text-muted-foreground mb-8 text-lg animate-slide-up animate-delay-100">
              Experienced full stack developer with NASA internship and current mobile app development experience. 
              Ready to contribute technical expertise and problem-solving skills to your team.
            </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up animate-delay-200">
            <Button size="lg" className="gap-2 hover:scale-105 transition-transform duration-200 animate-glow" onClick={() => window.open('mailto:kevin.galvanserrano@gmail.com')}>
              <EnvelopeSimple size={18} />
              kevin.galvanserrano@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform duration-200" onClick={() => window.open('https://linkedin.com/in/kevingalvanserrano')}>
              <LinkedinLogo size={18} />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform duration-200" onClick={() => window.open(userInfo?.login ? `https://github.com/${userInfo.login}` : 'https://github.com/kevingalvanserrano')}>
              <Github size={18} />
              GitHub
            </Button>
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground animate-fade-in">
          <p>© 2024 Kevin Galvan Serrano. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App