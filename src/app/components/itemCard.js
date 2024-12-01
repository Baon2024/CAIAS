import Image from 'next/image';


export default function ItemCard({ title, description, imageUrl }) {
  
  const schoolSampleData = [
    
  ]
  
  
  
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-48">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="px-4 py-3 bg-gray-100">
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        View Details
      </button>
    </div>
  </div>
  )
}
