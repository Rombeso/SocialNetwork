import React from "react";
import classes from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
    <div>
        <div >
            <img className={classes.image} src='https://myrzik.com/wp-content/uploads/2012/11/0585.jpg'></img>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description

        </div>
    </div>
    )
}