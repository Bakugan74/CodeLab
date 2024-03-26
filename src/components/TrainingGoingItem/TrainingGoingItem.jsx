import React from 'react';
import './TrainingGoingItem.scss';

const TrainingGoingItem = (props) => {
    return(
            <div className='TrainingGoingItem'>
                <div>
                    <img className='TrainingGoingItem__image' src={props.image} alt="" />
                </div>
                <div className='TrainingGoingItem__title'>
                    <p>{props.title}</p>
                </div>
                <div>
                    <img  className='TrainingGoingItem__star' src="http://cdn.onlinewebfonts.com/svg/img_397133.png" alt="" />
                </div>
                <div className='TrainingGoingItem__description'>
                    <p>{props.description}</p>
                </div>
            </div>

    )
}

export default TrainingGoingItem;