import React from 'react';

const ItemFilter = ({onUpdateSearch, onFilter}) => {

    const filter=(e)=>{
        console.log(e.target.value)
        onFilter(e.target.value)
    }

    return (
        <div className="row shop__search-panel">
            <div className="col-lg-4 offset-2">
                <form action="#" className="shop__search">
                    <label className="shop__search-label" htmlFor="filter">Looking for</label>
                    <input id="filter" type="text" onChange={onUpdateSearch} placeholder="start typing here..." className="shop__search-input"/>
                </form>
            </div>
            <div className="col-lg-4">
                <div className="shop__filter">
                    <div className="shop__filter-label">
                        Or filter
                    </div>
                    <div className="shop__filter-group">
                        <button className="shop__filter-btn" onClick={filter} value="BRAZIL">Brazil</button>
                        <button className="shop__filter-btn" onClick={filter} value="KENYA">Kenya</button>
                        <button className="shop__filter-btn" onClick={filter}value="COLUMBIA">Columbia</button>
                        <button className="shop__filter-btn last" onClick={filter}value="">x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemFilter;