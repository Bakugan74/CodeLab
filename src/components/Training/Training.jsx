import React from 'react';
import TrainingGoingItem from '../TrainingGoingItem/TrainingGoingItem';
import './Training.scss';

const Training = () => {


    return(
        
        <div className='training'>

            <div className='training__maintext'>
                <h1>Как проходят наши тренеровки?</h1>
            </div>

            <div className='training__wrapper'>
                <TrainingGoingItem />
            </div>

        </div>
        
    )
}

export default Training;