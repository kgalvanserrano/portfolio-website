import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, Github, LinkedinLogo, EnvelopeSimple, MapPin, Calendar, Phone, Sun, Moon, Star, Code, Database, Palette, TrendUp } from "@phosphor-icons/react"
import { useEffect, useState, useMemo } from "react"
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/useScrollAnimation"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"

const skills = {
  "Programming Languages": [
    { name: "Python", level: 90, description: "Advanced - Data analysis, automation, web development" },
    { name: "JavaScript", level: 85, description: "Advanced - Full-stack development, React, Node.js" },
    { name: "C++", level: 75, description: "Proficient - Data structures, algorithms, system programming" },
    { name: "Java", level: 70, description: "Proficient - Object-oriented programming, enterprise applications" }
  ],
  "Web Technologies": [
    { name: "React", level: 90, description: "Advanced - Component architecture, hooks, state management" },
    { name: "React Native", level: 85, description: "Advanced - Mobile app development, cross-platform solutions" },
    { name: "Node.js", level: 80, description: "Proficient - Backend development, API design, server-side logic" },
    { name: "HTML/CSS", level: 85, description: "Advanced - Responsive design, modern CSS, accessibility" },
    { name: "Express", level: 75, description: "Proficient - RESTful APIs, middleware, routing" },
    { name: "MongoDB", level: 70, description: "Proficient - Document databases, data modeling, queries" }
  ],
  "Data & Analytics": [
    { name: "SQL", level: 80, description: "Proficient - Complex queries, database design, optimization" },
    { name: "Tableau", level: 75, description: "Proficient - Data visualization, dashboard creation, analytics" },
    { name: "Pandas", level: 85, description: "Advanced - Data manipulation, analysis, preprocessing" },
    { name: "NumPy", level: 80, description: "Proficient - Numerical computing, array operations, mathematics" },
    { name: "Databricks", level: 70, description: "Proficient - Big data processing, collaborative analytics" },
    { name: "Jupyter", level: 85, description: "Advanced - Interactive computing, data exploration, prototyping" }
  ],
  "Tools & Platforms": [
    { name: "Git", level: 85, description: "Advanced - Version control, branching, collaboration workflows" },
    { name: "Expo", level: 80, description: "Proficient - React Native development, deployment, testing" },
    { name: "Supabase", level: 75, description: "Proficient - Backend-as-a-service, authentication, real-time" },
    { name: "Linux", level: 70, description: "Proficient - Command line, system administration, scripting" },
    { name: "Figma", level: 75, description: "Proficient - UI/UX design, prototyping, design systems" },
    { name: "Docker", level: 65, description: "Intermediate - Containerization, deployment, microservices" }
  ]
}

const experiences = [
  {
    title: "Software Developer",
    company: "TeachMeets",
    location: "Remote",
    period: "05/2025 - Present",
    description: "Architected and developed complete mobile social platform for educators using React Native and Expo. Built full-stack authentication system with user registration, login validation, and secure session management. Implemented real-time messaging system, social feed with interactions, and content creation workflows. Designed and developed complex navigation flows with tab-based architecture and nested routing. Created comprehensive user profile management system with role-based features for teachers and administrators. Currently leading backend integration using Supabase for production deployment and scalable data management.",
    highlight: true,
    achievements: [
      "Built full-stack mobile application from scratch",
      "Implemented real-time messaging and social features",
      "Designed scalable architecture for production deployment"
    ]
  },
  {
    title: "Project Management Internship",
    company: "NASA Ames Research Center",
    location: "Mountain View, CA",
    period: "01/2022 - 05/2022",
    description: "Collaborated with a team of 6 students to develop a database and website for analyzing trends in NASA's small spacecraft missions. Utilized Charts.js to create visualizations, including charts and graphs, to present mission trends and insights, reducing manual analysis time by 25%. Created a MongoDB database to store, organize, and clean data from various sources, enabling efficient data analysis and improving data accessibility by 40%. Developed a user-friendly website using Bootstrap to host the analyzed data and provide an intuitive interface for end-users. Worked closely with the project sponsor and NASA's IT team to gather requirements, provide updates, and incorporate feedback.",
    achievements: [
      "Reduced manual data analysis time by 25%",
      "Improved data accessibility by 40%",
      "Led cross-functional team of 6 students"
    ]
  },
  {
    title: "QC & Operations Supervisor",
    company: "Crystal",
    location: "San Jose, CA",
    period: "05/2018 - Present",
    description: "Implement data-driven decision-making processes to optimize inventory management, safety compliance, and operational efficiency. Conduct end-to-end project management to streamline operations, reduce costs, and maintain service excellence. Perform regular operational analysis to identify areas for improvement and drive continuous optimization.",
    achievements: [
      "Led operational efficiency improvements",
      "Implemented data-driven decision processes",
      "Managed cross-functional project initiatives"
    ]
  }
]

const projects = [
  {
    title: "CPU Database Project",
    description: "Led the Scrum Development unit development for a CPU database management system using C++. Applied object-oriented programming principles and utilized data structures like hash tables and binary search trees. Implemented DisplayManager, SearchManager, and UndoManager classes to handle user interactions. Designed and coded a generic Stack data structure, enhancing the project's undo functionality.",
    tech: ["C++", "Object-Oriented Programming", "Data Structures", "Hash Tables", "Binary Search Trees", "Scrum"],
    period: "01/2024 - 06/2024",
    githubUrl: "#",
    impact: "Optimized data retrieval performance by 40%"
  },
  {
    title: "Yelp Open Dataset Challenge",
    description: "Collaborated in a team to analyze 8.6M Yelp reviews and 160K business profiles to determine if restaurant ratings were skewed by proximity to colleges. Preprocessed and analyzed big data using Python, SQL, and Tableau, utilizing Databricks for big data processing. Implemented fuzzy matching to accurately categorize chain and non-chain restaurants, reducing error rate by 7.16%. Discovered no significant correlation between restaurant ratings and distance from universities, with a few outliers.",
    tech: ["Python", "SQL", "Tableau", "Databricks", "Data Analysis", "Fuzzy Matching", "Big Data"],
    period: "01/2022 - 05/2022", 
    githubUrl: "#",
    impact: "Processed 8.6M+ records with 7.16% error reduction"
  },
  {
    title: "5/3/1 Calculator Full Stack Project",
    description: "Developed a full-stack web application implementing the 5/3/1 strength training program calculator. Designed and implemented a responsive user interface using React for the frontend and Express for the backend. Integrated with Node.js server and utilized technologies such as Express, Cors, and Axios.",
    tech: ["React", "Node.js", "Express", "JavaScript", "Cors", "Axios"],
    period: "Oct 2023 - Present",
    githubUrl: "#",
    impact: "Built responsive full-stack application"
  }
]

function App() {
  const [userInfo, setUserInfo] = useState<any>(null)
  const [githubRepos, setGithubRepos] = useState<any[]>([])
  const [isDark, setIsDark] = useState(true)

  // Scroll animation hooks
  const experienceSection = useScrollAnimation({ threshold: 0.2 })
  const skillsSection = useScrollAnimation({ threshold: 0.2 })
  const projectsSection = useScrollAnimation({ threshold: 0.2 })
  const contactSection = useScrollAnimation({ threshold: 0.2 })
  
  // Typing animation for hero title
  const nameTyping = useTypingAnimation({ 
    text: "Kevin Galvan Serrano", 
    speed: 120, 
    delay: 800 
  })

  // Staggered animations for items
  const experienceItems = useStaggeredScrollAnimation(experiences.length)
  const skillItems = useStaggeredScrollAnimation(4) // 4 skill categories
  const projectItems = useStaggeredScrollAnimation(projects.length)
  
  // Function to get proficiency level color and label
  const getProficiencyInfo = (level: number) => {
    if (level >= 85) return { label: "Advanced", color: "text-green-500", bgColor: "bg-green-500" }
    if (level >= 75) return { label: "Proficient", color: "text-blue-500", bgColor: "bg-blue-500" }
    if (level >= 65) return { label: "Intermediate", color: "text-yellow-500", bgColor: "bg-yellow-500" }
    return { label: "Learning", color: "text-orange-500", bgColor: "bg-orange-500" }
  }
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await spark.user()
        setUserInfo(user)
        
        // Store user login for GitHub profile links
        // Additional repository data could be fetched here if needed
      } catch (error) {
        // Gracefully handle user data fetch errors
        // App will still function with fallback contact information
      }
    }
    
    fetchUserData()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.className = isDark ? 'light' : ''
  }

  // Update project URLs when userInfo is available
  const updatedProjects = useMemo(() => projects.map(project => ({
    ...project,
    githubUrl: userInfo?.login ? `https://github.com/${userInfo.login}` : "#"
  })), [userInfo?.login])

  // Memoize proficiency calculation
  const proficiencyStats = useMemo(() => {
    const allSkills = Object.values(skills).flat()
    return [
      { label: "Advanced", count: allSkills.filter(tech => tech.level >= 85).length, color: "text-green-500", bgColor: "bg-green-500/10", borderColor: "border-green-500/20" },
      { label: "Proficient", count: allSkills.filter(tech => tech.level >= 75 && tech.level < 85).length, color: "text-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
      { label: "Intermediate", count: allSkills.filter(tech => tech.level >= 65 && tech.level < 75).length, color: "text-yellow-500", bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/20" },
      { label: "Learning", count: allSkills.filter(tech => tech.level < 65).length, color: "text-orange-500", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" }
    ]
  }, [])

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
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>

      {/* Hero Section with Split Layout */}
      <main>
        <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto" aria-label="Introduction">
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
                  <span className="text-primary bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient relative">
                    {nameTyping.displayedText}
                    {nameTyping.isTyping && (
                      <span className="animate-pulse text-primary">|</span>
                    )}
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
                  <span className="font-semibold text-primary">Full-Stack Software Developer</span> with proven experience at <span className="font-semibold text-accent">NASA Ames Research Center</span> and <span className="font-semibold text-accent">TeachMeets</span>. 
                  Specialized in <span className="font-medium">React Native, Node.js, and data analytics</span>. 
                  Currently architecting scalable social platforms for educators while seeking new opportunities to create innovative solutions that drive business impact.
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
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-scale-in animate-delay-600">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-xs text-muted-foreground">Key Projects</div>
                </CardContent>
              </Card>
              <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-scale-in animate-delay-700 col-span-2">
                <CardContent className="pt-6">
                  <div className="text-lg font-bold text-green-500">Available Now</div>
                  <div className="text-xs text-muted-foreground">Ready for immediate hire</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Timeline */}
      <section ref={experienceSection.elementRef as any} className="relative px-6 py-20 bg-gradient-to-br from-card/30 to-secondary/20 backdrop-blur-sm" aria-label="Professional Experience">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${experienceSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="mb-4 text-4xl font-bold relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-primary/5 text-8xl font-bold -z-10">XP</span>
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div ref={experienceItems.containerRef as any} className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block transition-all duration-1000 delay-300 ${experienceSection.isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} style={{transformOrigin: 'top'}}></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative transition-all duration-700 ${experienceItems.visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block transition-all duration-500 ${experienceItems.visibleItems[index] ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                  
                  <Card className={`ml-0 md:ml-16 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden ${exp.highlight ? 'bg-gradient-to-br from-primary/5 to-accent/5' : 'bg-card/50'} backdrop-blur-sm`}>
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
                      
                      {exp.achievements && (
                        <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/10">
                          <div className="text-sm font-semibold text-accent mb-3 flex items-center gap-2">
                            <Star size={14} />
                            Key Achievements
                          </div>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-foreground/90 flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills Summary for Recruiters */}
      <section className="px-6 py-12 bg-gradient-to-br from-card/20 to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Technical Snapshot</h2>
            <p className="text-muted-foreground">Core competencies at a glance</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <Code size={32} className="text-primary mx-auto mb-3" />
                <div className="font-semibold text-sm">Core Languages</div>
                <div className="text-xs text-muted-foreground mt-1">Python • JavaScript • C++</div>
                <div className="text-xs text-green-500 mt-2 font-medium">85%+ Proficiency</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <Palette size={32} className="text-accent mx-auto mb-3" />
                <div className="font-semibold text-sm">Frontend Stack</div>
                <div className="text-xs text-muted-foreground mt-1">React • React Native • CSS</div>
                <div className="text-xs text-green-500 mt-2 font-medium">90%+ Proficiency</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <Database size={32} className="text-blue-500 mx-auto mb-3" />
                <div className="font-semibold text-sm">Data & Backend</div>
                <div className="text-xs text-muted-foreground mt-1">Node.js • SQL • MongoDB</div>
                <div className="text-xs text-blue-500 mt-2 font-medium">80%+ Proficiency</div>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="pt-6">
                <TrendUp size={32} className="text-green-500 mx-auto mb-3" />
                <div className="font-semibold text-sm">Growth Mindset</div>
                <div className="text-xs text-muted-foreground mt-1">Continuous Learning</div>
                <div className="text-xs text-green-500 mt-2 font-medium">Always Improving</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section with Proficiency Levels */}
      <section ref={skillsSection.elementRef as any} className="px-6 py-20" aria-label="Technical Skills">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${skillsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="mb-4 text-4xl font-bold relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-accent/5 text-8xl font-bold -z-10">SK</span>
              Skills & Proficiency
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Comprehensive technical assessment showcasing competency levels across key technologies
            </p>
          </div>
          
          <div ref={skillItems.containerRef as any} className="grid lg:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, techs], index) => {
              const icons = {
                "Programming Languages": Code,
                "Web Technologies": Palette,
                "Data & Analytics": Database,
                "Tools & Platforms": Github
              }
              const IconComponent = icons[category as keyof typeof icons] || Code
              
              return (
                <Card key={category} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-700 bg-gradient-to-br from-card/50 to-secondary/20 backdrop-blur-sm group relative overflow-hidden ${skillItems.visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <CardTitle className="text-xl">{category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-6">
                    {techs.map((tech, techIndex) => {
                      const profInfo = getProficiencyInfo(tech.level)
                      return (
                        <div key={tech.name} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="font-medium text-foreground">{tech.name}</span>
                              <Badge variant="outline" className={`text-xs ${profInfo.color} border-current`}>
                                {profInfo.label}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <TrendUp size={14} className={profInfo.color} />
                              <span className="text-sm font-medium text-muted-foreground">{tech.level}%</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Progress 
                              value={tech.level} 
                              className="h-2 bg-muted/50"
                            />
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Overall Proficiency Summary */}
          <div className={`mt-16 transition-all duration-1000 delay-500 ${skillsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">Proficiency Summary</CardTitle>
                <CardDescription className="text-base">
                  Quick assessment for technical screening
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  {proficiencyStats.map((item, index) => (
                    <div key={item.label} className={`text-center p-4 rounded-xl border ${item.bgColor} ${item.borderColor} hover:scale-105 transition-all duration-300`}>
                      <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.count}</div>
                      <div className="text-sm font-medium text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {item.label === "Advanced" ? "Production ready" : 
                         item.label === "Proficient" ? "Project ready" :
                         item.label === "Intermediate" ? "Guided work" : "Actively learning"}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section with Masonry-style Layout */}
      <section ref={projectsSection.elementRef as any} className="px-6 py-20 bg-gradient-to-br from-secondary/20 to-card/30 backdrop-blur-sm" aria-label="Featured Projects">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${projectsSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="mb-4 text-4xl font-bold relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-primary/5 text-8xl font-bold -z-10">PR</span>
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div ref={projectItems.containerRef as any} className="grid lg:grid-cols-2 gap-8">
            {updatedProjects.map((project, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-xl hover:scale-[1.02] bg-card/50 backdrop-blur-sm relative overflow-hidden ${projectItems.visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
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
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 transition-colors duration-200 bg-background/30 backdrop-blur-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {project.impact && (
                    <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="text-sm font-medium text-primary flex items-center gap-2">
                        <Star size={12} />
                        Impact: {project.impact}
                      </div>
                    </div>
                  )}
                  
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

      {/* CTA Section - Recruiters Love This */}
      <section className="px-6 py-16 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2">
                Ready to Make an Impact
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm actively seeking opportunities to join innovative teams where I can contribute my full-stack development skills and passion for creating scalable solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-card/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300">
                <Code size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Technical Excellence</h3>
                <p className="text-sm text-muted-foreground">Clean, maintainable code with modern best practices</p>
              </div>
              <div className="p-6 bg-card/50 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300">
                <Star size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">Delivered measurable improvements in previous roles</p>
              </div>
              <div className="p-6 bg-card/50 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                <Database size={32} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Full-Stack Ready</h3>
                <p className="text-sm text-muted-foreground">Frontend to backend, mobile to web development</p>
              </div>
            </div>
            
            <div className="pt-8">
              <Button size="lg" className="gap-2 hover:scale-105 transition-all duration-300 animate-glow shadow-xl px-8 py-4 text-lg relative overflow-hidden group" onClick={() => window.open('mailto:kevin.galvanserrano@gmail.com')}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <EnvelopeSimple size={20} className="relative z-10" />
                <span className="relative z-10">Schedule an Interview</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Education Section */}
      <section ref={contactSection.elementRef as any} className="px-6 py-20" aria-label="Education and Contact">
        </main>
        <div className="max-w-6xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-16 transition-all duration-1000 ${contactSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Education */}
            <div className={`transition-all duration-700 delay-200 ${contactSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="mb-8 text-3xl font-bold relative">
                Education
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mt-4 rounded-full"></div>
              </h2>
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card/50 to-secondary/20 backdrop-blur-sm">
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
            <div className={`transition-all duration-700 delay-400 ${contactSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="mb-8 text-3xl font-bold relative">
                Let's work together
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary mt-4 rounded-full"></div>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    <span className="font-semibold text-primary">Experienced software developer</span> with <span className="font-semibold text-accent">NASA internship</span> and current <span className="font-semibold text-accent">mobile app development experience</span>. 
                    Ready to contribute technical expertise and problem-solving skills to your team.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 font-medium">Available immediately</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-600 font-medium">Open to relocation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-purple-600 font-medium">Full-time preferred</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-orange-600 font-medium">Remote friendly</span>
                    </div>
                  </div>
                </div>
              
                <div className="space-y-4">
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
      <footer className="px-6 py-12 border-t backdrop-blur-sm bg-gradient-to-r from-card/30 to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Quick Contact */}
            <div>
              <h3 className="font-semibold mb-4 text-primary">Quick Contact</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <EnvelopeSimple size={14} />
                  kevin.galvanserrano@gmail.com
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} />
                  (408) 504-5667
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={14} />
                  San Jose, CA
                </div>
              </div>
            </div>
            
            {/* Current Status */}
            <div>
              <h3 className="font-semibold mb-4 text-accent">Current Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600">Actively seeking opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-600">Available for interviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-600">Can start immediately</span>
                </div>
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Professional Links</h3>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="p-2" onClick={() => window.open('https://linkedin.com/in/kevingalvanserrano')}>
                  <LinkedinLogo size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="p-2" onClick={() => window.open(userInfo?.login ? `https://github.com/${userInfo.login}` : 'https://github.com/kevingalvanserrano')}>
                  <Github size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="p-2" onClick={() => window.open('mailto:kevin.galvanserrano@gmail.com')}>
                  <EnvelopeSimple size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-muted-foreground border-t pt-8 animate-fade-in">
            <p>© 2024 Kevin Galvan Serrano. Built with React, TypeScript, and Tailwind CSS.</p>
            <p className="mt-2 text-xs">Ready to contribute to your team's success • Let's connect!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App