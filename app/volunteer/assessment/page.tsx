"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

const questions = [
  {
    id: "cause",
    question: "What causes are you most passionate about?",
    options: ["Environment", "Education", "Healthcare", "Animal Welfare", "Human Rights"],
    type: "checkbox"
  },
  {
    id: "time",
    question: "How much time can you commit to volunteering per week?",
    options: ["1-2 hours", "3-5 hours", "5-10 hours", "10+ hours"],
    type: "radio"
  },
  {
    id: "skills",
    question: "What skills can you offer?",
    options: ["Teaching", "Web Development", "Graphic Design", "Event Planning", "Fundraising"],
    type: "checkbox"
  }
]

export default function AssessmentQuiz() {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [recommendations, setRecommendations] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const prompt = `Based on the following volunteer preferences:
      Causes: ${answers.cause}
      Time commitment: ${answers.time}
      Skills: ${answers.skills}
      
      Provide 3 personalized volunteer opportunity recommendations.`

      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: prompt,
      })

      setRecommendations(text)
    } catch (error) {
      console.error("Error generating recommendations:", error)
    }
  }

  const handleChange = (questionId: string, value: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Volunteer Interest Assessment</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="space-y-2">
            <Label>{q.question}</Label>
            {q.type === "checkbox" ? (
              <div className="space-y-2">
                {q.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`${q.id}-${option}`} 
                      onCheckedChange={(checked) => {
                        const currentAnswers = answers[q.id] as string[] || []
                        if (checked) {
                          handleChange(q.id, [...currentAnswers, option])
                        } else {
                          handleChange(q.id, currentAnswers.filter(a => a !== option))
                        }
                      }}
                    />
                    <Label htmlFor={`${q.id}-${option}`}>{option}</Label>
                  </div>
                ))}
              </div>
            ) : (
              <RadioGroup onValueChange={(value) => handleChange(q.id, value)}>
                {q.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${q.id}-${option}`} />
                    <Label htmlFor={`${q.id}-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>
        ))}
        <Button type="submit" className="w-full">Get Recommendations</Button>
      </form>
      {recommendations && (
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Your Personalized Recommendations:</h2>
          <p className="whitespace-pre-line">{recommendations}</p>
        </div>
      )}
    </div>
  )
}

