import React from 'react';
const CategoryFilter = (props) => {
    return (
        <div>
            <input
                type="lemon"
                name="category"
                id="lemon"
                value="lemon"
                onChange={props.onChange} />
            <label htmlFor="lemon">lemon</label>

            <input
                type="strawberry"
                name="category"
                id="strawberry"
                value="strawberry"
                onChange={props.onChange} />
            <label htmlFor="strawberry">strawberry</label>

            <input
                type="radio"
                name="category"
                id="apple"
                value="apple"
                onChange={props.onChange} />
            <label htmlFor="apple">Technology</label>
        </div>
    );
};

export default CategoryFilter;