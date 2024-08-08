import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs/server";

export default async function notesPage() {
  const { userId } = auth();

  if (!userId) throw new Error("userId undefined");

  const allNotes = await prisma.note.findMany({ where: { userId } });

  return <div>{JSON.stringify(allNotes)}</div>;
}
