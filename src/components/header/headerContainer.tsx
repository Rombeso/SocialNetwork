import React from "react";
import {Header} from "./header";
import {connect} from "react-redux";
import {AuthDataType, getAuthUsersData} from "../../redux/auth-reducer";
import {ReducerType} from "../../redux/redux-store";


class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        this.props.getAuthUsersData();
    }
    render() {

        return <Header isAuth={this.props.isAuth} login={this.props.login}/>

    }
}

const mapStateToProps = (state: ReducerType):AuthDataType => {
   return {
       isAuth: state.auth.isAuth,
       login: state.auth.login,
       userId: state.auth.userId,
       email: state.auth.email,
   }

}
export default connect(mapStateToProps, {getAuthUsersData})(HeaderContainer)