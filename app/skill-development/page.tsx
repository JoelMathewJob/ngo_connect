"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, Clock, Users, Filter } from "lucide-react"

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
import { Loader } from "@/components/ui/loader"

const courses = [
  {
    id: 1,
    title: "Effective Communication Skills",
    category: "Soft Skills",
    duration: "4 weeks",
    level: "Beginner",
    description: "Enhance your verbal and non-verbal communication skills for better personal professional interactions.",
  },
  {
    id: 2,
    title: "Introduction to Project Management",
    category: "Management",
    duration: "6 weeks",
    level: "Intermediate",
    description: "Learn the fundamentals of project management, including planning, execution, and monitoring.",
  },
  {
    id: 3,
    title: "Digital Marketing Essentials",
    category: "Marketing",
    duration: "8 weeks",
    level: "Beginner",
    description: "Master the basics of digital marketing, including social media, SEO, and content marketing.",
  },
  {
    id: 4,
    title: "Financial Literacy for Non-Profits",
    category: "Finance",
    duration: "5 weeks",
    level: "Intermediate",
    description: "Understand financial management principles specific to non-profit organizations.",
  },
  {
    id: 5,
    title: "Grant Writing Workshop",
    category: "Fundraising",
    duration: "3 weeks",
    level: "Advanced",
    description: "Learn how to write compelling grant proposals secure funding for your non-profit projects.",
  },
  {
    id: 6,
    title: "Volunteer Management Strategies",
    category: "Management",
    duration: "4 weeks",
    level: "Intermediate",
    description: "Develop skills to effectively recruit, train, and retain volunteers for your organization.",
  },
]

const categoryColors: { [key: string]: string } = {
  "Soft Skills": "bg-blue-100 text-blue-800",
  "Management": "bg-green-100 text-green-800",
  "Marketing": "bg-purple-100 text-purple-800",
  "Finance": "bg-yellow-100 text-yellow-800",
  "Fundraising": "bg-red-100 text-red-800",
}

const categories = Array.from(new Set(courses.map(course => course.category)))
const levels = Array.from(new Set(courses.map(course => course.level)))

export default function SkillDevelopmentPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>()
  const [levelFilter, setLevelFilter] = useState<string | undefined>()

  const filteredCourses = courses.filter(course => 
    (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (categoryFilter === "all_categories" || !categoryFilter || course.category === categoryFilter) &&
    (levelFilter === "all_levels" || !levelFilter || course.level === levelFilter)
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
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Skill Development</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            className="pl-8"
            placeholder="Search for courses..."
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
              <SheetTitle>Filter Courses</SheetTitle>
              <SheetDescription>
                Refine your search using the filters below.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 mt-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all_categories">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="level">Level</Label>
                <Select onValueChange={setLevelFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all_levels">All Levels</SelectItem>
                    {levels.map(level => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-gray-800">{course.title}</CardTitle>
                <Badge className={`${categoryColors[course.category]} font-semibold`}>{course.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Duration: {course.duration}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Level: {course.level}
                </div>
              </div>
            </CardContent>
            <CardContent className="pt-0">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enroll Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

