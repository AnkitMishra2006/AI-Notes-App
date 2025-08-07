import { Metadata } from "next";
import { NotesPage } from "./notes-page";

export const metadata: Metadata = {
  title: "Your Notes",
  description:
    "Manage and search through your notes with AI assistance. Create, edit, and ask questions about your personal knowledge base.",
};

export default function Page() {
  return <NotesPage />;
}
