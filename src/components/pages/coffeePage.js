import React from 'react';
import ShopItems from '../shopItems';

const CoffeePage = ({pageType}) => {

    const beans = {
        title: 'About our beans',
        url: "/img/coffee_girl.jpg",
        text: () => {
            return(
                <div className="shop__text">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/><br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                    so questions. <br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                    met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                    is song that held help face.
                </div>
            )
        }
    };

    const {title, text, url} = beans;

    return (
        <>
            
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <img className="shop__girl" src={url} alt="girl"/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">{title}</div>
                            <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo"/>
                            {text()}
                        </div>
                    </div>
                    <div className="line"></div>
                    <ShopItems content='coffee'/>
                </div>
            </section>
        </>
    )
}

export default CoffeePage;