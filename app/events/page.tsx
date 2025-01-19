"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Calendar, Clock, MapPin, Filter } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import Link from "next/link"

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
    description: "Join the nationwide cleanliness drive to commemorate Independence Day.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    title: "Rural Health Camp",
    organization: "Arogya Seva",
    date: "2024-09-05",
    time: "8:00 AM - 5:00 PM",
    location: "Rajasthan Villages",
    category: "Healthcare",
    description: "Provide basic health check-ups and awareness in remote villages of Rajasthan.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    title: "Digital Literacy Workshop",
    organization: "Tech for Bharat",
    date: "2024-07-20",
    time: "10:00 AM - 4:00 PM",
    location: "Community Centers in Mumbai, Maharashtra",
    category: "Education",
    description: "Teach basic computer and internet skills to underprivileged communities.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    title: "Mangrove Plantation Drive",
    organization: "Coastal Conservation Society",
    date: "2024-08-10",
    time: "7:00 AM - 12:00 PM",
    location: "Sundarbans, West Bengal",
    category: "Environment",
    description: "Help restore mangrove forests to protect coastal areas from erosion.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    title: "Street Children Education Program",
    organization: "Prayas JAC Society",
    date: "Every Saturday",
    time: "3:00 PM - 6:00",
    location: "Delhi NCR",
    category: "Education",
    description: "Provide basic education and life skills to street children in Delhi NCR.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    title: "Organic Farming Workshop",
    organization: "Sustainable Agriculture India",
    date: "2024-09-15",
    time: "9:00 AM - 3:00 PM",
    location: "Various farms in Punjab",
    category: "Agriculture",
    description: "Learn and practice organic farming techniques to promote sustainable agriculture.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

const categoryColors: { [key: string]: string } = {
  Environment: "bg-green-100 text-green-800",
  Healthcare: "bg-red-100 text-red-800",
  Education: "bg-blue-100 text-blue-800",
  Agriculture: "bg-yellow-100 text-yellow-800",
  "Women Empowerment": "bg-purple-100 text-purple-800",
  "Child Welfare": "bg-pink-100 text-pink-800",
  "Elder Care": "bg-orange-100 text-orange-800",
}

const locations = Array.from(new Set(events.map(event => event.location)))
const categories = Array.from(new Set(events.map(event => event.category)))

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState<string | undefined>()
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>()

  const filteredEvents = events.filter(event => 
    (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (locationFilter === "all" || !locationFilter || event.location === locationFilter) &&
    (categoryFilter === "all" || !categoryFilter || event.category === categoryFilter)
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Upcoming Events</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            className="pl-8"
            placeholder="Search for events..."
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Events</SheetTitle>
              <SheetDescription>
                Refine your search using the filters below.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Select onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        <Badge className={`${categoryColors[category]}`}>{category}</Badge>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="flex flex-col h-full">
            <Link href={`/events/${event.id}`} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={event.avatar} alt={event.organization} />
                    <AvatarFallback>{event.organization.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl text-gray-800">{event.title}</CardTitle>
                    <Badge className={`${categoryColors[event.category]} font-semibold mt-1`}>{event.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
              <CardContent className="pt-0">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Register</Button>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

