import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    bio: "Priya has over 15 years of experience in the non-profit sector and is passionate about creating positive social impact.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Rahul Patel",
    role: "Chief Operations Officer",
    bio: "Rahul brings his expertise in project management and strategic planning to ensure smooth operations across all our initiatives.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Anita Desai",
    role: "Head of Volunteer Relations",
    bio: "Anita is dedicated to creating meaningful volunteer experiences and fostering strong relationships with our NGO partners.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">About NGO Connect</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-600 mb-4">
          NGO Connect is a platform dedicated to bridging the gap between passionate volunteers and impactful non-governmental organizations (NGOs) across India. Our mission is to facilitate meaningful connections that drive positive change in communities nationwide.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Founded in 2020, we've grown from a small team with a big vision to a thriving community of over 10,000 volunteers and 500+ NGO partners. Together, we're addressing critical issues in education, healthcare, environmental conservation, and social welfare.
        </p>
        <p className="text-lg text-gray-600">
          At NGO Connect, we believe in the power of collective action. By providing a user-friendly platform, comprehensive resources, and ongoing support, we empower individuals to contribute their skills and time to causes they care about, while helping NGOs amplify their impact.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.name} className="flex flex-col items-center text-center">
            <CardHeader>
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split("").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
              <p className="text-sm text-gray-500">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

