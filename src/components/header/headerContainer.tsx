import React from "react";
import {Header} from "./header";
import {connect} from "react-redux";
import {AuthDataType, logout} from "../../redux/auth-reducer";
import {ReducerRootType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/profile-reducer";
import {Redirect} from "react-router-dom";

type AddedPropsType = {
    profile: ProfileType
}

class HeaderContainer extends React.Component<any> {


    render() {

        return <Header isAuth={this.props.isAuth} profile={this.props.profile}
                       login={this.props.login} logout={this.props.logout}/>

    }
}

const mapStateToProps = (state: ReducerRootType):AuthDataType & AddedPropsType => {
    return {
       isAuth: state.auth.isAuth,
       login: state.auth.login,
       userId: state.auth.userId,
       email: state.auth.email,
       profile: state.profilePage.profile,
   }

}
export default connect(mapStateToProps, {logout})(HeaderContainer)