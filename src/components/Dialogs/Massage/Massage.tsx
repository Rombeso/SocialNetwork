import React from "react";
import classes from './../Dialogs.module.css'
import {massageDataPropsType} from "../../../redux/state";


type MassagePropsType = {
    massageData: Array<massageDataPropsType>
}

export const Massage = (props: MassagePropsType) => {
    return (
        <div className={classes.dialog}>
            {
                props.massageData.map(m => {
                        return (
                            <div>
                                {m.massage}
                            </div>
                        )
                    }
                )
            }
        </div>

    )
}
