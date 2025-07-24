import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowUpRight, Github, LinkedinLogo, EnvelopeSimple, MapPin, Calendar, Phone } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

function App() {
  const [userInfo, setUserInfo] = useState<any>(null)
  const [githubRepos, setGithubRepos] = useState<any[]>([])

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
  const skills = {
    "Programming": ["Python", "Java", "JavaScript", "React", "Node.js"],
    "Data & Analytics": ["SQL", "MongoDB", "Tableau", "Python Analytics", "BigQuery"],
    "Tools & Technologies": ["Git", "Linux", "Express", "Cors", "Axios", "HTML/CSS"]
  }

  const experiences = [
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
      period: "May 2018 - Present",
      description: "Implementing data-driven decision-making processes, overseeing inventory management and safety compliance, while regularly conducting operational analysis to enhance efficiency. Conducting end-to-end project management, optimizing resource allocation, reducing costs, and maintaining service excellence."
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
              Hi, I'm <span className="text-primary">Kevin Galvan Serrano</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Full Stack Developer with experience at NASA Ames Research Center and expertise in data analytics. 
              Recent graduate with hands-on experience in React, Python, and database management, seeking to contribute innovative solutions to challenging projects.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <MapPin size={16} />
              San Jose, CA
              <span className="mx-2">•</span>
              <Phone size={16} />
              (408) 504-5667
              <span className="mx-2">•</span>
              <Calendar size={16} />
              Available immediately
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="gap-2" onClick={() => window.open('mailto:kevin.galvanserrano@gmail.com')}>
                <EnvelopeSimple size={18} />
                Get in touch
              </Button>
              <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open(userInfo?.login ? `https://github.com/${userInfo.login}` : '#')}>
                <Github size={18} />
                View work
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Avatar className="w-32 h-32 border-4 border-primary/10">
              <AvatarFallback className="text-2xl font-semibold bg-primary/5 text-primary">
                KGS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Professional Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-sm">
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
                    <Badge variant="outline" className="text-xs self-start md:self-center">
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
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle>{project.title}</CardTitle>
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
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
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
                      className="gap-2"
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
      <section className="px-6 py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-16">
            <h2 className="mb-8 text-center">Education</h2>
            <Card className="border-0 shadow-sm max-w-2xl mx-auto">
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
            <h2 className="mb-4">Let's work together</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Experienced full stack developer with NASA internship and strong data analytics background. 
              Ready to contribute technical expertise and problem-solving skills to your team.
            </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2" onClick={() => window.open('mailto:kevin.galvanserrano@gmail.com')}>
              <EnvelopeSimple size={18} />
              kevin.galvanserrano@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://linkedin.com/in/kevingalvanserrano')}>
              <LinkedinLogo size={18} />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open(userInfo?.login ? `https://github.com/${userInfo.login}` : 'https://github.com/kevingalvanserrano')}>
              <Github size={18} />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Kevin Galvan Serrano. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App