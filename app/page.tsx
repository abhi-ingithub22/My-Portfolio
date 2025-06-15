"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Code,
  Briefcase,
  User,
  Home,
  FolderOpen,
  Trophy,
  GraduationCap,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "publications", "achievements", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const skills = {
    languages: ["JavaScript", "C", "C++", "SQL", "Python", "TypeScript"],
    frameworks: ["React Native", "React.js", "Node.js", "Express.js", "Next.js"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "VS Code", "Postman", "Firebase"],
    ai: ["Machine Learning", "Natural Language Processing", "TensorFlow", "Scikit-learn"],
  }

  const projects = [
    {
      id: 1,
      title: "AMICA AI",
      description:
        "Developed an intelligent chatbot using React Native. It is a multi-screen chatbot application with user authentication and real-time AI interactions that offers a conversational UI for a digital friend experience.",
      category: "Mobile",
      technologies: ["React Native", "JavaScript", "API", "Gemini"],
      image: "/ProjectProfiles/AMICA AI.webp?height=200&width=300",
      github: "https://github.com/abhi-ingithub22/AMICA-AI",
      demo: "https://vercel.com/abhirup-deys-projects/amica-ai/5pVLMvRrvG8dJi82yfnkJtGtD5Vz",
    },
    {
      id: 2,
      title: "Predicting Market Share Patterns using LSTM",
      description: "An LSTM-based market share forecasting app using TypeScript, Tailwind CSS, and Python to generate accurate, insight-driven time-series predictions.",
      category: "ai",
      technologies: ["Python", "LSTM", "Pandas", "NumPy", "TypeScript", "Tailwind CSS"],
      image: "/ProjectProfiles/LSTM.jpg?height=200&width=300",
      github: "https://github.com/abhi-ingithub22/Predicting-Market-Share-Patterns-using-LSTM",
      demo: "https://predicting-market-share-patterns-us.vercel.app/#/",
    },
    {
      id: 3,
      title: "Guess The Number Application",
      description:
        "A React Native game app featuring number guessing, input validation (1–99), error handling, and optional binary search logic for intelligent guesses.",
      category: "mobile",
      technologies: ["React Native", "Node.js", "JavaScript"],
      image: "/ProjectProfiles/GuessTheNumber.png?height=200&width=300",
      github: "https://github.com/abhi-ingithub22/Guess-the-Number-game",
      demo: "https://vercel.com/abhirup-deys-projects/guess-the-number-game",
    },
    {
      id: 4,
      title: "ASK SURE!",
      description: "A desktop app using cursor.ai and NLP Cloud to deliver accurate answers for physics questions, collaborating on API integration and project flow design.",
      category: "web",
      technologies: ["NLP Cloud", "Python", "TKinter", "API"],
      image: "/ProjectProfiles/ASK SURE!.jpg?height=200&width=300",
      github: "#",
      demo: "#",
    },
  ]

  const publications = [
    {
      title: "Predicting Market Share Patterns using LSTM",
      journal: "International Conference on Recent Trends in Engineering, Technology and Management (ICRTETM)",
      year: "2025",
      status: "Certified",
    },
    {
      title: "Predicting Market Share Patterns using LSTM",
      journal: "International Conference on Recent Trends in Engineering, Technology and Management (ICRTETM)",
      year: "2025",
      status: "Publication Under Review",
    },
  ]

  const achievements = [
    {
      title: "Student Volunteer",
      organization: "National Service Scheme : NSS club at SRM Institute of Science and Technology",
      year: "2022-2023",
      description: "Volunteered in many events representing NSS club for two consecutive semesters.",
    },
    {
      title: "Certified in C/C++",
      organization: "SRM Axis",
      year: "2022",
      description: "Received a certification in C and C++ from college.",
    },
    {
      title: "Certification of Presentation",
      organization: "5th International Conference Paper Presentation",
      year: "2025",
      description: "Received Certificate of presentation for major project by the ICRTETM publisher organized by Suguna College of Engineering",
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "publications", label: "Publications", icon: BookOpen },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ]

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };
    try {
      const res = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSending(false);
      if (res.ok) {
        toast({
          title: "Your message is sent successfully!",
        });
        form.reset();
      } else {
        toast({
          title: "Your message failed to send successfully!",
          variant: "destructive",
        });
      }
    } catch (err) {
      setSending(false);
      toast({
        title: "Your message failed to send successfully!",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-black text-white" : "bg-white text-black"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? "bg-black/90 border-blue-500/20" : "bg-white/90 border-blue-600/20"} backdrop-blur-md border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-blue-500 bg-blue-500/10"
                      : darkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={toggleDarkMode} className="p-2">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${darkMode ? "bg-black border-blue-500/20" : "bg-white border-blue-600/20"} border-t`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-500 bg-blue-500/10"
                        : darkMode
                          ? "text-gray-300 hover:text-blue-400"
                          : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-500">Abhirup Dey</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
               IT Engineer, Full-Stack Developer & A Passionate Learner
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-400">
              Passionate about building innovative solutions with AI, machine learning, and modern web technologies.
              Recently completed my B.Tech in Information Technology with a 9.21 CGPA from SRM Institute of Science and Technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg"
              >
                View My Work
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg"
              >
                <a href="/MYResume/ABHIRUP-DEY-Resume-2025.pdf" download>
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/AboutMe/AD.PNG?height=400&width=400"
                alt="Abhirup Dey"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm a dedicated computer science enthusiast, I pursued my B-Tech degree in Information Technology at SRM Institute of Science and Technology, maintaining a
                stellar 9.21 GPA while pursuing my passion for technology and innovation.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                My expertise spans across full-stack development, artificial intelligence, and machine learning. I
                specialize in building scalable applications using modern technologies like React Native, JavaScript,
                and various AI frameworks.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I'm particularly interested in the intersection of AI and practical applications, having worked on
                projects involving LSTM-based forecasting, intelligent chatbots, and predictive analytics.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-blue-500" size={20} />
                  <span>India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-blue-500" size={20} />
                  <span>2021-2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-blue-500" size={20} />
                  <span>9.21 GPA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="text-blue-500" size={20} />
                  <span>Open to Work</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                  <CardHeader>
                    <CardTitle className="text-blue-500 capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-md mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="ai">AI/ML</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full hover:shadow-lg transition-shadow ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{publication.journal}</p>
                        <Badge
                          variant={publication.status === "Published" ? "default" : "secondary"}
                          className={publication.status === "Published" ? "bg-blue-500" : ""}
                        >
                          {publication.status}
                        </Badge>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className="text-lg font-medium text-blue-500">{publication.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Trophy className="text-blue-500" size={24} />
                      <span className="text-sm text-blue-500 font-medium">{achievement.year}</span>
                    </div>
                    <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {achievement.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 px-4 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto flex flex-col gap-8"
          >
            {/* First Education Card */}
            <Card className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Bachelor of Technology in Information Technology</h3>
                    <p className="text-xl text-blue-500 font-semibold">SRM Institute of Science and Technology</p>
                    <p className="text-gray-600 dark:text-gray-400">Chennai, Tamil Nadu, India</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-lg font-semibold">2021 - 2025</p>
                    <p className="text-2xl font-bold text-blue-500">GPA: 9.21/10</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-500">Relevant Coursework:</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Data Structures and Algorithms</li>
                      <li>• Compiler Design</li>
                      <li>• Database Management Systems</li>
                      <li>• Software Engineering</li>
                      <li>• Computer Networks</li>
                      <li>• Artificial Intelligence</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-500">Academic Highlights:</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Volunteered in many college events</li>
                      <li>• Maintained 9.0+ GPA in consecutive semesters</li>
                      <li>• Active in National Service Scheme (NSS) club</li>
                      <li>• Research publications</li>
                      <li>• Project leadership roles</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Second Education Card */}
            <Card className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Higher Secondary Education (Class XII)</h3>
                    <p className="text-xl text-blue-500 font-semibold">Noonmati Public School</p>
                    <p className="text-gray-600 dark:text-gray-400">Guwahati, Assam, India</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-lg font-semibold">2019 - 2020</p>
                    <p className="text-2xl font-bold text-blue-500">Percentage: 68.80%</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-500">Subjects:</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Physics</li>
                      <li>• Chemistry</li>
                      <li>• Mathematics</li>
                      <li>• Computer Science</li>
                      <li>• English</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-500">Highlights:</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Member of Science Club</li>
                      <li>• Participated in State Level Olympiads</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Third Education Card */}
            <Card className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Secondary Education (Class X)</h3>
                    <p className="text-xl text-blue-500 font-semibold">Don Bosco Senior Secondary School</p>
                    <p className="text-gray-600 dark:text-gray-400">Guwahati, Assam, India</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-lg font-semibold">2017 - 2018</p>
                    <p className="text-2xl font-bold text-blue-500">Percentage: 88.86%</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-500">Subjects:</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Mathematics</li>
                      <li>• Science</li>
                      <li>• English</li>
                      <li>• Social Science</li>
                      <li>• Hindi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-500">Highlights:</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Participated in inter school drama and music competition</li>
                      <li>• Was a member of School Club called Bosco Beats</li>
                      <li>• Participated in District Level Science Fair</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
              Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">deyyabhi2001@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+91 70990 26913</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/abhi-ingithub22" target="_blank" rel="noopener noreferrer">
                    <Github size={20} className="mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/abhirup-dey-92287725b/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} className="mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSendMessage}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <Input id="firstName" name="firstName" placeholder="Your Name" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <Input id="lastName" name="lastName" placeholder="Your Surname" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="yourname123@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input id="subject" name="subject" placeholder="Project Collaboration" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea id="message" name="message" placeholder="Tell me about your project or opportunity..." rows={5} required />
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-600" type="submit" disabled={sending}>
                      {sending ? "Message is Sending" : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 border-t ${darkMode ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-200"}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Abhirup Dey. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
