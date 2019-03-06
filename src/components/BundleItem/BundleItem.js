import React from 'react';

const BundleItem = ({ id, imgPath, name, shortDescription, price }) => {
    return (
        <div className="card border-light mb-3">
            <div className="card-header">{ id }</div>
            <div className="card-body">
                <h4 className="card-title">{ name }</h4>
                <div className="card-text">
                    <img src={imgPath} alt="bundle" height="60" width="60"/>
                    <p>{ shortDescription }</p>
                    <p>{ price }</p>
                </div>
            </div>
        </div>
    );
};

export default BundleItem;