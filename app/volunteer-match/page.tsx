"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight } from "lucide-react"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

const questions = [
  {
    id: "cause",
    question: "What cause are you most passionate about?",
    options: ["Environment", "Education", "Healthcare", "Animal Welfare", "Human Rights"],
  },
  {
    id: "time",
    question: "How much time can you commit to volunteering per week?",
    options: ["1-2 hours", "3-5 hours", "5-10 hours", "10+ hours"],
  },
  {
    id: "skills",
    question: "What skills would you like to contribute?",
    options: ["Teaching", "Web Development", "Event Planning", "Fundraising", "Social Media"],
  },
  {
    id: "location",
    question: "Where would you prefer to volunteer?",
    options: ["Locally", "Remotely", "Internationally", "No preference"],
  },
]

export default function VolunteerMatch() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [recommendations, setRecommendations] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleSubmit = async () => {
    try {
      const prompt = `Based on the following volunteer preferences:
      ${Object.entries(answers).map(([key, value]) => `${key}: ${value}`).join("\n")}
      
      Provide 3 personalized volunteer opportunity recommendations in India.`

      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: prompt,
      })

      setRecommendations(text)
    } catch (error) {
      console.error("Error generating recommendations:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8 text-gray-800"
      >
        Find Your Perfect Volunteer Match
      </motion.h1>
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">{questions[currentQuestion].question}</CardTitle>
            <CardDescription>Question {currentQuestion + 1} of {questions.length}</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup onValueChange={handleAnswer} value={answers[questions[currentQuestion].id]}>
              {questions[currentQuestion].options.map((option) => (
                <div key={option} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="text-gray-700">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button 
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              variant="outline"
              className="text-gray-600 hover:text-gray-800"
            >
              Previous
            </Button>
            {currentQuestion === questions.length - 1 ? (
              <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white">
                Submit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={handleNext}
                disabled={!answers[questions[currentQuestion].id]}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </motion.div>
      {recommendations && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-6 bg-white rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Personalized Recommendations:</h2>
          <p className="whitespace-pre-line text-gray-700">{recommendations}</p>
        </motion.div>
      )}
    </div>
  )
}

