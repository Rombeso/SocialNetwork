import axios from "axios";
import {FormProfileDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";

const instanseAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd6f0e227-87d6-4128-94b7-d0624916d5da',
    },
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        // return instanseAxios.get(`users?page=${currentPage}&count=${pageSize}`)
        return instanseAxios.get(`users`, {
            params: {
                page: currentPage,
                count: pageSize,
            }
        })
            .then(response => response.data)
    },
    follow(userId: number) {
        return instanseAxios.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instanseAxios.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileIPA object')
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    me() {
        return instanseAxios.get(`auth/me`)
    },
    login(email:string, password:string, rememberMe: boolean = false, captcha: string) {
        return instanseAxios.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instanseAxios.delete(`auth/login`)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instanseAxios.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instanseAxios.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instanseAxios.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instanseAxios.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: FormProfileDataType){
        return instanseAxios.put(`profile`, profile)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instanseAxios.get(`security/get-captcha-url`)
    }
}