"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Globe } from "lucide-react"

const stats = [
  { icon: Users, value: "10,000+", label: "Volunteers" },
  { icon: Clock, value: "50,000+", label: "Hours Contributed" },
  { icon: Globe, value: "500+", label: "NGOs Supported" },
]

export function ImpactStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex flex-col items-center p-6">
              <stat.icon className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-3xl font-bold mb-2 text-gray-800">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

