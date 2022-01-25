import React from "react";
import {Header} from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {DataType, setUserData} from "../../redux/auth-reducer";
import {ReducerType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id, login, email)
                }
            })
    }
    render() {

        return <Header isAuth={this.props.isAuth} login={this.props.login}/>

    }
}

const mapStateToProps = (state: ReducerType):DataType => {
   return {
       isAuth: state.auth.isAuth,
       login: state.auth.login,
       userId: state.auth.userId,
       email: state.auth.email,
   }

}
export default connect(mapStateToProps, {setUserData})(HeaderContainer)