import React from 'react';
import { Table } from 'reactstrap';
import '../static/css/Summary.css';

export default class Summary extends React.Component {
	render() {

		const display = this.props.items.map((item, id) => {
				  			return(
							    	<tr key={id}>
							      		<td className="main">
							      			<h3>{item.name}</h3>
							      			<p>Category : {item.category}</p>
							      		</td>
							      		<td>{item.quantity}</td>
							      		<td>{item.currency}.{item.price}</td>

							    	</tr>									  				
				  			);
				  		} 		
				    )

		let array = this.props.items;
		var sum = 0;
		var tax = 0;
		for (var i = 0; i < array.length; i++) {
			sum = sum + array[i].quantity*array[i].price;
			tax = tax + array[i].quantity*array[i].price*array[i].tax;
		}
		const total = sum + tax;

		return(
			<div className="table">
				<Table responsive hover>
				  	<thead className="headers">
				    	<tr>
				      		<th className="main">Product</th>
				      		<th>Quantity</th>
				      		<th>Price</th>

				    	</tr>
				  	</thead>
				  	<tbody>
				  	{display}
				    </tbody>
				</Table>
				<br /><br />
				<div className="payment">
					Items Total : INR {sum}
					<br />
					<br />				
					Tax : INR {tax}
					<br />
					<br />
					<strong><h3>Total amount payable : INR {total}</h3></strong>
				</div>
			</div>
		);
	}
}