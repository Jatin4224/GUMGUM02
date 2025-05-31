import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button asChild variant="outline">
        <Link href="/login">lOGIN</Link>
      </Button>
    </div>
  );
}
