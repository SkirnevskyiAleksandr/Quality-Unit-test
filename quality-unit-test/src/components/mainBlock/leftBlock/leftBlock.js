import React from "react";
import "./leftBlock.scss"
import Play from "../../../assets/Play.png";
import Airbus from "../../../assets/Airbus.svg";
import Forbes from "../../../assets/Forbes.svg";
import Nascar from "../../../assets/Nascar.svg";
import Usc from "../../../assets/USC.svg";



function LeftBlock() {
    return (
        <div className='left-block'>
            <h1>Provide excellent <br /> <a href='#'>customer</a>  service.</h1>
            <p>Answer more tickets with<br /> all-in-one help desk software.</p>
            <p className="left-block_list">✓ No setup fee   ✓ Customer service 24/7 <br />
                ✓ No credit card required   ✓ Cancel any time
            </p>
            <div className="left-block_get-started">
                <button className="button-get">Get Started  |  14 days free</button>
                <button className="button-action"><img src={Play} alt="play button" /> <span>See It In Action</span></button>
            </div>
            <h6>Used by</h6>
            <ul>
                <a href="" className="airbus"><img src={Airbus} alt="airbus logo" /></a>
                <a href="" className="forbes"><img src={Forbes} alt="forbes logo" /></a>
                <a href="" className="nascar"><img src={Nascar} alt="nascar logo" /></a>
                <a href="" className="usc"><img src={Usc} alt="usc logo" /></a>
            </ul>
        </div>
    );
}
export default LeftBlock