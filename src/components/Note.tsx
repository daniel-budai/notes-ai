import { Note as NoteModel } from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

interface NoteProps {
  note: NoteModel;
}
export default function Note({ note }: NoteProps) {
  const wasUpdated = note.updatedAt > note.createdAt;

  const createdUpdatedAtTimestamp = (
    wasUpdated ? note.updatedAt : note.createdAt
  ).toDateString();

  return (
    <Card>
      <CardHeader>
        {note.title}
        <CardDescription>
          {createdUpdatedAtTimestamp}
          {wasUpdated && " (updated)"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{note.content}</p>
      </CardContent>
    </Card>
  );
}
