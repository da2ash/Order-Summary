import React from 'react';
import '../static/css/Restaurant.css';

export default class Restaurant extends React.Component {
	render() {	
		let prop = this.props.restaurant;	
		return(
			<div className="heading">
				<h2>Welcome to {prop.name}</h2>
				<p>Address : {prop.street}, {prop.city}, {prop.state}-{prop.zipcode}</p>
			</div>
		);
	}
}