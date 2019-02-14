import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

class ItemPage extends Component{

    
    state={
        coffee:[],
        loading: false,
        short:false,
        error: false
    }

    componentDidCatch(){
        this.setState({
            error: true,
            errorCode:"fatal"
        })
    }

    componentDidMount(){
        this.loadItems()
    }

    loadItems = async () => {
        this.setState({loading: true});
        let coffee = await fetch('/db.json')
            .then(res => res.json())
            .then(res => res.coffee[this.props.id])
            .catch((error)=>{this.onError(error)});

        if (!coffee){
            this.onError({message:'404'});
            return
        }
        let short = '';
        if (coffee.description.length >200){
            short = coffee.description.substring(0,200)
            this.setState({short: true})
        }

       coffee = {...coffee, short}
        this.setState({coffee})
        this.setState({loading: false});
    }

    onError = (err)=>{
        this.setState({
            error: true,
            loading: false,
            errorCode: err.message
        })
    }

    onSpoilClick = () => {
        this.setState({short: false})
    }
 
    render(){

        const {loading, error, errorCode, coffee}=this.state;

        if (loading){
            return (
                <div className="col-lg-2 offset-5">                    
                    <Spinner/>
                </div>
            )
        }
        if (error){
            return (
                <div className="col-lg-6 offset-3">                    
                    <ErrorMessage code={errorCode}/>
                </div>
            )
        }

        
        const {name, country, url, price, description,short } = coffee;

        const descr = this.state.short ? (<Spoiler text={short} onClick={this.onSpoilClick}/>):description

        return (
            <>
                <div className="col-lg-5 offset-1">
                    <img className="shop__girl" src={url} alt="coffee_item"/>
                </div>
                <div className="col-lg-4">
                    <div className="title">About {name}</div>
                    <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo"/>
                    <div className="shop__point">
                        <span>Country:</span>
                        {country}
                    </div>
                    <div className="shop__point spoil">
                        <span>Description: </span>
                        {descr}
                    </div>
                    <div className="shop__point">
                        <span>Price: </span>
                        <span className="shop__point-price">{price}</span>
                    </div>
                </div>
            </>
        )
    }
}


const Spoiler = ({onClick,text}) =>{
    return(
        <>
        {text}
        <span className='read-more' onClick={onClick}> ...</span>
        </>
    )
}
export default ItemPage;