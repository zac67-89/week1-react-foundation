interface UserCardProps {
  name: string;
  age: number;
}

export default function UserCard({ name, age }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}