'use client'
import { useState } from "react";


//create this page and function before auth system is set-up
//then add in user id to created event, and make page only accesibl if logged-in

export default function addEvent() {

    const [ eventName, setEventName ] = useState('');

    function addEventHandler() {
        //need to determine what event includes
        //will have one picture, so borrow code for upload media from formalbridge

        const newEvent = [
            {
                eventName: null,
                eventDate: null,
                eventTime: null,
                society: null, // will need to replace this with user id i think? (user.id or whatever the exact path)
                another

            }
        ]


        //then post to the API endpoint
    }



    //create the UI for the form with 0v - feed in the inputs you need
    return (

    )
}