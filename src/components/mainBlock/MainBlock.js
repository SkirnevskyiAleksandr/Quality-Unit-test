import React from "react";
import GirlPicture from "../../assets/girl.png";
import Play from "../../assets/Play.png";
import Airbus from "../../assets/Airbus.svg";
import Forbes from "../../assets/Forbes.svg";
import Nascar from "../../assets/Nascar.svg";
import Usc from "../../assets/USC.svg";
import './mainBlock.scss';


function MainBlock() {


    return (
        <section className='mainBlock'>
            {/* left-block */}
            <div className='left-block'>
                <h1>Provide excellent <a href='#'>customer</a>  service.</h1>
                <p id="answer">Answer more tickets with <br />all-in-one help desk software.</p>
                <p id="no-step" className="left-block_list"> ✓ No setup fee   ✓ Customer service 24/7<br />
                    ✓ No credit card required   ✓ Cancel any time
                </p>
                <div className="left-block_get-started">
                    <button className="button-get">Get Started  |  14 days free</button>
                    <button className="button-action"><img src={Play} alt="play button" /> <span>See It In Action</span></button>
                </div>
                <ul>
                    <a href="" className="airbus"><img src={Airbus} alt="airbus logo" /></a>
                    <a href="" className="forbes"><img src={Forbes} alt="forbes logo" /></a>
                    <a href="" className="nascar"><img src={Nascar} alt="nascar logo" /></a>
                    <a href="" className="usc"><img src={Usc} alt="usc logo" /></a>
                </ul>
            </div>


            {/* right-block */}
            <div className='rightBlock'>
                <div>
                    <img className="right-block_girl" src={GirlPicture} alt="girl" />
                </div>
            </div>
        </section>

    );
}



export default MainBlock