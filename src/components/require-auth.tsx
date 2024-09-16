'use client';
import { PropsWithChildren, useEffect } from 'react'

import { useRouter } from 'next/navigation'
import {useMeQuery} from "@/app/services/inctagramApi";


export default function RequireAuth({ children }: PropsWithChildren) {
  const { isLoading, isError } = useMeQuery()
  const router = useRouter()

  useEffect(() => {
    if (!isError) {
      return
    }

    void router.push('/api/login')
  }, [isError, router])

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError) {
    return null
  }

  return <>{children}</>
}
