import Image from "next/image";
import Link from "next/link";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";

const Page = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="border rounded-xl shadow-sm bg-background/70 backdrop-blur p-6 md:p-8">
        <div className="flex flex-col items-center text-center gap-2 mb-6">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="rounded"
          />
          <h1 className="text-lg font-semibold">Forgot your password?</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email and We&apos;ll send you a password reset link.
          </p>
        </div>

        <form className="grid gap-4" action="#" method="post">
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>

          <Button type="submit" className="w-full">
            Send reset link
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Remembered your password?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
        <div className="mt-2 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-primary hover:underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
