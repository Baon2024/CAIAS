'use client'
import sampleEventsData from "@/app/components/sampleEventsData"
import { useParams } from "next/navigation";
//import Link from "next/link";
import sampleSocietiesData from "@/app/components/sampleSocietiesData";
import { sampleEventsData2 } from "@/app/components/sampleEventsData";
import { useState, useEffect } from "react";
import fetchEventsToDisplay from "@/app/apiFunctions/fetchEventsToDisplay";
import Link from "next/link";



export default function individualEvent() {

    const { events } = useParams();
    console.log("this is the documentId:", events);
    //console.log("sampleSocietiesData borrowed here:", sampleSocietiesData);
    //const sampleSocietiesDataMap = sampleEventsData[0];
    //console.log("sampleSocietiesDataMap borrowed here:", sampleSocietiesDataMap);

    async function trialDocumentAPI() {
        await strapi.documents('api:event.event').findOne({
          documentId: events,
          status: 'published'
      })
    }
    //i want to see how this compared

    const [ eventsToFilterFrom, setEventsToFilterFrom ] = useState([]); 

    useEffect(() => {
        
        const getEvents = async () => {
            const eventsToReturn = await fetchEventsToDisplay();
            console.log("Fetched events to display:", eventsToFilterFrom);
            setEventsToFilterFrom(eventsToReturn);
        };

        getEvents();

    },[])

    useEffect(() => {
        console.log("these are the events that have been fetched, for displaying:", eventsToFilterFrom);
     }, [eventsToFilterFrom]); // This will log each time eventsToShow changes



    const selectedEventArray = sampleEventsData2.filter(event => event.documentId === events);
    console.log("This is the selected Event:", selectedEventArray);

    const selectedEventArray2 = eventsToFilterFrom.filter(event => event.documentId === events);
    console.log("This is the genuine selected Event:", selectedEventArray2);

    const selectedEvent = selectedEventArray[0];
    console.log("here is the specific selected event:", selectedEvent);

    const selectedEvent2 = selectedEventArray2[0];
    console.log("here is the specific selected event:", selectedEvent2);

    const selectedEventUrlLink = selectedEvent?.eventUrlLink || 'https://localhost:3001'; //just the current home
    //obviousy change taht so if there's no eventUrlLink, then the button doesn't appear

    //need to add link, to send you to society page, and add ability to display society icon below

    return (
        <> {selectedEvent2 && (
          <div>
          <p>placeholder page for individual event</p>
          
          
          <p>{selectedEvent2.eventName}</p>
          <Link href={`/societies/${selectedEvent2.society.documentId}`}>
            <p>{selectedEvent2.society.username}</p>
          </Link>
          </div>
    )}
        </>
    )
}