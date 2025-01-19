"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, CheckCircle, Calendar } from "lucide-react"

// This would typically come from a database or API
const courses = [
  {
    id: 1,
    title: "Effective Communication Skills",
    category: "Soft Skills",
    duration: "4 weeks",
    level: "Beginner",
    description: "Enhance your verbal and non-verbal communication skills for better personal professional interactions. This course covers various aspects of communication, including active listening, body language, persuasive speaking.",
    instructor: "Dr. Priya Sharma",
    startDate: "2024-09-01",
    schedule: "2 hours per week, flexible timing",
    learningOutcomes: [
      "Understand the principles of effective communication",
      "Improve active listening skills",
      "Develop confidence in public speaking",
      "Master non-verbal communication cues",
      "Learn to adapt communication style different audiences"
    ],
    modules: [
      {
        title: "Foundations of Communication",
        topics: ["Communication models", "Barriers to effective communication", "Communication styles"]
      },
      {
        title: "Verbal Communication",
        topics: ["Active listening", "Asking powerful questions", "Giving and receiving feedback"]
      },
      {
        title: "Non-Verbal Communication",
        topics: ["Body language", "Facial expressions", "Tone and pitch of voice"]
      },
      {
        title: "Public Speaking and Presentations",
        topics: ["Structuring a presentation", "Dealing with nervousness", "Engaging your audience"]
      }
    ],
    prerequisites: "No prior experience required",
    certification: "Certificate of Completion from NGO Connect",
    enrollmentCapacity: 50
  },
  // ... other courses
]

const categoryColors: { [key: string]: string } = {
  "Soft Skills": "bg-blue-100 text-blue-800",
  "Management": "bg-green-100 text-green-800",
  "Marketing": "bg-purple-100 text-purple-800",
  "Finance": "bg-yellow-100 text-yellow-800",
  "Fundraising": "bg-red-100 text-red-800",
}

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = Number(params.id)
  const course = courses.find(c => c.id === courseId)

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl text-gray-800">{course.title}</CardTitle>
              <p className="text-gray-600">Instructor: {course.instructor}</p>
            </div>
            <Badge className={`${categoryColors[course.category]} font-semibold`}>{course.category}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>Duration: {course.duration}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <span>Level: {course.level}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Start Date: {course.startDate}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2" />
                <span>Schedule: {course.schedule}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2" />
                <span>Enrollment Capacity: {course.enrollmentCapacity}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Certification: {course.certification}</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{course.description}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Learning Outcomes</h3>
            <ul className="list-disc list-inside text-gray-600">
              {course.learningOutcomes.map((outcome, index) => (
                <li key={index}>{outcome}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Course Modules</h3>
            {course.modules.map((module, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-semibold">{module.title}</h4>
                <ul className="list-disc list-inside text-gray-600 ml-4">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Prerequisites</h3>
            <p className="text-gray-600">{course.prerequisites}</p>
          </div>
          <div className="mt-8">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enroll in this Course</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

