import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {ReducerType} from "../redux/redux-store";
import {connect} from "react-redux";
import {MapStateType} from "../components/Profile/ProfileContainer";

const mapStateToPropsForRedirect = (state: ReducerType): MapStateType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<any> {

        render() {
            let {isAuth, ...restProps} = this.props
            if (!isAuth) return<Redirect to='/login' />

            return <Component {...restProps as T}/>

        }
    }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}