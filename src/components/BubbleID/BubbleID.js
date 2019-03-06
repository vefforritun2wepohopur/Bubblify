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
            bubbleItem: {}
        };
    }
    render() {
        return (
            <div className="card border-dark mb-3">
        		<div className="card-header">{this.state.bubbleItem.category}</div>
        		<div className="card-body">
        			<h4 className="card-title">{this.state.bubbleItem.name}</h4>
                    <div className="card-text">
                        <img src={this.state.bubbleItem.url} style={{ width: 200 }} />
                        <p className="card-text">{this.state.bubbleItem.longDescription}</p>
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