import { useState } from 'react';
import Style from "./sidebar.module.scss";


function Sidebar (){

    const [active,setColor] = useState(false);


    function change(){
    setColor((active) => !active);
    }

    return(
        <div className={Style.aside}>
        <div className={Style.logo}>
            <a href="#">
            <span>A</span>
            rsham
            </a>
        </div>
        <div className={Style.navToggler}>
            <span></span>
        </div>
        <ul className={Style.nav}>
            <li><a href="#home" className={`${Style.active} ${active ? Style.color3 : Style.active}`} onClick={change}><i className={`Style.fa fa-home`}></i>HOME</a></li>
            <li><a href="#about" className={`${Style.active}`}><i className={`Style.fa fa-user`}></i>ABOUT</a></li>
            <li><a href="#Service" className={Style.active}><i className={`Style.fa fa-list`}></i>SERVICES</a></li>
            <li><a href="#Portfolio" className={Style.active}><i className={`Style.fa fa-briefcase`}></i>PORTFOLIO</a></li>
            <li><a href="#Contact" className={Style.active}><i className={`Style.fa fa-comments`}></i>CONTACT</a></li>

        </ul>
    </div>
    )
}

export default Sidebar;