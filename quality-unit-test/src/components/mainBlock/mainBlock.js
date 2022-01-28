import React from "react";
import RightBlock from "./rightBlock/RightBlock"
import LeftBlock from "./leftBlock/leftBlock"
import './mainBlock.scss';

function MainBlock() {
    return (
        <section className='mainBlock'>
            <LeftBlock />
            <RightBlock />
        </section>
    );
}
export default MainBlock