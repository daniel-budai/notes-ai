import { createNoteSchema, CreateNoteSchema } from "@/lib/validation/note";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader } from "./dialog";
import { Form } from "./form";

interface AddNoteDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function AddNoteDialog({ open, setOpen }: AddNoteDialogProps) {
  const form = useForm<CreateNoteSchema>({
    resolver: zodResolver(createNoteSchema),
  });

  async function onSubmit(input: CreateNoteSchema) {
    alert(input);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogHeader>Add Note</DialogHeader>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={}></form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
