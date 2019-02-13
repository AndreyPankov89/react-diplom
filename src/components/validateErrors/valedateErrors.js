import React from 'react';

//красивое отобрахение ошибок валидации

const ValidateErrors = ({errors}) => {
    const list = errors.map((item,i)=>{
        return (
            <li key={i} className='validate-error-item'>{item}</li>
        )
    })

    return(
        <ul className='validate-error'>
            {list}
        </ul>
    )
}

export default ValidateErrors;