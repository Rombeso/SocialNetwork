import React from "react";
import classes from './Post.module.css'
import {massageMyPostPropsType} from "../../../../redux/store";
import userPhoto from "../../../../assets/images/pngwing.com.png";


type MassageMyPostPropsType = {
    massageMyPost: Array<massageMyPostPropsType>
}
export const Post = (props: MassageMyPostPropsType) => {

    return (

        <div className={classes.item}>
            {
                props.massageMyPost.map(m => {
                    return (
                        <div>
                            <img
                                src={userPhoto}></img>
                            <div>
                                {m.massage}
                            </div>
                            <div>
                                {m.likesCounter}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}




