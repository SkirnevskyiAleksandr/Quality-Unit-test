import React from 'react'
import GirlPicture from '../../../assets/girl.png';
import Communication from "../../../assets/Communication.png";
import './RightBlock.scss';

function RightBlock() {
    return (
        <div className='rightBlock'>
            <img className="rightBlock_commumicate" src={Communication} alt="girl" />
            <img src={GirlPicture} alt="girl" />
        </div>
    )
}
export default RightBlock