import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ArrowUpRight, Github, LinkedinLogo, EnvelopeSimple, MapPin, Calendar, Phone, Sun, Moon, Star, Code, Database, Palette } from "@phosphor-icons/react"
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
    "Programming Languages": ["Python", "C++", "JavaScript", "Java"],
    "Web Technologies": ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
    "Data & Analytics": ["SQL", "Tableau", "Jupyter Notebook", "Databricks", "NumPy", "Pandas", "Scikit-learn"],
    "Tools & Platforms": ["Git", "Linux", "Microsoft Office Suite", "Figma", "Photoshop", "React Native", "Expo", "Supabase"]
  }

  const experiences = [
    {
      title: "Software Developer",
      company: "TeachMeets",
      location: "Remote",
      period: "05/2025 - Present",
      description: "Architected and developed complete mobile social platform for educators using React Native and Expo. Built full-stack authentication system with user registration, login validation, and secure session management. Implemented real-time messaging system, social feed with interactions, and content creation workflows. Designed and developed complex navigation flows with tab-based architecture and nested routing. Created comprehensive user profile management system with role-based features for teachers and administrators. Currently leading backend integration using Supabase for production deployment and scalable data management.",
      highlight: true
    },
    {
      title: "Project Management Internship",
      company: "NASA Ames Research Center",
      location: "Mountain View, CA",
      period: "01/2022 - 05/2022",
      description: "Collaborated with a team of 6 students to develop a database and website for analyzing trends in NASA's small spacecraft missions. Utilized Charts.js to create visualizations, including charts and graphs, to present mission trends and insights, reducing manual analysis time by 25%. Created a MongoDB database to store, organize, and clean data from various sources, enabling efficient data analysis and improving data accessibility by 40%. Developed a user-friendly website using Bootstrap to host the analyzed data and provide an intuitive interface for end-users. Worked closely with the project sponsor and NASA's IT team to gather requirements, provide updates, and incorporate feedback."
    },
    {
      title: "QC & Operations Supervisor",
      company: "Crystal",
      location: "San Jose, CA",
      period: "05/2018 - Present",
      description: "Implement data-driven decision-making processes to optimize inventory management, safety compliance, and operational efficiency. Conduct end-to-end project management to streamline operations, reduce costs, and maintain service excellence. Perform regular operational analysis to identify areas for improvement and drive continuous optimization."
    }
  ]

  const projects = [
    {
      title: "CPU Database Project",
      description: "Led the Scrum Development unit development for a CPU database management system using C++. Applied object-oriented programming principles and utilized data structures like hash tables and binary search trees. Implemented DisplayManager, SearchManager, and UndoManager classes to handle user interactions. Designed and coded a generic Stack data structure, enhancing the project's undo functionality.",
      tech: ["C++", "Object-Oriented Programming", "Data Structures", "Hash Tables", "Binary Search Trees", "Scrum"],
      period: "01/2024 - 06/2024",
      githubUrl: userInfo?.login ? `https://github.com/${userInfo.login}` : "#"
    },
    {
      title: "Yelp Open Dataset Challenge",
      description: "Collaborated in a team to analyze 8.6M Yelp reviews and 160K business profiles to determine if restaurant ratings were skewed by proximity to colleges. Preprocessed and analyzed big data using Python, SQL, and Tableau, utilizing Databricks for big data processing. Implemented fuzzy matching to accurately categorize chain and non-chain restaurants, reducing error rate by 7.16%. Discovered no significant correlation between restaurant ratings and distance from universities, with a few outliers.",
      tech: ["Python", "SQL", "Tableau", "Databricks", "Data Analysis", "Fuzzy Matching", "Big Data"],
      period: "01/2022 - 05/2022", 
      githubUrl: userInfo?.login ? `https://github.com/${userInfo.login}` : "#"
    },
    {
      title: "5/3/1 Calculator Full Stack Project",
      description: "Developed a full-stack web application implementing the 5/3/1 strength training program calculator. Designed and implemented a responsive user interface using React for the frontend and Express for the backend. Integrated with Node.js server and utilized technologies such as Express, Cors, and Axios.",
      tech: ["React", "Node.js", "Express", "JavaScript", "Cors", "Axios"],
      period: "Oct 2023 - Present",
      githubUrl: userInfo?.login ? `https://github.com/${userInfo.login}` : "#"
    }
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/20 rotate-45 animate-slow-spin"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-accent/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-8 bg-secondary/25 animate-pulse"></div>
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-accent/20 transition-all duration-300 animate-scale-in animate-delay-500 shadow-lg"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>

      {/* Hero Section with Split Layout */}
      <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4 animate-fade-in animate-delay-200">
                <div className="flex items-center gap-2 text-muted-foreground text-sm bg-card/50 px-3 py-2 rounded-full backdrop-blur-sm border">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Available for hire
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="animate-slide-up animate-delay-100 relative">
                  <span className="absolute -top-4 -left-4 text-primary/10 text-8xl font-bold -z-10">K</span>
                  Hi, I'm <br/>
                  <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
                    Kevin Galvan Serrano
                  </span>
                </h1>
                
                <div className="flex items-center gap-4 text-lg text-muted-foreground animate-slide-up animate-delay-200">
                  <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                    <Code size={20} className="text-primary" />
                    Software Developer
                  </div>
                  <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                    <Database size={20} className="text-accent" />
                    Data Enthusiast
                  </div>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up animate-delay-300">
                  Software Developer with experience at NASA Ames Research Center and TeachMeets. 
                  Specialized in full-stack development, mobile applications, and data analytics. 
                  Currently architecting scalable social platforms for educators while seeking new opportunities to create innovative solutions.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground animate-slide-up animate-delay-400 bg-card/30 p-4 rounded-xl backdrop-blur-sm border">
                <MapPin size={16} className="text-primary" />
                San Jose, CA
                <span className="mx-2 text-border">•</span>
                <Phone size={16} className="text-primary" />
                (408) 504-5667
                <span className="mx-2 text-border">•</span>
                <Calendar size={16} className="text-primary" />
                Available immediately
              </div>
              
              <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-500">
                <Button size="lg" className="gap-2 hover:scale-105 transition-all duration-300 animate-glow shadow-lg relative overflow-hidden group" onClick={() => window.open('mailto:kevin.galvanserrano@gmail.com')}>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <EnvelopeSimple size={18} className="relative z-10" />
                  <span className="relative z-10">Get in touch</span>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40" onClick={() => window.open(userInfo?.login ? `https://github.com/${userInfo.login}` : '#')}>
                  <Github size={18} />
                  View work
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Avatar & Stats */}
          <div className="flex flex-col items-center space-y-8 animate-fade-in animate-delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Avatar className="w-40 h-40 border-4 border-primary/30 shadow-2xl shadow-primary/20 animate-scale-in animate-delay-400 relative z-10">
                <AvatarFallback className="text-3xl font-bold bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  KGS
                </AvatarFallback>
              </Avatar>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-scale-in animate-delay-500">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-scale-in animate-delay-600">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-accent">10+</div>
                  <div className="text-xs text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Timeline */}
      <section className="relative px-6 py-20 bg-gradient-to-br from-card/30 to-secondary/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold animate-slide-up relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-primary/5 text-8xl font-bold -z-10">XP</span>
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block animate-pulse" style={{animationDelay: `${index * 0.2}s`}}></div>
                  
                  <Card className={`ml-0 md:ml-16 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] animate-slide-up relative overflow-hidden ${exp.highlight ? 'bg-gradient-to-br from-primary/5 to-accent/5' : 'bg-card/50'} backdrop-blur-sm`} style={{animationDelay: `${index * 0.1}s`}}>
                    {exp.highlight && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground animate-pulse">
                          <Star size={12} className="mr-1" />
                          Current
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="mb-2 text-xl">{exp.title}</CardTitle>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-2 text-primary font-semibold">
                              {exp.company}
                            </div>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground text-sm">{exp.location}</span>
                          </div>
                          <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20">
                            {exp.period}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed mt-4 text-foreground/80">
                        {exp.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Icon Categories */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold animate-slide-up relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-accent/5 text-8xl font-bold -z-10">SK</span>
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, techs], index) => {
              const icons = {
                "Programming Languages": Code,
                "Web Technologies": Palette,
                "Data & Analytics": Database,
                "Tools & Platforms": Github
              }
              const IconComponent = icons[category as keyof typeof icons] || Code
              
              return (
                <Card key={category} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up bg-gradient-to-br from-card/50 to-secondary/20 backdrop-blur-sm group relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech, techIndex) => (
                        <Badge key={tech} variant="secondary" className="text-xs hover:scale-110 transition-transform duration-200 animate-fade-in bg-background/50 backdrop-blur-sm" style={{animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s`}}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section with Masonry-style Layout */}
      <section className="px-6 py-20 bg-gradient-to-br from-secondary/20 to-card/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold animate-slide-up relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-primary/5 text-8xl font-bold -z-10">PR</span>
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl hover:scale-[1.02] animate-slide-up bg-card/50 backdrop-blur-sm relative overflow-hidden" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <CardTitle className="group-hover:text-primary transition-colors duration-300 text-xl">{project.title}</CardTitle>
                        <Badge variant="outline" className="text-xs bg-accent/10 border-accent/20">
                          {project.period}
                        </Badge>
                      </div>
                      <CardDescription className="text-base leading-relaxed text-foreground/80">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 transition-colors duration-200 animate-fade-in bg-background/30 backdrop-blur-sm" style={{animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s`}}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="gap-2 hover:scale-105 transition-all duration-300 bg-primary/10 hover:bg-primary/20"
                      onClick={() => window.open(project.githubUrl)}
                    >
                      <Github size={16} />
                      View Code
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Education Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="mb-8 text-3xl font-bold animate-slide-up relative">
                Education
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full"></div>
              </h2>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-scale-in bg-gradient-to-br from-card/50 to-secondary/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col gap-4">
                    <div>
                      <CardTitle className="mb-2 text-xl">B.S. Management Information Systems</CardTitle>
                      <div className="text-primary font-semibold text-lg">
                        San Jose State University
                      </div>
                      <div className="text-muted-foreground mt-1">
                        Business Administration
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs self-start bg-accent/10 border-accent/20">
                      Graduated 2022
                    </Badge>
                  </div>
                  
                  <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
                    <div className="text-sm font-medium mb-2">Relevant Coursework:</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      Data Abstract and Structures, Big Data, Business Intelligence, Fundamentals of MIS, 
                      Systems Analysis and Design, Networking and Data Communications, Database Management Systems, 
                      Business Strategy and Information Systems, Business Programming.
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
            
            {/* Contact */}
            <div>
              <h2 className="mb-8 text-3xl font-bold animate-slide-up relative">
                Let's work together
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mt-4 rounded-full"></div>
              </h2>
              
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg animate-slide-up animate-delay-100 leading-relaxed">
                  Experienced software developer with NASA internship and current mobile app development experience. 
                  Ready to contribute technical expertise and problem-solving skills to your team.
                </p>
              
                <div className="space-y-4 animate-slide-up animate-delay-200">
                  <Button size="lg" className="w-full gap-2 hover:scale-105 transition-all duration-300 animate-glow shadow-lg relative overflow-hidden group" onClick={() => window.open('mailto:kevin.galvanserrano@gmail.com')}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <EnvelopeSimple size={18} className="relative z-10" />
                    <span className="relative z-10">kevin.galvanserrano@gmail.com</span>
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40" onClick={() => window.open('https://linkedin.com/in/kevingalvanserrano')}>
                      <LinkedinLogo size={18} />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40" onClick={() => window.open(userInfo?.login ? `https://github.com/${userInfo.login}` : 'https://github.com/kevingalvanserrano')}>
                      <Github size={18} />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t backdrop-blur-sm bg-card/30">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground animate-fade-in">
          <p>© 2024 Kevin Galvan Serrano. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

export default App