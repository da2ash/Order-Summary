import React from 'react';
import Summary from './components/Summary';
import Details from './components/Details';
import Restaurant from './components/Restaurant';
import './App.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [],
            restaurant : [],
            id : [],
            time : [],
            user : [],
        };
    }

    componentDidMount() {
        const url = "https://indapi.kumba.io/webdev/assignment";
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                items: data.items,
                restaurant: data.restaurant,
                id: data.order_id,
                time: data.createdAt,
                user: data.user,
            })
        });     
    }

    render() {
        return(
            <div className="border">
                <div className="container">
                    <Restaurant restaurant={this.state.restaurant}/>
                    <br />
                    <Details user={this.state.user} orderId={this.state.id} time={this.state.time}/>
                    <br />
                    <Summary items={this.state.items}/>
                </div>
            </div>
        );
    }
}