import Image from "next/image";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes"); // Redirect to notes page if user is signed in

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt={"logo"} width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          AI notes
        </span>
      </div>
      <div>
        <p className="max-w-prose text-center">
          An intelligent note-taking app with AI intergration,built with
          Next.js, Tailwind CSS, TypeScript, OpenAI, Clerk, Pinecone, Shadcn,
          and more
        </p>
      </div>
      <Button size={"lg"} asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main> // render as a tag
  );
}
