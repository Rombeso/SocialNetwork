import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ReducerType} from "../../redux/redux-store";
import {getUserProfile, ProfileStateType, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type MapStateType = {
    profile: any
}

type MapDispatchType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = MapStateType & MapDispatchType
type CommonType = RouteComponentProps<PathParamsType> & OwnPropsType
class ProfileContainer extends React.Component<CommonType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId)
        // userAPI.getProfile(userId).then(response => {
        //     this.props.setUserProfile(response.data);

        }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>

            </div>)
    }
}

const mapStateToProps = (state: ReducerType): MapStateType => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfile,

})(WithUrlDataContainerComponent);