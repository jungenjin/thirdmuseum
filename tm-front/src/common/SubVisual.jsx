import React from 'react';
import '../style/common.css';

function SubVisual(props) {
    const src = `resource/common/${props.imgName}_visual.png`;
    return (
        <div className="subvisual text-center pt-5 mt-5 pb-5">
            <h1 className='display-1 pt-5 mt-4 mb-4'>{props.name}</h1>
            {
                `${props.imgName}` === ''
                 ? ''
                 : <img src={src} className="ratio mt-5 mb-4" /> 
            }
        </div>
    );
}

export default SubVisual;