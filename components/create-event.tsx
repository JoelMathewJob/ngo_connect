"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Plus, Edit, Trash2 } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader } from "@/components/ui/loader"

// Mock data
const mockEvents = [
  {
    id: 1,
    name: "Annual Fundraiser",
    date: "2024-04-15",
    time: "18:00 - 22:00",
    location: "Mumbai Community Center",
    category: "Fundraising",
    volunteers: 20,
    description: "Our biggest fundraising event of the year."
  },
  {
    id: 2,
    name: "Community Outreach",
    date: "2024-05-01",
    time: "09:00 - 17:00",
    location: "Various locations in Delhi",
    category: "Outreach",
    volunteers: 15,
    description: "Reaching out to underprivileged communities."
  },
]

const categories = ["Fundraising", "Outreach", "Education", "Environment", "Health"]

export default function NGOEventsPage() {
  const [events, setEvents] = useState(mockEvents)
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentEvent, setCurrentEvent] = useState<any>(null)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (create or update event)
    setIsDialogOpen(false)
    setCurrentEvent(null)
  }

  const handleDelete = (id: number) => {
    // Handle event deletion
    setEvents(events.filter(event => event.id !== id))
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        {/* <h1 className="text-3xl font-bold">NGO Events</h1> */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => setCurrentEvent(null)}>
              <Plus className="mr-2 h-4 w-4" /> Create Event
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{currentEvent ? 'Edit Event' : 'Create Event'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Event Name</Label>
                <Input id="name" defaultValue={currentEvent?.name} required />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" defaultValue={currentEvent?.date} required />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" defaultValue={currentEvent?.time} required />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue={currentEvent?.location} required />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select defaultValue={currentEvent?.category}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="volunteers">Number of Volunteers Needed</Label>
                <Input id="volunteers" type="number" defaultValue={currentEvent?.volunteers} required />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" defaultValue={currentEvent?.description} required />
              </div>
              <Button type="submit">{currentEvent ? 'Update' : 'Create'} Event</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <span>{event.name}</span>
                <Badge>{event.category}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  <span>{event.volunteers} volunteers needed</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{event.description}</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm" onClick={() => {
                  setCurrentEvent(event)
                  setIsDialogOpen(true)
                }}>
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(event.id)}>
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

