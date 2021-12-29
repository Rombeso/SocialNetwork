import React from "react";
import { NavLink } from "react-router-dom";
import classes from './../Dialogs.module.css'
import {dialogDatPropsType} from "../../../redux/store";


type DialogItemPropsType = {
    dialogDat: Array<dialogDatPropsType>
}

export const DialogItem = (props: DialogItemPropsType) => {

    return (
        <div className={classes.dialog}>
            {
                props.dialogDat.map(m=> {
                    return  (
                        <div>
                            <NavLink to={'/dialogs/' + m.id}>{m.name}</NavLink>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
