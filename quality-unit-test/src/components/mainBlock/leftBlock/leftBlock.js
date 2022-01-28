import React from "react";
import "./leftBlock.scss"
// import "../mainBlock.scss"


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
                <button className="button-action">See It In Action</button>
            </div>
        </div>
    );
}
export default LeftBlock