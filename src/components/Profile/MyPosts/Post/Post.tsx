import React from "react";
import s from './Post.module.css'
import {massageMyPostPropsType} from "../../../../redux/store";
import userPhoto from "../../../../assets/images/pngwing.com.png";


type MassageMyPostPropsType = {
    massageMyPost: Array<massageMyPostPropsType>
    profile: any
    login: string | null
}
export const Post = (props: MassageMyPostPropsType) => {

    return (

        <>
            {
                props.massageMyPost.map(m => {
                    return (
                        <>
                            <div className={s.title}>
                                <img className={s.avatar} src={props.profile.photos.large || userPhoto}/>
                                <div className={s.name}>{props.login}
                                    <p>today</p>
                                </div>
                            </div>
                            <div className={s.massage}>
                                {m.massage}
                            </div>
                            <div className={s.footer}>
                                <div className={s.love}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                    </svg>
                                    <span>{m.likesCounter}</span>
                                </div>
                                <div  className={s.eye}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                    </svg>
                                    <span>{m.viewers}</span>
                                </div>
                            </div>
                            <div className={s.line}></div>
                        </>
                    )
                })
            }
        </>
    )
}




