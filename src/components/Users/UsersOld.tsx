import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/pngwing.com.png'


const UsersOld = (props: UsersPropsType) => {
    const getUsers = () => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map( u => <div key={u.id}>
    <span>
        <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
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
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
        <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
        </span>
    </span>
        </div>)}
        </div>
    )
}

export default UsersOld;

// [
//     {
//         id: 1,
//         photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/RomanRomanov.jpg/267px-RomanRomanov.jpg',
//         followed: false,
//         fullName: 'Dmitry',
//         status: 'I am boss!',
//         location: {city: 'Minsk', country: 'Belarus'},
//     },
//     {
//         id: 2,
//         photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/RomanRomanov.jpg/267px-RomanRomanov.jpg',
//         followed: true,
//         fullName: 'Sasha',
//         status: 'I am boss too!',
//         location: {city: 'Moscow', country: 'Belarus'},
//     },
//     {
//         id: 3,
//         photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/RomanRomanov.jpg/267px-RomanRomanov.jpg',
//         followed: false,
//         fullName: 'Andrew',
//         status: 'I am boss too!',
//         location: {city: 'Kiev', country: 'Ukrain'},
//     },
// ]