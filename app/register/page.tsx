"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Register() {
  const [userType, setUserType] = useState<"volunteer" | "ngo">("volunteer")

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="volunteer" className="w-full max-w-md mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="volunteer" onClick={() => setUserType("volunteer")}>Volunteer</TabsTrigger>
          <TabsTrigger value="ngo" onClick={() => setUserType("ngo")}>NGO</TabsTrigger>
        </TabsList>
        <TabsContent value="volunteer">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <Button type="submit" className="w-full">Register as Volunteer</Button>
          </form>
        </TabsContent>
        <TabsContent value="ngo">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="org-name">Organization Name</Label>
              <Input id="org-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-email">Organization Email</Label>
              <Input id="org-email" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-password">Password</Label>
              <Input id="org-password" required type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="org-type">Organization Type</Label>
              <RadioGroup defaultValue="non-profit">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non-profit" id="non-profit" />
                  <Label htmlFor="non-profit">Non-Profit</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="charity" id="charity" />
                  <Label htmlFor="charity">Charity</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="social-enterprise" id="social-enterprise" />
                  <Label htmlFor="social-enterprise">Social Enterprise</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full">Register as NGO</Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}

