"use client";
import {Card} from "@/components/ui/card";

import {SignIn} from "@/pages/sign-in/sign-in";

import {SubmitHandler} from "react-hook-form";
import {IAuthInput} from "@/shared/types";
import {useLoginMutation} from "@/app/services/inctagram.service";
import {useRouter} from "next/navigation";



export default function LoginPage() {
  const [Login] = useLoginMutation()
  const router = useRouter()
  const onSubmit: SubmitHandler<IAuthInput> = data => {

    Login({ email: data.email, password: data.password })
    router.replace(`/`)
  }

  return (
    <div className="w-full max hight-full">
      <SignIn onSubmit={onSubmit} />
    </div>
  )
}
