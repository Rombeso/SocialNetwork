import axios from "axios";

const instanseAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd6f0e227-87d6-4128-94b7-d0624916d5da',
    },
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instanseAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instanseAxios.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instanseAxios.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return instanseAxios.get(`profile/${userId}`)
    }
}
export const authAPI = {
    me() {
        return instanseAxios.get(`auth/me`)
    }
}