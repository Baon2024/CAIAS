
const token = localStorage.getItem('jwt');


export default async function updateAPIFunctionName(documentId, newValue) {
  
  console.log("thsi is modalDocumentId inside updateAPIFunction:", documentId);

  const url = `http://localhost:1337/api/events/${documentId}`;

  //const locationToAdd = fieldName;

  //may need different logic depending on each type of thing to update
  try {
  const response = await fetch(url, {
    method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,  // Use JWT for authentication
            },
            body: JSON.stringify({
                data: { eventName: newValue },  
                },
            ),
        });

        if (!response.ok) {
            throw new Error('Failed to update user with logo');
        }

        const updatedResponse = await response.json();
        console.log('Updated user with society logo:', updatedResponse);
        return updatedResponse;
    } catch (error) {
        console.error('Error updating user with society logo:', error);
        return null;
    }
}

export async function updateAPIFunctionDescription(documentId, newValue) {
  
    console.log("thsi is modalDocumentId inside updateAPIFunction:", documentId);
  
    const url = `http://localhost:1337/api/events/${documentId}`;
  
    //const locationToAdd = fieldName;
  
    //may need different logic depending on each type of thing to update
    try {
    const response = await fetch(url, {
      method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,  // Use JWT for authentication
              },
              body: JSON.stringify({
                  data: { eventDescription: newValue },  
                  },
              ),
          });
  
          if (!response.ok) {
              throw new Error('Failed to update user with logo');
          }
  
          const updatedResponse = await response.json();
          console.log('Updated user with society logo:', updatedResponse);
          return updatedResponse;
      } catch (error) {
          console.error('Error updating user with society logo:', error);
          return null;
      }
  }

  export async function updateAPIFunctionLocation(documentId, newValue) {
  
    console.log("thsi is modalDocumentId inside updateAPIFunction:", documentId);
  
    const url = `http://localhost:1337/api/events/${documentId}`;
  
    //const locationToAdd = fieldName;
  
    //may need different logic depending on each type of thing to update
    try {
    const response = await fetch(url, {
      method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,  // Use JWT for authentication
              },
              body: JSON.stringify({
                  data: { eventLocation: newValue },  
                  },
              ),
          });
  
          if (!response.ok) {
              throw new Error('Failed to update user with logo');
          }
  
          const updatedResponse = await response.json();
          console.log('Updated user with society logo:', updatedResponse);
          return updatedResponse;
      } catch (error) {
          console.error('Error updating user with society logo:', error);
          return null;
      }
  }
  

