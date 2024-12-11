export default async function addLogo(imageId) {


    const society = JSON.parse(localStorage.getItem('user'));
    console.log("society before id is:", society);
    const societyId = society.id;
    console.log("society id is:", societyId);
    
    const token = localStorage.getItem('jwt');
    
    console.log("imageId is:", imageId);

    try {
        // Step 1: Update the user to associate the image (ID) with the societyLogo field
        const updateUserResponse = await fetch(`http://localhost:1337/api/users/${societyId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,  // Use JWT for authentication
            },
            body: JSON.stringify({
                logo: { id: imageId  },  // Store the image ID in the societyLogo field
                },
            ),
        });

        if (!updateUserResponse.ok) {
            throw new Error('Failed to update user with logo');
        }

        const updatedUser = await updateUserResponse.json();
        console.log('Updated user with society logo:', updatedUser);
        return updatedUser;
    } catch (error) {
        console.error('Error updating user with society logo:', error);
        return null;
    }
}

export async function fetchUser() {

    const token = localStorage.getItem('jwt');

    try {
        // Step 1: Update the user to associate the image (ID) with the societyLogo field
        const updateUserResponse = await fetch(`http://localhost:1337/api/users/me?populate=*`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,  // Use JWT for authentication
            },
        });

        if (!updateUserResponse.ok) {
            throw new Error('Failed to update user with logo');
        }

        const user = await updateUserResponse.json();
        console.log('Updated user with society logo:', user);
        return user;
    } catch (error) {
        console.error('Error updating user with society logo:', error);
        return null;
    }
}
