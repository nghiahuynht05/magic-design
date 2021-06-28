import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './style.css';

import slider1 from './image/slider-1.jpg';
import slider2 from './image/slider-2.jpg';
import slider3 from './image/slider-3.jpg';

import slidershow1 from './image/logo-01.jpg';
import slidershow2 from './image/logo-02.jpg';
import slidershow3 from './image/logo-03.jpg';
import slidershow4 from './image/logo-04.jpg';
import slidershow5 from './image/logo-05.jpg';
import slidershow6 from './image/logo-06.jpg';
import slidershow7 from './image/logo-07.jpg';
import slidershow8 from './image/logo-08.jpg';
import slidershow9 from './image/logo-09.jpg';
import slidershow10 from './image/logo-10.jpg';
import slidershow11 from './image/logo-11.jpg';
import slidershow12 from './image/logo-12.jpg';

import logo from './image/logo.png';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleAddSection() {

    }
    render() {
        const Menu = () => (
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
                                                    <a href="./index.html"><img src={logo} alt="" /></a>
                                                </div>
                                                <ul className="menu">
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>BAND</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(2, 0)}>BRAND</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(3, 0)}>LOGO</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(4, 0)}>ABOUT US</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(5, 0)}>CONTACT</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="band">
                                            <div className="layout">
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
                                                            <span>Vào thời điểm cực khì khó khăn cho toàn thế giới, chúng tôi muốn là một mặt
                                                                trời
                                                                soi sáng cho con đường các doanh nghiệp.<br />Ngọn lửa cháy sáng là nhờ sự bền bỉ,
                                                                kiên định
                                                                vượt
                                                                qua khó khăn của chúng tôi. Sẽ cháy sáng hơn nữa khi được các doanh nghiệp thắp
                                                                thêm
                                                                hi
                                                                vọng.</span>
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
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>BAND</span></li>
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
                                                        <div className="brand-content">Để thương hiệu có thể truyền tải được giá trị cốt lỗi cũng
                                                            như
                                                            chất
                                                            lượng của sản phẩm/ dịch vụ đến với toàn bộ khách hàng và thị trường bên ngoài,
                                                            doanh
                                                            nghiệp
                                                            cần xây dựng hình ảnh và nhận diện thương hiệu đầy đủ, mạnh mẽ.</div>
                                                        <div>
                                                            <button className="botton-type" onclick="navToLink('more-brand')">
                                                                <div className="button-text"><span>MORE...</span></div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="slider-show">
                                                    <div className="slideshow-container">
                                                        <div className="mySlides fade">
                                                            <img src={slider1} style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} alt='' />
                                                        </div>
                                                        <div className="mySlides fade">
                                                            <img src={slider2} style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} alt='' />
                                                        </div>
                                                        <div className="mySlides fade">
                                                            <img src={slider3} style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className=" thumbnail">
                                                        <div className="item" id="item1">
                                                            <div className="image-01" onclick="clickSlider('item1')" />
                                                        </div>
                                                        <div className="item" id="item2">
                                                            <div className="image-02" onclick="clickSlider('item2')" />
                                                        </div>
                                                        <div className="item" id="item3">
                                                            <div className="image-03" onclick="clickSlider('item3')" />
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
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>BAND</span></li>
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
                                                        <div className="brand-content">Logo mang lại cho doanh nghiệp của bạn một bản sắc, làm cho
                                                            thương
                                                            hiệu của bạn trở nên gắn bó hơn, cung cấp nền tảng cho những nổ lực xâyy dựng thương
                                                            hiệu
                                                            trong tương lai của bạn và hơn thế nữa!</div>
                                                        <div>
                                                            <button className="botton-type" onclick="navToLink('more-logo')">
                                                                <div className="button-text"><span>MORE...</span></div>
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
                                                                        <img src={slidershow1} onclick="window.open('./brand.html','_blank')" alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow2} onclick="window.open('./brand.html','_blank')" alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow3} onclick="window.open('./brand.html','_blank')" alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow12} onclick="window.open('./brand.html','_blank')" alt='' />
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
                                                                        <img src={slidershow4} onclick="window.open('./brand.html','_blank')" alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow5} onclick="window.open('./brand.html','_blank')" alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow6} onclick="window.open('./brand.html','_blank')" alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow11} onclick="window.open('./brand.html','_blank')" alt='' />
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
                                                                        <img src={slidershow7} onclick="window.open('./brand.html','_blank')" alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow8} onclick="window.open('./brand.html','_blank')" alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow9} onclick="window.open('./brand.html','_blank')" alt='' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="rect ">
                                                                <div className="slideshow">
                                                                    <div className="image">
                                                                        <img src={slidershow10} onclick="window.open('./brand.html','_blank')" alt='' />
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
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>BAND</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(2, 0)}>BRAND</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(3, 0)}>LOGO</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(4, 0)}>ABOUT US</span></li>
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(5, 0)}>CONTACT</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="aboutus">
                                            <div className="layout">
                                                <div className="info">
                                                    <div className="detail">
                                                        <div className="image"> About US</div>
                                                        <div className="brand-content">Chúng tôi tin rằng mọi hành trình đều đi từ những ý tưởng. Chúng
                                                            tôi
                                                            muốn được nghe những câu chuyện những ấp ủ và cùng các bạn thực hiện nó. Một sự thật
                                                            không
                                                            thể chối cãi là chúng ta sẽ không biết cuối con đường là điều gì khi không quyết tâm đi
                                                            hết
                                                            con đường đó.</div>
                                                        <div>
                                                            <button className="botton-type" onclick="navToLink('more-about')">
                                                                <div className="button-text"><span>MORE...</span></div>
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
                                                    <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>BAND</span></li>
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
                                                    <div className="us">Cùng chúng tôi chạm tới những cảm xúc!!!</div>
                                                    <form action>
                                                        <label htmlFor="fname">Your name (Tên của bạn)</label>
                                                        <input autoComplete="off" type="text" id="fname" name="firstname" placeholder="" />
                                                        <label htmlFor="lname">Your email (Email của bạn)</label>
                                                        <input autoComplete="off" type="text" id="lname" name="lastname" placeholder="" />
                                                        <label htmlFor="lname">Specialization (Chuyên ngành)</label>
                                                        <input autoComplete="off" type="text" id="lname" name="lastname" placeholder="" />
                                                        <label htmlFor="lname">Your messgae (Lời nhắn của bạn)</label>
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
                                                    <div className="address-info">
                                                        <div>Adress</div>
                                                        <div>54 Dương Quang Ham, Danang City</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="footer-image">
                                                <div className="logo">
                                                    <a href="./index.html"><img src={logo} alt="" /></a>
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
        );
        return (
            <div >
                <Menu />
            </div>
        )
    }
}

export default App;