import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import ValidateErrors from '../validateErrors';
import Spinner from '../spinner';


//страница с формой обратной связи
class ContactsPage extends Component{
    
    state = {
        name: "",
        email: "",
        phone: "",
        message: "",
        validateErrors: [],
        loading:false,
        thanks:false
    }

    //сохраняем значения полей в state
    onValueChange = (e) =>{
            switch (e.target.id){
                case "name":{
                    this.setState({name: e.target.value});
                    break
                }
                case "email":{
                    this.setState({email: e.target.value});
                    break;
                }
                case "phone":{
                    this.setState({phone: e.target.value});
                    break;
                }
                case "message":{
                    this.setState({message: e.target.value});
                    break
                }
                default:{

                }
            }

    }

    //проверка данных перед отправкой в соответствии с условиями тз
    validateForm = () =>{
        const {name, email, message} = this.state;
        let errors = [];

        if (name.length < 2){
            errors.push("Name is too short");
        }
        if (name.length > 20){
            errors.push("Name is too long");
        }
        const regex = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/gm;
        if (!(regex.test(email)))
        {
            errors.push('email is invalid')
        }

        if (message.length < 5){
            errors.push('Message is short')
        }

        this.setState({validateErrors: errors});
        return (errors.length === 0);
    }
    async postData(data){
        const post = await fetch('http://localhost:3004/contacts',{
            method:"POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        post.json()
        .then(()=>{console.log('ok')})
        .catch((error) =>{
            console.log('request failed ', error)
        })
    }

    onClick = () => {
        
        const isValid = this.validateForm();//проверяем корректность данных
        //если данные корректны, постим.
        if (isValid){
            this.setState({loading:true});
            const {name,email,phone,message} = this.state;
            const data = {name,email,phone,message};
            this.postData(data);
            this.setState({loading:false});
            this.setState({thanks: true});
        }
    }

    //возврат со страницы благодарности
    returnBack = () => {
        this.setState({thanks: false});
    }
    
    render(){
        const {validateErrors, loading, thanks} = this.state;
        //если при валидации были ошибки, выводим их на страниу
        const err = validateErrors.length===0 ? null : <ValidateErrors errors={validateErrors}/>;

        //выводим форму, спиннер или благодарность в зависимости от состояния
        const content = loading ? <Spinner/> : 
            ( thanks ? <Thanks onClick={this.returnBack}/> :<ContactForm err={err} onValueChange={this.onValueChange} onClick={this.onClick}/>);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="title">Tell us about your tastes</div>
                        <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>    
                    </div>
                        {content}    
                </div>
            </div>
        )
    }
}

//функция-рендер благодарности
const Thanks = ({onClick}) => {
    return(
        <div className="col-lg-8 offset-lg-2">
        <div className="thanks-wrapper d-flex flex-column align-items-center text-center">
            <span>Thank you so much <br/> We contact you as soon as posible</span>
            <img src="img/breakfast.png" alt="breakfast"/>

            <div className="d-flex justify-content-center ">
                <button onClick={onClick} className="shop__filter-btn" >Another? <img src="/img/back-arr.svg" alt="."/></button>
            </div>

        </div>
        </div>
    )
}

//функция-рендер формы
const ContactForm = ({err, onValueChange, onClick}) => {
    return(
        <div className="col-lg-4 offset-lg-4">
            <form className="contacts d-flex flex-column">                        
                {err}
                <div className="d-flex justify-content-between">                                    
                    <label className="shop__search-label" htmlFor="name">Name<span className="star">*</span></label>
                    <input id="name" type="text" onChange={onValueChange} className="shop__search-input"/>
                </div>
                <div className="d-flex justify-content-between">
                    <label className="shop__search-label" htmlFor="email">E-mail<span className="star">*</span></label>
                    <input id="email" type="text"  onChange={onValueChange} className="shop__search-input"/>
                </div>
                <div className="d-flex justify-content-between">
                    <label className="shop__search-label" htmlFor="phone">Phone</label>
                    <InputMask id='phone'  onChange={onValueChange} className="shop__search-input" mask="+7 (999) 999-99-99" alwaysShowMask/>
                </div>
                <div className="d-flex flex-column text-center">
                    <label className="shop__search-label" htmlFor="Message">Your message<span className="star">*</span></label>
                    <textarea id="message"  onChange={onValueChange} className="shop__search-area" cols="40" rows="5"></textarea>
                </div>
                
            </form>
            <div className="d-flex justify-content-center">
                <button onClick={onClick} className="shop__filter-btn" >Contact Us</button>
            </div>
        </div>
    )
}

export default ContactsPage;