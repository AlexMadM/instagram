import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProfileAvatar, LoginArgs, LoginResponse, MeResponse} from "@/app/services/inctagram.types";
import {Storage} from "@/utils/storage";

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
        }),createProfileAvatar: builder.mutation<IProfileAvatar,any >({

            query: ({ file }) => {
                return {
                    body: file,
                    method: 'POST',
                    url: 'v1/users/profile/avatar',
                }
            },
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

export const { useLoginMutation, useMeQuery,useCreateProfileAvatarMutation, useLazyMeQuery, useLogoutMutation } = inctagramApi