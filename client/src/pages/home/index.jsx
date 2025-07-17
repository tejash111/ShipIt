import React from 'react'
import NavBar from '../../components/NavBar'
import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import {
  CheckCircle2,
  Calendar,
  Target,
  TrendingUp,
  Users,
  Zap,
  ArrowRight,
  Star,
  Shield,
  Sparkles,
  Circle
} from 'lucide-react'
import AuthPage from '../authPage'

const Home = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-black" />,
      title: "Smart Task Management",
      description: "Organize tasks with intelligent categorization and priority levels"
    },
    {
      icon: <Calendar className="w-8 h-8 text-black" />,
      title: "Deadline Tracking",
      description: "Never miss a deadline with our advanced reminder system"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-black" />,
      title: "Progress Analytics",
      description: "Track your productivity with detailed insights and reports"
    },
    {
      icon: <Users className="w-8 h-8 text-black" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with shared workspaces"
    },
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      title: "Lightning Fast",
      description: "Built for speed with instant sync across all devices"
    },
    {
      icon: <Shield className="w-8 h-8 text-black" />,
      title: "Secure & Private",
      description: "Your data is protected with enterprise-grade security"
    }
  ]

  const stats = [
    { number: "1+", label: "Active Users" },
    { number: "10+", label: "Tasks Completed" },
    { number: "70.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      content: "ShipIt has transformed how our team manages projects. The interface is intuitive and the analytics are game-changing.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Developer",
      company: "StartupXYZ",
      content: "Finally, a task manager that actually helps me stay organized. The priority system is exactly what I needed.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Freelancer",
      company: "Creative Studio",
      content: "I've tried dozens of task managers, but ShipIt is the only one that actually increased my productivity.",
      rating: 5
    }
  ]

  return (
    <div className="bg-[url('/bg.jpg')] min-h-screen ">
      <div className="fixed top-0 left-0 right-0 z-50 p-1 rounded-2xl mt-2 ml-3 mr-3  border border-gray-100 shadow-2xl backdrop-blur-[2px]">
        <NavBar />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className=""></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-black" />
              The Future of Task Management
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 leading-tight">
              ShipIt
            </h1>

            <p className="text-2xl md:text-3xl text-gray-800 mb-8 leading-relaxed">
              Transform your productivity with the most intuitive task management platform
            </p>

            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Organize tasks, track progress, and achieve your goals with our powerful yet simple task management system.
              Built for teams and individuals who want to get more done.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-black hover:bg-gray-900 text-white px-8 py-4 text-lg font-semibold border border-black">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-gray-300 border mx-8 rounded-2xl backdrop-blur-[6px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Everything you need to stay organized
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Powerful features designed to help you manage tasks efficiently and boost your productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="  shadow-lg hover:shadow-md transition-all duration-300 group backdrop-blur-[6px]">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      
      <section className="py-17 ">
      <hr className='mt-3 shadow-lg '/>
        <div className="container mx-auto px-4 mt-3 backdrop-blur-[8px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                See ShipIt in action
              </h2>
              <p className="text-xl text-black mb-8 leading-relaxed">
                Experience the intuitive interface that makes task management effortless.
                From simple to-do lists to complex project workflows, ShipIt adapts to your needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                  <span className="text-black">Drag & drop task organization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                  <span className="text-black">Real-time collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                  <span className="text-black">Advanced analytics & insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-black" />
                  <span className="text-black">Cross-platform sync</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-black" />
                      <span className="text-gray-800">Complete project proposal</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Circle className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-800">Review code changes</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Circle className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-800">Team meeting at 3 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-3 shadow-2xl'/>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-gray-700">
              See what our users have to say about ShipIt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="  shadow-lg backdrop-blur-[6px]">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-gray-800 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-700">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ShipIt</h3>
              <p className="text-gray-400">
                The future of task management is here. Organize, track, and achieve more.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Integrations</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Community</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShipIt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home