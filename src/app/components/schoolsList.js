'use client'
import { SchoolCard } from "./schoolCard"
//import 'public/images/eton.jpeg';

const schoolsSampleData = [
    { 
      schoolName: "Eton", 
      schoolLocation: "Berkshire, South-East", 
      Bursaries: true, 
      scholarships: true, 
      schoolImage: '/images/eton.jpeg',
      documentId: 37363632,
      ranking: 0
    },
    { 
      schoolName: "Harrow", 
      schoolLocation: "London, South-East", 
      Bursaries: false, 
      scholarships: true, 
      schoolImage: null,
      documentId: 49392849
    },
    { 
      schoolName: "Winchester College", 
      schoolLocation: "Winchester, South-East", 
      Bursaries: true, 
      scholarships: true, 
      schoolImage: null,
      documentId: 57483920
    },
    { 
      schoolName: "Charterhouse", 
      schoolLocation: "Godalming, South-East", 
      Bursaries: true, 
      scholarships: false, 
      schoolImage: null,
      documentId: 64820394
    },
    { 
      schoolName: "Rugby School", 
      schoolLocation: "Rugby, Midlands", 
      Bursaries: true, 
      scholarships: true, 
      schoolImage: null,
      documentId: 74839283
    },
    { 
      schoolName: "Westminster School", 
      schoolLocation: "London, South-East", 
      Bursaries: false, 
      scholarships: true, 
      schoolImage: null,
      documentId: 84572013
    },
    { 
      schoolName: "St Paul's School", 
      schoolLocation: "London, South-East", 
      Bursaries: true, 
      scholarships: true, 
      schoolImage: null,
      documentId: 91284934
    },
    { 
      schoolName: "Cheltenham College", 
      schoolLocation: "Cheltenham, South-West", 
      Bursaries: true, 
      scholarships: false, 
      schoolImage: null,
      documentId: 10293847
    },
    { 
      schoolName: "Bedford School", 
      schoolLocation: "Bedford, East England", 
      Bursaries: false, 
      scholarships: true, 
      schoolImage: null,
      documentId: 12038475
    },
    { 
      schoolName: "Tonbridge School", 
      schoolLocation: "Kent, South-East", 
      Bursaries: true, 
      scholarships: true, 
      schoolImage: null,
      documentId: 13374829
    },
    { 
      schoolName: "Marlborough College", 
      schoolLocation: "Marlborough, South-West", 
      Bursaries: true, 
      scholarships: true, 
      schoolImage: null,
      documentId: 14839276
    },
    { 
      schoolName: "King's School Canterbury", 
      schoolLocation: "Canterbury, South-East", 
      Bursaries: true, 
      scholarships: true, 
      schoolImage: null,
      documentId: 15376284
    },
    { 
      schoolName: "Radley College", 
      schoolLocation: "Abingdon, South-East", 
      Bursaries: true, 
      scholarships: false, 
      schoolImage: null,
      documentId: 16382049
    },
    { 
      schoolName: "Oundle School", 
      schoolLocation: "Oundle, East Midlands", 
      Bursaries: false, 
      scholarships: true, 
      schoolImage: null,
      documentId: 17483920
    },
    { 
      schoolName: "Shrewsbury School", 
      schoolLocation: "Shrewsbury, West Midlands", 
      Bursaries: true, 
      scholarships: false, 
      schoolImage: null,
      documentId: 18502938
    }
  ]
  
export default function SchoolsList() {
  return (
    <div className="w-full px-6 pt-10 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {schoolsSampleData.map((school) => (
          <SchoolCard
            key={school.schoolName}
            schoolName={school.schoolName}
            schoolLocation={school.schoolLocation}
            Bursaries={school.Bursaries}
            scholarships={school.scholarships}
            schoolImage={school.schoolImage}
            documentId={school.documentId}
            /*onClickHandler={onClickHandler}*/ 
          />
        ))}
      </div>
    </div>
  )
}

export { schoolsSampleData };