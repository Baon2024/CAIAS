import React, { useState } from "react"
import { Calendar, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

const EventUploadForm = () => {
  const [eventName, setEventName] = useState("")
  const [eventDate, setEventDate] = useState()
  const [eventTime, setEventTime] = useState("")
  const [location, setLocation] = useState("")
  const [eventUrl, setEventUrl] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [currentTag, setCurrentTag] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const newEvent = {
      eventName,
      eventDate,
      eventTime,
      location,
      eventUrl,
      description,
      tags
    }

    console.log("New Event:", newEvent)
    // Here you would typically send the newEvent object to your backend or state management system
  }

  const handleAddTag = (e) => {
    e.preventDefault()
    if (currentTag.trim() !== "" && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()])
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
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
            <Input
              id="event-name"
              placeholder="Enter event name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <Calendar className="mr-2 h-4 w-4" />
                    {eventDate ? format(eventDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <CalendarComponent mode="single" selected={eventDate} onSelect={setEventDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-time">Time</Label>
              <Input
                id="event-time"
                type="time"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Enter event location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="event-url">Event URL</Label>
            <Input
              id="event-url"
              type="url"
              placeholder="https://example.com/event"
              value={eventUrl}
              onChange={(e) => setEventUrl(e.target.value)} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe your event"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)} />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex">
              <Input
                id="tags"
                placeholder="Add tags"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                className="flex-grow" />
              <Button type="button" onClick={handleAddTag} className="ml-2">
                Add Tag
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm flex items-center">
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-1 focus:outline-none">
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image">Event Image</Label>
            <Input id="image" type="file" accept="image/*" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" onClick={handleSubmit}>Upload Event</Button>
      </CardFooter>
    </Card>)
  );
}

export default EventUploadForm

