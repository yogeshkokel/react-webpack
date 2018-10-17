import React, { Component } from 'react';
import Header from './partial/headerPartialComponent';
import Footer from './partial/footer';


class SubCategory extends Component {
    render() {
        return (<div>
            <Header />
            <div className="container mt-5 pt-2 mm-breadcrumb">
                <ol className="list-inline">
                    <li className="list-inline-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#">ShowBiz</a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="active">Videos</a>
                    </li>
                </ol>
            </div>
            <div className="container mb-4">
                <h1 className="text-orange sc-h1">SHOWBIZ</h1>
                <span className="bg-orange sc-dash d-none d-md-block" />
            </div>
            {/* <div class="section-space"></div> */}
            <div className="sc-videos">
                <div className="c-hearts" />
                <div className="container">
                    <h2 className="sc-title text-orange">VIDEOS</h2>
                    <br />
                    <div className="row">
                        <div className="col-md-6 my-3 px-0 px-md-4">
                            <div className="box">
                                <div className="vid-box" style={{ background: 'url(img/round-1.jpg)' }}>
                                    <span />
                                </div>
                                <div className="content">
                                    <a href="#">
                                        <h3 className="blog-title">The Trailer of Ayush Sharma’s Love Ratri Is A Colorful Love Fest</h3>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36"><g><g><path className="st0" fill="#f6ae8f " d="M22.1,6.7c0,0.3,0,0.6,0.1,1l-11,5.7c-1.2-1.1-2.8-1.8-4.6-1.8c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c1.8,0,3.4-0.7,4.6-1.9l10.9,5.5c0,0.3-0.1,0.6-0.1,0.9c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-1.8,0-3.4,0.7-4.6,1.9l-10.9-5.5c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l11-5.7c1.2,1.1,2.8,1.8,4.6,1.8c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7C25.1,0,22.1,3,22.1,6.7" /></g></g>
                                        </svg>
                                    </a>
                                    <p className="author">Jay Mewada, 15 Oct</p>
                                    <span className="bg-orange" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-3 px-0 px-md-4">
                            <div className="box">
                                <div className="vid-box" style={{ background: 'url(img/malika.jpg)' }}>
                                    <span />
                                </div>
                                <div className="content">
                                    <a href="#">
                                        <h3 className="blog-title">8 Tops we would like to borrow from Malika Arora Khan!</h3>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36"><g><g><path className="st0" fill="#f6ae8f " d="M22.1,6.7c0,0.3,0,0.6,0.1,1l-11,5.7c-1.2-1.1-2.8-1.8-4.6-1.8c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c1.8,0,3.4-0.7,4.6-1.9l10.9,5.5c0,0.3-0.1,0.6-0.1,0.9c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-1.8,0-3.4,0.7-4.6,1.9l-10.9-5.5c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l11-5.7c1.2,1.1,2.8,1.8,4.6,1.8c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7C25.1,0,22.1,3,22.1,6.7" /></g></g>
                                        </svg>
                                    </a>
                                    <p className="author">Jay Mewada, 15 Oct</p>
                                    <span className="bg-orange" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6 my-3 px-0 px-md-4">
                            <div className="box-sm">
                                <div className="vid-box-sm" style={{ background: 'url(img/dance.jpg)' }}>
                                    <span />
                                </div>
                                <div className="content">
                                    <a href="#">
                                        <h3 className="blog-title">Katrina Kaif Dance Like A Dream And Here’s The Proof! </h3>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36"><g><g><path className="st0" fill="#f6ae8f " d="M22.1,6.7c0,0.3,0,0.6,0.1,1l-11,5.7c-1.2-1.1-2.8-1.8-4.6-1.8c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c1.8,0,3.4-0.7,4.6-1.9l10.9,5.5c0,0.3-0.1,0.6-0.1,0.9c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-1.8,0-3.4,0.7-4.6,1.9l-10.9-5.5c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l11-5.7c1.2,1.1,2.8,1.8,4.6,1.8c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7C25.1,0,22.1,3,22.1,6.7" /></g></g>
                                        </svg>
                                    </a>
                                    <p className="author">Jay Mewada, 15 Oct</p>
                                    <span className="bg-orange" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6 my-3 px-0 px-md-4">
                            <div className="box-sm">
                                <div className="vid-box-sm" style={{ background: 'url("img/sara.jpg")' }}>
                                    <span />
                                </div>
                                <div className="content">
                                    <a href="#">
                                        <h3 className="blog-title">11 Times Sara Ali Khan Style Was Right On Point </h3>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36"><g><g><path className="st0" fill="#f6ae8f " d="M22.1,6.7c0,0.3,0,0.6,0.1,1l-11,5.7c-1.2-1.1-2.8-1.8-4.6-1.8c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c1.8,0,3.4-0.7,4.6-1.9l10.9,5.5c0,0.3-0.1,0.6-0.1,0.9c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-1.8,0-3.4,0.7-4.6,1.9l-10.9-5.5c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l11-5.7c1.2,1.1,2.8,1.8,4.6,1.8c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7C25.1,0,22.1,3,22.1,6.7" /></g></g>
                                        </svg>
                                    </a>
                                    <p className="author">Jay Mewada, 15 Oct</p>
                                    <span className="bg-orange" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-space d-none d-md-block" />
            <div className="flat-pink">
                <br />
                <div className="container">
                    <div className="sc-rocket">
                        <div className="row">
                            <div className="col-md-6 px-0 px-md-3">
                                <div className="vid-rec" style={{ background: 'url("img/pry.jpg")' }}>
                                    <span />
                                </div>
                            </div>
                            <div className="col-md-6 px-0 px-md-3">
                                <div className="content pt-md-5 mt-md-5 pr-md-5">
                                    <a href="#">
                                        <h3 className="blog-title">6 Outfit Worn By Priyanka Chopra That Could Light Up Any Room </h3>
                                    </a>
                                    <button id="likes" className="d-md-block d-none" onClick={this.onlikebtn}>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                            <path id="like" fill="none" stroke="#000000" strokeWidth={3} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                        </svg> &nbsp;
                    </button>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36"><g><g><path className="st0" fill="#f6ae8f " d="M22.1,6.7c0,0.3,0,0.6,0.1,1l-11,5.7c-1.2-1.1-2.8-1.8-4.6-1.8c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c1.8,0,3.4-0.7,4.6-1.9l10.9,5.5c0,0.3-0.1,0.6-0.1,0.9c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-1.8,0-3.4,0.7-4.6,1.9l-10.9-5.5c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l11-5.7c1.2,1.1,2.8,1.8,4.6,1.8c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7C25.1,0,22.1,3,22.1,6.7" /></g></g>
                                        </svg>
                                    </a>
                                    <p className="author">Jay Mewada, Oct 15</p>
                                    <span className="bg-orange" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-space d-none d-md-block" />
            <div className="sc-videos" style={{ background: 'none' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 my-3 px-0 px-md-4">
                            <div className="box">
                                <div className="vid-box" style={{ background: 'url(img/batti.jpeg)' }}>
                                    <span />
                                </div>
                                <div className="content">
                                    <a href="#">
                                        <h3 className="blog-title">‘Batti Gul Meter Chalu’ Will Make You Dance Your Heart Out!</h3>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36"><g><g><path className="st0" fill="#f6ae8f " d="M22.1,6.7c0,0.3,0,0.6,0.1,1l-11,5.7c-1.2-1.1-2.8-1.8-4.6-1.8c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c1.8,0,3.4-0.7,4.6-1.9l10.9,5.5c0,0.3-0.1,0.6-0.1,0.9c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-1.8,0-3.4,0.7-4.6,1.9l-10.9-5.5c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l11-5.7c1.2,1.1,2.8,1.8,4.6,1.8c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7C25.1,0,22.1,3,22.1,6.7" /></g></g>
                                        </svg>
                                    </a>
                                    <p className="author">Jay Mewada, 15 Oct</p>
                                    <span className="bg-orange" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-3 px-0 px-md-4">
                            <div className="box">
                                <div className="vid-box" style={{ background: 'url(img/sharukk.jpg)' }}>
                                    <span />
                                </div>
                                <div className="content">
                                    <a href="#">
                                        <h3 className="blog-title">Heres Why Sharuk Khan Will Always Be The Man Of Dreams</h3>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36"><g><g><path className="st0" fill="#f6ae8f " d="M22.1,6.7c0,0.3,0,0.6,0.1,1l-11,5.7c-1.2-1.1-2.8-1.8-4.6-1.8c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c1.8,0,3.4-0.7,4.6-1.9l10.9,5.5c0,0.3-0.1,0.6-0.1,0.9c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-1.8,0-3.4,0.7-4.6,1.9l-10.9-5.5c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l11-5.7c1.2,1.1,2.8,1.8,4.6,1.8c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7C25.1,0,22.1,3,22.1,6.7" /></g></g>
                                        </svg>
                                    </a>
                                    <p className="author">Jay Mewada, 15 Oct</p>
                                    <span className="bg-orange" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6 my-3 px-0 px-md-4">
                            <div className="box-sm">
                                <div className="vid-box-sm" style={{ background: 'url(img/sonakshi.jpg)' }}>
                                    <span />
                                </div>
                                <div className="content">
                                    <a href="#">
                                        <h3 className="blog-title">Sonakshi Sinha Sparkled Up The Runway In An Outfit That You’d Love To Own </h3>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36"><g><g><path className="st0" fill="#f6ae8f " d="M22.1,6.7c0,0.3,0,0.6,0.1,1l-11,5.7c-1.2-1.1-2.8-1.8-4.6-1.8c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c1.8,0,3.4-0.7,4.6-1.9l10.9,5.5c0,0.3-0.1,0.6-0.1,0.9c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-1.8,0-3.4,0.7-4.6,1.9l-10.9-5.5c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l11-5.7c1.2,1.1,2.8,1.8,4.6,1.8c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7C25.1,0,22.1,3,22.1,6.7" /></g></g>
                                        </svg>
                                    </a>
                                    <p className="author">Jay Mewada, 15 Oct</p>
                                    <span className="bg-orange" />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6 my-3 px-0 px-md-4">
                            <div className="box-sm">
                                <div className="vid-box-sm" style={{ background: 'url("img/KARAN.jpg")' }}>
                                    <span />
                                </div>
                                <div className="content">
                                    <a href="#">
                                        <h3 className="blog-title">heres why karan johar wants to host oscar! </h3>
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36"><g><g><path className="st0" fill="#f6ae8f " d="M22.1,6.7c0,0.3,0,0.6,0.1,1l-11,5.7c-1.2-1.1-2.8-1.8-4.6-1.8c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c1.8,0,3.4-0.7,4.6-1.9l10.9,5.5c0,0.3-0.1,0.6-0.1,0.9c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-1.8,0-3.4,0.7-4.6,1.9l-10.9-5.5c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l11-5.7c1.2,1.1,2.8,1.8,4.6,1.8c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7C25.1,0,22.1,3,22.1,6.7" /></g></g>
                                        </svg>
                                    </a>
                                    <p className="author">Jay Mewada, 15 Oct</p>
                                    <span className="bg-orange" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="exp-more-btn-block text-center my-5">
                <a href="#" className="bg-orange px-4 py-2 shadow text-light" style={{ borderRadius: 50 }}> EXPLORE MORE <b>VIDEOS</b></a>
            </div>
            <div className="sub-sm d-md-none">
                <img src="img/video-subscribe.svg" className="img-fluid" />
                <h3>Subscribe To Our Daily Newsletter!</h3>
                <form>
                    <input type="email" placeholder="Enter email" />
                    <input type="submit" defaultValue="Subscribe" />
                </form>
            </div>
            <div className="c-rocket">
                {/* LOAD MORE MISS FROM MALANI BUTTON */}
                <div className="load-more-mm">
                    <a href="#" title="Load more from MissMalani.com">
                        Load more <span className="v-md">from &nbsp;</span><img src="img/missmalini-logo.svg" />
                    </a>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>

        </div>
        )
    }
}

export default SubCategory;