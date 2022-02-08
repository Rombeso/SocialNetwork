import React from "react";
import {Redirect} from "react-router-dom";
import {ReducerType} from "../redux/redux-store";
import {connect} from "react-redux";
import {MapStateType} from "../components/Profile/ProfileContainer";

const mapStateToPropsForRedirect = (state: ReducerType): MapStateType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component:any) => {
    class RedirectComponent extends React.Component<any> {
        render() {
            if (!this.props.isAuth) return<Redirect to='/login' />

            return <Component {...this.props}/>

        }
    }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}