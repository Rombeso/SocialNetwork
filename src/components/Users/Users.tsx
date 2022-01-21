import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/pngwing.com.png'



class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for ( let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    { pages.map( p => {
                        return (
                        <span className={this.props.currentPage === p ? styles.selectedPage : ''} onClick={(e) =>
                        { this.onPageChanged(p); }}>{p}</span>
                        )
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
    <span>
        <div>
            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
        </div>
        <div>
            {u.followed
                ? <button onClick={() => {
                    this.props.unfollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                    this.props.follow(u.id)
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
}

export default Users;

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