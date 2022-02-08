import React, {HTMLInputTypeAttribute} from "react";
import classes from './ProfileInfo.module.css'

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component <PropsType>{
    // statusInputRef: React.RefObject<any> = React.createRef()

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
            this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: any) => {
        console.log(e.currentTarget.value)
        console.log(this.state.status)
        this.setState(
            {status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps:Readonly<any>, prevState:Readonly<any>) {
        if (prevProps.status !== this.props.status){
            this.setState(
                {status: this.props.status})
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "Enter your status"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                    />
                </div>
                }
            </div>
        )
    }

}