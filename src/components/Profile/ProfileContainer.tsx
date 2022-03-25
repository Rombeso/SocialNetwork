import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ReducerRootType} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {FormProfileDataType} from "./ProfileInfo/ProfileDataForm";

export type PathParamsType = {
    userId: string
}

export type MapStateType = {
    profile?: any
    isAuth?: boolean
    status: string
    autorizedUserId: number | null,
    login:string | null
}

type MapDispatchType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (profile: FormProfileDataType)=>void
}

type OwnPropsType = MapStateType & MapDispatchType & PathParamsType
type CommonType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<CommonType> {

    refreshProfile() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId !== null ? String(this.props.autorizedUserId) : '';
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<CommonType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {
        return (
            <>
                <Profile
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}
                    login={this.props.login}
                />
            </>)
    }
}

const mapStateToProps = (state: ReducerRootType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
)(ProfileContainer)
