"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, PlusCircle, Users, BarChart } from "lucide-react"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

// Mock data
const mockData = {
  events: [
    { id: 1, name: "Annual Fundraiser", date: "2024-04-15", volunteers: 20 },
    { id: 2, name: "Community Outreach", date: "2024-05-01", volunteers: 15 },
  ],
  volunteers: [
    { id: 1, name: "John Doe", skills: ["Event Planning", "Fundraising"], matchScore: 92 },
    { id: 2, name: "Jane Smith", skills: ["Teaching", "Web Development"], matchScore: 88 },
  ],
  campaignMetrics: {
    totalDonations: 15000,
    volunteerHours: 500,
    eventAttendees: 1000,
  }
}

export default function NGODashboard() {
  const [aiSuggestions, setAiSuggestions] = useState("")

  const handleGetSuggestions = async () => {
    try {
      const prompt = `As an AI assistant for NGO management, provide 3 actionable suggestions to improve volunteer engagement and campaign success based on the following metrics:
      Total Donations: $${mockData.campaignMetrics.totalDonations}
      Volunteer Hours: ${mockData.campaignMetrics.volunteerHours}
      Event Attendees: ${mockData.campaignMetrics.eventAttendees}`

      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: prompt,
      })

      setAiSuggestions(text)
    } catch (error) {
      console.error("Error generating AI suggestions:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">NGO Dashboard</h1>
      
      <Tabs defaultValue="events" className="space-y-4">
        <TabsList>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Upcoming Events
                <Button size="sm">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {mockData.events.map(event => (
                <div key={event.id} className="flex justify-between items-center mb-4 last:mb-0">
                  <div>
                    <p className="font-semibold">{event.name}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.volunteers}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="volunteers">
          <Card>
            <CardHeader>
              <CardTitle>Volunteer Matches</CardTitle>
            </CardHeader>
            <CardContent>
              {mockData.volunteers.map(volunteer => (
                <div key={volunteer.id} className="mb-4 last:mb-0">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{volunteer.name}</p>
                    <span className="text-sm font-medium bg-green-100 text-green-800 py-1 px-2 rounded-full">
                      {volunteer.matchScore}% Match
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Skills: {volunteer.skills.join(", ")}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">₹{mockData.campaignMetrics.totalDonations}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Volunteer Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{mockData.campaignMetrics.volunteerHours}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Event Attendees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{mockData.campaignMetrics.eventAttendees}</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                AI-Powered Suggestions
                <Button onClick={handleGetSuggestions}>
                  <BarChart className="h-4 w-4 mr-2" />
                  Get Suggestions
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {aiSuggestions ? (
                <p className="whitespace-pre-line">{aiSuggestions}</p>
              ) : (
                <p className="text-gray-500">Click the button to generate AI-powered suggestions.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

