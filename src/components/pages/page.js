import React from 'react';
import Header from '../header';
import Footer from '../footer';

//шаблон для внутренних страниц. получает на props заголовок и компонент, который необходимо отобразить.
const Page = ({title, content}) => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Header/>
                        </div>
                    </div>
                    <h1 className="title-big">{title}</h1>
                </div>
            </div>
            <section className="shop">
                <div className="container">
                    <div className="row">
                        {content}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Page;