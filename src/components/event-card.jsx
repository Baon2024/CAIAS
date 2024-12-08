import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react'

export function EventCard({
  event,
  onCancel,
  onEdit
}) {
  return (
    (<Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={event.eventImage || "/placeholder.svg?height=192&width=384"}
          alt={event.eventName}
          layout="fill"
          objectFit="cover" />
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
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => onEdit(event.id)}>Edit</Button>
        <Button variant="destructive" onClick={() => onCancel(event.id)}>Cancel</Button>
      </CardFooter>
    </Card>)
  );
}

