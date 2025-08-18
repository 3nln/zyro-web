import Image from "next/image";
import Link from "next/link";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

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
          <h1 className="text-lg font-semibold">Create your account</h1>
          <p className="text-sm text-muted-foreground">
            Start your journey with us. Please fill in the details below.
          </p>
        </div>

        <form className="grid gap-4" action="#" method="post">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              autoComplete="name"
            />
          </div>

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

          <div className="grid gap-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              autoComplete="new-password"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm password
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              required
              autoComplete="new-password"
            />
          </div>

          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>

        {/* Social sign up */}
        <div className="mt-6">
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or sign up with
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              asChild
              aria-label="Sign up with Google"
            >
              <Link href="#">
                <FcGoogle className="size-4" />
                Sign up with Google
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full"
              asChild
              aria-label="Sign up with GitHub"
            >
              <Link href="#">
                <FaGithub className="size-4" />
                Sign up with GitHub
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
