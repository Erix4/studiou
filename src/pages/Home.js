//this file controls the elements which are only on the home page


//import libraries
import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web';
import { useProgressiveImg, useIntersectionObserver} from "../utility";
import { useRef } from "react";

//import assets
import splashLow from "../assets/splash3low.jpg";
import splashHigh from "../assets/splash3.jpg";
import newsImage from "../assets/newsimage1.png";

const SplashImage = () => {
    const [src, {blur}] = useProgressiveImg(splashLow, splashHigh);
    //
    return (
        <img
          src={src}
          alt="background splash"
          id="splash-image"
          className="bkg-image"
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out"
          }}
        />
    );
}

const SpringCont = (props) => {
    const springs = useSpring(props.spring);
    //
    return (
        <animated.div style={{...springs}}>
            {props.children}
        </animated.div>
    );
}

const Home = () => {
    const trigger1 = useRef(); const trigger2 = useRef(); const trigger3 = useRef();
    const ref1 = useIntersectionObserver(trigger1, { freezeOnceVisible: true });
    const ref2 = useIntersectionObserver(trigger2, { freezeOnceVisible: true });
    const ref3 = useIntersectionObserver(trigger3, { freezeOnceVisible: true });
    //
    return (
        <div>
            <div id="splash">
                <SplashImage/>
                <div id="splash-text-wrapper">
                    <div id="splashText">
                        <SpringCont spring={{
                            from: { opacity: 0 },
                            to: { opacity: 1 },
                            delay: 500
                        }}><h1 id="splashHeader" className="headerText">Film Group<br/>at UMN</h1></SpringCont>
                        <Link to="/about" className="pageLink">
                        <SpringCont spring={{
                            from: { y: 100, opacity: 0 },
                            to: { y: 0, opacity: 1 },
                            delay: 500
                        }}><h2 id="splash-learn-more" className="headerText">Learn more</h2></SpringCont>
                        </Link>
                    </div>
                </div>
            </div>
            <div id="home-about" className="section">
                <div id="home-about-text">
                    <div id="home-about-header" className="split-section">
                        <div className="wrapper">
                            <SpringCont spring={{
                                from: { x: -100, opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                delay: 600
                            }}><h1 className="headerText">Our university.<br/>Our story.</h1></SpringCont>
                        </div>
                    </div>
                    <div id="home-about-paragraph" className="split-section">
                        <div className="wrapper">
                            <SpringCont spring={{
                                from: { x: 100, opacity: 0 },
                                to: { x: 0, opacity: 1 },
                                delay: 600
                            }}>
                                <p className="paraText">
                                    StudioU is a non-profit, student run
                                    media group at the University of
                                    Minnesota. We make interesting
                                    videos with quality equipment
                                    while learning and having fun!
                                </p>
                            </SpringCont>
                        </div>
                    </div>
                </div>
            </div>
            <div id="youtube" className="section">
                <div id="youtube-frame" className="split-section">
                    <div className="wrapper">
                    <iframe
                        id="youtube-iframe"
                        src={`https://www.youtube.com/embed/ehqNZPaq5AQ`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                    </div>
                </div>
                <div id="youtube-header" className="split-section">
                    <div className="wrapper">
                        <div ref={trigger1} />
                        <SpringCont spring={{
                            from: { x: 100, opacity: 0 },
                            to: {x: ref1?.isIntersecting ? 0 : 100, opacity: ref1?.isIntersecting ? 1 : 0 }
                        }}><h1 id="youtube-header-text" className="headerText">Check out our recent work</h1></SpringCont>
                    </div>
                </div>
            </div>
            <div id="newsletter" className="section">
                <img src={newsImage} className="bkg-image" alt="newsletter image"/>
                <div id="newsText">
                    <div id="newsHeader">
                        <div ref={trigger2} />
                        <SpringCont spring={{
                            from: { y: 100, opacity: 0 },
                            to: {y: ref2?.isIntersecting ? 0 : 100, opacity: ref2?.isIntersecting ? 1 : 0 }
                        }}><h1 className="headerText">Join our Newsletter</h1></SpringCont>
                        <div ref={trigger3} />
                        <SpringCont spring={{
                            from: { y: 100, opacity: 0 },
                            to: {y: ref3?.isIntersecting ? 0 : 100, opacity: ref3?.isIntersecting ? 1 : 0 }
                        }}><p className="paraText">
                            Find out what's up with the club!<br/><br/>
                            Weekly emails will keep you updated on whats happening at meetings even if you can’t make it.
                            We’ll also keep you updated on events, shoots and other opportunities.
                        </p></SpringCont>
                    </div>
                    <div id="newsSubscriber">
                        <div className="wrapper"><input id="email-input" type="text" placeholder="Your email here"/></div>
                        <div className="wrapper"><Link><button id="email-signup">Sign up</button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;