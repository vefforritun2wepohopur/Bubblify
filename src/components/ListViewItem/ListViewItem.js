import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListViewItem = (props) => {
	return (
        <li className="card border-dark mb-3">
    		<div className="card-header">{props.BubbleID.category}</div>
    		<div className="card-body">
    			<h4 className="card-title"><Link to={ "/" + props.BubbleID.id }>{props.BubbleID.name}</Link></h4>
    			<p className="card-text">{props.BubbleID.shortDescription}</p>
    		</div>
    	</li>
    );
};

ListViewItem.propTypes = {
	BubbleID: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		shortDescription: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired
	}).isRequired
};

ListViewItem.defaultProps = {
	BubbleID: {
		id: 1,
		name: 'Bubble',
		shortDescription: 'I am short',
		category: 'no-category'
	}
}

export default ListViewItem;