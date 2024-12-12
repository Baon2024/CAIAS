'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import fetchSocietyEvents from "./fetchSocietyEventsAPI";
import { EventCard } from "./eventCard";
import { Button } from "@/components/ui/button";
import cancelEvent from "./userPageAPIs";
import { uploadEventImage } from "../apiFunctions/apiToAddEvent";
import addLogo from "./addLogoAPI";
import { fetchUser } from "./addLogoAPI";
import ModalExample from "./modalExample";

export default function UserPage() {

    const router = useRouter();
    const [ societyEvents, setSocietyEvents ] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ selectedFile, setSelectedFile ] = useState(null);
    const [ logoPreview, setLogoPreview ] = useState(null);
    const [ isModal2Open, setIsModal2Open ] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [ modalDocumentId, setModalDocumentId ] = useState('');


   async function getStuff() {
    const trialSociety = await fetchUser();
    console.log("this is getting user via API:", trialSociety);
   }
   getStuff();

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

    function handleAddLogo() {
      
    }
    async function uploadEventImage2(file) {
      const formData = new FormData();
      formData.append('files', file);
  
      try {
          const response = await fetch('http://localhost:1337/api/upload', {
              method: 'POST',
              headers: {
                  Authorization: `Bearer ${localStorage.getItem('jwt')}`,
              },
              body: formData,
          });
  
          if (!response.ok) {
              throw new Error('Failed to upload QR code');
          }
  
          const uploadedFiles = await response.json();
          console.log('Uploaded event image details:', uploadedFiles);
  
          // Return the uploaded file's ID
          return uploadedFiles[0]; // Assuming the first file is what we need
      } catch (error) {
          console.error('Error uploading QR code:', error);
          return null;
      }
  }

  

  
    async function addLogoHandler() {
      
      const logoId = logoPreview.id;

      const response = await addLogo(logoId);
      console.log("response to addLogo function is:", response);
    }

    async function uploadEventImageHandler() {

    
      const response = await uploadEventImage2(selectedFile);
      console.log("uploaded image for event is:", response);
      console.log("thsi is what the url is:", response.url);
      console.log(`http://localhost:1337${response.url}`)
      
      
        //const logo = response[0];  // Get the first item from the array
        //console.log("URL about to be set is:", logo);  // Log the URL
      setLogoPreview(response);
      
      
      
      
}
 useEffect(() => {
  console.log("LogoPreview currently is:", logoPreview)
 },[setLogoPreview])
    

    function handleOpenModal() {
      setIsModalOpen(true);
    }

    function handleCloseModal() {
      setIsModalOpen(false);
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0]; // Get the first selected file
      setSelectedFile(file);
  };
  
    
  
    const handleEditEvent = (id) => {
      // Implement edit event logic here
      console.log(`Editing event with id: ${id}`);
      router.push(`/editEvent/${id}`);
    }

    async function cancelEventHandler( documentId) {
      

      if (isSubmitting) return;  // Prevent multiple submissions
        setIsSubmitting(true);

      try {
      const returnedEventCancellation = await cancelEvent(documentId);
      console.log("returnedEventCancellation response is:", returnedEventCancellation);

      if (returnedEventCancellation.status === 204) {
        console.log(`Ticket ${documentId} successfully deleted.`);

        setSocietyEvents((prevEvents) => prevEvents.filter(event => event.documentId !== documentId));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
        // Update state to reflect deletion
        /*setUserData(prevUserData => ({
          ...prevUserData,
          myTicketsListed: prevUserData.myTicketsListed.filter(t => t.id !== ticket.id),
        }));*/
    
    
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
   

   //need to filter societyEvents, so only those with valid createdAt dates are returned
   let filteredEvents;
   if (societyEvents) {
     filteredEvents = societyEvents.filter(event => event.publishedAt !== null);
   console.log("these are the newScietyEvents:", filteredEvents);
   }
   
   

    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <div className="space-x-4">
            <Button onClick={pushToAddEvent}>Add New Event</Button>
            <Button variant="outline" onClick={handleLogOut}>Log Out</Button>
            <Button variant="outline" onClick={handleOpenModal}>Add Logo</Button>
          </div>
        </div>
        {isLoading ? (
          <div className="text-center">Loading events...</div>
        ) : societyEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                onCancel={cancelEventHandler}
                documentId={event.documentId}
                setIsAnimating={setIsAnimating}
                setIsOpen={setIsOpen}
                setModalDocumentId={setModalDocumentId}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">No events found.</div>
        )}
        {isModalOpen && (
          <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[1000]">
            <div
  className="relative bg-white p-5 rounded-lg max-w-lg w-11/12 text-center"
  onClick={(e) => e.stopPropagation()}
>
<button
  className="absolute top-2.5 right-2.5 bg-transparent border-none text-xl cursor-pointer"
  onClick={handleCloseModal}
>X</button>
{ isModalOpen && logoPreview && ( <img
  src={`http://localhost:1337${logoPreview.url}`}
  alt="Ticket QR Code"
  className="max-w-full h-auto"
/>)}
<input id="image" type="file" accept="image/*" onChange={handleFileChange} />
<button onClick={uploadEventImageHandler}>preview logo</button>
<button onClick={addLogoHandler}>add logo</button>
            </div>
          </div>
        )}
        <div>
          <div>
            <ModalExample 
             
            isOpen={isOpen} 
            setIsOpen={setIsOpen}
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
            modalDocumentId={modalDocumentId}
            />
          </div>
        </div>
      </div>
    )
  }
  




