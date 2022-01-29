import React from 'react'
import GirlPicture from '../../../assets/girl.png';
import Communication from "../../../assets/Communication.png";
import './RightBlock.scss';

function RightBlock() {
    return (
        <div className='right-block'>
            <img className="right-block_commumicate" src={Communication} alt="girl" />
            <img className="right-block_girl" src={GirlPicture} alt="girl" />
        </div>
    )
}
export default RightBlock