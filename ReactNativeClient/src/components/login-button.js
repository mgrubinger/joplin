import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-native';
import { _ } from 'src/locale.js';

class LoginButtonComponent extends Component {

	render() {
		return <Button onPress={this.props.onPress} title={_("Login")} />
	}

}

const LoginButton = connect(
	(state) => {
		return {};
		//return { label: state.myButtonLabel };
	},
	(dispatch) => {
		return {
			onPress: function() {
				dispatch({
					type: 'INC_COUNTER'
				});
			}
		}
	}
)(LoginButtonComponent)

export { LoginButton };