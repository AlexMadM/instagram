import { useForm } from 'react-hook-form'


import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'
import {Card} from "@/components/ui/card";

import {ControlledTextField} from "@/components/ui/control/controlled-text-field";

import {Button} from "@/components/ui/button/button";

const schema = z.object({
  email: z.string().email('Invalid email address').nonempty('Enter email'),
  password: z.string().nonempty('Enter password'),
  rememberMe: z.boolean().optional(),
})

type FormType = z.infer<typeof schema>
type Props = {
  onSubmit: any
}

export const SignIn = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })
  const handleFormSubmitted = handleSubmit(props.onSubmit)

  return (
    <>
      <Card className={s.card}>

        <form onSubmit={handleFormSubmitted}>
          <div className={s.form}>
            <ControlledTextField
              control={control}
              label={'Email'}
              name={'email'}
              placeholder={'Email'}
            />
            <ControlledTextField
              control={control}
              label={'Password'}
              name={'password'}
              placeholder={'Password'}
              type={'password'}
            />
          </div>


          <Button className={s.button} fullWidth type={'submit'}>
            Sign In
          </Button>
        </form>


      </Card>
    </>
  )
}
