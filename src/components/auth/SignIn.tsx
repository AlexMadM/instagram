"use client";
import React, { useState } from "react";
import { Button } from "../ui/button/button";
import Link from "next/link";
import { useLoginMutation } from "@/app/services/inctagramApi";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/app/features/auth/authSlice";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password }).unwrap();
      dispatch(setCredentials({ accessToken: result.accessToken }));
      router.push("/dashboard");
    } catch (err) {
      console.error("Failed to login", err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-500">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-dark-700 p-10 shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-light-100">Sign In</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="relative block w-full appearance-none rounded-md border border-dark-300 bg-dark-500 px-3 py-2 text-light-100 placeholder-dark-100 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full appearance-none rounded-md border border-dark-300 bg-dark-500 px-3 py-2 text-light-100 placeholder-dark-100 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-dark-300 bg-dark-500 text-primary-500 focus:ring-primary-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-light-100">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-primary-300 hover:text-primary-100"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-primary-500 text-light-100 hover:bg-primary-700 active:bg-primary-900 transition-colors duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </div>
          {error && (
            <div className="text-danger-500 text-sm mt-2">
              Failed to login. Please check your credentials.
            </div>
          )}
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-light-700">
            Dont have an account?{" "}
            <Link href="/signup" className="font-medium text-primary-300 hover:text-primary-100">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
