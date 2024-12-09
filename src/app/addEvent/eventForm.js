'use client'
import React, { useState, useEffect } from "react"
import { Calendar, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { useRouter } from "next/navigation"
import { uploadEventImage } from "../apiFunctions/apiToAddEvent"
import apiToAddEvent from "../apiFunctions/apiToAddEvent"

const EventUploadForm = () => {
  const [eventName, setEventName] = useState("")
  const [eventDate, setEventDate] = useState()
  const [eventTime, setEventTime] = useState("")
  const [eventLocation, setEventLocation] = useState("")
  const [eventUrlLink, setEventUrlLink] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [tags, setTags] = useState([])
  const [currentTag, setCurrentTag] = useState("")
  const [ eventImage, setEventImage ] = useState();
  const [ selectedFile, setSelectedFile ] = useState(null);
  const [ society, setSociety ] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  let alteredSociety;
  if (typeof window !== "undefined") {
    

  /*const society = localStorage.getItem('user');
  console.log("this is what society is:", society);
  alteredSociety = JSON.parse(society);
  console.log("and this is json'd society:", alteredSociety);*/
  }
  const router = useRouter();

  useEffect(() => {

    const societyToSet = localStorage.getItem('user');
    console.log("this is what society is:", societyToSet);
    const alteredSocietyToSet = JSON.parse(societyToSet);
    console.log("and this is json'd society:", alteredSocietyToSet);
    setSociety(alteredSocietyToSet);

  },[])



  const handleSubmit = async(event) => {
    event.preventDefault()

    console.log("Form submission triggered");

    function formatTimeToHHMMSS(time) {
        if (!time.includes(":")) return "00:00:00"; // Default time if input is invalid
        const [hours, minutes, seconds = "00"] = time.split(":");
        return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
      }
      
      // Example Usage
      const eventTimeFormatted = formatTimeToHHMMSS(eventTime);
      

    const trialDate = new Date(eventDate).toISOString().split('T')[0]; // "2024-11-22"
    console.log("this is what eventTime is:", eventTime)
    const trialTime = new Date(eventTime);
    console.log("trialTime before toTimeString is:", trialTime);
    console.log("thsi is the trial date value:", trialDate);
    const formattedTime = trialTime.toTimeString().slice(0, 8);
    console.log("ythis is formattedTime for the time value:", formattedTime);

    const newEvent = {
      eventName,
      eventDate: trialDate,
      eventTime: eventTimeFormatted,
      eventLocation,
      eventUrlLink,
      eventDescription,
      tags,
      eventImage: { id: eventImage },
      society: { id: society.id }
    }

    
    console.log("New Event:", newEvent)
    // Here you would typically send the newEvent object to your backend or state management system

    if (isSubmitting) return;  // Prevent multiple submissions
    setIsSubmitting(true);
    try {
    const newEventResponse = await apiToAddEvent(newEvent)
    console.log("newEventResponse is:", newEventResponse);
     
    if (newEvent) {
      alert(`new event added for ${society.username}`);
      router.push("/userPage");

    }
    } catch (error) {
    console.error(error);
  } finally {
    setIsSubmitting(false);
  }
    
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setSelectedFile(file);
};

//let eventImage;

async function uploadEventImageHandler() {


    const response = await uploadEventImage(selectedFile);
    console.log("uploaded image for event is:", response);
    setEventImage(response);
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
    <Card className="w-full max-w-2xl mx-auto mt-10 mb-10">
        <form onSubmit={handleSubmit} className="space-y-6">
      <CardHeader>
        <CardTitle>Upload Society Event</CardTitle>
        <CardDescription>Fill in the details to create a new event for your society.</CardDescription>
      </CardHeader>
      <CardContent>
        
          <div className="space-y-2">
            <Label id="event-name">Event Name</Label>
            <Input 
              id="event-name" 
              placeholder="Enter event name" 
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required 
            />
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
                  <CalendarComponent
                    mode="single"
                    selected={eventDate}
                    onSelect={setEventDate}
                    initialFocus
                    required
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label id="event-time">Time</Label>
              <Input 
                id="event-time" 
                type="time" 
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                required 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location" 
              placeholder="Enter event location" 
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="event-url">Event URL</Label>
            <Input 
              id="event-url" 
              type="url" 
              placeholder="https://example.com/event" 
              value={eventUrlLink}
              onChange={(e) => setEventUrlLink(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe your event" 
              rows={4}
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex">
              <Input 
                id="tags" 
                placeholder="Add tags" 
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                className="flex-grow"
              />
              <Button type="button" onClick={handleAddTag} className="ml-2">
                Add Tag
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span key={index} className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm flex items-center">
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-1 focus:outline-none"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Event Image</Label>
            <Input id="image" type="file" accept="image/*" onChange={handleFileChange} />
            <button type="button" onClick={uploadEventImageHandler}>Upload event image</button>
          </div>
        
      </CardContent>
      <CardFooter>
        <Button type="submit" disabled={!eventImage} className="w-full">Upload Event</Button>
      </CardFooter>
      </form>
    </Card>
  )
}

export default EventUploadForm