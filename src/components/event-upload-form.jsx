"use client"

import { useState, useRef } from "react"
import { Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

export default function EventUploadForm() {
  const [date, setDate] = useState()
  const eventUrlRef = useRef(null)

  const validateUrl = (url) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const eventUrl = eventUrlRef.current?.value

    if (eventUrl && !validateUrl(eventUrl)) {
      alert("Please enter a valid URL")
      return
    }

    // Handle form submission here
    console.log("Form submitted")
  }

  return (
    (<Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Society Event</CardTitle>
        <CardDescription>Fill in the details to create a new event for your society.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="event-name">Event Name</Label>
            <Input id="event-name" placeholder="Enter event name" required />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-time">Time</Label>
              <Input id="event-time" type="time" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter event location" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="event-url">Event URL</Label>
            <Input
              id="event-url"
              type="url"
              placeholder="https://example.com/event"
              ref={eventUrlRef} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe your event" rows={4} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Event Image</Label>
            <Input id="image" type="file" accept="image/*" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">Upload Event</Button>
      </CardFooter>
    </Card>)
  );
}

