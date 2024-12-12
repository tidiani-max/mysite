import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign  from '../../assets/website-design.png';
import  AppDesign from '../../assets/app-design.png';
// import { Link } from 'react-scroll';
const Skills = ()=>{
    return(
        <section id="skills">
            <span className="skillTitle">What I do </span>
            <span className="skillDesc">i'm a skilled and passionate developper with experience in
            making  websites and Apps  backend .i have a strong understanding of backend.i'm profecient in 
            php laravel,python diango,flutter and dart as well as hardware computer.
    
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX,Web and App Design</h2>
                        <p>html,css and javascript.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Developping</h2>
                        <p>python diango ,php laravel.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Developping</h2>
                        <p>For this i use Flutter and Dart.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
