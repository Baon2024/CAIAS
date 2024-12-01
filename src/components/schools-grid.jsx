import { SchoolCard } from "./school-card"

const schoolsSampleData = [
  { schoolName: "Eton", schoolLocation: "Berkshire, South-East", Bursaries: true, scholarships: true, schoolImage: null },
  { schoolName: "Harrow", schoolLocation: "London, South-East", Bursaries: false, scholarships: true, schoolImage: null },
  { schoolName: "Winchester College", schoolLocation: "Winchester, South-East", Bursaries: true, scholarships: true, schoolImage: null },
  { schoolName: "Charterhouse", schoolLocation: "Godalming, South-East", Bursaries: true, scholarships: false, schoolImage: null },
  { schoolName: "Rugby School", schoolLocation: "Rugby, Midlands", Bursaries: true, scholarships: true, schoolImage: null },
  { schoolName: "Westminster School", schoolLocation: "London, South-East", Bursaries: false, scholarships: true, schoolImage: null },
  { schoolName: "St Paul's School", schoolLocation: "London, South-East", Bursaries: true, scholarships: true, schoolImage: null },
  { schoolName: "Cheltenham College", schoolLocation: "Cheltenham, South-West", Bursaries: true, scholarships: false, schoolImage: null },
  { schoolName: "Bedford School", schoolLocation: "Bedford, East England", Bursaries: false, scholarships: true, schoolImage: null },
  { schoolName: "Tonbridge School", schoolLocation: "Kent, South-East", Bursaries: true, scholarships: true, schoolImage: null },
  { schoolName: "Marlborough College", schoolLocation: "Marlborough, South-West", Bursaries: true, scholarships: true, schoolImage: null },
  { schoolName: "King's School Canterbury", schoolLocation: "Canterbury, South-East", Bursaries: true, scholarships: true, schoolImage: null },
  { schoolName: "Radley College", schoolLocation: "Abingdon, South-East", Bursaries: true, scholarships: false, schoolImage: null },
  { schoolName: "Oundle School", schoolLocation: "Oundle, East Midlands", Bursaries: false, scholarships: true, schoolImage: null },
  { schoolName: "Shrewsbury School", schoolLocation: "Shrewsbury, West Midlands", Bursaries: true, scholarships: false, schoolImage: null }
]

export default function SchoolsGrid() {
  return (
    (<div className="container mx-auto p-6">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {schoolsSampleData.map((school) => (
          <SchoolCard
            key={school.schoolName}
            schoolName={school.schoolName}
            schoolLocation={school.schoolLocation}
            Bursaries={school.Bursaries}
            scholarships={school.scholarships}
            schoolImage={school.schoolImage} />
        ))}
      </div>
    </div>)
  );
}

