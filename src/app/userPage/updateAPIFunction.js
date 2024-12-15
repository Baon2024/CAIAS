
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
  
  
  export async function updateAPIFunctionImage(documentId, newValue) {
  
    console.log("thsi is modalDocumentId inside updateAPIFunction:", documentId);
  
    const url = `http://localhost:1337/api/events/${documentId}`;

    console.log("newValue passed is:", newValue);
  
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
                  data: { eventImage: newValue },  //need to find out how newEventImage stores its id exactly
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
  
  export async function updateAPIFunctionUrl(documentId, newValue) {
  
    console.log("thsi is modalDocumentId inside updateAPIFunction:", documentId);
  
    const url = `http://localhost:1337/api/events/${documentId}`;

    console.log("newValue passed is:", newValue);
  
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
                  data: { eventUrlLink: newValue },  //need to find out how newEventImage stores its id exactly
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

  export async function updateTags(documentId, newValue) {
    console.log("This is documentId inside updateTags:", documentId);

    const url = `http://localhost:1337/api/events/${documentId}`;
    console.log("newValue passed is:", newValue);

    try {
        // Fetch the current document to get the existing tags
        const currentDataResponse = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, // Use JWT for authentication
            },
        });

        if (!currentDataResponse.ok) {
            throw new Error('Failed to fetch current data');
        }

        const currentData = await currentDataResponse.json();
        console.log("currentData inside updateTags function is:", updateTags);
        const existingTags = currentData?.data?.tags || []; // Get existing tags or default to an empty array
        console.log("existingTags variable is:". existingTags);

        // Update the tags with the new value
        const updatedTags = [...existingTags, newValue];
        console.log("updatedTags variable is:", updateTags);

        const updateResponse = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, // Use JWT for authentication
            },
            body: JSON.stringify({
                data: { tags: updatedTags }, // Send updated tags array
            }),
        });

        if (!updateResponse.ok) {
            throw new Error('Failed to update tags');
        }

        const updatedData = await updateResponse.json();
        console.log('Updated tags successfully:', updatedData);
        return updatedData;
    } catch (error) {
        console.error('Error updating tags:', error);
        return null;
    }
}

export async function updateRemoveTag(documentId, tag) {
    console.log("This is documentId inside updateTags:", tag);

    const url = `http://localhost:1337/api/events/${documentId}`;
    console.log("tag passed is:", tag);

    try {
        // Fetch the current document to get the existing tags
        const currentDataResponse = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, // Use JWT for authentication
            },
        });

        if (!currentDataResponse.ok) {
            throw new Error('Failed to fetch current data');
        }

        const currentData = await currentDataResponse.json();
        console.log("currentData inside updateTags function is:", currentData);
        const existingTags = currentData?.data?.tags || []; // Get existing tags or default to an empty array
        console.log("existingTags variable is:", existingTags);

        // Update the tags with the new value
        const updatedTags = existingTags.filter((existingTag) => existingTag !== tag);
        console.log("updatedTags variable is:", updateTags);

        const updateResponse = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, // Use JWT for authentication
            },
            body: JSON.stringify({
                data: { tags: updatedTags }, // Send updated tags array
            }),
        });

        if (!updateResponse.ok) {
            throw new Error('Failed to update tags');
        }

        const updatedData = await updateResponse.json();
        console.log('Updated tags successfully:', updatedData);
        return updatedData;
    } catch (error) {
        console.error('Error updating tags:', error);
        return null;
    }
}

