import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const societies = [
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
]

export default function SocietiesList() {
  return (
    (<div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">University Societies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {societies.map((society) => (
          <Card key={society.id} className="overflow-hidden">
            <div
              className="h-40 bg-cover bg-center"
              style={{
                backgroundImage: `url('/placeholder.svg?height=160&width=320')`,
              }} />
            <CardHeader>
              <CardTitle className="text-xl truncate">{society.username}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground truncate">{society.email}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>)
  );
}

