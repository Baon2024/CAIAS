import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react'
import Link from 'next/link'


export function EventCard({ event, onCancel, onEdit, path }) {


   console.log("documentId is:", event.documentId);


  return (
   
    <Card className="w-full max-w-sm overflow-hidden">
    <Link href={`/events/${path}`}>
      <div className="relative h-48 w-full">
        <Image
          src={`http://localhost:1337${event.eventImage.url}` || "/placeholder.svg?height=192&width=384"}
          alt={event.eventName}
          width={500}  // specify width
          height={300} // specify height
        />
      </div>
      <CardHeader>
        <CardTitle>{event.eventName}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p className="text-sm text-muted-foreground">{event.eventDescription}</p>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{event.eventDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{event.eventTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPinIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{event.eventLocation}</span>
        </div>
      </CardContent>
      </Link>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => onEdit(event.id)}>Edit</Button>
        <Button variant="destructive" onClick={() => onCancel(event.documentId)}>Cancel</Button>
      </CardFooter>
    </Card>
  )
}
