import React from 'react';
const CategoryFilter = (props) => {
    return (
        <div>
            <input
                type="radio"
                name="category"
                id="lemon"
                value="lemon"
                onChange={props.onChange} />
            <label class="categ-check-label" htmlFor="lemon">Lemon</label>

            <input
                type="radio"
                name="category"
                id="strawberry"
                value="strawberry"
                onChange={props.onChange} />
            <label htmlFor="strawberry">Strawberry</label>

            <input
                type="radio"
                name="category"
                id="apple"
                value="apple"
                onChange={props.onChange} />
            <label htmlFor="apple">Apple</label>
        </div>
    );
};

export default CategoryFilter;