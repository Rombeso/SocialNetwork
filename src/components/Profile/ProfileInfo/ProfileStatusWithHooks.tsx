import React, {HTMLInputTypeAttribute, useEffect, useState} from "react";
import classes from './ProfileInfo.module.css'

export type PropsType = {
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
            props.updateStatus(status)

    }

    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div>
                <span  data-testid="status" onDoubleClick={activeEditMode}>{props.status || "Enter your status"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input data-testid="status-input"
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onStatusChange}
                    value={status}
                       style={{width: 300}}
                />
            </div>
            }
        </div>
    )
}

