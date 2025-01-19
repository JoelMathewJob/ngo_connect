"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from "lucide-react"

// Mock data for conversations
const conversations = [
  { id: 1, name: "John Doe", avatar: "/avatars/01.png", lastMessage: "Hey, are you available for the event tomorrow?" },
  { id: 2, name: "Jane Smith", avatar: "/avatars/02.png", lastMessage: "Thanks for your help last week!" },
  { id: 3, name: "GreenEarth NGO", avatar: "/avatars/03.png", lastMessage: "We have a new volunteering opportunity." },
]

// Mock data for messages
const initialMessages = [
  { id: 1, sender: "John Doe", content: "Hey, are you available for the event tomorrow?", timestamp: "10:30 AM" },
  { id: 2, sender: "You", content: "Yes, I'll be there. What time does it start?", timestamp: "10:35 AM" },
  { id: 3, sender: "John Doe", content: "Great! It starts at 9 AM. See you there!", timestamp: "10:37 AM" },
]

export default function MessagingPage() {
  const [activeConversation, setActiveConversation] = useState(conversations[0])
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "You",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }])
      setNewMessage("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Messages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px]">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center space-x-4 p-3 cursor-pointer hover:bg-gray-100 rounded-lg ${activeConversation.id === conversation.id ? "bg-gray-100" : ""}`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <Avatar>
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>{conversation.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{conversation.name}</p>
                    <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={activeConversation.avatar} alt={activeConversation.name} />
                <AvatarFallback>{activeConversation.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <span>{activeConversation.name}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] mb-4">
              {messages.map((message) => (
                <div key={message.id} className={`mb-4 ${message.sender === "You" ? "text-right" : "text-left"}`}>
                  <div className={`inline-block p-3 rounded-lg ${message.sender === "You" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                    <p>{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

