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
            category: ''
        };
    }

    onFilter(e) {
        var bubbles = getbubbles({ name: e.target.value, category: this.state.category });
        this.setState({ bubbles: bubbles, search: e.target.value });
    }
    onRadio(e) {
        var bubbles = getbubbles({ name: this.state.search, category: e.target.value });
        this.setState({ nebubblesws: bubbles, category: e.target.value });
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

