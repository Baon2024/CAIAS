// Sample data to simulate API response
const sampleEvents = [
  {
    id: "1",
    eventName: "Annual Charity Gala",
    eventDate: "2023-12-15",
    eventDescription: "Join us for an evening of elegance and philanthropy at our Annual Charity Gala.",
    eventLocation: "Grand Ballroom, City Center",
    eventTime: "19:00",
    eventImage: "/placeholder.svg?height=192&width=384"
  },
  {
    id: "2",
    eventName: "Tech Meetup",
    eventDate: "2023-11-20",
    eventDescription: "Connect with fellow tech enthusiasts and learn about the latest innovations.",
    eventLocation: "TechHub Co-working Space",
    eventTime: "18:30",
    eventImage: "/placeholder.svg?height=192&width=384"
  },
  {
    id: "3",
    eventName: "Community Garden Day",
    eventDate: "2023-11-05",
    eventDescription: "Help us plant and maintain our community garden. All ages welcome!",
    eventLocation: "Greenville Park",
    eventTime: "10:00",
    eventImage: "/placeholder.svg?height=192&width=384"
  }
];

export default async function fetchSocietyEvents() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Return sample data
  return { events: sampleEvents };
}

