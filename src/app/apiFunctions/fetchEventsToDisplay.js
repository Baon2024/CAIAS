//api to get event to display - endpoint of /api/events
const token = '010112826dc97bc53ef853b7894019f0925ce8484d682aa0f9a9bec06c0c225ff7fec03e587af0fa8b1571662cda02be4d6ef68129610b5b76f6b3e65df6fb76a641d09de71dcf95de97a01b65eeb41d33218b3048aa7c0c394183f03b8c1a1ed4b8a42a047428ca6e613c6a4fdfa209ae0969e6c00f608ce90b4ba8ae95196e';


export default async function fetchEventsToDisplay() {
    //const url = 'http://localhost:1338/api/events?populate=*';
    const url = 'http://localhost:1337/api/events?populate[society][populate]=*';
    //const url = 'http://localhost:1337/api/events?populate=*&populate[society][populate]=logo';


    const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
    })
    
    const returnResponse = await response.json();
    console.log("this is what is being returned: ", returnResponse);
    const stuffToReturn = returnResponse.data;
    console.log("stufftoreturn is:", stuffToReturn);
    return stuffToReturn;
    //rember to remove a layer, when wrapped in btoh array and object, and to include 'return x' statement
}

