"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Search, MapPin, Calendar, Clock, Filter } from "lucide-react"
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
import Link from "next/link"
import { Loader } from "@/components/ui/loader"

const opportunities = [
  {
    id: 1,
    title: "Rural Education Initiative",
    organization: "Teach For India",
    location: "Various villages in Maharashtra",
    date: "Ongoing",
    duration: "3 months",
    category: "Education",
    description: "Volunteer to teach underprivileged children in rural Maharashtra and make a lasting impact on their lives.",
    avatar: "/placeholder.svg?height=40&width=40",
    volunteers: 500,
  },
  {
    id: 2,
    title: "Himalayan Reforestation Project",
    organization: "Green Himalayas",
    location: "Uttarakhand",
    date: "June 15, 2024",
    duration: "2 weeks",
    category: "Environment",
    description: "Join our efforts to restore Himalayan forests and combat deforestation in Uttarakhand.",
    avatar: "/placeholder.svg?height=40&width=40",
    volunteers: 1200,
  },
  {
    id: 3,
    title: "Women's Skill Development Workshop",
    organization: "Empowering Women NGO",
    location: "Jaipur, Rajasthan",
    date: "Every Saturday",
    duration: "4 hours/week",
    category: "Women Empowerment",
    description: "Teach vocational skills to women from underprivileged backgrounds help them achieve financial independence.",
    avatar: "/placeholder.svg?height=40&width=40",
    volunteers: 800,
  },
  {
    id: 4,
    title: "Clean Ganga Campaign",
    organization: "River Conservation Society",
    location: "Varanasi, Uttar Pradesh",
    date: "July 1-7, 2024",
    duration: "1 week",
    category: "Environment",
    description: "Participate in cleaning and awareness drives along the banks of Ganges Varanasi.",
    avatar: "/placeholder.svg?height=40&width=40",
    volunteers: 3500,
  },
  {
    id: 5,
    title: "Rural Health Camp",
    organization: "Doctors Without Borders India",
    location: "Remote villages in Odisha",
    date: "August 10-20, 2024",
    duration: "10 days",
    category: "Healthcare",
    description: "Provide basic healthcare services and conduct health awareness programs in remote villages of Odisha.",
    avatar: "/placeholder.svg?height=40&width=40",
    volunteers: 1500,
  },
  {
    id: 6,
    title: "Street Children Literacy Program",
    organization: "Smile Foundation",
    location: "Mumbai, Maharashtra",
    date: "Ongoing",
    duration: "Flexible",
    category: "Education",
    description: "Teach basic literacy and numeracy skills to street children in Mumbai's slum areas.",
    avatar: "/placeholder.svg?height=40&width=40",
    volunteers: 200,
  },
  {
    id: 7,
    title: "Organic Farming Workshop",
    organization: "Sustainable Agriculture India",
    location: "Coorg, Karnataka",
    date: "September 5-7, 2024",
    duration: "3 days",
    category: "Agriculture",
    description: "Learn and practice organic farming techniques in the beautiful hills of Coorg.",
    avatar: "/placeholder.svg?height=40&width=40",
    volunteers: 50,
  },
  {
    id: 8,
    title: "Wildlife Conservation Project",
    organization: "Wildlife SOS",
    location: "Jim Corbett National Park, Uttarakhand",
    date: "October 1-15, 2024",
    duration: "2 weeks",
    category: "Wildlife",
    description: "Assist in wildlife conservation efforts and habitat restoration Jim Corbett National Park.",
    avatar: "/placeholder.svg?height=40&width=40",
    volunteers: 750,
  },
  {
    id: 9,
    title: "Elder Care Program",
    organization: "HelpAge India",
    location: "Chennai, Tamil Nadu",
    date: "Ongoing",
    duration: "Flexible",
    category: "Elder Care",
    description: "Provide companionship and assistance to elderly individuals in care homes across Chennai.",
    avatar: "/placeholder.svg?height=40&width=40",
    volunteers: 300,
  },
]

const categoryColors: { [key: string]: string } = {
  Education: "bg-blue-100 text-blue-800",
  Environment: "bg-green-100 text-green-800",
  "Women Empowerment": "bg-purple-100 text-purple-800",
  Healthcare: "bg-red-100 text-red-800",
  Agriculture: "bg-yellow-100 text-yellow-800",
  Wildlife: "bg-orange-100 text-orange-800",
  "Elder Care": "bg-pink-100 text-pink-800",
}

const locations = Array.from(new Set(opportunities.map(opp => opp.location)))
const categories = Array.from(new Set(opportunities.map(opp => opp.category)))
const durations = Array.from(new Set(opportunities.map(opp => opp.duration)))

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState<string | undefined>()
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>()
  const [durationFilter, setDurationFilter] = useState<string | undefined>()
  const [onlyRemote, setOnlyRemote] = useState(false)
  const [volunteerCountFilter, setVolunteerCountFilter] = useState<string | undefined>()


  const filteredOpportunities = opportunities.filter(opp => 
    (opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opp.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opp.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (locationFilter === "all" || !locationFilter || opp.location === locationFilter) &&
    (categoryFilter === "all" || !categoryFilter || opp.category === categoryFilter) &&
    (!durationFilter || opp.duration === durationFilter) &&
    (!onlyRemote || opp.location.toLowerCase().includes("remote"))
  )
  const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      // Simulate loading delay
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500)
  
      return () => clearTimeout(timer)
    }, [])

    if(isLoading){
      return <Loader/>
    }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Volunteer Opportunities</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            className="pl-8"
            placeholder="Search opportunities..."
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
              <SheetTitle>Filter Opportunities</SheetTitle>
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
              <div>
                <Label htmlFor="duration">Duration</Label>
                <Select onValueChange={setDurationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Duration</SelectItem>
                    {durations.map(duration => (
                      <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="remote" checked={onlyRemote} onCheckedChange={setOnlyRemote} />
                <Label htmlFor="remote">Remote opportunities only</Label>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOpportunities.map((opp) => (
          <Card key={opp.id} className="flex flex-col h-full">
            <Link href={`/opportunities/${opp.id}`} className="flex flex-col h-full">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge className={`${categoryColors[opp.category]} font-semibold`}>{opp.category}</Badge>
                    <h3 className="text-2xl font-bold text-gray-800">{opp.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{opp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{opp.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{opp.duration}</span>
                    </div>
                  </div>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={opp.avatar} alt={opp.organization} />
                    <AvatarFallback>{opp.organization.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
                <p className="mt-4 text-gray-600">{opp.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={opp.avatar} alt={opp.organization} />
                      <AvatarFallback>{opp.organization.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-gray-700">{opp.organization}</span>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Apply Now</Button>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

