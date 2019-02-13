import React, {Component} from 'react';
import './errorMessage.css'

export default class ErrorMessage extends Component{

    
    render(){
        const {code} = this.props;
        let imgName = "/img/error.jpg"
        let errText = `Error ${code}`;
        
        return (
            <>
                <span className="error-text">{errText}</span>
                <img
                    className='error-img'
                    src={process.env.PUBLIC_URL + imgName} 
                    alt='error'/>
                
            </>
        )
    }
}

;