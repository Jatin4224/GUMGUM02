import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button asChild variant="elevated">
        <Link href="/login">lOGIN</Link>
      </Button>

      <Input placeholder="write text"></Input>
    </div>
  );
}
