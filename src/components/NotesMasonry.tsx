"use client";

import Masonry from "react-masonry-css";
import Note from "@/components/Note";
import { Note as NoteModel } from "@prisma/client";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

interface NotesMasonryProps {
  notes: NoteModel[];
}

export default function NotesMasonry({ notes }: NotesMasonryProps) {
  if (!notes || notes.length === 0) {
    return (
      <div className="col-span-full text-center">
        {"You don't have any notes yet. Why don't you create one?"}
      </div>
    );
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
    </Masonry>
  );
}
