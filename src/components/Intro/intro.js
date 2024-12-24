import React from 'react';
import './intro.css';
import bg from '../../assets/mypic.png';
import btnImg from '../../assets/hireme.png'
const Intro = ()=>{
    return(
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Tidiani</span><br />Software Developer</span>
                <p className="introPara">i'm a skilled and passionate developer with experience in
                making  websites and Apps  backend .</p>
                    <a href="https://wa.me/22383718026">
                        <button className="btn">
                            <img src={btnImg} alt="" className='btnImg'/>
                            Hire me
                        </button>
                    </a> 
                   
                

            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;
