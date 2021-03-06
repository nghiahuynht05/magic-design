import { Component } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import {
    Link
} from "react-router-dom";

import slider1 from '../image/slider-1.jpg';
import slider2 from '../image/slider-2.jpg';
import slider3 from '../image/slider-3.jpg';

import slidershow1 from '../image/logo-01.jpg';
import slidershow2 from '../image/logo-02.jpg';
import slidershow3 from '../image/logo-03.jpg';
import slidershow4 from '../image/logo-04.jpg';
import slidershow5 from '../image/logo-05.jpg';
import slidershow6 from '../image/logo-06.jpg';
import slidershow7 from '../image/logo-07.jpg';
import slidershow8 from '../image/logo-08.jpg';
import slidershow9 from '../image/logo-09.jpg';
import slidershow10 from '../image/logo-10.jpg';
import slidershow11 from '../image/logo-11.jpg';
import slidershow12 from '../image/logo-12.jpg';
import logo from '../image/logo.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none'
        };
        this.showSlides = function (item) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[item].style.display = "block";
        }
    }

    handleClick = (item) => {
        let classClick = document.getElementById(item);
        let classCenter = document.getElementsByClassName('item-center');
        for (var i = 0; i < classCenter.length; i++) {
            classCenter[i].className = classCenter[i].className.replace("item-center", "item");
        }
        classClick.classList.remove('item');
        classClick.classList.add('item-center');

        switch (item) {
            case 'item1': {
                this.showSlides(0);
                break;
            }
            case 'item3': {
                this.showSlides(2);
                break;
            }
            default: {
                this.showSlides(1)
            }
        }
    }

    render() {
        return (
            <ReactFullpage

                //fullpage options
                licenseKey={'YOUR_KEY_HERE'}
                scrollingSpeed={1000} /* Options here */
                scrollHorizontally={true}  /* Because we are using the extension */
                scrollHorizontallyKey={'YOUR KEY HERE'}

                render={({ state, fullpageApi }) => {
                    const customStype = {
                        "font-family": "Gotham-Medium",
                        "font-weight": "bolder"
                    }

                    return (
                        <ReactFullpage.Wrapper>
                            <div className="container">
                                <div className="content">
                                    <section className="section" id="band">
                                        <div className="navbar">
                                            <div className="header">
                                                <div className="logo">
                                                    <a href="/"><img src={logo} alt="" /></a>
                                                </div>
                                                <ul className="menu">
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>TEAM</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(2, 0)}>BRAND</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(3, 0)}>LOGO</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(4, 0)}>ABOUT US</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(5, 0)}>CONTACT</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="band">
                                            <div className="layout" style={{ display: 'block' }}>
                                                <div className="banner-band">
                                                    <div style={{ textAlign: 'center' }}>
                                                        <div className="magic">Magis</div>
                                                        <div className="design">Design</div>
                                                        <div className="brand">Brand</div>
                                                    </div>
                                                </div>
                                                <div className="banner">
                                                    <div className="banner-info">
                                                        <div className="view-data">
                                                            <span>V??o th???i ??i???m c???c kh?? kh?? kh??n cho to??n th??? gi???i, ch??ng t??i mu???n l?? m???t m???t
                                                                tr???i
                                                                soi s??ng cho con ???????ng c??c doanh nghi???p.<br />Ng???n l???a ch??y s??ng l?? nh??? s??? b???n b???,
                                                                ki??n ?????nh
                                                                v?????t
                                                                qua kh?? kh??n c???a ch??ng t??i. S??? ch??y s??ng h??n n???a khi ???????c c??c doanh nghi???p th???p
                                                                th??m
                                                                hi
                                                                v???ng.</span>
                                                        </div>
                                                        <div className="char" />
                                                    </div>
                                                    <div className="banner-logo">
                                                        <div className="band-sun">
                                                            <div className="sun" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="section" id="brand">
                                        <div className="navbar">
                                            <div className="header">
                                                <div className="logo">
                                                    <a href="./index.html"><img src={logo} alt="" /></a>
                                                </div>
                                                <ul className="menu">
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>TEAM</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(2, 0)}>BRAND</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(3, 0)}>LOGO</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(4, 0)}>ABOUT US</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(5, 0)}>CONTACT</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="brand">
                                            <div className="layout">
                                                <div className="info">
                                                    <div className="detail">
                                                        <div className="image">BRAND</div>
                                                        <div className="brand-content">????? th????ng hi???u c?? th??? truy???n t???i ???????c gi?? tr??? c???t l???i c??ng
                                                            nh??
                                                            ch???t
                                                            l?????ng c???a s???n ph???m/ d???ch v??? ?????n v???i to??n b??? kh??ch h??ng v?? th??? tr?????ng b??n ngo??i,
                                                            doanh
                                                            nghi???p
                                                            c???n x??y d???ng h??nh ???nh v?? nh???n di???n th????ng hi???u ?????y ?????, m???nh m???.</div>
                                                        <div style={{ 'padding-top': '5%' }}>
                                                            <button className="botton-type">
                                                                <Link to="/brand">
                                                                    <div className="button-text"><span>MORE...</span></div>
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slider-show">
                                                    {/* < SliderComponent /> */}
                                                    <div className="slideshow-container">
                                                        <div className="mySlides fade">
                                                            <img src={slider1} style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} alt='' />
                                                        </div>
                                                        <div className="mySlides fade" style={{ display: 'block' }}>
                                                            <img src={slider2} style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} alt='' />
                                                        </div>
                                                        <div className="mySlides fade">
                                                            <img src={slider3} style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className=" thumbnail">
                                                        <div className="item" id="item1" onClick={() => this.handleClick('item1')}>
                                                            <div className="image-01" />
                                                        </div>
                                                        <div className="item-center" id="item2" onClick={() => this.handleClick('item2')}>
                                                            <div className="image-02" />
                                                        </div>
                                                        <div className="item" id="item3" onClick={() => this.handleClick('item3')}>
                                                            <div className="image-03" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="section" id="logo">
                                        <div className="navbar">
                                            <div className="header">
                                                <div className="logo">
                                                    <a href="./index.html"><img src={logo} alt="" /></a>
                                                </div>
                                                <ul className="menu">
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>TEAM</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(2, 0)}>BRAND</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(3, 0)}>LOGO</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(4, 0)}>ABOUT US</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(5, 0)}>CONTACT</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="logo">
                                            <div className="layout">
                                                <div className="info">
                                                    <div className="detail">
                                                        <div className="image">LOGO</div>
                                                        <div className="brand-content">Logo mang l???i cho doanh nghi???p c???a b???n m???t b???n s???c, l??m cho
                                                            th????ng
                                                            hi???u c???a b???n tr??? n??n g???n b?? h??n, cung c???p n???n t???ng cho nh???ng n??? l???c x??yy d???ng th????ng
                                                            hi???u
                                                            trong t????ng lai c???a b???n v?? h??n th??? n???a!</div>
                                                        <div style={{ 'padding-top': '5%' }}>
                                                            <button className="botton-type">
                                                                <Link to="/logo">
                                                                    <div className="button-text"><span>MORE...</span></div>
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slider-logo">
                                                    <div className="parent">
                                                        <div className="movingDiv">
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow1} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow2} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow3} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow12} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="parent">
                                                        <div className="movingDivDown">
                                                            <div className="rect ">
                                                                <div className="slideshow" onclick="window.open('./brand.html','_blank')">
                                                                    <div className="image">
                                                                        <img src={slidershow4} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow5} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow6} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow11} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="parent">
                                                        <div className="movingDiv">
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow7} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow8} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow9} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow10} alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="section" id="aboutus">
                                        <div className="navbar">
                                            <div className="header">
                                                <div className="logo">
                                                    <a href="./index.html"><img src={logo} alt="" /></a>
                                                </div>
                                                <ul className="menu">
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>TEAM</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(2, 0)}>BRAND</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(3, 0)}>LOGO</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(4, 0)}>ABOUT US</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(5, 0)}>CONTACT</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="aboutus">
                                            <div className="layout" style={{ height: '85%' }}>
                                                <div className="info">
                                                    <div className="detail">
                                                        <div className="image"> About US</div>
                                                        <div className="brand-content">Ch??ng t??i tin r???ng m???i h??nh tr??nh ?????u ??i t??? nh???ng ?? t?????ng. Ch??ng
                                                            t??i
                                                            mu???n ???????c nghe nh???ng c??u chuy???n nh???ng ???p ??? v?? c??ng c??c b???n th???c hi???n n??. M???t s??? th???t
                                                            kh??ng
                                                            th??? ch???i c??i l?? ch??ng ta s??? kh??ng bi???t cu???i con ???????ng l?? ??i???u g?? khi kh??ng quy???t t??m ??i
                                                            h???t
                                                            con ???????ng ????.</div>
                                                        <div style={{ 'padding-top': '5%' }}>
                                                            <button className="botton-type">
                                                                <Link to='/about'>
                                                                    <div className="button-text"><span>MORE...</span></div>
                                                                </Link>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="about-image">
                                                    <div className="image">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="section" id="contect-layout">
                                        <div className="navbar">
                                            <div className="header">
                                                <div className="logo">
                                                    <a href="./index.html"><img src={logo} alt="" /></a>
                                                </div>
                                                <ul className="menu">
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>TEAM</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(2, 0)}>BRAND</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(3, 0)}>LOGO</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(4, 0)}>ABOUT US</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(5, 0)}>CONTACT</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contact">
                                            <div className="layout">
                                                <div className="info">
                                                    <div className="us">C??ng ch??ng t??i ch???m t???i nh???ng c???m x??c!!!</div>
                                                    <form action=''>
                                                        <label htmlFor="fname">Your name (T??n c???a b???n)</label>
                                                        <input autoComplete="off" type="text" id="fname" name="firstname" placeholder="" />
                                                        <label htmlFor="lname">Your email (Email c???a b???n)</label>
                                                        <input autoComplete="off" type="text" id="lname" name="lastname" placeholder="" />
                                                        <label htmlFor="lname">Specialization (Chuy??n ng??nh)</label>
                                                        <input autoComplete="off" type="text" id="lname" name="lastname" placeholder="" />
                                                        <label htmlFor="lname">Your messgae (L???i nh???n c???a b???n)</label>
                                                        <input autoComplete="off" type="message" id="lname" name="lastname" placeholder="" />
                                                        <div>
                                                            <button className="botton-type" onclick="navToLink('more-about')" style={customStype}>
                                                                <div className="button-text"><span>Send</span></div>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="contact-image">
                                                    <div className="image"></div>
                                                </div>

                                            </div>
                                        </div>
                                        <footer className="footer">
                                            <div className="footer-info">
                                                <div className="footer-info-name">Contact Info</div>
                                                <div className="footer-info-address">
                                                    <div className="address-info">
                                                        <div>Email</div>
                                                        <div>mddesign.tdd@gmail.com@gmail.com</div>
                                                    </div>
                                                    <div className="address-info">
                                                        <div>Phone</div>
                                                        <div>+84 969 57 64 66</div>
                                                    </div>
                                                    <div className="address-info" style={{ 'padding-right': '0px' }}>
                                                        <div>Adress</div>
                                                        <div>54 D????ng Quang Ham, Danang City</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer-image">
                                                <div className="logo">
                                                    <a href="/"><img src={logo} alt="" /></a>
                                                </div>
                                                <div className="logo-social">
                                                    <div className="social-info">
                                                        <i className="fab fa-facebook-f fa-5x" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                    </div>
                                                    <div className="social-info">
                                                        <i className="fab fa-instagram fa-5x" onClick={() => window.open("https://www.instagram.com/mdsportwear1902/", "_blank")}></i>
                                                    </div>
                                                    <div className="social-info">
                                                        <i className="fab fa-pinterest-p fa-5x" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                    </div>
                                                    <div className="social-info">
                                                        <i className="fab fa-twitter fa-5x" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                    </div>
                                                    <div className="social-info">
                                                        <i className="fab fa-tiktok fa-5x" onClick={() => window.open("https://www.facebook.com/tiendat.cao.1485", "_blank")}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </footer>
                                    </section>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper >
                    );
                }}
            />
        )
    }
}

export default Home;