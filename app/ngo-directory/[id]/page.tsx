"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Users, Calendar, Globe, Phone, Mail } from "lucide-react"

// This would typically come from a database or API
const ngos = [
  {
    id: 1,
    name: "Akshaya Patra Foundation",
    category: "Food and Nutrition",
    location: "Bengaluru, Karnataka",
    volunteers: 5000,
    description: "Implementing school lunch programs to fight hunger and support education.",
    avatar: "/placeholder.svg?height=100&width=100",
    yearFounded: 2000,
    impactMetric: "2 million children fed daily",
    website: "https://www.akshayapatra.org",
    phone: "+91 80 3014 3400",
    email: "info@akshayapatra.org",
    mission: "To feed 5 million children by 2025",
    programs: [
      "Mid-Day Meal Scheme",
      "Breakfast Program",
      "Anganwadi Feeding Program"
    ],
    achievements: [
      "Guinness World Record for serving the largest number of school meals on a single day",
      "Ranked 23rd among the top 100 NGOs in world by The Global Journal"
    ]
  },
  // ... other NGOs (you should add all the NGOs from the directory here)
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

export default function NGOProfilePage() {
  const params = useParams()
  const ngoId = Number(params.id)
  const ngo = ngos.find(n => n.id === ngoId)

  if (!ngo) {
    return <div>NGO not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={ngo.avatar} alt={ngo.name} />
                <AvatarFallback>{ngo.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-3xl text-gray-800">{ngo.name}</CardTitle>
                <Badge className={`${categoryColors[ngo.category]} font-semibold mt-2`}>{ngo.category}</Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{ngo.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <span>{ngo.volunteers} volunteers</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Founded in {ngo.yearFounded}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Globe className="h-5 w-5 mr-2" />
                <a href={ngo.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{ngo.website}</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>{ngo.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>{ngo.email}</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-gray-600">{ngo.description}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">{ngo.mission}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Our Programs</h3>
            <ul className="list-disc list-inside text-gray-600">
              {ngo.programs.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Achievements</h3>
            <ul className="list-disc list-inside text-gray-600">
              {ngo.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Impact</h3>
            <p className="text-gray-600">{ngo.impactMetric}</p>
          </div>
          <div className="mt-8">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Volunteer with {ngo.name}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

