import React, {Component} from 'react';
import BestItem from '../bestItem';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

//компонент-отображение лучших продуктов
class BestItems extends Component{
    
    state={
        best:[], 
        loading: true,
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
        //this.setState({loading: true});
        const best = await fetch('/db.json')
            .then(res => res.json())
            .then(res => res.bestsellers)
            .catch((error)=>{this.onError(error)});
        this.setState({best});
        this.setState({loading: false});
    }

    onError = (err)=>{
        this.setState({
            error: true,
            loading: false,
            errorCode: err.message
        })
    }

    renderItems = () => {
        const {best} = this.state;
        return best.map((item, i) => {
            return  (<BestItem {...item} key={i}/>)
        });
    }

    render(){
        const {error, errorCode, loading} = this.state;
        const content = loading ? <Spinner/> : (error ? <ErrorMessage code={errorCode}/> : this.renderItems());
        return (
            <div className="best__wrapper justify-content-center">
                {content}
            </div>
        )
    }
}
export default BestItems;