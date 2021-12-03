import React from "react";
import classes from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
    <div>
        <div>
            <img src='https://www.ejin.ru/wp-content/uploads/2017/11/273578490-1-e1510878920233.jpg'></img>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description

        </div>
    </div>
    )
}