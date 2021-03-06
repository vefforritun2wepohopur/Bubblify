import React from 'react';

import { getBubbles } from '../../services/bubbleService';


class BubbleID extends React.Component  {

    componentDidMount() {
        // TODO: Get all news and filter after dynamic id provided in route
        var bubbleItem = getBubbles().find((item) => item.id == this.props.match.params.bubbleId);
        this.setState({ bubbleItem: bubbleItem });
    }
    constructor() {
        super();
        this.state = {
            bubbleItem: {},
            isAdded: false
            
        };
        this.add = this.add.bind(this);
    }

    add() {
        this.setState({
          qty: this.state.qty + 1
        });
        this.props.handleTotal(this.props.price);
      }

    render() {
        return (
            <div className="card border-dark mb-3">
        		<div className="card-header">{this.state.bubbleItem.category}</div>
        		<div className="card-body">
        			<h4 className="card-title">{this.state.bubbleItem.name}</h4>
                    <div className="card-text">
                        <img src={this.state.bubbleItem.url} style={{ width: 200 }} />
                        <p className="card-text">Description: {this.state.bubbleItem.longDescription}</p>
                        <p className="card-text">Price: {this.state.bubbleItem.price}</p>
                        <button onClick={this.add}>Add to Cart</button>
                    </div>
        		</div>
        	</div>
        );
    }
};


/*
const BubbleID = () => {

    return (

        <div>
            <h1>BubbleID</h1>
            <p>BubbleID</p>
        </div>

    )

};
*/
export default BubbleID;