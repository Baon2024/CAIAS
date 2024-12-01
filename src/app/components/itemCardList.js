import ItemCard from "./itemCard"


export default function ItemCardList({ items }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">schools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ItemCard 
            key={item.id} 
            title={item.title} 
            description={item.description} 
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}