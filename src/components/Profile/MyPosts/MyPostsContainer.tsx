import React from "react";
import {DispatchActionType, massageMyPostPropsType} from "../../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {addPostAC, ProfileStateType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ReducerRootType} from "../../../redux/redux-store";

type SomePT = {
    login:string | null
}

export const MyPostsContainer = (props: SomePT) => {
    let profilePage = useSelector<ReducerRootType, ProfileStateType>(state => state.profilePage)
    let dispatch = useDispatch();

    const addPost = (newPostText: string) => {
        dispatch(addPostAC(newPostText))
    }

    return (<MyPosts
            massageMyPost={profilePage.massageMyPost}
            newPostText={profilePage.newPostText}
            addPost={addPost}
            profile={profilePage.profile}
            login={props.login}
        />
    )
}