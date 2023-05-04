//this file controlls elements of the site which will be on every page


//import css styles
import "./App.css";

//import libraries
import { Outlet, Link } from "react-router-dom";
import { Scrollbars } from 'react-custom-scrollbars';

//import assets
import logo from "../assets/logoBlack.png";

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