// import React from 'react';
import BenefitsItem from '../BenefitsItem/BenefitsItem';
import './Benefits.scss';

const Benefits = () => {

    return(
        
        <div className='benefits'>
            <hr />
            <div className='benefits__maintext'>
                <h1>Кому полезны наши тренировки?</h1>
            </div>

            <div className='benefits__wrapper'>
                <BenefitsItem />
            </div>

        </div>
        
    )
}

export default Benefits;