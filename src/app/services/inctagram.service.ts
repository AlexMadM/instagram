
import { createApi } from '@reduxjs/toolkit/query/react'
import {baseQueryWithReauth} from "@/app/services/inctagram.base-query";

export const inctagramService = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'inctagramService',
  /// ADD Your Tags
  tagTypes: ['Profile', 'Me'],
})
