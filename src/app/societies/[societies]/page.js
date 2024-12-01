'use client'
//need to create the society page here, and the lost of upcoming and pas events
//create upcoming and past array by just filtering events based on date
import sampleSocietiesData from "@/app/components/sampleSocietiesData";
import { useParams } from "next/navigation";

export default function societyPage() {

    const { societies } = useParams();
    console.log("this is the documentId:", societies);
    const selectedSocietyArray = sampleSocietiesData.filter(society => society.documentId === societies);
    console.log("This is the selected Event:", selectedSocietyArray);

    const selectedSociety = selectedSocietyArray[0];

   

    return (
        <>
          <p>placeholder page for individual event</p>
          <p>{selectedSociety.username}</p>
          
        </>
    )
}