"use client";

import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthActions } from "@convex-dev/auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { AuthFormValues, signinSchema } from "../schema";

export function SigninForm() {
  const [step, setStep] = useState<"signIn" | "signUp">("signIn");

  const { signIn } = useAuthActions();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: AuthFormValues) {
    setIsLoading(true);
    try {
      const result = await signIn("password", {
        ...values,
        flow: step,
      });

      console.log("Sign in result:", result);

      toast.success(
        step === "signIn"
          ? "Signed in successfully"
          : "Account created successfully"
      );

      // Add a small delay before redirect to ensure auth state is updated
      setTimeout(() => {
        router.push("/notes");
      }, 100);
    } catch (error) {
      console.error("Authentication error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      console.error(
        "Error message:",
        error instanceof Error ? error.message : String(error)
      );

      if (
        error instanceof Error &&
        (error.message.includes("InvalidAccountId") ||
          error.message.includes("InvalidSecret") ||
          error.message.includes("ACCOUNT_NOT_FOUND"))
      ) {
        form.setError("root", {
          type: "manual",
          message:
            step === "signIn"
              ? "Invalid email or password."
              : "Email already exists.",
        });
      } else if (
        error instanceof Error &&
        error.message.includes("ACCOUNT_ALREADY_EXISTS")
      ) {
        form.setError("root", {
          type: "manual",
          message: "Account with this email already exists.",
        });
      } else {
        // Log the full error for debugging
        console.error("Unhandled auth error:", error);
        form.setError("root", {
          type: "manual",
          message:
            error instanceof Error
              ? error.message
              : "Something went wrong. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-muted/50">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-card-foreground">
            {step === "signIn" ? "Login" : "Create Account"}
          </h1>
          <p className="text-muted-foreground">
            {step === "signIn"
              ? "Enter your credentials to access your account."
              : "Enter your details to create a new account."}
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="you@example.com"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.formState.errors.root && (
              <div className="text-sm text-destructive">
                {form.formState.errors.root.message}
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {step === "signIn" ? "Sign In" : "Sign Up"}
            </Button>
          </form>
        </Form>
        <Button
          variant="link"
          type="button"
          className="w-full text-sm text-muted-foreground cursor-pointer"
          onClick={() => {
            setStep(step === "signIn" ? "signUp" : "signIn");
            form.reset(); // Reset form errors and values when switching modes
          }}
        >
          {step === "signIn"
            ? "Don't have an account? Sign Up"
            : "Already have an account? Sign In"}
        </Button>
      </div>
    </div>
  );
}
