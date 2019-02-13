import React from 'react';

const BestItem = ({url, name, price, id}) => {
    return (
        <div className="best__item">
            <img src={url} alt="coffee"/>
            <div className="best__item-title">
                {name}
            </div>
            <div className="best__item-price">{price}</div>
        </div>
    )
}

export default BestItem;