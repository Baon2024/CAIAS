'use client'
import { useState } from "react";
import EventUploadForm from "./eventForm";


//create this page and function before auth system is set-up
//then add in user id to created event, and make page only accesibl if logged-in

export default function addEvent() {

    

        /*const newEvent = [
            {
                eventName: null,
                eventDate: null,
                eventTime: null,
                eventTags: tags,
                society: society.id, // will need to replace this with user id i think? (user.id or whatever the exact path)
                eventImage: empty

            }
        ]*/

    //create the UI for the form with 0v - feed in the inputs you need
    return (
       <>
         <EventUploadForm />
       </>
    )
}