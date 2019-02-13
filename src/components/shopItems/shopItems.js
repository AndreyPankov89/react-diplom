import React, {Component} from 'react';
import ShopItem from '../shopItem';
import Spinner from '../spinner';
import ItemFilter from '../itemFilter';
import {Link} from 'react-router-dom'
import ErrorMessage from '../errorMessage';

//рендерим список товаров для страниц coffee и pleasure в зависимости от параметра content. делить на два компонента посчитал не рациональным
class ShopItems extends Component {
    
    state={
        coffee:[], 
        term: '',
        filter: '',
        loading: false,
        error: false
    }

    componentDidMount(){
        this.loadItems()
    }

    //получаем данные
    loadItems = async () => {
        this.setState({loading: true});
        const coffee = await fetch('/db.json')
            .then(res => res.json())
            .then(res => res[this.props.content])
            .catch((error)=>{this.onError(error)});
        this.setState({coffee});
        this.setState({loading: false});
    }
//рендерем. для страницы coffee дополнительно оборачиваем в ссылку
    renderItems = (coffee) => {
        return coffee.map((item, i) => {
            let preparedItem = (<ShopItem {...item}key={i}/>);
            if (this.props.content === 'coffee'){
                preparedItem = <Link to={`/coffee/${i}`} key={i}><ShopItem {...item}/></Link>
            }
            return  (preparedItem);
        });
    }

    onError = (err)=>{
        this.setState({
            error: true,
            loading: false,
            errorCode: err.message
        })
    }

    //поиск поста по вводу данных.
    searchPost = (items,term)=>{
        console.log(term);
        if(term.length === 0)
        return items;

        return items.filter((item) => {
            const lowerLabel = item.name.toLowerCase();
            return lowerLabel.indexOf(term.toLowerCase()) > -1;
        })
    }
    //фильтрация по трем параметрам. либо сброс фильтра
    filterPost = (items,filter) => {
        switch (filter){
            case 'BRAZIL':{
                return items.filter(item => {return item.country.toUpperCase() === 'BRAZIL'})
            }
            case 'KENYA':{
                return items.filter(item => {return item.country.toUpperCase() === 'KENYA'})
            }
            case 'COLUMBIA':{
                return items.filter(item => {return item.country.toUpperCase() === 'COLUMBIA'})
            }
            default:{
                return items
            }
        }

    }
    
    onUpdateSearch = (e) => {
        const term = e.target.value;
        console.log(term);
        this.setState({term});
        //this.props.onUpdateSearch(term);
    }
    onFilter = (filter) => {
            this.setState({filter});
    }

    render(){
        const {coffee, term, filter, error, errorCode, loading} = this.state;
        const visiblePosts = this.filterPost(this.searchPost(coffee,term),filter);
        const content = loading ? <Spinner/> : (error ? <ErrorMessage code={errorCode}/> : this.renderItems(visiblePosts));

        const filterComponent = this.props.content === 'coffee' ? <ItemFilter onUpdateSearch={this.onUpdateSearch} onFilter={this.onFilter}/> : null;
        return (
            <div>
                {filterComponent}
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="shop__wrapper  justify-content-center">
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ShopItems;