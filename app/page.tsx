import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button asChild variant="outline">
        <Link href="/login">lOGIN</Link>
      </Button>
      <Button asChild variant="destructive">
        <Link href="/login">lOGIN</Link>
      </Button>
      <Input placeholder="write text"></Input>
    </div>
  );
}
