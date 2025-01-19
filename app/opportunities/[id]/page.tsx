"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, Users, Briefcase, GraduationCap, Heart } from "lucide-react"

// This would typically come from a database or API
const opportunities = [
  {
    id: 1,
    title: "Rural Education Initiative",
    organization: "Teach For India",
    location: "Various villages in Maharashtra",
    date: "Ongoing",
    duration: "3 months",
    category: "Education",
    description: "Join our mission to provide quality education underprivileged children in rural Maharashtra. As a volunteer, you'll work closely with local communities implement innovative teaching methods and create lasting impact on students' lives.",
    avatar: "/placeholder.svg?height=40&width=40",
    requiredSkills: ["Teaching", "Patience", "Creativity"],
    responsibilities: [
      "Develop and deliver engaging lesson plans",
      "Provide one-on-one tutoring to students",
      "Organize extracurricular activities",
      "Collaborate with local teachers and community leaders"
    ],
    qualifications: [
      "Bachelor's degree (any field)",
      "Fluency in Marathi and English",
      "Strong communication skills",
      "Passion for education and social impact"
    ],
    commitment: "20 hours per week",
    benefits: [
      "Professional development workshops",
      "Certificate of completion",
      "Networking opportunities with education professionals",
      "Opportunity to make a real difference in children's lives"
    ]
  },
  // ... other opportunities
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

export default function OpportunityDetailPage() {
  const params = useParams()
  const opportunityId = Number(params.id)
  const opportunity = opportunities.find(o => o.id === opportunityId)

  if (!opportunity) {
    return <div>Opportunity not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={opportunity.avatar} alt={opportunity.organization} />
                <AvatarFallback>{opportunity.organization.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl text-gray-800">{opportunity.title}</CardTitle>
                <p className="text-gray-600">{opportunity.organization}</p>
              </div>
            </div>
            <Badge className={`${categoryColors[opportunity.category]} font-semibold`}>{opportunity.category}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{opportunity.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{opportunity.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>{opportunity.duration}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Briefcase className="h-5 w-5 mr-2" />
                <span>Commitment: {opportunity.commitment}</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {opportunity.requiredSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{opportunity.description}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600">
              {opportunity.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
            <ul className="list-disc list-inside text-gray-600">
              {opportunity.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside text-gray-600">
              {opportunity.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Apply for this Opportunity</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

