import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Counter from "@/components/Counter";
import TaskInput from "@/components/TaskInput";
export default function Home() {
  return (
    <div>
      <Navbar />
      <ProductCard name="Laptop" price={999} />
      <ProductCard name="Smartphone" price={499} />
      <Counter />
      <TaskInput/>
    </div>
  )
}