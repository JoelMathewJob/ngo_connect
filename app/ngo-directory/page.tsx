"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Users, Filter } from "lucide-react"
import { Loader } from "@/components/ui/loader"
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
import { Label } from "@/components/ui/label";
import Link from "next/link"

// This would typically come from a database or API
const ngos = [
  {
    id: 1,
    name: "Akshaya Patra Foundation",
    category: "Food and Nutrition",
    location: "Bengaluru, Karnataka",
    volunteers: 5000,
    description: "Implementing school lunch programs to fight hunger and support education.",
    avatar: "/placeholder.svg?height=40&width=40",
    yearFounded: 2000,
    impactMetric: "2 million children fed daily",
  },
  {
    id: 2,
    name: "Pratham Education Foundation",
    category: "Education",
    location: "Mumbai, Maharashtra",
    volunteers: 4000,
    description: "Working to provide quality education underprivileged children across India.",
    avatar: "/placeholder.svg?height=40&width=40",
    yearFounded: 1995,
    impactMetric: "75 million children reached",
  },
  {
    id: 3,
    name: "Goonj",
    category: "Rural Development",
    location: "New Delhi, Delhi",
    volunteers: 3500,
    description: "Using urban discard as a tool for rural development and disaster relief.",
    avatar: "/placeholder.svg?height=40&width=40",
    yearFounded: 1999,
    impactMetric: "3000+ villages impacted",
  },
  {
    id: 4,
    name: "CRY (Child Rights and You)",
    category: "Child Welfare",
    location: "Mumbai, Maharashtra",
    volunteers: 3000,
    description: "Ensuring happy, healthy, and creative childhoods for all children in India.",
    avatar: "/placeholder.svg?height=40&width=40",
    yearFounded: 1979,
    impactMetric: "3 million children benefited",
  },
  {
    id: 5,
    name: "Wildlife SOS",
    category: "Animal Welfare",
    location: "New Delhi, Delhi",
    volunteers: 2500,
    description: "Protecting and conserving India's natural heritage, forests, wildlife.",
    avatar: "/placeholder.svg?height=40&width=40",
    yearFounded: 1995,
    impactMetric: "35,000+ animals rescued",
  },
  {
    id: 6,
    name: "Smile Foundation",
    category: "Education and Healthcare",
    location: "New Delhi, Delhi",
    volunteers: 4500,
    description: "Empowering underprivileged children, youth, and women through education healthcare.",
    avatar: "/placeholder.svg?height=40&width=40",
    yearFounded: 2002,
    impactMetric: "1.5 million lives touched annually",
  },
  {
    id: 7,
    name: "Teach For India",
    category: "Education",
    location: "Mumbai, Maharashtra",
    volunteers: 3800,
    description: "Working towards educational equity through a fellowship program.",
    avatar: "/placeholder.svg?height=40&width=40",
    yearFounded: 2009,
    impactMetric: "38,000 students impacted yearly",
  },
  {
    id: 8,
    name: "Barefoot College",
    category: "Rural Development",
    location: "Tilonia, Rajasthan",
    volunteers: 2000,
    description: "Empowering rural communities through sustainable solutions and skill development.",
    avatar: "/placeholder.svg?height=40&width=40",
    yearFounded: 1972,
    impactMetric: "1 million+ rural lives improved",
  },
  {
    id: 9,
    name: "Helpage India",
    category: "Elder Care",
    location: "New Delhi, Delhi",
    volunteers: 3200,
    description: "Working for the cause and care of disadvantaged older persons to improve their quality life.",
    avatar: "/placeholder.svg?height=40&width=40",
    yearFounded: 1978,
    impactMetric: "2 million elders supported annually",
  },
]

const categoryColors: { [key: string]: string } = {
  "Food and Nutrition": "bg-green-100 text-green-800",
  "Education": "bg-blue-100 text-blue-800",
  "Rural Development": "bg-yellow-100 text-yellow-800",
  "Child Welfare": "bg-purple-100 text-purple-800",
  "Animal Welfare": "bg-orange-100 text-orange-800",
  "Education and Healthcare": "bg-indigo-100 text-indigo-800",
  "Elder Care": "bg-pink-100 text-pink-800",
}

const locations = Array.from(new Set(ngos.map(ngo => ngo.location)))
const categories = Array.from(new Set(ngos.map(ngo => ngo.category)))

export default function NGODirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState<string | undefined>()
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>()
  const [volunteerCountFilter, setVolunteerCountFilter] = useState<string | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const filteredNGOs = ngos.filter(ngo => 
    (ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (locationFilter === "all" || !locationFilter || ngo.location === locationFilter) &&
    (categoryFilter === "all" || !categoryFilter || ngo.category === categoryFilter) &&
    (volunteerCountFilter === "any" || !volunteerCountFilter || 
      (volunteerCountFilter === "0-1000" && ngo.volunteers <= 1000) ||
      (volunteerCountFilter === "1001-3000" && ngo.volunteers > 1000 && ngo.volunteers <= 3000) ||
      (volunteerCountFilter === "3001+" && ngo.volunteers > 3000))
  )

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">NGO Directory</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            className="pl-8"
            placeholder="Search for NGOs..."
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
              <SheetTitle>Filter NGOs</SheetTitle>
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
                <Label htmlFor="volunteerCount">Volunteer Count</Label>
                <Select onValueChange={setVolunteerCountFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select volunteer count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="0-1000">0 - 1,000</SelectItem>
                    <SelectItem value="1001-3000">1,001 - 3,000</SelectItem>
                    <SelectItem value="3001+">3,001+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNGOs.map((ngo) => (
          <Card key={ngo.id} className="flex flex-col h-full">
            <Link href={`/ngo-directory/${ngo.id}`} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={ngo.avatar} alt={ngo.name} />
                    <AvatarFallback>{ngo.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl text-gray-800">{ngo.name}</CardTitle>
                    <Badge className={`${categoryColors[ngo.category]} font-semibold mt-1`}>{ngo.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-600 mb-4">{ngo.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {ngo.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {ngo.volunteers} volunteers
                  </div>
                  <div>Founded: {ngo.yearFounded}</div>
                  <div>Impact: {ngo.impactMetric}</div>
                </div>
              </CardContent>
              <CardContent className="pt-0">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">View Profile</Button>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

