import { CalendarDays, Clock, MapPin, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
//import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDate, formatTime } from "@/lib/utils"
import Link from 'next/link'
//import type { Event } from "@/types/event"

//interface EventCardProps extends Omit<Event, 'createdAt' | 'updatedAt' | 'publishedAt' | 'documentId'> {}


///need to add event.society details, so can display society the event belongs to, and allow user to click through to the society


export default function EventCard({
  eventName,
  eventDate,
  eventTime,
  eventDescription,
  eventLocation,
  eventImage,
  society,
  documentId,
  id,
  eventUrlLink
}) {
  return (
  <Link href={`/events/${documentId}`}>
    <Card className="h-full flex flex-col">
      <div className="aspect-video relative">
        <img
          src={eventImage?.url || "/placeholder.svg?height=200&width=400"}
          alt={eventName}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="line-clamp-2">{eventName}</CardTitle>
          
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 flex-1">
        <div className="flex items-center gap-2 text-sm">
          <Users className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{eventName}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{eventDescription}</p>
        <div className="grid gap-2 mt-auto">
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <span>{formatDate(eventDate)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{formatTime(eventTime)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{eventLocation}</span>
          </div>
          <div className="text-right">
            <div className="bg-secondary text-secondary-foreground rounded-full px-3 py-1">
              <p className="text-xs text-center">{society.username}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </Link>
  )
}
