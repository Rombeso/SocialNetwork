import React from "react";
import classes from './Post.module.css'
import {massageMyPostPropsType} from "../../../../redux/store";

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
                                src='https://telegid.com/wp-content/uploads/2021/06/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D1%82%D1%96%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F-%D0%A1%D0%B5%D0%BC%D0%B0-%D0%92%D0%BE%D1%80%D1%82%D1%96%D0%BD%D0%B3%D1%82%D0%BE%D0%BD%D0%B0.jpg'></img>
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




