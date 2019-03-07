import React from 'react';

const BundleItem = ({ id, imgPath, name, price, items }) => {
    return (
        <div className="card border-light mb-3">
            <div className="card-header">{ id }</div>
            <div className="card-body">
                <h4 className="card-title">{ name }</h4>
                <div className="card-text">
                    <img src={imgPath} alt="bundle" height="200" width="200"/>
                    <p>{ price }</p>
                    <br/>
                    <p>{ items }</p>
                </div>
            </div>
        </div>
    );
};

export default BundleItem;
