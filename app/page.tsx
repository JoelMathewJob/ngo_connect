"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Briefcase, Users, TrendingUp, ArrowRight, Book, Heart, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { ImpactStats } from "@/components/impact-stats"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-orange-500 to-pink-500 " style={{backgroundImage:'url("/assets/home.png")'}}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Seva Sangam: Unite for Change
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-100 md:text-xl">
                Join our platform to find meaningful volunteer opportunities and connect with NGOs across India that match your interests and skills.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-sm space-y-2"
            >
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                <Input
                  className="pl-8 bg-white text-black"
                  placeholder="Search for NGOs or opportunities..."
                  type="search"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-x-4"
            >
              <Button size="lg" className="bg-white text-orange-600 hover:bg-zinc-100">I'm a Volunteer</Button>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-zinc-100">I'm a NGO</Button>
              {/* <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600">I'm an NGO</Button> */}
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: "Find Opportunities", description: "Discover volunteer positions that match your skills and interests across India." },
              { icon: Users, title: "Connect with NGOs", description: "Engage directly with organizations making a difference in your local community and beyond." },
              { icon: TrendingUp, title: "Track Your Impact", description: "Monitor your volunteer hours and see the real-world impact of contributions to society." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-orange-50 border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <item.icon className="h-12 w-12 mb-4 text-orange-500" />
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
        <div className="container px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800"
          >
            Featured Opportunities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Rural Education Drive", org: "Shiksha Foundation", location: "Rajasthan", category: "Education" },
              { title: "Clean Ganga Initiative", org: "EcoWarriors", location: "Uttar Pradesh", category: "Environment" },
              { title: "Women Empowerment Workshop", org: "Shakti NGO", location: "Maharashtra", category: "Social Welfare" },
              { title: "Digital Literacy Campaign", org: "TechForAll", location: "Karnataka", category: "Technology" },
              { title: "Organic Farming Project", org: "GreenHarvest", location: "Punjab", category: "Agriculture" },
              { title: "Street Children Support", org: "Bal Asha Trust", location: "Delhi", category: "Child Welfare" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="flex flex-col justify-between h-full bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-orange-100 text-orange-700">{item.category}</Badge>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mb-4">Join us in making a difference through this impactful initiative.</p>
                    <div className="flex items-center">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={`/placeholder.svg?height=36&width=36`} alt="Avatar" />
                        <AvatarFallback>{item.org.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-800">{item.org}</p>
                        <p className="text-sm text-gray-500">{item.location}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardContent className="p-6 pt-0">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800"
          >
            Our Impact Across India
          </motion.h2>
          <ImpactStats />
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
        <div className="container px-4 md:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Book, title: "Skill Development Workshops", description: "Enhance your skills with our curated workshops tailored for effective volunteering." },
              { icon: Heart, title: "NGO Capacity Building", description: "We provide resources and training to help NGOs maximize their impact reach." },
              { icon: Globe, title: "Virtual Volunteering Platform", description: "Contribute to causes from anywhere in India through our digital volunteering opportunities." },
              { icon: Users, title: "Community Engagement Programs", description: "Participate in local community-driven initiatives and foster social cohesion." },
              { icon: TrendingUp, title: "Impact Assessment Tools", description: "Measure and showcase the real-world impact of your volunteering efforts." },
              { icon: Briefcase, title: "Corporate Social Responsibility (CSR) Partnerships", description: "We connect corporations with NGOs for impactful CSR collaborations." }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <service.icon className="h-12 w-12 mb-4 text-orange-500" />
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">Join Our Community Today</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your journey of making a difference in India. Whether you're a volunteer looking to contribute or an NGO seeking support, we're here to connect you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-sm space-y-2"
            >
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white">Subscribe</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

