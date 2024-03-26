import React from 'react';
import './BenefitsItem.scss';

const BenefitsItem = (props) => {
    return(
            <div className='benefits-item'>
                <div>
                    <img className='benefits-item__image' src={props.image} alt="" />
                </div>
                <div className='benefits-item__title'>
                    <p>{props.title}</p>
                </div>
                <div className='benefits-item__description'>
                    <li>{props.list_1}</li>
                    <li>{props.list_2}</li>
                </div>
            </div>

    )
}

export default BenefitsItem;