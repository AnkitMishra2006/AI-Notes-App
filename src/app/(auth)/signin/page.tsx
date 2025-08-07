import { Metadata } from "next";
import { SigninForm } from "./signin-form";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to Smart Notes and access your intelligent note-taking workspace with AI assistance.",
};

export default function Page() {
  return <SigninForm />;
}
