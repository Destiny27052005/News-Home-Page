import React from "react";
import Retro from '../assets/image-retro-pcs.jpg'
import Laptop from '../assets/image-top-laptops.jpg'
import Growth from '../assets/image-gaming-growth.jpg'

function TopNews() {
    return (
        <div className="bd-grid top-news">
            <div className="news">
                <img src={Retro} alt="Rectro PCs" />
                <div>
                    <h4 className="num">01</h4>
                    <a className="title">Reviving Retro PCs</a>
                    <p className="text">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="news">
                <img src={Laptop} alt="Top Laptops" />
                <div>
                    <h4 className="num">02</h4>
                    <a className="title">Top 10 Laptops of 2022</a>
                    <p className="text">Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="news">
                <img src={Growth} alt="Gaming Growth" />
                <div>
                    <h4 className="num">03</h4>
                    <a className="title">The Growth of Gaming</a>
                    <p className="text">How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    );
}

export default TopNews;