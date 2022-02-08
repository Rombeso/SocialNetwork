import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ReducerType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hok/withAuthRediirect";

type PathParamsType = {
    userId: string
}

export type MapStateType = {
    profile?: any
    isAuth?: boolean
}

type MapDispatchType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStateType & MapDispatchType & PathParamsType
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

        return (
            <div>
                <Profile
                    profile={this.props.profile}
                />
            </div>)
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToPropsForRedirect = (state: ReducerType): MapStateType => {
    return {
        isAuth: state.auth.isAuth
    }
}

AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)

const mapStateToProps = (state: ReducerType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        // isAuth: state.auth.isAuth
    }
}

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    getUserProfile,

})(WithUrlDataContainerComponent);