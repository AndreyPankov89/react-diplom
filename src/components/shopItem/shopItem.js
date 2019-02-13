import React from 'react';

const ShopItem = ({url,name,country,price, id}) => {
    return (
        <div key={id} className="shop__item">
            <img src={url} alt="coffee"/>
            <div className="shop__item-title">
                {name}
            </div>
            <div className="shop__item-country">{country}</div>
            <div className="shop__item-price">{price}</div>
        </div>
    )
}

export default ShopItem;