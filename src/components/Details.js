import React from 'react';
import '../static/css/Details.css';

export default class Details extends React.Component {
	render() {
		return(
			<div>
				<p>
					Customer {this.props.user.id} : {this.props.user.name}
					<br /><br />
					Order ID : {this.props.orderId}
					<br /><br />
					Generated at : {this.props.time}
				</p>
			</div>
		);
	}
}