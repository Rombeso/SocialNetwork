import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ReducerType} from "../../redux/redux-store";
import {getUserProfile, ProfileStateType, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type MapStateType = {
    profile: any
    isAuth: boolean
}

type MapDispatchType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStateType & MapDispatchType
type CommonType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<CommonType> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        console.log(userId)
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId)
        }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile
                    profile={this.props.profile}

                />

            </div>)
    }
}

const mapStateToProps = (state: ReducerType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
        // userId: state.
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfile,

})(WithUrlDataContainerComponent);