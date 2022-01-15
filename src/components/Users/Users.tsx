import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";


const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/RomanRomanov.jpg/267px-RomanRomanov.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am boss!',
                    location: {city: 'Minsk', country: 'Belarus'},
                },
                {
                    id: 2,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/RomanRomanov.jpg/267px-RomanRomanov.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am boss too!',
                    location: {city: 'Moscow', country: 'Belarus'},
                },
                {
                    id: 3,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/RomanRomanov.jpg/267px-RomanRomanov.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am boss too!',
                    location: {city: 'Kiev', country: 'Ukrain'},
                },
            ]
        )
    }
    return (
        <div>
            {props.users.map( u => <div key={u.id}>
    <span>
        <div>
            <img src={u.photoUrl} className={styles.usersPhoto}/>
        </div>
        <div>
            {u.followed
                ? <button onClick={() => {
                    props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                    props.follow(u.id)
                }}>Follow</button>}

        </div>
    </span>
            <span>
        <span>
            <div>{u.fullName}</div><div>{u.status}</div>
        </span>
        <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
        </span>
    </span>
        </div>)}
        </div>
    )
}

export default Users;