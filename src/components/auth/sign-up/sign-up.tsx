"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Typography } from "@/components/ui/typography";
import { ControlledTextField } from "@/components/ui/control/controlled-text-field";
import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card/card";

const signUpSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof signUpSchema>;

export const SignUp = () => {
  const [agreementChecked, setAgreementChecked] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Здесь будет логика отправки данных на сервер
  };

  return (
    <Card className="w-[378px] p-6 bg-dark-500 border border-dark-300 rounded-sm">
      <Typography variant="h1" className="text-center mb-7 text-light-100">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <ControlledTextField
          control={control}
          name="username"
          label="Username"
          placeholder="Enter your username"
          errorMessage={errors.username?.message}
        />
        <ControlledTextField
          control={control}
          name="email"
          label="Email"
          placeholder="Enter your email"
          errorMessage={errors.email?.message}
        />
        <ControlledTextField
          control={control}
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          errorMessage={errors.password?.message}
        />
        <ControlledTextField
          control={control}
          name="confirmPassword"
          label="Password confirmation"
          type="password"
          placeholder="Confirm your password"
          errorMessage={errors.confirmPassword?.message}
        />
        <div className="flex items-start gap-3 mb-[18px]">
          <input
            type="checkbox"
            id="agreement"
            checked={agreementChecked}
            onChange={(e) => setAgreementChecked(e.target.checked)}
            className="mt-[3px]"
          />
          <Typography
            variant="body2"
            as="label"
            htmlFor="agreement"
            className="text-light-900 text-sm leading-6"
          >
            I agree to the{" "}
            <a href="/terms" className="text-accent-500 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-accent-500 hover:underline">
              Privacy Policy
            </a>
          </Typography>
        </div>
        <Button
          type="submit"
          fullWidth
          disabled={!agreementChecked}
          className="h-12 px-6 py-3 text-base font-semibold leading-6 text-light-100 bg-primary-500 rounded-none hover:bg-primary-100 active:bg-primary-700 disabled:bg-primary-900 disabled:text-light-900"
        >
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" className="text-center mt-[18px] text-light-100">
        Do you have an account?{" "}
        <a href="/login" className="text-accent-500 hover:underline">
          Sign In
        </a>
      </Typography>
    </Card>
  );
};
