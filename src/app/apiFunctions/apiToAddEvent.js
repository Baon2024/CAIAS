import { json } from "react-router-dom";

const token = '010112826dc97bc53ef853b7894019f0925ce8484d682aa0f9a9bec06c0c225ff7fec03e587af0fa8b1571662cda02be4d6ef68129610b5b76f6b3e65df6fb76a641d09de71dcf95de97a01b65eeb41d33218b3048aa7c0c394183f03b8c1a1ed4b8a42a047428ca6e613c6a4fdfa209ae0969e6c00f608ce90b4ba8ae95196e';

export default async function apiToAddEvent(newEvent) {

    const url = `http://localhost:1337/api/events`;

    const token = localStorage.getItem('jwt');
    if (!token) {
        console.error('No JWT found in localStorage');
        return null;
    }


    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ data: newEvent }),
        });

        if (!response.ok) {
            throw new Error('Failed to add new event');
        }

        const uploadedEvent = await response.json();
        console.log('Uploaded event:', uploadedEvent);

        // Return the uploaded file's ID
        const eventToReturn = uploadedEvent.data;
        return eventToReturn;
    } catch (error) {
        console.error('Error adding event:', error);
        return null;
    }


} 


async function uploadEventImage(file) {
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
        return uploadedFiles[0].id; // Assuming the first file is what we need
    } catch (error) {
        console.error('Error uploading QR code:', error);
        return null;
    }
}

export { uploadEventImage };