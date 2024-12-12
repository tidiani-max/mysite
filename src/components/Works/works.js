import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3  from '../../assets/portfolio-3.png';
import  Portfolio4 from '../../assets/portfolio-4.png';
import  Portfolio5 from '../../assets/portfolio-5.png';
import  Portfolio6 from '../../assets/portfolio-6.png';
// import { Link } from 'react-scroll';
const Works = ()=>{
    return(
        <section id="works">
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className="worksDesc">i take attention to make a great website and App perfectly.i excited to use
             my skills and experiences to help busness achieve their goal and create a strong online presence</span>
            <div className="worksImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />
                <img src={Portfolio4} alt="" className="worksImg" />
                <img src={Portfolio5} alt="" className="worksImg" />
                <img src={Portfolio6} alt="" className="worksImg" />
            </div>
            <button className="worksBtn">See More</button>
        </section>
    );
}

export default Works;
