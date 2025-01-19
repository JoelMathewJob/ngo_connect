import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const impactStories = [
  {
    id: 1,
    title: "Transforming Rural Education in Bihar",
    author: "Priya Sharma",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Education",
    content: "As a volunteer teacher in rural Bihar, I witnessed firsthand the transformative power of education. Over course year, saw my students not only improve their academic skills but also gain confidence and aspire for brighter future. One students, Amit, went from struggling with basic reading to topping his class mathematics. These experiences have reinforced belief importance quality education all.",
  },
  {
    id: 2,
    title: "Restoring Mangroves in the Sundarbans",
    author: "Rahul Das",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Environment",
    content: "Participating in the mangrove restoration project Sundarbans was an eye-opening experience. Our team planted over 5000 saplings, which not only help carbon sequestration but also protect coastline from erosion. The local community's enthusiasm and knowledge about their ecosystem inspiring. This showed me how environmental conservation community empowerment can go hand hand.",
  },
  {
    id: 3,
    title: "Empowering Women Through Skill Development",
    author: "Anita Desai",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Women Empowerment",
    content: "Leading skill development workshops for women in Jaipur's rural areas has been incredibly rewarding. We've trained over 200 various crafts and entrepreneurship skills. Many of these have started their own small businesses, gaining financial independence respect within communities. Seeing confidence grow hearing about how they're now able to support families' education the most fulfilling experience my life.",
  },
  {
    id: 4,
    title: "Bringing Healthcare to Remote Villages",
    author: "Dr. Vikram Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Healthcare",
    content: "Our mobile health clinic initiative in Odisha's tribal areas has been a challenging but immensely rewarding journey. We've provided basic healthcare and education to over 10,000 people who previously had little no access medical facilities. The gratitude people's eyes when they receive treatment for long-standing ailments is unforgettable. This experience reinforced my commitment making accessible all.",
  },
  {
    id: 5,
    title: "Rescuing and Rehabilitating Street Dogs",
    author: "Meera Reddy",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Animal Welfare",
    content: "Working with a street dog rescue organization in Bangalore has been life-changing experience. We've rescued, treated, and rehomed over 500 dogs the past year. The transformation we see these animals - from scared sick to healthy loving is incredible. One particular rescue, paralyzed puppy named Hope, defied all odds learned walk again. These experiences have taught me about resilience, compassion, unbreakable bond between humans animals.",
  },
]

const categoryColors: { [key: string]: string } = {
  Education: "bg-blue-100 text-blue-800",
  Environment: "bg-green-100 text-green-800",
  "Women Empowerment": "bg-purple-100 text-purple-800",
  Healthcare: "bg-red-100 text-red-800",
  "Animal Welfare": "bg-orange-100 text-orange-800",
}

export default function ImpactStoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Impact Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {impactStories.map((story) => (
          <Card key={story.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-2">
                <Avatar>
                  <AvatarImage src={story.avatar} alt={story.author} />
                  <AvatarFallback>{story.author.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-xl text-gray-800">{story.title}</CardTitle>
                  <p className="text-sm text-gray-600">{story.author}</p>
                </div>
              </div>
              <Badge className={`${categoryColors[story.category]} font-semibold`}>{story.category}</Badge>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-700">{story.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

