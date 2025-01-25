"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Edit, Trash2, PlusCircle } from "lucide-react"

const categories = ["Fundraising", "Outreach", "Education", "Environment", "Health"]

// Mock data
const mockData = {
  events: [
    {
      id: 1,
      name: "Annual Fundraiser",
      date: "2024-04-15",
      location: "Community Hall",
      category: "Fundraising",
      description: "Fundraising event for community projects.",
      volunteers: 20,
    },
    {
      id: 2,
      name: "Community Outreach",
      date: "2024-05-01",
      location: "Local Park",
      category: "Outreach",
      description: "Outreach program to help local families.",
      volunteers: 15,
    },
    {
      id: 3,
      name: "Beach Cleanup",
      date: "2024-05-01",
      location: "Local Park",
      category: "Outreach",
      description: "Outreach program to help local families.",
      volunteers: 15,
    },
    {
      id: 4,
      name: "ECO- Club ",
      date: "2024-05-01",
      location: "Local Park",
      category: "Outreach",
      description: "Outreach program to help local families.",
      volunteers: 15,
    },
  ],
}

export default function NGODashboard() {
  const [events, setEvents] = useState(mockData.events)
  const [editMode, setEditMode] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formState, setFormState] = useState({
    id: null,
    name: "",
    date: "",
    location: "",
    category: "",
    description: "",
    volunteers: "",
  })
  const [isEditing, setIsEditing] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleCreateEvent = () => {
    const newEvent = {
      ...formState,
      id: events.length ? events[events.length - 1].id + 1 : 1,
    }
    setEvents([...events, newEvent])
    closeDialog()
  }

  const handleEditEvent = (event) => {
    setIsEditing(true)
    setFormState(event)
    setIsDialogOpen(true)
  }

  const handleUpdateEvent = () => {
    const updatedEvents = events.map((event) =>
      event.id === formState.id ? formState : event
    )
    setEvents(updatedEvents)
    closeDialog()
  }

  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id)
    setEvents(updatedEvents)
  }

  const openDialog = () => {
    setIsEditing(false)
    setFormState({ id: null, name: "", date: "", location: "", category: "", description: "", volunteers: "" })
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      

      {/* Events Section */}
      <Card>
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle className="text-3xl font-semi">Upcoming Events</CardTitle>
          <div className="flex space-x-4">
            <Button size="sm" onClick={openDialog}>
              <PlusCircle className="h-4 w-4 mr-2" />
              Create Event
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditMode((prev) => !prev)}
            >
              <Edit className="h-4 w-4 mr-2" />
              {editMode ? "Cancel Edit" : "Edit"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Event Name</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Location</th>
                <th className="py-2 px-4">Volunteers</th>
                {editMode && <th className="py-2 px-4">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="border-b">
                  <td className="py-2 px-4">{event.name}</td>
                  <td className="py-2 px-4">{event.date}</td>
                  <td className="py-2 px-4">{event.category}</td>
                  <td className="py-2 px-4">{event.location}</td>
                  <td className="py-2 px-4">{event.volunteers}</td>
                  {editMode && (
                    <td className="py-2 px-4">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditEvent(event)}
                        >
                          <Edit className="h-4 w-4 mr-1" /> Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteEvent(event.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Delete
                        </Button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Dialog for Create/Edit */}
      <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Event" : "Create Event"}</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              className="p-2 border rounded"
              type="text"
              name="name"
              placeholder="Event Name"
              value={formState.name}
              onChange={handleInputChange}
            />
            <input
              className="p-2 border rounded"
              type="date"
              name="date"
              value={formState.date}
              onChange={handleInputChange}
            />
            <select
              className="p-2 border rounded"
              name="category"
              value={formState.category}
              onChange={handleInputChange}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              className="p-2 border rounded"
              type="text"
              name="location"
              placeholder="Location"
              value={formState.location}
              onChange={handleInputChange}
            />
            <textarea
              className="p-2 border rounded col-span-2"
              name="description"
              placeholder="Description"
              value={formState.description}
              onChange={handleInputChange}
            />
            <input
              className="p-2 border rounded"
              type="number"
              name="volunteers"
              placeholder="Number of Volunteers"
              value={formState.volunteers}
              onChange={handleInputChange}
            />
          </div>
          <Button
            className="mt-4"
            onClick={isEditing ? handleUpdateEvent : handleCreateEvent}
          >
            {isEditing ? "Update Event" : "Create Event"}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
