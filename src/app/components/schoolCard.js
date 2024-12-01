'use client';
import { MapPin, GraduationCap, Coins } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
//import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export function SchoolCard({
  schoolName,
  schoolLocation,
  Bursaries,
  scholarships,
  schoolImage,
  documentId
}) {

  //const [isMounted, setIsMounted] = useState(false);
  //const router = useRouter();

  //if (!isMounted) return null; 

  // Check if the component is mounted on the client-side
  /*useEffect(() => {
    setIsMounted(true);
  }, []);*/

  





  return (
    <Link
    href={`/societies/${documentId}`}
    className={
      "relative h-[calc(19.5em-28px)] sm:h-[275px] lg:h-[calc(25vw-28px-28px)] w-full text-left hover:outline-none focus:outline-none hover:ring-0 focus:ring-0 active:ring-0 hover:transform hover:scale-110 transition-transform duration-300"}
  >
    <Card className="h-full overflow-hidden rounded-xl transition-colors hover:bg-accent relative">
      <div className="absolute inset-0 z-0">
        <img
          src={schoolImage || "/placeholder.svg?height=400&width=600"}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      </div>
      <div className="relative z-10">
        <CardHeader>
          <div className="space-y-2">
            <h3 className="text-xl font-bold leading-tight text-white">{schoolName}</h3>
            <div className="flex flex-wrap gap-2">
              {Bursaries && (
                <Badge variant="secondary" className="flex items-center gap-1 bg-white/20 text-white">
                  <Coins className="w-3 h-3" />
                  Bursaries
                </Badge>
              )}
              {scholarships && (
                <Badge variant="secondary" className="flex items-center gap-1 bg-white/20 text-white">
                  <GraduationCap className="w-3 h-3" />
                  Scholarships
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>{schoolLocation}</span>
          </div>
        </CardContent>
      </div>
    </Card>
  </Link>
  )
}