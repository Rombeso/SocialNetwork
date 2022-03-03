import React, {HTMLInputTypeAttribute, useEffect, useState} from "react";
import classes from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {

let [editMode, setEditMode] = useState(false);
let [status, setStatus] = useState(props.status);

useEffect(()=>{
    setStatus(props.status)
}, [props.status])

    const activeEditMode = ()=>{
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={activeEditMode}>{props.status || "Enter your status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status}
                />
            </div>
            }
        </div>
    )
}

