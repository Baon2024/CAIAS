'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { uploadEventImage } from "../apiFunctions/apiToAddEvent"
import updateAPIFunctionName, { updateAPIFunctionDescription, updateAPIFunctionLocation, uploadEventImageHandler, updateAPIFunctionImage, updateAPIFunctionUrl, updateTags, updateRemoveTag } from './updateAPIFunction';


export default function ModalExample({isOpen, setIsOpen, isAnimating, setIsAnimating, modalDocumentId, setUpdateTrigger, tags, setTags}) {
  //const [isOpen, setIsOpen] = useState(false)
  //const [isAnimating, setIsAnimating] = useState(false)
  const [ newEventName, setNewEventName ] = useState('');
  const [ newEventDescription, setNewEventDescription ] = useState('');
  const [ newEventLocation, setNewEventLocation ] = useState('');
  const [ selectedFile, setSelectedFile ] = useState(null);
  const [ newEventImage, setNewEventImage ] = useState(null);
  const [ newEventUrlLink, setNewEventUrlLink ] = useState('');
  const [ newTag, setNewTag ] = useState('');

  console.log("thsi si what the modalDocumentId is:", modalDocumentId);

  const toggleModal = () => {
    setIsAnimating(true)
    setIsOpen(!isOpen)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setSelectedFile(file);
};
async function uploadEventImageHandler() {

    //this puts new eventImage in media library
    const response = await uploadEventImage(selectedFile);
    console.log("uploaded image for event is:", response);
    setNewEventImage(response);
    //function to put id of newEventImage in database
    console.log("newEventImage vakye is:", newEventImage);
    
    const updateEventImageResponse = await updateAPIFunctionImage(modalDocumentId, response);
    console.log("this is the returned updateEVentNameImage value:", updateEventImageResponse);
    //lets try and make this a reusable function, for each update
    setUpdateTrigger((prev) => prev + 1);
}
 async function updateUrlHandler() {

    const updateUrlResponse = await updateAPIFunctionUrl(modalDocumentId, newEventUrlLink);
    console.log("returned updateUrlResponse is:", updateUrlResponse);
    if (updateUrlResponse.data.eventUrlLink = newEventUrlLink) {
        alert("event url link successfully updated!");
    }
    setUpdateTrigger((prev) => prev + 1);
 }


  async function updateEventNameHandler() {
    
    if (newEventName) {
        
    const updateEventNameResponse = await updateAPIFunctionName(modalDocumentId, newEventName);
    console.log("this is the returned updateEVentNameResponse value:", updateEventNameResponse);
    //lets try and make this a reusable function, for each update
    } 
    
    else if (newEventDescription) {
        
        const updateEventNameResponse = await updateAPIFunctionDescription(modalDocumentId, newEventDescription);
        console.log("this is the returned updateEVentNameResponse value:", updateEventNameResponse);
        //lets try and make this a reusable function, for each update
        }
        else if (newEventLocation) {
            
            const updateEventNameResponse = await updateAPIFunctionLocation(modalDocumentId, newEventLocation);
            console.log("this is the returned updateEVentNameResponse value:", updateEventNameResponse);
            //lets try and make this a reusable function, for each update
            }
    setUpdateTrigger((prev) => prev + 1);
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  /*const updateEventHandler = (field) => {
    // Placeholder for update logic
    console.log(`Updating ${field}:`, field === 'name' ? newEventName : field === 'description' ? newEventDescription : newEventLocation)
    // Here you would typically call an API or update state in the parent component
  }*/

    async function addNewTag() {
        //make api call to database, to return all tags bar that one.
        console.log("the valye of newTag before being passed is:", newTag);
        const returnedResponse = await updateTags(modalDocumentId, newTag);
        console.log("this is the response for updateTags value returned:", returnedResponse);
        setTags(returnedResponse.data.tags)
        console.log(tags);
        setUpdateTrigger((prev) => prev + 1);
        setNewTag('');
    }

    async function removeExistingTag(tag) {
        //api call to remove tag
        //then setTag to the new array returned by the function
        console.log("the valye of tag before being passed is:", tag);
        const returnedResponse = await updateRemoveTag(modalDocumentId, tag);
        setTags(returnedResponse.data.tags);
        setUpdateTrigger((prev) => prev + 1);
    }

  return (
    <>
    {(isOpen || isAnimating) && (
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? 'bg-opacity-50' : 'bg-opacity-0'
        } flex items-center justify-center p-4 z-50`}
        onClick={toggleModal}
      >
        <div 
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col transition-all duration-300 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
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
                  onChange={(e) => setNewEventName(e.target.value)}
                />
                <Button type="button" onClick={updateEventNameHandler} className="w-full">
                  Update Name
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventDescription">Event Description</Label>
                <Input
                  id="eventDescription"
                  placeholder="Enter new event description"
                  value={newEventDescription}
                  onChange={(e) => setNewEventDescription(e.target.value)}
                />
                <Button onClick={updateEventNameHandler} className="w-full">
                  Update Description
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventLocation">Event Location</Label>
                <Input
                  id="eventLocation"
                  placeholder="Enter new event location"
                  value={newEventLocation}
                  onChange={(e) => setNewEventLocation(e.target.value)}
                />
                <Button onClick={updateEventNameHandler} className="w-full">
                  Update Location
                </Button>
              </div>
              <div>
                <Label>Event Image</Label>
                <Input type="file" accept="jpg/png" onChange={handleFileChange} />
                <button type="button" onClick={uploadEventImageHandler}>Update Event Image</button>
              </div>
              <div>
                <Label>Event link URL</Label>
                <Input type="url" placeholder="enter url of event page" value={newEventUrlLink} onChange={(e) => setNewEventUrlLink(e.target.value)} />
                <button type="button" onClick={updateUrlHandler}>update event link</button>
              </div>
              <div>
                <Label></Label>
                <Input type="text" value={newTag} onChange={(e) => setNewTag(e.target.value)} />
                <button type="button" onClick={addNewTag}>update tags</button>
                <Label>existing tags</Label>
                {tags.map((tag, index) => (
                <span key={index} className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm inline-flex items-center max-w-fit">
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeExistingTag(tag)}
                    className="ml-1 focus:outline-none"
                  >
                    <X size={14} />
                  </button>
                </span>))}
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
  </>
  )
}