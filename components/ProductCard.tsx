interface Product {
  name: string;
  price: number;
}

export default function ProductCard({ name, price}: Product) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}$</p>
    </div>
  )
}