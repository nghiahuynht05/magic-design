import { Component } from 'react';


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
import logo from '../image/logo-01.jpg';

class Logo extends Component {
    handleClickOpenImage = (item) => {
        var modal = document.getElementById("myModal");
        var img = document.getElementById(item);
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        console.log(modal);
        console.log(img);
        console.log(modalImg);
        console.log(captionText);
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        document.getElementsByClassName('navbar')[0].style.display = 'contents';
        console.log("end")
    }

    handleCloseImage = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        document.getElementsByClassName('navbar')[0].style.display = 'block'
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="content">
                        <section className="section" id="band">
                            <div className="navbar">
                                <div className="header">
                                    <div className="logo">
                                        <a href="/"><img src={logo} alt="" /></a>
                                    </div>
                                    <ul className="menu">
                                        {/* <li><span href="" onClick={() => fullpageApi.moveTo(1, 0)}>TEAM</span></li>
                                        <li><span href="" onClick={() => fullpageApi.moveTo(2, 0)}>LOGO</span></li>
                                        <li><span href="" onClick={() => fullpageApi.moveTo(3, 0)}>BRAND</span></li>
                                        <li><span href="" onClick={() => fullpageApi.moveTo(4, 0)}>ABOUT US</span></li>
                                        <li><span href="" onClick={() => fullpageApi.moveTo(5, 0)}>CONTACT</span></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="brand-component">
                                <div className="layout" style={{ display: 'block' }}>
                                    <div className="brand">
                                        <div className="brand-name">LOGO</div>
                                        <div className="brand-notes">Những hình ảnh biết nói, biết an ủi bạn lúc các bạn cần điều gì đó để nhìn lại,
                                            tịnh tâm và đi tiếp...</div>
                                    </div>
                                    <div className="logo-info">
                                        <div className="logo-list">
                                            <div className="logo-item" onClick={() => this.handleClickOpenImage('myimg01')}>
                                                <img id="myimg01" src={slidershow1} alt="" />
                                            </div>
                                            <div className="logo-item" onClick={() => this.handleClickOpenImage('myimg02')}>
                                                <img id="myimg02" src={slidershow2} alt="" />
                                            </div>
                                            <div className="logo-item" onClick={() => this.handleClickOpenImage('myimg03')}>
                                                <img id="img03" src={slidershow3} alt="" />
                                            </div>
                                            <div className="logo-item" onClick={() => this.handleClickOpenImage('myimg04')}>
                                                <img id="img04" src={slidershow4} alt="" />
                                            </div>
                                            <div className="logo-item" onClick={() => this.handleClickOpenImage('myimg05')}>
                                                <img id="img05" src={slidershow5} alt="" />
                                            </div>
                                            <div className="logo-item" onClick={() => this.handleClickOpenImage('myimg06')}>
                                                <img id="img06" src={slidershow6} alt="" />
                                            </div>
                                        </div>
                                        <div className="logo-list">
                                            <div className="logo-item">
                                                <img src={slidershow1} alt="" />
                                            </div>
                                            <div className="logo-item">
                                                <img src={slidershow2} alt="" />
                                            </div>
                                            <div className="logo-item">
                                                <img src={slidershow12} alt="" />
                                            </div>
                                            <div className="logo-item">
                                                <img src={slidershow3} alt="" />
                                            </div>
                                            <div className="logo-item">
                                                <img src={slidershow11} alt="" />
                                            </div>
                                            <div className="logo-item">
                                                <img src={slidershow8} alt="" />
                                            </div>
                                        </div>
                                        <div className="logo-list">
                                            <div className="logo-item">
                                                <img src={slidershow4} alt="" />
                                            </div>
                                            <div className="logo-item">
                                                <img src={slidershow9} alt="" />
                                            </div>
                                            <div className="logo-item">
                                                <img src={slidershow5} alt="" />
                                            </div>
                                            <div className="logo-item">
                                                <img src={slidershow7} alt="" />
                                            </div>
                                            <div className="logo-item">
                                                <img src={slidershow2} alt="" />
                                            </div>
                                            <div className="logo-item">
                                                <img src={slidershow10} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div id="myModal" className="modal">
                    <span className="close" onClick={() => this.handleCloseImage()}>×</span>
                    <img className="modal-content" id="img01" alt='' />
                    <div id="caption" />
                </div>
            </div>
        );
    }
}

export default Logo;