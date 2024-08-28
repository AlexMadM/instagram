import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {LoginArgs, LoginResponse, MeResponse} from "@/app/services/inctagram.types";
import {Storage} from "@/utils/storage";
import {Router} from "next/router";
import { useRouter } from 'next/navigation'
import {router} from "next/client";


export const inctagramApi = createApi({
reducerPath: 'inctagramApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://inctagram.work',
        prepareHeaders: headers => {
            const token = Storage.getToken()

            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers
        },}),
    tagTypes: ['Me'],
    endpoints(builder) {
    return { me: builder.query<MeResponse, void>({
            query: () => '/api/v1/auth/me',
            providesTags: ['Me'],
        }),
        login: builder.mutation<LoginResponse, LoginArgs>({
            query(body) {
                return {
                    url: `/api/v1/auth/login`,
                    method: 'POST',
                    body,
                    credentials: 'include',
                }
            },
            invalidatesTags: ['Me'],
        }),
        logout: builder.mutation<void, void>({
            query() {
                return {
                    url: '/api/v1/auth/logout',
                    method: 'POST',
                    credentials: 'include',
                }
            },
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                    Storage.deleteToken()
                    dispatch(inctagramApi.util.invalidateTags(['Me']))
                    dispatch(inctagramApi.util.resetApiState())
                        void router.replace('/')
                } catch {}
            },
        }),

    }
},
    })

export const { useLoginMutation, useMeQuery, useLazyMeQuery, useLogoutMutation } = inctagramApi