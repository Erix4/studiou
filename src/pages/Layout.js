//this file controlls elements of the site which will be on every page


//import css styles
import "./App.css";

//import libraries
import { Outlet, Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

//import assets
import logo from "../assets/logoBlack.png";
import contactPic from "../assets/contactPic.jpg";
import fLogo from "../assets/fLogo.svg";
import iLogo from "../assets/iLogo.svg";
import yLogo from "../assets/yLogo.svg";

function RouteButton(props){
    return (
        <div className="routeButton"><h3 className="routeText">{props.text}</h3></div>
    );
}

function Header(){
    //var ScrollArea = require('react-scrollbar');
    //
    return (
        <div id="fullPage">
            <Scrollbars className='scrollContainer'>
                <div id="page-wrap">
                    <nav className="Header">
                        <div id="image-wrapper">
                            <Link className="routeLink" to="/">
                                <div className="Align">
                                    <img src={logo} className="App-logo" alt="logo" />
                                </div>
                            </Link>
                        </div>
                        <div className="rightAlign">
                            <Link className="routeLink" to="/about"><div className="Align"><RouteButton text='ABOUT'/></div></Link>
                            <Link className="routeLink" to="/join"><div className="Align"><RouteButton text='JOIN US'/></div></Link>
                        </div>
                    </nav>
                    <Outlet />
                </div>
                <div id="footer">
                    <div id="contact" className="section">
                        <div id="contact-frame" className="split-section">
                            <div className="wrapper">
                                <img id="contact-pic" src={contactPic} alt="contact us"/>
                            </div>
                        </div>
                        <div id="contact-text" className="split-section">
                            <div id="contact-text-left" className="contact-section">
                                <h1 className="headerText">Contact Us</h1>
                                <p className="socialLink">StudioU@umn.edu</p>
                                <p className="socialLink">@StudioUMN</p>
                                <div id="socialPics">
                                    <img src={fLogo} className="socialPic" alt="Facebook"/>
                                    <img src={iLogo} className="socialPic" alt="Instagram"/>
                                    <img src={yLogo} className="socialPic" alt="YouTube"/>
                                </div>
                            </div>
                            <div id="contact-text-right" className="contact-section">
                                <h1 className="headerText">Weekly Meetings</h1>
                                <p className="socialLink meeting">Bruininks room 114</p>
                                <p className="socialLink meeting">6pm on Thursdays</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Scrollbars>
        </div>
    );
}

function Layout(){
    return(
        <div>
            <Header/>
        </div>
    );
}

export default Layout;//set Layout to be the default function to be imported by other files