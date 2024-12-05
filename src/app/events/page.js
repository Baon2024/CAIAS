'use client'
import sampleEventsData from "../components/sampleEventsData"
import EventsList from "../components/eventList"
import { useEffect, useState } from "react"
import SearchBar2 from "../components/searchBar2"
import fetchEventsToDisplay from "../apiFunctions/fetchEventsToDisplay";
import { fetchEventsToDisplaySupabase } from "../apiFunctions/fetchEventsToDisplaySupabase"

//import sampleEventsData.js

export default function Events() {
    
   const [ eventsToShow, setEventsToShow ] = useState([]); 

    useEffect(() => {
        
        const getEvents = async () => {
            const eventsToDisplay = await fetchEventsToDisplay();
            console.log("Fetched events to display:", eventsToDisplay);
            setEventsToShow(eventsToDisplay);
            const alternativeEvents = await fetchEventsToDisplaySupabase();
            console.log("supabase fetched events:", alternativeEvents);
        };

        getEvents();

    },[])
    
    // Log updated events after the state changes
   useEffect(() => {
    console.log("these are the events that have been fetched, for displaying:", eventsToShow);
 }, [eventsToShow]); // This will log each time eventsToShow changes

   

  
  

    
    
    //api key for supabase: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvZXZzYmZ3YWp0cHJpc3dyaWNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwODc4NjAsImV4cCI6MjA0ODY2Mzg2MH0.mxTUYr8jek1FlLE-aCdoXj9B0kE2GRSnrZ3rbXL6oU0
    
    return (
      <>
        <SearchBar2 />
        <EventsList eventsToShow={eventsToShow} />
      </>
    )
}