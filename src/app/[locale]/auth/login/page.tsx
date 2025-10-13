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
          <h1 className="text-lg font-semibold">Sign in to your account</h1>
          <p className="text-sm text-muted-foreground">
            Welcome back! Please enter your details.
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

          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-xs text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>

        {/* Social login */}
        <div className="mt-6">
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              asChild
              aria-label="Continue with Google"
            >
              <Link href="#">
                <FcGoogle className="size-4" />
                Continue with Google
              </Link>
            </Button>
            <Button
              variant="outline"
              className="w-full"
              asChild
              aria-label="Continue with GitHub"
            >
              <Link href="#">
                <FaGithub className="size-4" />
                Continue with GitHub
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
