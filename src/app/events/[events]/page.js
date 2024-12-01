'use client'
import sampleEventsData from "@/app/components/sampleEventsData"
import { useParams } from "next/navigation";
import Link from "next/link";




export default function individualEvent() {

    const { events } = useParams();
    console.log("this is the documentId:", events);
    const selectedEventArray = sampleEventsData.filter(event => event.documentId === events);
    console.log("This is the selected Event:", selectedEventArray);

    const selectedEvent = selectedEventArray[0];

    const selectedEventUrlLink = selectedEvent?.eventUrlLink || 'https://localhost:3001'; //just the current home
    //obviousy change taht so if there's no eventUrlLink, then the button doesn't appear


    return (
        <>
          <p>placeholder page for individual event</p>
          <p>{selectedEvent.eventName}</p>
          <button><Link href={selectedEventUrlLink}>Event sign-up page</Link></button>
          
        </>
    )
}