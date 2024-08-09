"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddNoteDialog from "@/components/ui/AddEditNoteDialog";

export default function NavBar() {
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <Link href="/notes" className="flex items-center gap-1">
            <Image src={logo} alt="logo" width={40} height={40} />
            <span className="font-bold">Notes app</span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              /*afterSignOutUrl="/"*/ appearance={{
                elements: {
                  avatarBox: { width: "2.5rem ", height: "2.5rem" },
                },
              }}
            />
            <Button onClick={() => setShowAddEditNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add note
            </Button>
          </div>
        </div>
      </div>
      <AddNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
}
