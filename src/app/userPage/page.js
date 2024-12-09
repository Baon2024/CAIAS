'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import fetchSocietyEvents from "./fetchSocietyEventsAPI";
import { EventCard } from "./eventCard";
import { Button } from "@/components/ui/button";
import cancelEvent from "./userPageAPIs";


export default function UserPage() {

    const router = useRouter();
    const [ societyEvents, setSocietyEvents ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function handleLogOut() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        //setUser(null); - might need to use this if you filter this down as a prop thrhough oayout
        router.push("/");
      }
    function pushToAddEvent() {
        router.push("/addEvent");
    }

    //handlecancelevent and haldnleeditevent are two placehodler functions, don't work

    
  
    const handleEditEvent = (id) => {
      // Implement edit event logic here
      console.log(`Editing event with id: ${id}`);
      router.push(`/editEvent/${id}`);
    }

    async function cancelEventHandler(documentId) {
      //e.preventDefault();

      const returnedEventCancellation = await cancelEvent(documentId);
      console.log("returnedEventCancellation response is:", returnedEventCancellation);

      if (returnedEventCancellation.status === 204) {
        console.log(`Ticket ${documentId} successfully deleted.`);

        setSocietyEvents((prevEvents) => prevEvents.filter(event => event.documentId !== documentId));
        
        // Update state to reflect deletion
        /*setUserData(prevUserData => ({
          ...prevUserData,
          myTicketsListed: prevUserData.myTicketsListed.filter(t => t.id !== ticket.id),
        }));*/
    
    }
  }

    //const user = localStorage.getItem('user');
    //console.log("user is:", user);

    useEffect(() => {
      const getSocietyEvents = async () => {
        try {
          setIsLoading(true);
          const returnedEvents = await fetchSocietyEvents();
          console.log("returned events are:", returnedEvents);
          setSocietyEvents(returnedEvents.events);
        } catch (error) {
          console.error("Error fetching society events:", error);
        } finally {
          setIsLoading(false);
        }

        const user = localStorage.getItem('user');
    console.log("user is:", user);

      }
  
      getSocietyEvents();
    }, [])
  

    useEffect(() => {

      
      console.log("societyEvents are:", societyEvents);
      

    },[societyEvents])
   
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <div className="space-x-4">
            <Button onClick={pushToAddEvent}>Add New Event</Button>
            <Button variant="outline" onClick={handleLogOut}>Log Out</Button>
          </div>
        </div>
        {isLoading ? (
          <div className="text-center">Loading events...</div>
        ) : societyEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {societyEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                onCancel={cancelEventHandler}
                onEdit={handleEditEvent}
                path={event.documentId}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">No events found.</div>
        )}
      </div>
    )
  }
  




