
const token = localStorage.getItem('jwt');




export default async function cancelEvent(documentId) {

    console.log("eventId passed to api function is:", documentId);

    const url = `http://localhost:1337/api/events/${documentId}`;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
    })
    
    
    //const returnedData = await response.json();
    console.log("this is what response before .json() is:", response);
    return response;
    //console.log("response about to be returned:", returnedData);
    //return returnedData;
}