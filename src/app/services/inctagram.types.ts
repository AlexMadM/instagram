export type LoginArgs = {
    email: string
    password: string
}

export type LoginResponse = {
    accessToken: string
}

export type MeResponse = {
    userId: number
    userName: string
    email: string
    isBlocked: boolean
}
export interface IProfileAvatar {
    createdAt: Date
    fileSize: number
    height: number
    url: string
    width: number
}