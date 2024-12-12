'use client';
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { X } from 'lucide-react'

export default function ModalExample({
  isOpen,
  setIsOpen,
  isAnimating,
  setIsAnimating
}) {
  const [newEventName, setNewEventName] = useState('')
  const [newEventDescription, setNewEventDescription] = useState('')
  const [newEventLocation, setNewEventLocation] = useState('')

  const toggleModal = () => {
    setIsAnimating(true)
    setIsOpen(!isOpen)
  }

  const updateEventHandler = (field) => {
    // Placeholder for update logic
    console.log(
      `Updating ${field}:`,
      field === 'name' ? newEventName : field === 'description' ? newEventDescription : newEventLocation
    )
    // Here you would typically call an API or update state in the parent component
  }

  return (<>
    {(isOpen || isAnimating) && (
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'bg-opacity-50' : 'bg-opacity-0'
        } flex items-center justify-center p-4 z-50`}
        onClick={toggleModal}>
        <div
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col transition-all duration-300 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}>
          <div
            className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Event Details</h2>
            <Button variant="ghost" size="icon" onClick={toggleModal}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="p-6 flex-grow overflow-y-auto">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="eventName">Event Name</Label>
                <Input
                  id="eventName"
                  placeholder="Enter new event name"
                  value={newEventName}
                  onChange={(e) => setNewEventName(e.target.value)} />
                <Button onClick={() => updateEventHandler('name')} className="w-full">
                  Update Name
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventDescription">Event Description</Label>
                <Input
                  id="eventDescription"
                  placeholder="Enter new event description"
                  value={newEventDescription}
                  onChange={(e) => setNewEventDescription(e.target.value)} />
                <Button onClick={() => updateEventHandler('description')} className="w-full">
                  Update Description
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventLocation">Event Location</Label>
                <Input
                  id="eventLocation"
                  placeholder="Enter new event location"
                  value={newEventLocation}
                  onChange={(e) => setNewEventLocation(e.target.value)} />
                <Button onClick={() => updateEventHandler('location')} className="w-full">
                  Update Location
                </Button>
              </div>
            </form>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-900 flex justify-end">
            <Button variant="destructive" onClick={toggleModal}>
              Close
            </Button>
          </div>
        </div>
      </div>
    )}
  </>);
}

