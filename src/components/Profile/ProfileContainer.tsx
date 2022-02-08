import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ReducerType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hok/withAuthRediirect";
import {compose} from "redux";

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

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state: ReducerType): MapStateType => {
    return {
        profile: state.profilePage.profile,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {
//     getUserProfile,
//
// })(WithUrlDataContainerComponent);