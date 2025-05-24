"use client";

import { Note as NoteModel } from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { useState } from "react";
import AddEditNoteDialog from "./ui/AddEditNoteDialog";

interface NoteProps {
  note: NoteModel;
}
export default function Note({ note }: NoteProps) {
  const [showEditDialog, setShowEditDialog] = useState(false);

  const wasUpdated = note.updatedAt > note.createdAt;

  const dateObj = wasUpdated ? note.updatedAt : note.createdAt;
  const parts = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    weekday: "long",
  }).formatToParts(dateObj);

  const month = parts.find((p) => p.type === "month")?.value;
  const day = parts.find((p) => p.type === "day")?.value;
  const year = parts.find((p) => p.type === "year")?.value;
  const weekday = parts.find((p) => p.type === "weekday")?.value;

  const customDate = `${month} ${day} | ${year} | ${weekday} |`;

  return (
    <>
      <Card
        className="cursor-pointer transition-shadow hover:shadow-lg"
        onClick={() => setShowEditDialog(true)}
      >
        <CardHeader>
          <span className="text-2xl font-bold">{note.title}</span>
          <hr className="my-2 border-t border-muted-foreground/30" />
          <CardDescription>
            {customDate}
            {wasUpdated && " (updated)"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{note.content}</p>
        </CardContent>
      </Card>
      <AddEditNoteDialog
        open={showEditDialog}
        setOpen={setShowEditDialog}
        noteToEdit={note}
      />
    </>
  );
}
