'use client'

import Image from 'next/image'
import { useParams } from "next/navigation"
import sampleSocietiesData from "@/data/sampleSocietiesData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react'

const sampleSocietiesDataMap = sampleSocietiesData[0]

export default function SocietyPage() {
  const { societies } = useParams()
  const selectedSociety = sampleSocietiesDataMap.find(society => society.documentId === societies)

  if (!selectedSociety) {
    return <p>Society not found</p>;
  }

  const { username, events } = selectedSociety

  const currentDate = new Date()
  const upcomingEvents = events.filter(event => new Date(event.eventDate) >= currentDate)
  const pastEvents = events.filter(event => new Date(event.eventDate) < currentDate)

  return (
    (<div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{username}</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map(event => (
            <EventCard key={event.documentId} event={event} />
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map(event => (
            <EventCard key={event.documentId} event={event} isPast />
          ))}
        </div>
      </section>
    </div>)
  );
}

function EventCard({ event, isPast = false }) {
  const { eventName, eventDate, eventTime, eventDescription, eventLocation, eventImage, eventUrlLink } = event

  return (
    (<Card className={`overflow-hidden ${isPast ? 'opacity-70' : ''}`}>
      <div className="relative h-48">
        <Image src={eventImage.url} alt={eventName} layout="fill" objectFit="cover" />
      </div>
      <CardHeader>
        <CardTitle>{eventName}</CardTitle>
        <CardDescription>
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 mr-2" />
            {new Date(eventDate).toLocaleDateString()}
          </div>
          <div className="flex items-center mt-1">
            <ClockIcon className="w-4 h-4 mr-2" />
            {eventTime}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{eventDescription}</p>
        <div className="flex items-center text-sm text-gray-500">
          <MapPinIcon className="w-4 h-4 mr-2" />
          {eventLocation}
        </div>
      </CardContent>
      <CardFooter>
        {eventUrlLink && !isPast && (
          <Button asChild>
            <a href={eventUrlLink} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>)
  );
}

