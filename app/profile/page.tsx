"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Award, Briefcase, GraduationCap, Heart, Users, Mail, Phone } from "lucide-react"

const userProfile = {
  name: "Jane Doe",
  avatar: "/avatars/04.png",
  bio: "Passionate about making a difference in my community through volunteering.",
  location: "Mumbai, Maharashtra",
  email: "jane.doe@example.com",
  phone: "+91 98765 43210",
  joinedDate: "January 2023",
  totalHours: 120,
  skills: [
    { name: "Teaching", level: 80 },
    { name: "Event Planning", level: 60 },
    { name: "Fundraising", level: 40 },
  ],
  badges: ["100 Hours", "5 Events", "Top Contributor"],
  interests: ["Education", "Environment", "Child Welfare"],
  upcomingEvents: [
    { id: 1, name: "Community Garden Project", date: "2024-07-20", time: "9:00 AM - 1:00 PM", location: "Green Park, Mumbai" },
    { id: 2, name: "Literacy Workshop", date: "2024-08-05", time: "2:00 PM - 5:00", location: "Public Library, Mumbai" },
  ],
  pastEvents: [
    { id: 3, name: "Beach Cleanup", date: "2024-06-15", hours: 4, location: "Juhu Beach, Mumbai" },
    { id: 4, name: "Food Bank Volunteer", date: "2024-05-22", hours: 3, location: "Mumbai Food Bank" },
  ],
  education: [
    { degree: "Bachelor of Arts in Sociology", institution: "University of Mumbai", year: "2020" },
    { degree: "Certificate in Non-Profit Management", institution: "NGO Leadership Institute", year: "2022" },
  ],
  workExperience: [
    { position: "Volunteer Coordinator", organization: "Green Earth NGO", duration: "2021 - Present" },
    { position: "Teaching Assistant", organization: "Mumbai Public Schools", duration: "2019 - 2020" },
  ],
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mb-8">
          <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6 pt-6">
            <Avatar className="h-32 w-32">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback>{userProfile.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left flex-grow">
              <h1 className="text-3xl font-bold mb-2 text-gray-800">{userProfile.name}</h1>
              <p className="text-gray-600 mb-4">{userProfile.bio}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {userProfile.location}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined {userProfile.joinedDate}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {userProfile.totalHours} hours volunteered
                </Badge>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {userProfile.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="bg-yellow-100">
                    <Award className="h-4 w-4 mr-1 text-yellow-500" />
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {userProfile.email}
              </Button>
              <Button variant="outline" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {userProfile.phone}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Volunteer Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                  {userProfile.upcomingEvents.map((event) => (
                    <div key={event.id} className="mb-4 last:mb-0 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-lg text-gray-800">{event.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="past">
                  {userProfile.pastEvents.map((event) => (
                    <div key={event.id} className="mb-4 last:mb-0 p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold text-lg text-gray-800">{event.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mt-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.hours} hours
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              {userProfile.skills.map((skill, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {userProfile.interests.map((interest, index) => (
                  <Badge key={index} variant="secondary">
                    <Heart className="h-4 w-4 mr-1 text-red-500" />
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Education</CardTitle>
            </CardHeader>
            <CardContent>
              {userProfile.education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-blue-500" />
                    <span className="font-medium text-gray-700">{edu.degree}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{edu.institution}, {edu.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              {userProfile.workExperience.map((exp, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-green-500" />
                    <span className="font-medium text-gray-700">{exp.position}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{exp.organization}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

