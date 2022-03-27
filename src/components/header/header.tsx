import React, {useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import s from './header.module.css'
import {ProfileType} from "../../redux/profile-reducer";
import userPhoto from "../../assets/images/pngwing.com.png";

type PropsType = {
    login: string
    isAuth: boolean
    logout: () => void
    profile: ProfileType
}

export const Header = ({login, isAuth, logout, profile}: PropsType) => {
const [drop, setDrop] = useState<boolean>(false)

    const onDropping = () => {
      setDrop(!drop)
    }
    const onDroppingFalse = () => {
      setDrop(false)
    }

const redirectLogout = () =>{
    logout()
    return <Redirect to={'/login'}/>
    }

    return <header className={s.header}>
        <div className={s.headerContainer}>
            <div className={s.headerContainerItems}>
                <div className={s.leftSide}>
                    <div className={s.logoBlock}>
                        {<NavLink to={'/profile'}>
                            <svg viewBox="0 0 276 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M83.4343 29.7801C83.4343 33.4241 80.0416 36.0629 75.2667 36.0629H64.0835V13.4451H74.8897C79.539 13.4451 82.806 15.9582 82.806 19.4765C82.806 21.8639 81.5495 23.3718 79.6646 24.2514C81.6751 25.0053 83.4343 27.0157 83.4343 29.7801ZM68.984 17.5917V22.4922H74.7641C76.5233 22.4922 77.6542 21.487 77.6542 20.1048C77.6542 18.7226 76.3976 17.5917 74.7641 17.5917H68.984ZM75.2667 31.9163C77.1516 31.9163 78.5338 30.7854 78.5338 29.1519C78.5338 27.5184 77.2772 26.3875 75.2667 26.3875H68.984V31.9163H75.2667Z"
                                    fill="black"/>
                                <path
                                    d="M101.905 35.9372L94.1148 27.0158H92.8582V35.9372H87.832V13.4451H92.8582V22.1152H94.1148L101.654 13.4451H107.56L98.1357 24.2514L108.439 35.9372H101.905Z"
                                    fill="black"/>
                                <path
                                    d="M108.439 24.754C108.439 17.9686 113.466 13.0681 120.502 13.0681C127.539 13.0681 132.565 17.9686 132.565 24.754C132.565 31.5393 127.539 36.4398 120.502 36.4398C113.466 36.4398 108.439 31.5393 108.439 24.754ZM127.288 24.754C127.288 20.4817 124.523 17.5917 120.502 17.5917C116.481 17.5917 113.717 20.4817 113.717 24.754C113.717 29.0262 116.481 31.9163 120.502 31.9163C124.523 31.9163 127.288 29.0262 127.288 24.754Z"
                                    fill="black"/>
                                <path
                                    d="M151.79 13.4451H156.817V35.9372H151.79V26.8901H141.738V35.9372H136.712V13.4451H141.738V22.3665H151.79V13.4451Z"
                                    fill="black"/>
                                <path
                                    d="M167.623 35.9372V17.9686H159.832V13.4451H180.314V17.9686H172.523V35.9372H167.623Z"
                                    fill="black"/>
                                <path
                                    d="M201.926 23.3718V35.9372H198.282L197.277 32.4189C196.146 34.3037 193.759 36.4398 190.115 36.4398C185.591 36.4398 182.324 33.4241 182.324 29.2775C182.324 25.1309 185.591 22.2409 192.251 22.2409H197.151C196.9 19.3508 195.392 17.3404 192.628 17.3404C190.366 17.3404 188.858 18.5969 188.104 19.9791L183.581 19.2252C184.712 15.3299 188.607 13.0681 192.879 13.0681C198.408 13.0681 201.926 16.8377 201.926 23.3718ZM197.026 26.1362H192.377C188.607 26.1362 187.35 27.3927 187.35 29.0262C187.35 30.911 188.858 32.1676 191.371 32.1676C194.638 32.1676 197.026 29.7802 197.026 26.1362Z"
                                    fill="black"/>
                                <path
                                    d="M221.277 35.9372L213.487 27.0158H212.23V35.9372H207.204V13.4451H212.23V22.1152H213.487L221.026 13.4451H226.932L217.508 24.2514L227.811 35.9372H221.277Z"
                                    fill="black"/>
                                <path
                                    d="M236.858 35.9372V17.9686H229.068V13.4451H249.55V17.9686H241.759V35.9372H236.858Z"
                                    fill="black"/>
                                <path
                                    d="M274.68 26.1362H256.586C257.089 29.6545 259.602 31.9163 263.371 31.9163C266.01 31.9163 268.021 30.7854 269.152 29.1519L273.801 29.9058C272.167 34.1781 267.769 36.4398 262.994 36.4398C256.209 36.4398 251.309 31.5393 251.309 24.754C251.309 17.9686 256.209 13.0681 262.994 13.0681C269.78 13.0681 274.68 17.9686 274.68 24.5027C274.806 25.1309 274.68 25.6336 274.68 26.1362ZM256.963 22.2409H269.403C268.523 19.4765 266.261 17.466 263.12 17.466C260.104 17.3404 257.717 19.3508 256.963 22.2409Z"
                                    fill="black"/>
                                <path
                                    d="M0 23.04C0 12.1788 0 6.74826 3.37413 3.37413C6.74826 0 12.1788 0 23.04 0H24.96C35.8212 0 41.2517 0 44.6259 3.37413C48 6.74826 48 12.1788 48 23.04V24.96C48 35.8212 48 41.2517 44.6259 44.6259C41.2517 48 35.8212 48 24.96 48H23.04C12.1788 48 6.74826 48 3.37413 44.6259C0 41.2517 0 35.8212 0 24.96V23.04Z"
                                    fill="#0077FF"/>
                                <path
                                    d="M25.54 34.5801C14.6 34.5801 8.3601 27.0801 8.1001 14.6001H13.5801C13.7601 23.7601 17.8 27.6401 21 28.4401V14.6001H26.1602V22.5001C29.3202 22.1601 32.6398 18.5601 33.7598 14.6001H38.9199C38.0599 19.4801 34.4599 23.0801 31.8999 24.5601C34.4599 25.7601 38.5601 28.9001 40.1201 34.5801H34.4399C33.2199 30.7801 30.1802 27.8401 26.1602 27.4401V34.5801H25.54Z"
                                    fill="white"/>
                            </svg>
                        </NavLink>}
                    </div>
                    <div className={s.notificationBlock}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                    </div>
                    <div className={s.playerBlock}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                        </svg>
                    </div>
                </div>
                <div className={s.rightSide}>
                    <div className={s.loginBlock}>
                        {isAuth && profile.photos
                            ? <div>
                            <div className={s.userBlock} onClick={onDropping}>
                                <div className={s.userName}>{login}</div>
                                <div className={s.userPhoto}><img src={profile.photos.large || userPhoto}/></div>
                                <div className={s.downIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </div>


                            </div>
                                {drop && <div className={s.dropDownContainer} onMouseLeave={onDroppingFalse}>
                                    <div className={s.dropDown}>
                                        <div className={s.dropDownBlock}>
                                            <NavLink to={'/profile'}>
                                                <div className={s.userPhoto}>
                                                    <img
                                                        src={profile.photos.large || userPhoto}/>
                                                </div>
                                                <div className={s.userName}>{login}
                                                <p>Go to profile</p>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className={s.line}></div>
                                        <div className={s.dropDownBlock}>
                                            <button onClick={redirectLogout}>Log out</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            : <div className={s.loginLink}>
                                <NavLink to={'/login'}>Login</NavLink>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    </header>
}