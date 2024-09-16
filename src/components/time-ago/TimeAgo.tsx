'use client'
import { memo } from 'react'

import ReactTimeAgo from 'react-time-ago'
import {ru} from "@/app/locales";

type Props = { updatedAt: string, lg?: string }
const data = new Date()
export const TimeAgo = memo(function TimeAgo({ updatedAt ,lg}: Props) {
  return <ReactTimeAgo date={Date.parse(updatedAt)}  locale={'ru'}/>
})
