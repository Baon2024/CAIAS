


export default async function fetchSocietyEvents() {
    
  //const url = `http://localhost:1337/api/users/me?populate=*`;
  const url = `http://localhost:1337/api/users/me?populate=events.eventImage`;


  const token = localStorage.getItem('jwt');

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
})

const returnedEvents = await response.json();
console.log("these are the society's events about to be returned: ", returnedEvents);
//const stuffToReturn = returnedEvents.data;
//console.log("and withou the data layer:", stuffToReturn);
return returnedEvents;

}