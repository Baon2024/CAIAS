/*const sampleSocietiesData = [
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

const sampleSocietiesData = [
    [
        {
          "id": 1,
          "documentId": "n1g20u2cl3iblblih5ctyjdj",
          "username": "Gonville & Cauis poets and songwriters",
          "email": "baon2020@protonmail.com",
          "provider": "local",
          "confirmed": true,
          "blocked": false,
          "createdAt": "2024-11-29T00:29:38.328Z",
          "updatedAt": "2024-12-02T22:19:20.051Z",
          "publishedAt": "2024-12-02T22:19:20.042Z",
          "events": [
            {
              "id": 1,
              "documentId": "bvwp7jvlxx9xicvzw7lecev8",
              "eventName": "poetry night",
              "createdAt": "2024-11-28T23:22:03.518Z",
              "updatedAt": "2024-11-28T23:23:47.898Z",
              "publishedAt": null,
              "eventDate": "2024-12-30",
              "eventTime": "14:30:00.000",
              "eventDescription": "placeholder description stuff",
              "eventLocation": "Chetwynd Hall, King's College",
              "eventUrlLink": null,
              "eventImage": {
                "id": 1,
                "documentId": "wtloymec6a870xcpp45b8qjd",
                "name": "poetry_event_1.png",
                "url": "/uploads/poetry_event_1.png"
              }
            },
            {
              "id": 2,
              "documentId": "bvwp7jvlxx9xicvzw7lecev8",
              "eventName": "open mic session",
              "createdAt": "2024-11-28T23:22:03.518Z",
              "updatedAt": "2024-11-28T23:23:47.898Z",
              "publishedAt": "2024-11-28T23:23:47.919Z",
              "eventDate": "2024-11-30",
              "eventTime": "16:00:00.000",
              "eventDescription": "A great opportunity for all poets",
              "eventLocation": "Kings' College, Cambridge",
              "eventUrlLink": null,
              "eventImage": {
                "id": 2,
                "documentId": "wtloymec6a870xcpp45b8qjd",
                "name": "open_mic_1.png",
                "url": "/uploads/open_mic_1.png"
              }
            }
          ]
        },
        {
          "id": 2,
          "documentId": "n1g20u2cl3iblblih5ctyjdj",
          "username": "Cambridge Literary Club",
          "email": "literary.club@cam.ac.uk",
          "provider": "local",
          "confirmed": true,
          "blocked": false,
          "createdAt": "2024-11-29T01:30:40.328Z",
          "updatedAt": "2024-12-02T23:15:22.051Z",
          "publishedAt": "2024-12-02T23:15:20.042Z",
          "events": [
            {
              "id": 3,
              "documentId": "bvwp7jvlxx9xicvzw7lecev8",
              "eventName": "literary discussion",
              "createdAt": "2024-11-28T23:30:10.518Z",
              "updatedAt": "2024-11-28T23:45:47.898Z",
              "publishedAt": null,
              "eventDate": "2024-12-01",
              "eventTime": "18:30:00.000",
              "eventDescription": "Discussing modern literature trends",
              "eventLocation": "Fitzwilliam Museum",
              "eventUrlLink": null,
              "eventImage": {
                "id": 3,
                "documentId": "wtloymec6a870xcpp45b8qjd",
                "name": "literary_event_1.png",
                "url": "/uploads/literary_event_1.png"
              }
            }
          ]
        },
        {
          "id": 3,
          "documentId": "n1g20u2cl3iblblih5ctyjdj",
          "username": "Poetry Enthusiasts Society",
          "email": "poetry@cambridge.edu",
          "provider": "local",
          "confirmed": true,
          "blocked": false,
          "createdAt": "2024-11-29T02:15:00.328Z",
          "updatedAt": "2024-12-02T22:30:10.051Z",
          "publishedAt": "2024-12-02T22:20:10.042Z",
          "events": [
            {
              "id": 4,
              "documentId": "bvwp7jvlxx9xicvzw7lecev8",
              "eventName": "poetry reading",
              "createdAt": "2024-11-28T23:25:00.518Z",
              "updatedAt": "2024-11-28T23:45:47.898Z",
              "publishedAt": null,
              "eventDate": "2024-12-02",
              "eventTime": "19:00:00.000",
              "eventDescription": "Join us for an evening of poetry",
              "eventLocation": "Downing College",
              "eventUrlLink": null,
              "eventImage": {
                "id": 4,
                "documentId": "wtloymec6a870xcpp45b8qjd",
                "name": "poetry_reading_1.png",
                "url": "/uploads/poetry_reading_1.png"
              }
            }
          ]
        },
        {
          "id": 4,
          "documentId": "n1g20u2cl3iblblih5ctyjdj",
          "username": "Cambridge Creative Writers",
          "email": "creativewriters@cam.ac.uk",
          "provider": "local",
          "confirmed": true,
          "blocked": false,
          "createdAt": "2024-11-29T04:20:00.328Z",
          "updatedAt": "2024-12-02T23:00:30.051Z",
          "publishedAt": "2024-12-02T23:20:30.042Z",
          "events": [
            {
              "id": 5,
              "documentId": "bvwp7jvlxx9xicvzw7lecev8",
              "eventName": "poetry showcase",
              "createdAt": "2024-11-28T23:28:30.518Z",
              "updatedAt": "2024-11-28T23:45:47.898Z",
              "publishedAt": null,
              "eventDate": "2024-12-03",
              "eventTime": "17:30:00.000",
              "eventDescription": "A showcase of original poems",
              "eventLocation": "St. John's College",
              "eventUrlLink": null,
              "eventImage": {
                "id": 5,
                "documentId": "wtloymec6a870xcpp45b8qjd",
                "name": "showcase_event_1.png",
                "url": "/uploads/showcase_event_1.png"
              }
            }
          ]
        },
    ]
]
      


export default sampleSocietiesData;