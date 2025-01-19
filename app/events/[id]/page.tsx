"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, Users, Globe, Phone, Mail } from "lucide-react"

// This would typically come from a database or API
const events = [
  {
    id: 1,
    title: "Swachh Bharat Abhiyan",
    organization: "Clean India Foundation",
    date: "2024-08-15",
    time: "9:00 AM - 2:00 PM",
    location: "Multiple locations across India",
    category: "Environment",
    description: "Join the nationwide cleanliness drive to commemorate Independence Day. This event aims bring together volunteers from all walks of life clean up public spaces, raise awareness about proper waste disposal, and promote a cleaner, greener India.",
    avatar: "/placeholder.svg?height=40&width=40",
    organizer: {
      name: "Amit Patel",
      phone: "+91 98765 43210",
      email: "amit@cleanindiafoundation.org"
    },
    requiredVolunteers: 1000,
    website: "https://www.cleanindiafoundation.org",
    tasks: [
      "Litter collection in designated areas",
      "Segregation of collected waste",
      "Distribution of awareness materials",
      "Conducting short educational sessions for locals"
    ]
  },
  // ... other events
]

const categoryColors: { [key: string]: string } = {
  Environment: "bg-green-100 text-green-800",
  Healthcare: "bg-red-100 text-red-800",
  Education: "bg-blue-100 text-blue-800",
  Agriculture: "bg-yellow-100 text-yellow-800",
}

export default function EventDetailPage() {
  const params = useParams()
  const eventId = Number(params.id)
  const event = events.find(e => e.id === eventId)

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={event.avatar} alt={event.organization} />
                <AvatarFallback>{event.organization.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl text-gray-800">{event.title}</CardTitle>
                <p className="text-gray-600">{event.organization}</p>
              </div>
            </div>
            <Badge className={`${categoryColors[event.category]} font-semibold`}>{event.category}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <span>{event.requiredVolunteers} volunteers needed</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="h-5 w-5 mr-2" />
                <a href={event.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{event.website}</a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Organizer Contact</h3>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <span>{event.organizer.name}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>{event.organizer.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>{event.organizer.email}</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Volunteer Tasks</h3>
            <ul className="list-disc list-inside text-gray-600">
              {event.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Register for this Event</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

