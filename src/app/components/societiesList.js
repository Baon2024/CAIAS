'use client'
//need to present all societies
import sampleSocietiesData from "./sampleSocietiesData";
//import sampleSocietiesData from "./sampleSocietiesData";
import Link from "next/link";
import Image from "next/image";
//pass down societies as prop
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
//import { Society } from "./types/society"

console.log("this is sampleSocietiesData:", sampleSocietiesData);

const sampleSocietiesDataMap = sampleSocietiesData[0];
console.log("this is sampleSocietiesDatMap:", sampleSocietiesDataMap); 

const societies = [
  {
      "id": 2,
      "documentId": "n1g20u2cl3iblblih5ctyjdj",
      "username": "Cambridge Arts Society",
      "email": "artsociety@cam.ac.uk",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2024-11-29T01:14:22.539Z",
      "updatedAt": "2024-12-02T23:15:10.902Z",
      "publishedAt": "2024-12-02T23:15:10.892Z",
      "events": [
          {
              "id": 1,
              "documentId": "b2wp8jvlxx9xicvzw7lecev9",
              "eventName": "Art Exhibition Opening",
              "createdAt": "2024-11-28T23:45:02.518Z",
              "updatedAt": "2024-11-28T23:48:47.898Z",
              "publishedAt": null,
              "eventDate": "2024-12-10",
              "eventTime": "18:00:00.000",
              "eventDescription": "An evening to view works of contemporary art from local and international artists.",
              "eventLocation": "University Art Gallery",
              "eventUrlLink": null
          },
          {
              "id": 2,
              "documentId": "b2wp8jvlxx9xicvzw7lecev9",
              "eventName": "Outdoor Sculpture Tour",
              "createdAt": "2024-11-28T23:46:03.518Z",
              "updatedAt": "2024-11-28T23:47:47.898Z",
              "publishedAt": "2024-11-29T00:00:00.000Z",
              "eventDate": "2024-12-12",
              "eventTime": "10:00:00.000",
              "eventDescription": "A guided walking tour around Cambridge to explore public sculptures and installations.",
              "eventLocation": "Meeting point: King's Parade",
              "eventUrlLink": "https://example.com/sculpture-tour"
          }
      ]
  },
  {
      "id": 3,
      "documentId": "m2g21z2gl4imblbiag8ctzjl",
      "username": "Cambridge University Writers",
      "email": "writers.cambridge@uni.ac.uk",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2024-11-29T03:05:09.328Z",
      "updatedAt": "2024-12-02T23:59:29.102Z",
      "publishedAt": "2024-12-02T23:59:29.099Z",
      "events": [
          {
              "id": 1,
              "documentId": "g3wp8jvlzz1xjcvzw7jecev6",
              "eventName": "Short Story Writing Workshop",
              "createdAt": "2024-11-29T00:12:01.518Z",
              "updatedAt": "2024-11-29T00:13:47.898Z",
              "publishedAt": null,
              "eventDate": "2024-12-03",
              "eventTime": "11:00:00.000",
              "eventDescription": "A workshop focused on writing short stories. Open to all skill levels.",
              "eventLocation": "Room 15, English Faculty",
              "eventUrlLink": null
          },
          {
              "id": 2,
              "documentId": "g3wp8jvlzz1xjcvzw7jecev6",
              "eventName": "Poetry Slam Night",
              "createdAt": "2024-11-29T00:15:03.518Z",
              "updatedAt": "2024-11-29T00:17:47.898Z",
              "publishedAt": "2024-11-29T00:20:10.000Z",
              "eventDate": "2024-12-05",
              "eventTime": "19:00:00.000",
              "eventDescription": "A vibrant poetry slam where writers can showcase their poetry in front of an audience.",
              "eventLocation": "The Poetry Café, King's College",
              "eventUrlLink": null
          }
      ]
  },
  {
      "id": 4,
      "documentId": "a4g29p2cl6ibslbujg8csyjd",
      "username": "Literary Festival Committee",
      "email": "litfest.committee@uni.ac.uk",
      "provider": "local",
      "confirmed": true,
      "blocked": false,
      "createdAt": "2024-11-29T04:22:44.418Z",
      "updatedAt": "2024-12-02T21:02:55.611Z",
      "publishedAt": "2024-12-02T21:02:55.601Z",
      "events": [
          {
              "id": 1,
              "documentId": "w1mp7jvlxy9xcivzw7mecevv",
              "eventName": "Literary Festival Gala",
              "createdAt": "2024-11-29T01:01:12.518Z",
              "updatedAt": "2024-11-29T01:05:47.898Z",
              "publishedAt": null,
              "eventDate": "2024-12-15",
              "eventTime": "19:30:00.000",
              "eventDescription": "Join us for a formal event to celebrate the opening of the Cambridge Literary Festival.",
              "eventLocation": "The Great Hall, Clare College",
              "eventUrlLink": null
          },
          {
              "id": 2,
              "documentId": "w1mp7jvlxy9xcivzw7mecevv",
              "eventName": "Book Launch: New Works in Poetry",
              "createdAt": "2024-11-29T01:10:23.518Z",
              "updatedAt": "2024-11-29T01:12:47.898Z",
              "publishedAt": "2024-11-29T01:15:00.000Z",
              "eventDate": "2024-12-16",
              "eventTime": "16:00:00.000",
              "eventDescription": "A launch event for the newest poetry anthology featuring rising talents from across the UK.",
              "eventLocation": "University Press Bookstore",
              "eventUrlLink": "https://example.com/book-launch"
          }
      ]
  }
]



/*const societies= [
  {
    "id": 1,
    "documentId": "n1g20u2cl3iblblih5ctyjdj",
    "username": "Gonville & Cauis Poets and Songwriters",
    "email": "baon2020@protonmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2024-11-29T00:29:38.328Z",
    "updatedAt": "2024-11-29T00:35:23.617Z",
    "publishedAt": "2024-11-29T00:35:23.597Z"
  },
  {
    "id": 2,
    "documentId": "a2b30v3dz4dxhc1yh5etycdm",
    "username": "St. John's Theatre Club",
    "email": "stjohns2024@protonmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2024-11-30T10:15:42.123Z",
    "updatedAt": "2024-11-30T10:20:12.456Z",
    "publishedAt": "2024-11-30T10:20:12.400Z"
  },
  {
    "id": 3,
    "documentId": "c3f40u4el5yzkf2zh7htkdem",
    "username": "King's College Chess Club",
    "email": "kingschess@protonmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2024-12-01T14:10:25.678Z",
    "updatedAt": "2024-12-01T14:15:30.123Z",
    "publishedAt": "2024-12-01T14:15:30.100Z"
  },
  {
    "id": 4,
    "documentId": "d4g50v5kl6ajlm3kh8jtkfmn",
    "username": "Trinity Tech Innovators",
    "email": "trinitytech@protonmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2024-12-01T15:00:00.000Z",
    "updatedAt": "2024-12-01T15:05:00.000Z",
    "publishedAt": "2024-12-01T15:05:00.000Z"
  },
  {
    "id": 5,
    "documentId": "e5h60x6mn7bnol4ni9kulgnp",
    "username": "Cambridge Science Society",
    "email": "cambscience@protonmail.com",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2024-12-01T16:00:00.000Z",
    "updatedAt": "2024-12-01T16:10:00.000Z",
    "publishedAt": "2024-12-01T16:10:00.000Z"
  }
]*/

export default function SocietiesList({societiesToShow}) {

  //need to remove array in order to access societies



if (societiesToShow) {

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">University Societies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*sampleSocietiesDataMap*/societiesToShow.map((society) => (
        <Link href={`/societies/${society.documentId}`}>
          <Card key={society.id} className="overflow-hidden">
          <div className="h-40 relative">
  <Image
    src={`http://localhost:1337/${society.logo?.url || '/placeholder.svg?height=160&width=320'}`}
    alt={society.username || 'Society Logo'}
    layout="fill"  // This makes the image fill the container
    objectFit="cover"  // Ensures the image covers the container
  />
</div>
            <CardHeader>
              <CardTitle className="text-xl truncate">{society.username}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground truncate">{society.email}</p>
            </CardContent>
          </Card>
        </Link>
        ))}
      </div>
    </div>
  )
}
}