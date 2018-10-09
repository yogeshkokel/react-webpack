import React, { Component } from 'react';
import Header from './partial/headerPartialComponent';
import Footer from './partial/footer';

class Home extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        $('.slider-exp-category').slick({
            infinite: false,
            slidesToShow: 5,
            arrows: false,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 990,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                }
            ]
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="header-slider mt-5">
                    <div className="jm-slider-hd">
                        <div className="mb-0 pb-0">
                            <div className="container">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-md-8 px-0">
                                            <div className="header-img" style={{ background: 'url("img/landing-banner.jpg")' }}>
                                                <span />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="header-content">
                                                <h6>SHOWBIZ</h6>
                                                <h3 className="blog-title">Here’s Why Jimmy Fallon Said He Was Bonded For Life With Priyanka Chopra!</h3>
                                                <p className="author">Sanath Shetty, Sep 2</p>
                                                <a href="#">
                                                    <img src="img/icon-share.svg" className="float-right mx-2 my-1" height="20px" width="20px" />
                                                </a>
                                                <a href="#">
                                                    <img src="img/icon-heart.svg" className="float-right mx-2 my-1" height="20px" width="20px" />
                                                </a>
                                                <span />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SLIDE 2  */}
                        <div>
                            <div className="container">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-md-8 px-0 wow fadeIn">
                                            <div className="header-img" style={{ background: 'url("img/hs.jpg")' }}>
                                                <span />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="header-content ">
                                                <h6 className="text-purple">Style &amp; beauty</h6>
                                                <h3 className="blog-title">5 Super Chill Hairstyles You’d Want To Try During Your Lunch Break</h3>
                                                <p className="author">Sanath Shetty, Sep 2</p>
                                                <a href="#">
                                                    <img src="img/icon-share.svg" className="float-right mx-2 my-1" height="20px" width="20px" />
                                                </a>
                                                <a href="#">
                                                    <img src="img/icon-heart.svg" className="float-right mx-2 my-1" height="20px" width="20px" />
                                                </a>
                                                <span className="bg-purple" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SLIDE 3 */}
                        <div>
                            <div className="container">
                                <div className="item">
                                    <div className="row">
                                        <div className="col-md-8 px-0 wow fadeIn">
                                            <div className="header-img" style={{ background: 'url("img/sl3.jpg")' }}>
                                                <span />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="header-content ">
                                                <h6 className="text-red">teen malani</h6>
                                                <h3 className="blog-title">Esha Gupta’s Car OOTDs Will Take Your IG Game To The Next LeveL</h3>
                                                <p className="author">Jay Mewada, Sep 2</p>
                                                <a href="#">
                                                    <img src="img/icon-share.svg" className="float-right mx-2 my-1" height="20px" width="20px" />
                                                </a>
                                                <a href="#">
                                                    <img src="img/icon-heart.svg" className="float-right mx-2 my-1" height="20px" width="20px" />
                                                </a>
                                                <span className="bg-red" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SHOWBIZ SECTION */}
                <div className="section-showbiz bg-slant wow fadeIn">
                    <div className="section-cardx3 d-none d-md-block">
                        <div className="container">
                            <h6>SHOWBIZ</h6>
                            <div className="row">
                                <div className="col-md-4 pl-0">
                                    <div className="col-md-11 px-0">
                                        <div className="img-box-3" style={{ background: 'url("img/first-1.jpg")' }}>
                                            <span />
                                        </div>
                                        <div className="content">
                                            <h3>Sonali Bendre Won The Internet With Her Friendship Day Post!
                        <a href="#">
                                                    <img src="img/icon-share.svg" height="25px" width="25px" />
                                                </a>
                                                <span />
                                            </h3>
                                            <p className="author">Jay Mewada, Sep 2</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="col-md-11 px-0 mx-auto">
                                        <div className="img-box-3" style={{ background: 'url("img/first-2.jpg")' }}>
                                            <span />
                                        </div>
                                        <div className="content">
                                            <h3>5 Statement Tops We’d Like To Borrow From Karisma Kapoor!
                        <a href="#">
                                                    <img src="img/icon-share.svg" height="25px" width="25px" />
                                                </a>
                                                <span />
                                            </h3>
                                            <p className="author">Jay Mewada, Sep 2</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 pr-0">
                                    <div className="col-md-11 px-0 ml-auto">
                                        <div className="img-box-3" style={{ background: 'url("img/first-3.jpg")' }}>
                                            <span />
                                        </div>
                                        <div className="content">
                                            <h3>This Video Of Hina Khan Kickboxing Will Make You Want To Hit The Gym!
                        <a href="#">
                                                    <img src="img/icon-share.svg" height="25px" width="25px" />
                                                </a>
                                                <span />
                                            </h3>
                                            <p className="author">Jay Mewada, Sep 2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-space d-none d-md-block" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-2 px-md-0">
                                        <div className="video-content">
                                            <h6>feature video</h6>
                                            <h3 className="blog-title">Lipstick for Beginner!</h3>
                                            <span className="dash" />
                                            <a href="#">
                                                <img src="./img/icon-heart.svg" className="mb-3 mt-4 heart" height="25px" width="25px" />
                                                <span className="count ">3,422</span>
                                            </a>
                                            <br />
                                            <a href="#">
                                                <img src="./img/icon-share.svg" height="25px" width="25px" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-7 px-0">
                                        <div className="video-box" style={{ background: 'url("./img/video-banner.jpg")' }}>
                                            <span />
                                            <a href="#" className="play">
                                                <img src="img/svg/play-circle.svg" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-none d-md-block px-0">
                                        <div className=" mx-auto">
                                            <div className="row">
                                                <div className="vbox2" style={{ background: 'url("img/featured-box-1.jpg")' }}>
                                                    <a href="#" className="play">
                                                        <img src="img/svg/play-circle.svg" className="mx-auto" />
                                                    </a>
                                                </div>
                                                <div className="vbox2 my-3" style={{ background: 'url("img/featured-box-2.jpg")' }}>
                                                    <a href="#" className="play">
                                                        <img src="img/svg/play-circle.svg" className="mx-auto" />
                                                    </a>
                                                </div>
                                                <div className="vbox2" style={{ background: 'url("img/featured-box-3.jpg")' }}>
                                                    <a href="#" className="play">
                                                        <img src="img/svg/play-circle.svg" className="mx-auto" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pr-md-0">
                                <div className="col-md-12 px-0">
                                    <div className="subscribe d-none d-md-block border wow bounceIn shadow">
                                        <img src="img/video-subscribe.svg" className="img-fluid" />
                                        <h3>Subscribe To Our Daily Newsletter!</h3>
                                        <form>
                                            <input type="email" placeholder="Enter email" />
                                            <input type="submit" defaultValue="Subscribe" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="break" />
                    <div className="section-space d-block d-md-none" />
                    {/* Explore More Category Block Start */}
                    <div className="exp-container d-md-none">
                        <div className="exp-title text-orange">EXPLORE</div>
                        <br />
                        <div className="container-fluid px-0">
                            <div className="slider-exp-category">
                                <div>
                                    <br />
                                    <div className="box">
                                        <a href="#" title="Better Living">
                                            <div className="img-c mx-auto" style={{ border: '3px solid #00a7d0', background: 'url("img/imp-img/exp-cat1.jpg")' }} />
                                            <span href="#" className="bg-blue link">Better living</span>
                                        </a>
                                    </div>
                                    <br />
                                </div>
                                <div>
                                    <br />
                                    <div className="box">
                                        <a href="cssas" title="Change">
                                            <div className="img-c mx-auto" style={{ border: '3px solid #FBC46F', background: 'url("img/imp-img/exp-cat2.jpg")' }} />
                                            <span href="#" className="bg-yellow link">&nbsp;&nbsp;&nbsp;change&nbsp;&nbsp;&nbsp;</span>
                                        </a>
                                    </div>
                                    <br />
                                </div>
                                <div>
                                    <br />
                                    <div className="box">
                                        <a href="#" title="Style & Beauty">
                                            <div className="img-c mx-auto" style={{ border: '3px solid #c29bc8', background: 'url("img/imp-img/exp-cat3.jpg")' }} />
                                            <span href="#" className="bg-purple link">style &amp; beauty</span>
                                        </a>
                                    </div>
                                    <br />
                                </div>
                                <div>
                                    <br />
                                    <div className="box">
                                        <a href="#" title="Showbiz">
                                            <div className="img-c mx-auto" style={{ border: '3px solid #f6ae8f', background: 'url("img/imp-img/exp-cat4.jpg")' }} />
                                            <span href="#" className="bg-orange link">showbiz</span>
                                        </a>
                                    </div>
                                    <br />
                                </div>
                                <div>
                                    <br />
                                    <div className="box">
                                        <a href="#" title="Teen Malani">
                                            <div className="img-c mx-auto" style={{ border: '3px solid #E63045', background: 'url("img/imp-img/exp-cat5.jpg")' }} />
                                            <span href="#" className="bg-red link">Teen malani</span>
                                        </a>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Explore More Category Block Ends */}
                    <div className="section-space" />
                    <div className="section-circle bg-slant">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="offset-md-1 col-md-5 px-0">
                                    <div className="img-circle" style={{ background: 'url("./img/round-1.jpg")' }}>
                                    </div>
                                </div>
                                <div className="col-md-5 px-md-0 cb-sm">
                                    <div className="content-box">
                                        <h6>SHOWBIZ</h6>
                                        <h3 className="blog-title">The Trailer of Ayush Sharma’s Love Ratri Is A Colorful Love Fest</h3>
                                        <p className="author">Nowshad Rizwanullah, Apr 14</p>
                                        <a href="#">
                                            <img src="img/icon-heart.svg" height="20px" width="20px" />
                                            <span>3,421</span>
                                        </a>
                                        <a href="#">
                                            <img src="img/icon-share.svg" height="20px" width="20px" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-space h-768-992" />
                    <div className="section-space h-768-992" />
                    <div className="section-space" />
                    <br />
                    <div className="container">
                        <div className="row">
                            {/* CARD 1 */}
                            <div className="col-md-6 pl-md-0 ">
                                <div className="col-md-12 sm-border-top">
                                    <div className="col-md-11 mr-auto px-md-0">
                                        <div className="row">
                                            <div className="col-md-8 px-0">
                                                <div className="img-box" style={{ background: 'url("img/friend.jpg")' }}>
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-md-4 px-0">
                                                <div className="content">
                                                    <h3 className="blog-title">7 Real Life Bollywood BFFs We Love!</h3>
                                                    <span className="dash" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 2 */}
                            <div className="col-md-6 pr-md-0 ">
                                <div className="col-md-12 sm-border-bottom pt-4 pt-md-0 ">
                                    <div className="col-md-11 ml-auto px-md-0 ">
                                        <div className="row">
                                            <div className="col-md-8 px-0">
                                                <div className="img-box" style={{ background: 'url("img/dance.jpg")' }}>
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-md-4 px-0">
                                                <div className="content mb-3 mb-md-0">
                                                    <h3 className="blog-title">Katrina Kaif Dance Like A Dream And Here’s The Proof!</h3>
                                                    <span className="dash" />
                                                    <br />
                                                    <a className="btn-explore">explore more <b>&nbsp;showbiz</b></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-space" />
                {/* BOLLYWOOD YEARBOOK SECTION  */}
                <div className="section-by">
                    <div className="container">
                        <h6 className="title">BOLLYWOOD YEARBOOK</h6>
                        <div className="jm-slider-by">
                            <div>
                                <div className="sbox">
                                    <div className="img" style={{ background: 'url("img/yearbook-1.jpg")' }} />
                                    <a href="#">
                                        <h6>ANUSHKA</h6>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="sbox">
                                    <div className="img" style={{ background: 'url("img/yearbook-2.jpg")' }} />
                                    <a href="#">
                                        <h6>Aliya</h6>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="sbox">
                                    <div className="img" style={{ background: 'url("img/yearbook-3.jpg")' }} />
                                    <a href="#">
                                        <h6>deepika</h6>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="sbox">
                                    <div className="img" style={{ background: 'url("img/yearbook-4.jpg")' }} />
                                    <a href="#">
                                        <h6>sharuk</h6>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="sbox">
                                    <div className="img" style={{ background: 'url("img/yearbook-5.jpg")' }} />
                                    <a href="#">
                                        <h6>priyanka</h6>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="sbox">
                                    <div className="img" style={{ background: 'url("img/yearbook-6.jpg")' }} />
                                    <a href="#">
                                        <h6>Amitabh</h6>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="sbox">
                                    <div className="img" style={{ background: 'url("img/yearbook-7.jpg")' }} />
                                    <a href="#">
                                        <h6>Amir</h6>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="sbox">
                                    <div className="img" style={{ background: 'url("img/yearbook-8.jpg")' }} />
                                    <a href="#">
                                        <h6>Salman</h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-space" />
                <div className="explore-more-block wow fadeInUp">
                    <a href="#" className="bg-orange">explore more <b>&nbsp;showbiz</b></a>
                </div>
                <div className="section-space d-none d-md-block" />
                {/* STYLE AND BEAUTY  SECTION  */}
                <div className="bg-slant section-sb">
                    <div className="container">
                        <h6>STYLE AND BEAUTY</h6>
                        <div className="row">
                            {/* CARD 1 */}
                            <div className="col-md-6 pl-md-0">
                                <div className="col-md-11 mr-auto px-md-0 sm-border-top pb-4 pb-md-0">
                                    <div className="sb-card">
                                        <div className="img-box" style={{ background: 'url("img/7unique.jpg")' }}>
                                            <span />
                                        </div>
                                        <div className="content">
                                            <h3 className="blog-title">7 Unique Saris We Would Like To See Shilpa Shetty Wear Again...
                        <a href="#">
                                                    <img src="img/icon-share.svg" height="25px" width="25p" />
                                                    <span className="dash-share" />
                                                </a>
                                            </h3>
                                            <p className="author">Jay Mewada, Sep 2</p>
                                            <span className="dash" />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 2 */}
                            <div className="col-md-6 pr-md-0">
                                <div className="col-md-11 ml-auto px-md-0 sm-border-bottom">
                                    <div className="sb-card">
                                        <div className="img-box" style={{ background: 'url("img/bride.jpg")' }}>
                                            <span />
                                        </div>
                                        <div className="content">
                                            <h3 className="blog-title">The Ultimate Guide For A Bride-To-Be!
                        <a href="#">
                                                    <img src="img/icon-share.svg" height="25px" width="25p" />
                                                    <span className="dash-share" />
                                                </a>
                                            </h3>
                                            <p className="author">Jay Mewada, Sep 2</p>
                                            <span className="dash" />
                                            <br />
                                            <a className="btn-explore">explore more <b>&nbsp;better living</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-space d-block d-md-none" />
                        {/* DESIGNER-YEARBOOK SECTION */}
                        <div className="row">
                            <div className="col-md-6 px-0">
                                <div className="container px-0">
                                    <div className="section-dy">
                                        <h6 className="title">DESIGNER YEARBOOK</h6>
                                        <div className="jm-slider-dy">
                                            <div>
                                                <div className="sbox">
                                                    <div className="img" style={{ background: 'url("img/yearbook-1.jpg")' }} />
                                                    <h6>SABYAS</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="sbox">
                                                    <div className="img" style={{ background: 'url("img/yearbook-2.jpg")' }} />
                                                    <h6>Manish</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="sbox">
                                                    <div className="img" style={{ background: 'url("img/yearbook-3.jpg")' }} />
                                                    <h6>neeta</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="sbox">
                                                    <div className="img" style={{ background: 'url("img/yearbook-4.jpg")' }} />
                                                    <h6>twinkle</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 px-md-0 ">
                                <div className="col-md-11 bg-purple ml-auto px-0">
                                    <div className="ad-box">
                                        {/* ADVETSISE HERE */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container ends */}
                </div>
                <div className="section-space" />
                <div className="explore-more-block wow fadeInUp">
                    <a href="#" className="bg-purple">explore more <b>&nbsp;style and beauty</b></a>
                </div>
                <div className="section-space d-none d-md-block" />
                {/* BETTER LIVING SECTION  */}
                <div className="bg-slant section-bl">
                    <div className="container">
                        <h6>BETTER LIVING</h6>
                        <div className="row">
                            {/* CARD 1 */}
                            <div className="col-md-6 pl-md-0">
                                <div className="col-md-11 mr-auto px-md-0 sm-border-top pb-4 pb-md-0">
                                    <div className="bl-card">
                                        <div className="img-box" style={{ background: 'url("img/music.jpg")' }}>
                                            <span />
                                        </div>
                                        <div className="content">
                                            <h3 className="blog-title">How Music Therapy Effectively Helps With Mental Health Problems!
                        <a href="#">
                                                    <img src="img/icon-share.svg" height="25px" width="25p" />
                                                    <span className="dash-share bg-blue" />
                                                </a>
                                            </h3>
                                            <p className="author">Jay Mewada, Sep 2</p>
                                            <span className="dash" />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 2 */}
                            <div className="col-md-6 pr-md-0">
                                <div className="col-md-11 ml-auto px-md-0 sm-border-bottom ">
                                    <div className="bl-card">
                                        <div className="img-box" style={{ background: 'url("img/color.jpg")' }}>
                                            <span />
                                        </div>
                                        <div className="content">
                                            <h3 className="blog-title">Things You Need To Know About Colours &amp; The Psychology Behind It!
                        <a href="#">
                                                    <img src="img/icon-share.svg" height="25px" width="25p" />
                                                    <span className="dash-share bg-blue" />
                                                </a>
                                            </h3>
                                            <p className="author">Jay Mewada, Sep 2</p>
                                            <span className="dash" />
                                            <br />
                                            <a className="btn-explore">explore more <b>&nbsp;better living</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-space" />
                <div className="section-bl2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="offset-md-1 col-md-7 px-0 d-none d-md-block">
                                <div className="row">
                                    <div className="col-md-3 px-0">
                                        <div className="content">
                                            <h6>BETTER LIVING</h6>
                                            <h3 className="blog-title">This Pizza Recipe Proves That You Can Never Have Too Much Cheese!</h3>
                                            <p className="author">Arshad Kazi, Apr 15
                        <span className="bg-blue" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="img-box" style={{ background: 'url("img/pizza.jpeg")' }}>
                                            <span />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 pr-md-0 px-0 pl-md-4">
                                <div className="section-hscope">
                                    <div className="img-box-2 mx-auto">
                                        {/* <center><img src="img/hscope.png"></center> */}
                                    </div>
                                    <div className="content shadow border">
                                        <div className="img">
                                        </div>
                                        <div className="jm-slider-hs">
                                            <div>
                                                <h6>LEO - 16th to 21st JULY, 2018</h6>
                                                <p>An appealing new face could appear on the scene today, Leo. This might lead to a new friendship!</p>
                                            </div>
                                            <div>
                                                <h6>ARIES - 16th to 21st JULY, 2018</h6>
                                                <p>Don't get involved in other people's problems. Investments will cost more than you anticipated. Help elders with their concerns.</p>
                                            </div>
                                            <div>
                                                <h6>CANCER - 16th to 21st JULY, 2018</h6>
                                                <p>You will have a problem holding on to your cash today. Get back to the comforts of cottage or home. You will be uncertain of your feelings.</p>
                                            </div>
                                            <div>
                                                <h6>CANCER - 16th to 21st JULY, 2018</h6>
                                                <p>You will have a problem holding on to your cash today. Get back to the comforts of cottage or home. You will be uncertain of your feelings.</p>
                                            </div>
                                            <div>
                                                <h6>CANCER - 16th to 21st JULY, 2018</h6>
                                                <p>You will have a problem holding on to your cash today. Get back to the comforts of cottage or home. You will be uncertain of your feelings.</p>
                                            </div>
                                            <div>
                                                <h6>CANCER - 16th to 21st JULY, 2018</h6>
                                                <p>You will have a problem holding on to your cash today. Get back to the comforts of cottage or home. You will be uncertain of your feelings.</p>
                                            </div>
                                            <div>
                                                <h6>CANCER - 16th to 21st JULY, 2018</h6>
                                                <p>You will have a problem holding on to your cash today. Get back to the comforts of cottage or home. You will be uncertain of your feelings.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-space d-none d-md-block" />
                <div className="explore-more-block wow fadeInUp">
                    <a href="#" className="bg-blue">explore more <b>&nbsp;better living</b></a>
                </div>
                <div className="section-space" />
                {/* Explore More Category Block Start */}
                <div className="exp-container">
                    <div className="exp-title text-orange">EXPLORE</div>
                    <br />
                    <div className="container-fluid px-0">
                        <div className="slider-exp-category">
                            <div>
                                <br />
                                <div className="box">
                                    <a href="#" title="Better Living">
                                        <div className="img-c mx-auto" style={{ border: '3px solid #00a7d0', background: 'url("img/imp-img/exp-cat1.jpg")' }} />
                                        <span href="#" className="bg-blue link">Better living</span>
                                    </a>
                                </div>
                                <br />
                            </div>
                            <div>
                                <br />
                                <div className="box">
                                    <a href="cssas" title="Change">
                                        <div className="img-c mx-auto" style={{ border: '3px solid #FBC46F', background: 'url("img/imp-img/exp-cat2.jpg")' }} />
                                        <span href="#" className="bg-yellow link">&nbsp;&nbsp;&nbsp;change&nbsp;&nbsp;&nbsp;</span>
                                    </a>
                                </div>
                                <br />
                            </div>
                            <div>
                                <br />
                                <div className="box">
                                    <a href="#" title="Style & Beauty">
                                        <div className="img-c mx-auto" style={{ border: '3px solid #c29bc8', background: 'url("img/imp-img/exp-cat3.jpg")' }} />
                                        <span href="#" className="bg-purple link">style &amp; beauty</span>
                                    </a>
                                </div>
                                <br />
                            </div>
                            <div>
                                <br />
                                <div className="box">
                                    <a href="#" title="Showbiz">
                                        <div className="img-c mx-auto" style={{ border: '3px solid #f6ae8f', background: 'url("img/imp-img/exp-cat4.jpg")' }} />
                                        <span href="#" className="bg-orange link">showbiz</span>
                                    </a>
                                </div>
                                <br />
                            </div>
                            <div>
                                <br />
                                <div className="box">
                                    <a href="#" title="Teen Malani">
                                        <div className="img-c mx-auto" style={{ border: '3px solid #E63045', background: 'url("img/imp-img/exp-cat5.jpg")' }} />
                                        <span href="#" className="bg-red link">Teen malani</span>
                                    </a>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Explore More Category Block Ends */}
                <div className="section-space" />
                {/* CHANGE SECTION  */}
                <div className="bg-slant section-change">
                    <div className="container">
                        <h6>CHANGE</h6>
                        <div className="row">
                            {/* CARD 1 */}
                            <div className="col-md-6 pl-md-0">
                                <div className="col-md-11 mr-auto px-md-0 sm-border-top pb-4 pb-md-0 ">
                                    <div className="change-card">
                                        <div className="img-box" style={{ background: 'url("img/listen.jpg")' }}>
                                            <span />
                                        </div>
                                        <div className="content">
                                            <h3 className="blog-title">Observe. Ask. Listen Let’s Talk Our Way To Mental Well-Being...
                        <a href="#">
                                                    <img src="img/icon-share.svg" height="25px" width="25p" />
                                                    <span className="dash-share" />
                                                </a>
                                            </h3>
                                            <p className="author">Jay Mewada, Sep 2</p>
                                            <span className="dash" />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 2 */}
                            <div className="col-md-6 pr-md-0">
                                <div className="col-md-11 ml-auto px-md-0 sm-border-bottom">
                                    <div className="change-card">
                                        <div className="img-box" style={{ background: 'url("img/stop.jpg")' }}>
                                            <span />
                                        </div>
                                        <div className="content">
                                            <h3 className="blog-title">It’s Time We Stop Trying To Casually ‘Fix’ People With The Words We Say!
                        <a href="#">
                                                    <img src="img/icon-share.svg" height="25px" width="25p" />
                                                    <span className="dash-share" />
                                                </a>
                                            </h3>
                                            <p className="author">Jay Mewada, Sep 2</p>
                                            <span className="dash" />
                                            <br />
                                            <a href="#" className="btn-explore">explore more <b>&nbsp;CHANGE</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="explore-more-block wow fadeInUp">
                            <a href="#" className="bg-yellow">explore more <b>&nbsp;CHANGE</b></a>
                        </div>
                    </div>
                </div>
                <div className="section-space" />
                <div className="container-fluid px-0 d-block d-md-none mb-5">
                    <div className="sub-sm">
                        <img src="img/video-subscribe.svg" className="img-fluid" />
                        <h3>Subscribe To Our Daily Newsletter!</h3>
                        <form>
                            <input type="email" placeholder="Enter email" />
                            <input type="submit" defaultValue="Subscribe" />
                        </form>
                    </div>
                </div>
                {/* TEEN MALANIN SECTION START */}
                <div className="section-tm bg-slant">
                    <div className="section-circle">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="offset-md-1 col-md-5 px-0">
                                    <div className="img-circle" style={{ background: 'url("img/round.jpg")' }}>
                                        <span />
                                    </div>
                                </div>
                                <div className="col-md-5 px-md-0 cb-sm">
                                    <div className="content-box">
                                        <h6>TEEN MALINI</h6>
                                        <h3 className="blog-title">Best Moments Of 2017 That Made This Year An Epic Success!</h3>
                                        <p className="author">Nowshad Rizwanullah, Apr 14</p>
                                        <a href="#">
                                            <img src="img/icon-heart.svg" height="23px" width="23px" />
                                            <span>1234</span>
                                        </a>
                                        <a href="#" title="Share this post">
                                            <img src="img/icon-share.svg" height="23px" width="23px" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-space" />
                    <div className="section-space" />
                    <div className="section-space" />
                    <br />
                    <br />
                    <div className="container">
                        <div className="row">
                            {/* CARD 1 */}
                            <div className="col-md-6 pl-md-0">
                                <div className="col-md-12 sm-border-top">
                                    <div className="col-md-11 mr-auto px-md-0">
                                        <div className="row">
                                            <div className="col-md-8 px-0">
                                                <div className="img-box" style={{ background: 'url("img/series.jpg")' }}>
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-md-4 px-0">
                                                <div className="content">
                                                    <h3 className="blog-title">Malini’s Girl Tribe Now Has A Web Series - And It’s Giving All Kinds Of Feels!</h3>
                                                    <span className="dash" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 2 */}
                            <div className="col-md-6 pr-md-0">
                                <div className="col-md-12 sm-border-bottom pt-5 pt-md-0 ">
                                    <div className="col-md-11 ml-auto px-md-0">
                                        <div className="row">
                                            <div className="col-md-8 px-0">
                                                <div className="img-box" style={{ background: 'url("img/jk.jpg")' }}>
                                                    <span />
                                                </div>
                                            </div>
                                            <div className="col-md-4 px-0">
                                                <div className="content">
                                                    <h3 className="blog-title">Janhvi Kapoor's First Magazine Cover Is Out And It's As Stunning As Expected</h3>
                                                    <span className="dash" />
                                                    <br />
                                                    <a className="btn-explore">explore more <b>&nbsp;teen malani</b></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-space" />
                <div className="explore-more-block wow fadeInUp d-none d-md-block">
                    <a href="#" className="bg-red" title="Explore more Teen Malani">explore more <b>&nbsp;teen malani</b></a>
                </div>
                <div className="section-space" />
                <div className="section-space d-none d-md-block" />
                {/* MISS MALANI QUOTES SECTION */}
                <div className="container px-0">
                    <div className="q-box">
                        <div className="img-round">
                            <img src="img/mm.jpg" className="img-fluid" />
                        </div>
                        <h3>QUOTES BY MISS MALINI</h3>
                        <div className="jm-slider-qb">
                            <div>
                                <center><i className="fas fa-quote-right display-4" /></center>
                                <blockquote>“My Outfit smiles for me, I don’t have to!”</blockquote>
                            </div>
                            <div>
                                <center><i className="fas fa-quote-right display-4" /></center>
                                <blockquote>“Love raised me, lipstick saved me!”</blockquote>
                            </div>
                            <div>
                                <center><i className="fas fa-quote-right display-4" /></center>
                                <blockquote>“Better to have lost and loved than never to have loved at all”</blockquote>
                            </div>
                            <div>
                                <center><i className="fas fa-quote-right display-4" /></center>
                                <blockquote>“My Outfit smiles for me, I don’t have to! ”</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {/* FOLLOW US SECTION  */}
                <div className="container-fluid px-0">
                    <div className="follow_us">
                        <div className="title text-red">Follow Us</div>
                        <ul className="list-inline text-center mt-1">
                            <a href="goog">
                                <li className="list-inline-item">
                                    <svg viewBox="0 0 264 512"><path fill="#ffffff" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229" /></svg>
                                </li>
                            </a>
                            <a href="#">
                                <li className="list-inline-item">
                                    <svg viewBox="0 0 512 512"><path fill="#ffffff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                </li>
                            </a>
                            <a href="#">
                                <li className="list-inline-item">
                                    <svg viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                </li>
                            </a>
                        </ul>
                        <span className="my-3" />
                    </div>
                </div>
                {/* LOAD MORE MISS FROM MALANI BUTTON */}
                <div className="load-more-mm">
                    <a href="#" title="Load more from MissMalani.com">
                        Load more <span className="v-md">from &nbsp;</span><img src="img/missmalini-logo.svg" />
                    </a>
                </div>
                <footer>
                    <Footer />
                </footer>

            </div>
        )
    }
}
export default Home;
