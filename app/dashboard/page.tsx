"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Bell, Calendar, CheckCircle, Trophy, Clock, MapPin, Book, Users, Award, TrendingUp } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock data - in a real application, this would come from an API
const mockData = {
  upcomingEvents: [
    { id: 1, name: "Beach Cleanup", date: "2024-07-15", organization: "CleanShores India", location: "Mumbai, Maharashtra" },
    { id: 2, name: "Literacy Workshop", date: "2024-07-22", organization: "Teach For India", location: "Delhi NCR" },
  ],
  matchedNGOs: [
    { id: 1, name: "GreenEarth India", matchPercentage: 85 },
    { id: 2, name: "EducateAll Foundation", matchPercentage: 78 },
  ],
  activityHistory: [
    { id: 1, event: "Mangrove Plantation", hours: 4, date: "2024-06-28", location: "Sundarbans, West Bengal" },
    { id: 2, name: "Elder Care Visit", hours: 2, date: "2024-07-05", location: "Bengaluru, Karnataka" },
  ],
  skills: [
    { name: "Environmental Conservation", level: 70 },
    { name: "Teaching", level: 50 },
    { name: "Event Planning", level: 30 },
  ],
  milestones: [
    { id: 1, name: "50 Hours Volunteered", completed: true },
    { id: 2, name: "10 Events Attended", completed: false },
  ],
  impactMetrics: {
    totalHours: 78,
    eventsAttended: 8,
    peopleImpacted: 250,
  },
  learningProgress: [
    { course: "Effective Communication", progress: 75 },
    { course: "Project Management Basics", progress: 40 },
  ],
}

export default function VolunteerDashboard() {
  const [notifications, setNotifications] = useState(2)
  const [timeRange, setTimeRange] = useState("This Month")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Volunteer Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="This Week">This Week</SelectItem>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="This Year">This Year</SelectItem>
              <SelectItem value="All Time">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="relative">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
            {notifications > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2">
                {notifications}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-blue-500" />
                Impact Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Hours Volunteered</p>
                  <p className="text-3xl font-bold text-blue-600">{mockData.impactMetrics.totalHours}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Events Attended</p>
                  <p className="text-3xl font-bold text-green-600">{mockData.impactMetrics.eventsAttended}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">People Impacted</p>
                  <p className="text-3xl font-bold text-purple-600">{mockData.impactMetrics.peopleImpacted}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-green-500" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mockData.upcomingEvents.map(event => (
                <div key={event.id} className="mb-4 last:mb-0">
                  <p className="font-semibold text-gray-800">{event.name}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <p>{new Date(event.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <p>{event.location}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <Users className="mr-2 h-5 w-5 text-purple-500" />
                Matched NGOs
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mockData.matchedNGOs.map(ngo => (
                <div key={ngo.id} className="mb-4 last:mb-0">
                  <p className="font-semibold text-gray-800">{ngo.name}</p>
                  <Progress value={ngo.matchPercentage} className="mt-2" />
                  <p className="text-sm text-gray-500 mt-1">{ngo.matchPercentage}% Match</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-orange-500" />
                Activity History
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mockData.activityHistory.map(activity => (
                <div key={activity.id} className="mb-4 last:mb-0">
                  <p className="font-semibold text-gray-800">{activity.event}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <p>{new Date(activity.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <p>{activity.hours} hours</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <p>{activity.location}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <Award className="mr-2 h-5 w-5 text-yellow-500" />
                Skill Progression
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mockData.skills.map(skill => (
                <div key={skill.name} className="mb-4 last:mb-0">
                  <p className="font-semibold text-gray-800">{skill.name}</p>
                  <Progress value={skill.level} className="mt-2" />
                  <p className="text-sm text-gray-500 mt-1">Level: {skill.level}%</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-indigo-500" />
                Volunteering Milestones
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mockData.milestones.map(milestone => (
                <div key={milestone.id} className="flex items-center mb-4 last:mb-0">
                  {milestone.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  ) : (
                    <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                  )}
                  <p className={milestone.completed ? "line-through text-gray-500" : "text-gray-800"}>{milestone.name}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 flex items-center">
                <Book className="mr-2 h-5 w-5 text-teal-500" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mockData.learningProgress.map((course, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <p className="font-semibold text-gray-800">{course.course}</p>
                  <Progress value={course.progress} className="mt-2" />
                  <p className="text-sm text-gray-500 mt-1">{course.progress}% Completed</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

