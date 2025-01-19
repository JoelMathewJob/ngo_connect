"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Bell, Calendar, CheckCircle, Trophy } from "lucide-react"

// Mock data - in a real application, this would come from an API
const mockData = {
  upcomingEvents: [
    { id: 1, name: "Beach Cleanup", date: "2024-03-15", organization: "OceanGuard" },
    { id: 2, name: "Food Drive", date: "2024-03-22", organization: "LocalFoodBank" },
  ],
  matchedNGOs: [
    { id: 1, name: "GreenEarth", matchPercentage: 85 },
    { id: 2, name: "EducateAll", matchPercentage: 78 },
  ],
  activityHistory: [
    { id: 1, event: "Tree Planting", hours: 4, date: "2024-02-28" },
    { id: 2, event: "Senior Care Visit", hours: 2, date: "2024-03-05" },
  ],
  skills: [
    { name: "Environmental Conservation", level: 70 },
    { name: "Teaching", level: 50 },
    { name: "Event Planning", level: 30 },
  ],
  milestones: [
    { id: 1, name: "10 Hours Volunteered", completed: true },
    { id: 2, name: "5 Events Attended", completed: false },
  ]
}

export default function VolunteerDashboard() {
  const [notifications, setNotifications] = useState(2)

  useEffect(() => {
    // Simulating real-time notifications
    const interval = setInterval(() => {
      setNotifications(prev => Math.min(prev + 1, 5))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Volunteer Dashboard</h1>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            {mockData.upcomingEvents.map(event => (
              <div key={event.id} className="mb-4 last:mb-0">
                <p className="font-semibold">{event.name}</p>
                <p className="text-sm text-gray-500">{event.date} - {event.organization}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Matched NGOs</CardTitle>
          </CardHeader>
          <CardContent>
            {mockData.matchedNGOs.map(ngo => (
              <div key={ngo.id} className="mb-4 last:mb-0">
                <p className="font-semibold">{ngo.name}</p>
                <Progress value={ngo.matchPercentage} className="mt-2" />
                <p className="text-sm text-gray-500 mt-1">{ngo.matchPercentage}% Match</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity History</CardTitle>
          </CardHeader>
          <CardContent>
            {mockData.activityHistory.map(activity => (
              <div key={activity.id} className="mb-4 last:mb-0">
                <p className="font-semibold">{activity.event}</p>
                <p className="text-sm text-gray-500">{activity.date} - {activity.hours} hours</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Progression</CardTitle>
          </CardHeader>
          <CardContent>
            {mockData.skills.map(skill => (
              <div key={skill.name} className="mb-4 last:mb-0">
                <p className="font-semibold">{skill.name}</p>
                <Progress value={skill.level} className="mt-2" />
                <p className="text-sm text-gray-500 mt-1">Level: {skill.level}%</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Volunteering Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            {mockData.milestones.map(milestone => (
              <div key={milestone.id} className="flex items-center mb-4 last:mb-0">
                {milestone.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                )}
                <p className={milestone.completed ? "line-through" : ""}>{milestone.name}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

