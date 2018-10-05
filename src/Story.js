import React, { Component } from 'react';
import './css/jm-style.css';
import './css/slick.css';
import './css/slick-theme.css';
import './js/script.js';
import './js/slick.js';
import axios from 'axios';
import moment from 'moment';
import Footer from './partial/footer'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { baseURL } from './constants/helper';


class Story extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slugresponse: {},
        }
    }
    componentDidMount() {

        let currentComponent = this;

        let { slugresponse } = this.state;
        axios.get(baseURL+'getStory')
            .then(function (response) {
                if (response.data.hit._source.post_status == 'publish') {
                    currentComponent.setState({ slugresponse: response.data });
                    $('.slider-rs').slick({
                        infinite: false,
                        slidesToShow: 4,
                        autoplay: true,
                        arrows: false,
                        slidesToScroll: 2,
                        responsive: [
                            {
                                breakpoint: 767,
                                settings: {
                                    arrows: false,
                                    slidesToShow: 3,
                                    // slidesToScroll: 1,
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    arrows: false,
                                    slidesToShow: 2,
                                    // slidesToScroll: 1
                                }
                            }
                        ]
                    });
                    // Slider Tredning Today

                    $('.slider-tt').slick({
                        infinite: false,
                        arrows: false,
                        slidesToShow: 2,
                        // autoplay:true,
                        slidesToScroll: 1
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentWillReceiveProps() {

    }

    render() {
        let { slugresponse } = this.state;
        if (slugresponse && Object.keys(slugresponse).length > 0) {
            return (
                <div>
                    <nav className="navbar navbar-expand-lg py-0 px-0 fixed-top">
                        <a className="nav-burger navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span />
                            <span />
                            <span />
                        </a>
                        <a className="navbar-brand py-md-2" href="#">
                            <img src={require('./img/missmalini-logo.svg')} className="mb-1" height={27} width={186} />
                        </a>
                        <a className="pt-1 pb-2 h-993" title="Search" href="#">
                            <img src={require('./img/icon-search.svg')} width="20px" height="auto" />
                        </a>
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-">
                                    <li className="nav-item ml-0">
                                        <ul className="nav-language">
                                            <li className="mx-1"> English</li>
                                            <li className="px-1"><a href="#"> हिंदी</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" title="Bollywood" href="#">Bollywood </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" title="Television" href="#">Television</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" title="Fashion" href="#">Fashion</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" title="Lifestyle" href="#">Lifestyle</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" title="Malini's World" href="#">Malini's World</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a className="pt-1 pb-2 s-993" title="Search" href="#">
                            <img src={require("./img/icon-search.svg")} width="20px" height="auto" />
                        </a>
                    </nav>
                    <a href="#" className="sm-sicon d-md-none" onClick={this.osidenav}>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36 36" style={{ enableBackground: 'new 0 0 36 36' }} xmlSpace="preserve"><g><g><path fill="#ffffff" d="M22.1,6.7c0,0.3,0,0.6,0.1,1l-11,5.7c-1.2-1.1-2.8-1.8-4.6-1.8c-3.7,0-6.7,3-6.7,6.7c0,3.7,3,6.7,6.7,6.7c1.8,0,3.4-0.7,4.6-1.9l10.9,5.5c0,0.3-0.1,0.6-0.1,0.9c0,3.7,3,6.7,6.7,6.7c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7c-1.8,0-3.4,0.7-4.6,1.9l-10.9-5.5c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0-0.6-0.1-1l11-5.7c1.2,1.1,2.8,1.8,4.6,1.8c3.7,0,6.7-3,6.7-6.7c0-3.7-3-6.7-6.7-6.7C25.1,0,22.1,3,22.1,6.7" /></g></g></svg>
                    </a>
                    <div id="s-sidenav" className="s-sidenav d-md-none" style={{ background: 'url(img/story/screen.png)' }}>
                        <div className="share-social">
                            <ul className="list-unstyled pr-3">
                                <li className="mb-3 h6 font-weight-bold text-light" style={{ letterSpacing: 1 }}>
                                    SHARE
              </li>
                                <a href="#">
                                    <li className="s-circle" style={{ backgroundColor: '#3B5998' }}>
                                        <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" viewBox="0 0 264 512"><path fill="#ffffff" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229" /></svg>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="s-circle" style={{ backgroundColor: '#0084FF' }}>
                                        <svg aria-hidden="true" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="s-circle" style={{ background: 'linear-gradient( 45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}>
                                        <svg aria-hidden="true" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="s-circle" style={{ backgroundColor: '#25D366' }}>
                                        <svg aria-hidden="true" data-prefix="fab" data-icon="whatsapp" className="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="s-circle bg-purple">
                                        <svg aria-hidden="true" data-prefix="fas" data-icon="link" className="svg-inline--fa fa-link fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" /></svg>
                                    </li>
                                </a>
                                <a href="javascript:void(0)" onClick={this.csidenav}>
                                    <li className="s-circle bg-white" style={{ border: '2px solid black' }}>
                                        <svg aria-hidden="true" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#000000" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="container mt-5 mb-3 mb-md-4">
                        <a href="#">
                            <img src={require("./img/story/ad.png")} className="mx-auto d-block shadow img-fluid" />
                        </a>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="storyboard">
                                    <h1>{slugresponse.hit._source.post_title}</h1>
                                    <div className="hashtag text-yellow">#ItEndsWithMe</div>
                                    <p className="author">{slugresponse.hit._source.AUTHOR_NAME} , {moment(slugresponse.hit._source.post_date_gmt).format("DD MMM")}</p>
                                    {/* <div className="v-box mt-3" style={{ background: `url(${slugresponse.hit._source.FEATURED_IMAGE})` }}>
                                        <span />
                                    </div> */}
                                    {/* <div className="d-none d-md-block mt-4 pt-2">
                                        <ul className="list-inline">
                                            <a href="#" className=" ">
                                                <li className="list-inline-item s-circle shadow" style={{ backgroundColor: '#3B5998' }}>
                                                    <svg viewBox="0 0 264 512"><path fill="#ffffff" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229" /></svg>
                                                </li>
                                            </a>
                                            <a href="#" className="ml-2">
                                                <li className="list-inline-item s-circle shadow" style={{ backgroundColor: '#0084FF' }}>
                                                    <svg viewBox="0 0 512 512"><path fill="#ffffff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                                                </li>
                                            </a>
                                            <a href="#" className="ml-2">
                                                <li className="list-inline-item s-circle shadow" style={{ background: 'linear-gradient( 45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }}>
                                                    <svg viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                                </li>
                                            </a>
                                            <a href="#" className="ml-2">
                                                <li className="list-inline-item s-circle shadow" style={{ backgroundColor: '#c8232c' }}>
                                                    <svg viewBox="0 0 384 512"><path fill="#ffffff" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" /></svg>
                                                </li>
                                            </a>
                                            <a href="#" className="ml-2">
                                                <li className="list-inline-item s-circle shadow" style={{ backgroundColor: '#e62117' }}>
                                                    <svg viewBox="0 0 576 512"><path fill="#ffffff" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>
                                                </li>
                                            </a>
                                            <a href="#" className="ml-2">
                                                <li className="list-inline-item s-circle shadow" style={{ backgroundColor: '#d34836' }}>
                                                    <svg viewBox="0 0 640 512"><path fill="#ffffff" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" /></svg>
                                                </li>
                                            </a>
                                        </ul>
                                    </div> */}
                                    {ReactHtmlParser(slugresponse.hit._source.post_content)}
                                    <div className="my-2">
                                        <h6 className="h4 font-weight-bold">Tags</h6>
                                        {slugresponse.hit._source.TAGS.map((t, key) => {
                                            return (
                                                <a key={key} href={t.slug} className="text-yellow h4">
                                                    #{t.name}
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-none d-md-block">
                                <div className="trending-today">
                                    <h2 className="text-yellow mt-1">Trending Today !</h2>
                                    <span className="bg-yellow" />
                                    <div className="tt-box mt-4">
                                        <div className="img mb-2" style={{ background: 'url(img/story/shutterstock_1158909466-273x197.jpg)' }}>
                                            <span />
                                        </div>
                                        <a href="#" className="hashtag mt-2 text-yellow"> #ItEndsWithMe</a>
                                        <a href="#">
                                            <h3>Where’s The Line Between Self Love &amp; Self Improvment?</h3>
                                        </a>
                                    </div>
                                    <div className="tt-box mt-4">
                                        <div className="img mb-2" style={{ background: 'url(img/story/Boy-Crying.jpg)' }}>
                                            <span />
                                        </div>
                                        <a href="#" className="hashtag mt-2 text-yellow"> #ItEndsWithMe</a>
                                        <a href="#">
                                            <h3>You Are A Boy, Don’t Cry Like Girls...</h3>
                                        </a>
                                    </div>
                                    <div className="tt-box mt-4">
                                        <div className="img mb-2" style={{ background: 'url(img/story/sexism-2-1.jpg)' }}>
                                            <span />
                                        </div>
                                        <a href="#" className="hashtag mt-2 text-yellow"> #ItEndsWithMe</a>
                                        <a href="#">
                                            <h3>It’s Just Me, My Clothes &amp; I..</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <a href="#">
                            <img src={require("./img/story/ad.png")} className="mx-auto d-block shadow img-fluid" />
                        </a>
                    </div>
                    {/* Instagram Feed  */}
                    <div className="container d-md-none">
                        <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/BbCQESknJgp/?utm_source=ig_embed_loading" data-instgrm-version={12} style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 540, minWidth: 326, padding: 0, width: 'calc(100% - 2px)' }}><div style={{ padding: 16 }}> <a href="https://www.instagram.com/p/BbCQESknJgp/?utm_source=ig_embed_loading" style={{ background: '#FFFFFF', lineHeight: 0, padding: '0 0', textAlign: 'center', textDecoration: 'none', width: '100%' }} target="_blank"> <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}> <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 40, marginRight: 14, width: 40 }} /> <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}> <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, marginBottom: 6, width: 100 }} /> <div style={{ backgroundColor: '#F4F4F4', borderRadius: 4, flexGrow: 0, height: 14, width: 60 }} /></div></div><div style={{ padding: '19% 0' }} /><div style={{ display: 'block', height: 50, margin: '0 auto 12px', width: 50 }}><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlnsXlink="https://www.w3.org/1999/xlink"><g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" /></g></g></g></svg></div><div style={{ paddingTop: 8 }}> <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 550, lineHeight: 18 }}> View this post on Instagram</div></div><div style={{ padding: '12.5% 0' }} /> <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 14, alignItems: 'center' }}><div> <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(0px) translateY(7px)' }} /> <div style={{ backgroundColor: '#F4F4F4', height: '12.5px', transform: 'rotate(-45deg) translateX(3px) translateY(1px)', width: '12.5px', flexGrow: 0, marginRight: 14, marginLeft: 2 }} /> <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', height: '12.5px', width: '12.5px', transform: 'translateX(9px) translateY(-18px)' }} /></div><div style={{ marginLeft: 8 }}> <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: 20, width: 20 }} /> <div style={{ width: 0, height: 0, borderTop: '2px solid transparent', borderLeft: '6px solid #f4f4f4', borderBottom: '2px solid transparent', transform: 'translateX(16px) translateY(-4px) rotate(30deg)' }} /></div><div style={{ marginLeft: 'auto' }}> <div style={{ width: 0, borderTop: '8px solid #F4F4F4', borderRight: '8px solid transparent', transform: 'translateY(16px)' }} /> <div style={{ backgroundColor: '#F4F4F4', flexGrow: 0, height: 12, width: 16, transform: 'translateY(-4px)' }} /> <div style={{ width: 0, height: 0, borderTop: '8px solid #F4F4F4', borderLeft: '8px solid transparent', transform: 'translateY(-4px) translateX(8px)' }} /></div></div></a> <p style={{ margin: '8px 0 0 0', padding: '0 4px' }}> <a href="https://www.instagram.com/p/BbCQESknJgp/?utm_source=ig_embed_loading" style={{ color: '#000', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 'normal', lineHeight: 17, textDecoration: 'none', wordWrap: 'break-word' }} target="_blank">I watch more Sunset than NETFLIX..🌄</a></p> <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, lineHeight: 17, marginBottom: 0, marginTop: 8, overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>A post shared by <a href="https://www.instagram.com/jaym213_/?utm_source=ig_embed_loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, fontStyle: 'normal', fontWeight: 'normal', lineHeight: 17 }} target="_blank"> Jay Mewada</a> (@jaym213_) on <time style={{ fontFamily: 'Arial,sans-serif', fontSize: 14, lineHeight: 17 }} dateTime="2017-11-03T13:42:46+00:00">Nov 3, 2017 at 6:42am PDT</time></p></div></blockquote>
                    </div>
                    {/* Twitter Feed */}
                    <div className="container my-4 d-md-none">
                        <div className="shadow">
                            <blockquote className="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Play the <a href="https://twitter.com/hashtag/RewardMi?src=hash&ref_src=twsrc%5Etfw">#RewardMi</a> game and earn Mi tokens. Earn more and redeem them for discount coupons and F-codes. Play now!  <a href="https://t.co/WgpM3LiKyh">https://t.co/WgpM3LiKyh</a></p>— jay mewada (@jaymewada213) <a href="https://twitter.com/jaymewada213/status/875318183049125888?ref_src=twsrc%5Etfw">15 June 2017</a></blockquote>
                        </div>
                    </div>
                    <br />
                    <div className="explore-more-block wow fadeInUp mb-4">
                        <a href="#" className="bg-yellow">sHOW MORE COMMENTS</a>
                    </div>
                    <div className="section-sm-expmore d-md-none">
                        <div className="container">
                            <h2 className="px-4 py-2 text-yellow text-center">EXPLORE CHANGE</h2>
                            <div className="slider-sm-expmore pb-2 pt-4">
                                <div>
                                    <a href="#">
                                        <div className="sm-exp-box">
                                            <div className="round" style={{ background: 'url(./img/round-1.jpg)' }}>
                                            </div>
                                            <div className="cat">Sub CATEg</div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div className="sm-exp-box">
                                            <div className="round" style={{ background: 'url(./img/yearbook-3.jpg)' }}>
                                            </div>
                                            <div className="cat">Sub CATEg</div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div className="sm-exp-box">
                                            <div className="round" style={{ background: 'url(./img/yearbook-2.jpg)' }}>
                                            </div>
                                            <div className="cat">Sub CATEg</div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="#">
                                        <div className="sm-exp-box">
                                            <div className="round" style={{ background: 'url(./img/yearbook-1.jpg)' }}>
                                            </div>
                                            <div className="cat">Sub CATEg</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Related Stories Section  */}
                    <div className="container px-0 section-rs">
                        <img src={require("./img/imp-img/psst.png")} />
                        <h2 className="font-weight-bold text-yellow text-center py-3 mt-3 mt-md-5 mb-0">Related Stories</h2>
                        <div className="slider-rs">
                            <div>
                                <div className="rs-box">
                                    <div className="img" style={{ backgroundImage: 'url(img/color.jpg)' }}>
                                        <button onClick={() => this.onClickLikeButton}>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                <path id="like15" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                            </svg>
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span />
                                    </div>
                                    <a href="#">
                                    </a><a href="#">
                                        <h3>Things You Need To Know About Colours</h3>
                                        <span className="bg-yellow" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="rs-box">
                                    <div className="img" style={{ backgroundImage: 'url(./img/pizza.jpeg)' }}>
                                        <button onClick={() => this.onClickLikeButton}>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                <path id="like15" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                            </svg>
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span />
                                    </div>
                                    <a href="#">
                                        <h3>This Pizza Recipe Proves That You Can Never Have Too Much Cheese!</h3>
                                        <span className="bg-yellow" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="rs-box">
                                    <div className="img" style={{ background: 'url(./img/first-1.jpg)' }}>
                                        <button onClick={() => this.onClickLikeButton}>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                <path id="like14" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                            </svg>
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span />
                                    </div>
                                    <a href="#">
                                        <h3>Sonali Bendre Won The Internet With Her Friendship Day Post!</h3>
                                        <span className="bg-yellow" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="rs-box">
                                    <div className="img" style={{ background: 'url(img/first-2.jpg)' }}>
                                        <button onClick={() => this.onClickLikeButton}>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                <path id="like13" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                            </svg>
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span />
                                    </div>
                                    <a href="#">
                                        <h3>5 Statement Tops We’d Like To Borrow From Karisma Kapoor!</h3>
                                        <span className="bg-yellow" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="rs-box">
                                    <div className="img" style={{ background: 'url(img/dance.jpg)' }}>
                                        <button onClick={() => this.onClickLikeButton}>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                <path id="like12" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                            </svg>
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span />
                                    </div>
                                    <a href="#">
                                        <h3>Katrina Kaif Dance Like A Dream And Here’s The Proof!</h3>
                                        <span className="bg-yellow" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="rs-box">
                                    <div className="img" style={{ background: 'url(img/bride.jpg)' }}>
                                        <button onClick={() => this.onClickLikeButton}>
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                <path id="like12" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                            </svg>
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span />
                                    </div>
                                    <a href="#">
                                        <h3>The Ultimate Guide For A Bride-To-Be!</h3>
                                        <span className="bg-yellow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* More Change Section  */}
                    <div className="section-mc" style={{ position: 'relative' }}>
                        <img src={require("./img/imp-img/heart-dashed.png")} className="img-fluid d-none d-md-block" />
                        <div className="container px-0">
                            <h2 className="font-weight-bold text-yellow text-center py-3 mt-3 mt-md-5 mb-0">More Change {/* <img src="img/story/float.png" height="100px" width="30%"> */}</h2>
                            <div className="slider-rs">
                                <div>
                                    <div className="rs-box">
                                        <div className="img" style={{ backgroundImage: 'url(img/story/Body-shaming.jpg)' }}>
                                            <span />
                                        </div>
                                        <a href="#">
                                            <h3>A Person’s Body Shape Does  Not Define Their Mind.</h3>
                                            <span className="bg-yellow" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rs-box">
                                        <div className="img" style={{ background: 'url(img/dance.jpg)' }}>
                                            <button onClick={() => this.onClickLikeButton}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                    <path id="like11" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                                </svg>
                                            </button>
                                            <div className="l-count">1,234!</div>
                                            <span />
                                        </div>
                                        <a href="#">
                                            <h3>Katrina Kaif Dance Like A Dream And Here’s The Proof!</h3>
                                            <span className="bg-yellow" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rs-box">
                                        <div className="img" style={{ backgroundImage: 'url(./img/story/Little-Girl.jpg)' }}>
                                            <button onClick={() => this.onClickLikeButton}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                    <path id="like10" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                                </svg>
                                            </button>
                                            <div className="l-count">1,234!</div>
                                            <span />
                                        </div>
                                        <a href="#">
                                            <h3>Because I Am A Girl? </h3>
                                            <span className="bg-yellow" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rs-box">
                                        <div className="img" style={{ background: 'url(./img/story/shutterstock_211277530.jpg)' }}>
                                            <button onClick={() => this.onClickLikeButton}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                    <path id="like9" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                                </svg>
                                            </button>
                                            <div className="l-count">1,234!</div>
                                            <span />
                                        </div>
                                        <a href="#">
                                            <h3>The Harsh Reality Of Being A Female Driver In India</h3>
                                            <span className="bg-yellow" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rs-box">
                                        <div className="img" style={{ background: 'url(img/story/dipika.jpg)' }}>
                                            <button onClick={() => this.onClickLikeButton}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                    <path id="like8" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                                </svg>
                                            </button>
                                            <div className="l-count">1,234!</div>
                                            <span />
                                        </div>
                                        <a href="#">
                                            <h3>7 Times Deepika Padukone Nailed Her Makeup This Year!</h3>
                                            <span className="bg-yellow" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="rs-box">
                                        <div className="img" style={{ background: 'url(require("./img/story/Untitled-design-17.jpg")' }}>
                                            <button onClick={() => this.onClickLikeButton}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                    <path id="like7" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                                </svg>
                                            </button>
                                            <div className="l-count">1,234!</div>
                                            <span />
                                        </div>
                                        <a href="#">
                                            <h3>A Modern Story Of ‘Little Red Riding Hood’.</h3>
                                            <span className="bg-yellow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* TRENDING TODAY SECTION */}
                    <div className="section-tt">
                        <div className="container-fluid d-md-none my-3 px-0">
                            <h2 className="font-weight-bold text-yellow text-center py-3 mt-3 mb-0">Trending Today</h2>
                            <div className="slider-tt">
                                <div>
                                    <div className="tt-sm-box">
                                        <div className="img" style={{ background: 'url(require("./  img/story/shutterstock_1158909466-273x197.jpg")' }}>
                                            <button onClick={() => this.onClickLikeButton}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                    <path id="like6" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                                </svg>
                                            </button>
                                            <div className="l-count">1,234!</div>
                                            <span />
                                        </div>
                                        <a href="#">
                                            <h3>Where’s The Line Between Self Love &amp; Self Improvment?</h3>
                                            <span />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="tt-sm-box">
                                        <div className="img" style={{ background: 'url(./img/story/dt.jpg)' }}>
                                            <button onClick={() => this.onClickLikeButton}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                    <path id="like2" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                                </svg>
                                            </button>
                                            <div className="l-count">1,234!</div>
                                            <span />
                                        </div>
                                        <a href="#">
                                            <h3>Here’s How Divyanka Tripathi’s Selfies Always Look </h3>
                                            <span />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="tt-sm-box">
                                        <div className="img" style={{ background: 'url(./img/story/Boy-Crying.jpg)' }}>
                                            <button onClick={() => this.onClickLikeButton}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                    <path id="like1" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                                </svg>
                                            </button>
                                            <div className="l-count">1,234!</div>
                                            <span />
                                        </div>
                                        <a href="#">
                                            <h3>You Are A Boy, Don’t Cry Like Girls...</h3>
                                            <span />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="tt-sm-box">
                                        <div className="img" style={{ background: 'url(./img/story/sexism-2-1.jpg)' }}>
                                            <button onClick={() => this.onClickLikeButton}>
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36" xmlSpace="preserve">
                                                    <path id="like3" fill="none" stroke="#ffffff" strokeWidth={5} strokeMiterlimit={10} d="M18.1,7.3c0.6-0.5,1.2-1.1,1.8-1.5c5.4-3.8,12.8-1.1,14.4,5.3c0.8,3.1,0,5.9-1.7,8.5c-2.1,3.2-5,5.8-8,8.1c-1.8,1.4-3.7,2.7-5.6,4.1c-0.4,0.3-0.8,0.6-1.4,0.2c-4.5-3-8.8-6.3-12.3-10.4c-2.2-2.6-3.7-5.5-3.5-9.1C1.9,9,4.6,5.5,7.9,4.5 C11.7,3.4,15,4.1,17.7,7C17.8,7.1,17.9,7.2,18.1,7.3z" />
                                                </svg>
                                            </button>
                                            <div className="l-count">1,234!</div>
                                            <span />
                                        </div>
                                        <a href="#">
                                            <h3>It’s Just Me, My Clothes &amp; I.. </h3>
                                        </a>
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* LOAD MORE MISS FROM MALANI BUTTON */}
                    <div className="load-more-mm my-5">
                        <a href="#" title="Load more from MissMalani.com">
                            Load more <span className="v-md">from &nbsp;</span><img src={require("./img/missmalini-logo.svg")} />
                        </a>
                    </div>
                    <footer>
                        <Footer />
                    </footer>
                    {/* Optional JavaScript */}
                    {/* jQuery first, then Popper.js, then Bootstrap JS */}
                </div>
            );
        } else {
            return null
        }
    }
}
export default Story;
