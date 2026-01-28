import React from "react";
import web3Desktop from '../assets/image-web-3-desktop.jpg'
import web3Mobile from '../assets/image-web-3-mobile.jpg'

function Bright() {
    return (
        <div>
            <img className="web-3-desktop" src={web3Desktop} alt="Web3" />
            <img className="web-3-mobile" src={web3Mobile} alt="Web3" />
            <div className="bright">
                <h1 className="title">The Bright Future of Web 3.0</h1>
                <div>
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fullfilling its promise?</p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
    );
}

export default Bright;