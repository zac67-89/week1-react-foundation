import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <div>
      <UserCard name="John Doe" age={35} />
      <UserCard name="Alice" age={23} />
    </div>
  );
}
