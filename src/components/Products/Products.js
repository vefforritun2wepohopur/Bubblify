import React from 'react';
import { getBubbles } from '../../services/bubbleService';
import ListView from '../ListView/ListView';
import CategoryFilter from '../CategoryFilter/CategoryFilter';


class Products extends React.Component  {
    
    componentDidMount() {
        var bubbles = getBubbles();
        this.setState({
            bubbles: bubbles
        });
    }

    constructor() {
        super();
        this.state = {
            bubbles: [],
            search: '',
            category: '',
            qty: 0
        };
    }

    onFilter(e) {
        var bubbles = getBubbles({ name: e.target.value, category: this.state.category });
        this.setState({ bubbles: bubbles, search: e.target.value });
    }
    onRadio(e) {
        var bubbles = getBubbles({ name: this.state.search, category: e.target.value });
        this.setState({ bubbles: bubbles, category: e.target.value });
    }

    onClick(e) {
        var bubbles = getBubbles({ name: this.state.search, id: e.target.value });
        this.setState({ bubbles: bubbles, qty: 1 });
    }
    render() {
        return (
            <div>
                <CategoryFilter onChange={e => this.onRadio(e)} />
                <ListView list={ this.state.bubbles } />
            </div>
        )
    };
};
export default Products;


/*
const Products = () => {

    return (

        <div>
            <h1>Bubbles</h1>
            <p>Here we would list a site full af bubbles</p>
        </div>

    )

};*/

