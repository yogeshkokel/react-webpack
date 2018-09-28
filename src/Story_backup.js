import React, { Component } from 'react';
import './css/slick.css';
import './css/jm-style.css';
import './css/slick-theme.css';
import './js/script.js';
import './js/slick.js';
import Icon1 from './img/svg/1.svg';
import Icon2 from './img/svg/2.svg';
import Icon3 from './img/svg/3.svg';
import Icon4 from './img/svg/4.svg';
import Icon5 from './img/svg/5.svg';
import Icon6 from './img/svg/6.svg';
import Icon7 from './img/svg/7.svg';
import Icon8 from './img/svg/8.svg';
import Icon9 from './img/svg/9.svg';
import Icon10 from './img/svg/10.svg';
import Icon11 from './img/svg/11.svg';
import Icon12 from './img/svg/12.svg';
import Icon13 from './img/svg/13.svg';
import Icon14 from './img/svg/14.svg';
import Icon15 from './img/svg/15.svg';
import Icon16 from './img/svg/16.svg';
import Icon17 from './img/svg/17.svg';


class Story extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg py-0 px-0 fixed-top">
                    <a className="nav-burger navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <a className="navbar-brand py-md-2" href="#">
                        <img src="./img/missmalini-logo.svg" className="mb-1" height="27" width="186" />
                    </a>
                    <a className="pt-1 pb-2 h-993" title="Search" href="#">
                        <img src="img/icon-search.svg" width="20px" height="auto" />
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
                        <img src="img/icon-search.svg" width="20px" height="auto" />
                    </a>
                </nav>

                <a href="#" className="sm-sicon d-md-none" onclick="osidenav()">
                    <Icon1 />
                </a>

                <div id="s-sidenav" className="s-sidenav d-md-none" style={{ background: url(img / story / screen.png) }}>
                    <div className="share-social">
                        <ul className="list-unstyled pr-3">
                            <li className="mb-3 h6 font-weight-bold text-light" style="letter-spacing: 1px;">
                                SHARE
                </li>
                            <a href="#">
                                <li className="s-circle" style="background-color: #3B5998;">
                                    <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" viewBox="0 0 264 512"><path fill="#ffffff" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
                                </li>
                            </a>
                            <a href="#">
                                <li className="s-circle" style="background-color:#0084FF;">
                                    <svg aria-hidden="true" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                </li>
                            </a>
                            <a href="#">
                                <li className="s-circle" style=" background: linear-gradient( 45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)">
                                    <svg aria-hidden="true" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                </li>
                            </a>
                            <a href="#">
                                <li className="s-circle" style="background-color: #25D366;">
                                    <svg aria-hidden="true" data-prefix="fab" data-icon="whatsapp" className="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                                </li>
                            </a>
                            <a href="#">
                                <li className="s-circle bg-purple">
                                    <svg aria-hidden="true" data-prefix="fas" data-icon="link" className="svg-inline--fa fa-link fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></svg>
                                </li>
                            </a>
                            <a href="javascript:void(0)" onclick="csidenav()">
                                <li className="s-circle bg-white" style="border:2px solid black;">
                                    <svg aria-hidden="true" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#000000" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>

                <br />
                <div className="container mt-5 mb-3 mb-md-4">
                    <a href="#">
                        <img src="img/story/ad.PNG" className="mx-auto d-block shadow img-fluid" />
                    </a>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="storyboard">
                                <h1>A Special Message From MissMalini </h1>
                                <div className="hashtag text-yellow">#ItEndsWithMe</div>
                                <p className="author">Jay Mewada , 20 Sep</p>
                                <div className="v-box mt-3" style="background:url(./img/story/ccc.png);">
                                    <span></span>
                                </div>
                                <div className="d-none d-md-block mt-4 pt-2">
                                    <ul className="list-inline">
                                        <a href="#" className=" ">
                                            <li className="list-inline-item s-circle shadow" style="background-color: #3B5998;">
                                                <svg viewBox="0 0 264 512"><path fill="#ffffff" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
                                            </li>
                                        </a>
                                        <a href="#" className="ml-2">
                                            <li className="list-inline-item s-circle shadow" style="background-color:#0084FF;">
                                                <svg viewBox="0 0 512 512"><path fill="#ffffff" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                            </li>
                                        </a>
                                        <a href="#" className="ml-2">
                                            <li className="list-inline-item s-circle shadow" style=" background: linear-gradient( 45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)">
                                                <svg viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                            </li>
                                        </a>
                                        <a href="#" className="ml-2">
                                            <li className="list-inline-item s-circle shadow" style="background-color: #c8232c;">
                                                <svg viewBox="0 0 384 512"><path fill="#ffffff" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path></svg>
                                            </li>
                                        </a>
                                        <a href="#" className="ml-2">
                                            <li className="list-inline-item s-circle shadow" style="background-color: #e62117;">
                                                <svg viewBox="0 0 576 512"><path fill="#ffffff" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
                                            </li>
                                        </a>
                                        <a href="#" className="ml-2">
                                            <li className="list-inline-item s-circle shadow" style="background-color: #d34836;">
                                                <svg viewBox="0 0 640 512"><path fill="#ffffff" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path></svg>
                                            </li>
                                        </a>

                                    </ul>
                                </div>

                                <p className="text-justify mt-4">You may have noticed that things look a little diierent on our website and social media pages today. That’s because we wanted to catch your attention. We are not
                                 okay with the status quo—With the inequality, discrimination, trolling, sexism, and
                                 violence we see in the news and social media every single day.
                                 This led us to ask ourselves, “What am I doing as an individual to solve the problem?”
                                 Are my everyday actions and statements contributing in some way to our culture’s
                                 misogynistic or discriminatory views? Is my silence causing more damage
              than I realise?</p>

                                <blockquote className="text-yellow mb-4">
                                    Is my silence causing more damage than I realise?
                <span className="mt-1"></span>
                                </blockquote>

                                <p className="text-justify">
                                    We understand that we need to improve ourselves before we can expect change
                                    from others. We don’t want to sit silently while the number of rape cases increases,
                                    sexism in the workplace prevails and kids fall prey to evils like the Blue Whale
                                    game.
              </p>

                                <ul className="my-3 story-list pl-4">
                                    <li>We’re doing this for Asifa.</li>
                                    <li>We’re doing this for Nirbhaya.</li>
                                    <li>We’re doing this to change the thinking of the men and women in Haryana.</li>
                                    <li>We’re doing this so people can love one another, despite gender, race, and className.</li>
                                    <li>We’re doing this so future generations can live without fear.</li>
                                </ul>
                                <p className="text-justify">Through our <b>#ItEndsWithMe</b> campaign, we want to help change the tone of how we treat each other and raise awareness about social evils and how to combat them.</p>

                                <div className="my-2">
                                    <h6 className="h4 font-weight-bold">Tags</h6>
                                    <a href="#" className="text-yellow h4">
                                        #hope #love #heart #progress #freedom #equality #women #lgbtq #self #insideout #plegde
               </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <div className="trending-today">
                                <h2 className="text-yellow mt-1">Trending Today !</h2>
                                <span className="bg-yellow"></span>
                                <div className="tt-box mt-4">
                                    <div className="img mb-2" style="background:url(img/story/shutterstock_1158909466-273x197.jpg);">
                                        <span></span>
                                    </div>
                                    <a href="#" className="hashtag mt-2 text-yellow"> #ItEndsWithMe</a>
                                    <a href="#">
                                        <h3>Where’s The Line Between Self Love & Self Improvment?</h3>
                                    </a>
                                </div>
                                <div className="tt-box mt-4">
                                    <div className="img mb-2" style="background:url(img/story/Boy-Crying.jpg);">
                                        <span></span>
                                    </div>
                                    <a href="#" className="hashtag mt-2 text-yellow"> #ItEndsWithMe</a>
                                    <a href="#">
                                        <h3>You Are A Boy, Don’t Cry Like Girls...</h3>
                                    </a>
                                </div>
                                <div className="tt-box mt-4">
                                    <div className="img mb-2" style="background:url(img/story/sexism-2-1.jpg);">
                                        <span></span>
                                    </div>
                                    <a href="#" className="hashtag mt-2 text-yellow"> #ItEndsWithMe</a>
                                    <a href="#">
                                        <h3>It’s Just Me, My Clothes & I..</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container my-5">
                    <a href="#">
                        <img src="img/story/ad.PNG" className="mx-auto d-block shadow img-fluid" />
                    </a>
                </div>

                <div className="container d-md-none">
                    <blockquote className="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/BbCQESknJgp/?utm_source=ig_embed_loading" data-instgrm-version="12" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/BbCQESknJgp/?utm_source=ig_embed_loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div><div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
                        <Icon2 />
                    </div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BbCQESknJgp/?utm_source=ig_embed_loading" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">I watch more Sunset than NETFLIX..🌄</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/jaym213_/?utm_source=ig_embed_loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Jay Mewada</a> (@jaym213_) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-11-03T13:42:46+00:00">Nov 3, 2017 at 6:42am PDT</time></p></div></blockquote>
                </div>

                <div className="container my-4 d-md-none">
                    <div className="shadow">
                        <blockquote className="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Play the <a href="https://twitter.com/hashtag/RewardMi?src=hash&amp;ref_src=twsrc%5Etfw">#RewardMi</a> game and earn Mi tokens. Earn more and redeem them for discount coupons and F-codes. Play now!  <a href="https://t.co/WgpM3LiKyh">https://t.co/WgpM3LiKyh</a></p>&mdash; jay mewada (@jaymewada213) <a href="https://twitter.com/jaymewada213/status/875318183049125888?ref_src=twsrc%5Etfw">15 June 2017</a></blockquote>
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
                                        <div className="round" style="background: url(./img/round-1.jpg);">
                                        </div>
                                        <div className="cat">Sub CATEg</div>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#">
                                    <div className="sm-exp-box">
                                        <div className="round" style="background: url(./img/yearbook-3.jpg);">

                                        </div>
                                        <div className="cat">Sub CATEg</div>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#">
                                    <div className="sm-exp-box">
                                        <div className="round" style="background: url(./img/yearbook-2.jpg);">

                                        </div>
                                        <div className="cat">Sub CATEg</div>
                                    </div>
                                </a>
                            </div>

                            <div>
                                <a href="#">
                                    <div className="sm-exp-box">
                                        <div className="round" style="background: url(./img/yearbook-1.jpg);">

                                        </div>
                                        <div className="cat">Sub CATEg</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-0 section-rs">
                    <img src="img/imp-img/psst.png" />
                    <h2 className="font-weight-bold text-yellow text-center py-3 mt-3 mt-md-5 mb-0">Related Stories</h2>

                    <div className="slider-rs">
                        <div>
                            <div className="rs-box">
                                <div className="img" style="background-image: url(img/color.jpg);">
                                    <button onclick="likebtn('like15')">
                                        <Icon3 />
                                    </button>
                                    <div className="l-count">1,234!</div>
                                    <span></span>
                                </div>
                                <a href="#">
                                    <a href="#">
                                        <h3>Things You Need To Know About Colours</h3>
                                        <span className="bg-yellow"></span>
                                    </a>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="rs-box">
                                <div className="img" style="background-image: url(./img/pizza.jpeg);">
                                    <button onclick="likebtn('like15')">
                                        <Icon4 />
                                    </button>
                                    <div className="l-count">1,234!</div>
                                    <span></span>
                                </div>
                                <a href="#">
                                    <h3>This Pizza Recipe Proves That You Can Never Have Too Much Cheese!</h3>
                                    <span className="bg-yellow"></span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="rs-box">
                                <div className="img" style="background: url(./img/first-1.jpg);">
                                    <button onclick="likebtn('like14')">
                                        <Icon5 />
                                    </button>
                                    <div className="l-count">1,234!</div>
                                    <span></span>
                                </div>
                                <a href="#">
                                    <h3>Sonali Bendre Won The Internet With Her Friendship Day Post!</h3>
                                    <span className="bg-yellow"></span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="rs-box">
                                <div className="img" style="background: url(img/first-2.jpg);">
                                    <button onclick="likebtn('like13')">
                                        <Icon6 />
                                    </button>
                                    <div className="l-count">1,234!</div>
                                    <span></span>
                                </div>
                                <a href="#">
                                    <h3>5 Statement Tops We’d Like To Borrow From Karisma Kapoor!</h3>
                                    <span className="bg-yellow"></span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="rs-box">
                                <div className="img" style="background: url(img/dance.jpg);">
                                    <button onclick="likebtn('like12')">
                                        <Icon7 />
                                    </button>
                                    <div className="l-count">1,234!</div>
                                    <span></span>
                                </div>
                                <a href="#">
                                    <h3>Katrina Kaif Dance Like A Dream And Here’s The Proof!</h3>
                                    <span className="bg-yellow"></span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div className="rs-box">
                                <div className="img" style="background: url(img/bride.jpg);">
                                    <button onclick="likebtn('like12')">
                                        <Icon8 />
                                    </button>
                                    <div className="l-count">1,234!</div>
                                    <span></span>
                                </div>
                                <a href="#">
                                    <h3>The Ultimate Guide For A Bride-To-Be!</h3>
                                    <span className="bg-yellow"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <br />
                <div className="section-mc" style="position: relative;">
                    <img src="img/imp-img/heart-dashed.png" className="img-fluid d-none d-md-block" />
                    <div className="container px-0">
                        <h2 className="font-weight-bold text-yellow text-center py-3 mt-3 mt-md-5 mb-0">More Change<img src="img/story/float.png" height="100px" width="30%" /></h2>
                        <div className="slider-rs">
                            <div>
                                <div className="rs-box">
                                    <div className="img" style="background-image: url(img/story/Body-shaming.jpg);">
                                        <span></span>
                                    </div>
                                    <a href="#">
                                        <h3>A Person’s Body Shape Does  Not Define Their Mind.</h3>
                                        <span className="bg-yellow"></span>
                                    </a>
                                </div>

                            </div>

                            <div>
                                <div className="rs-box">
                                    <div className="img" style="background: url(img/dance.jpg);">
                                        <button onclick="likebtn('like11')">
                                            <Icon9 />
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span></span>
                                    </div>
                                    <a href="#">
                                        <h3>Katrina Kaif Dance Like A Dream And Here’s The Proof!</h3>
                                        <span className="bg-yellow"></span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="rs-box">
                                    <div className="img" style="background-image: url(./img/story/Little-Girl.jpg);">
                                        <button onclick="likebtn('like10')">
                                            <Icon10 />
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span></span>
                                    </div>
                                    <a href="#">
                                        <h3>Because I Am A Girl? </h3>
                                        <span className="bg-yellow"></span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="rs-box">
                                    <div className="img" style="background: url(./img/story/shutterstock_211277530.jpg);">
                                        <button onclick="likebtn('like9')">
                                            <Icon11 />
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span></span>
                                    </div>
                                    <a href="#">
                                        <h3>The Harsh Reality Of Being A Female Driver In India</h3>
                                        <span className="bg-yellow"></span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="rs-box" >
                                    <div className="img" style="background: url(img/story/dipika.jpg);">
                                        <button onclick="likebtn('like8')">
                                            <Icon12 />
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span></span>
                                    </div>
                                    <a href="#">
                                        <h3>7 Times Deepika Padukone Nailed Her Makeup This Year!</h3>
                                        <span className="bg-yellow"></span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="rs-box">
                                    <div className="img" style="background: url(img/story/Untitled-design-17.jpg);">
                                        <button onclick="likebtn('like7')">
                                            <Icon13 />
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span></span>
                                    </div>
                                    <a href="#">
                                        <h3>A Modern Story Of ‘Little Red Riding Hood’.</h3>
                                        <span className="bg-yellow"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >


                <div className="section-tt">
                    <div className="container-fluid d-md-none my-3 px-0">
                        <h2 className="font-weight-bold text-yellow text-center py-3 mt-3 mb-0">Trending Today</h2>
                        <div className="slider-tt">
                            <div>
                                <div className="tt-sm-box">
                                    <div className="img" style="background: url(img/story/shutterstock_1158909466-273x197.jpg);">
                                        <button onclick="likebtn('like6')">
                                            <Icon14 />
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span></span>
                                    </div>
                                    <a href="#">
                                        <h3>Where’s The Line Between Self Love & Self Improvment?</h3>
                                        <span></span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="tt-sm-box">
                                    <div className="img" style="background: url(./img/story/dt.jpg);">
                                        <button onclick="likebtn('like2')">
                                            <Icon15 />
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span></span>
                                    </div>
                                    <a href="#">
                                        <h3>Here’s How Divyanka Tripathi’s Selfies Always Look </h3>
                                        <span></span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="tt-sm-box">
                                    <div className="img" style="background: url(./img/story/Boy-Crying.jpg);">
                                        <button onclick="likebtn('like1')">
                                            <Icon16 />
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span></span>
                                    </div>
                                    <a href="#">
                                        <h3>You Are A Boy, Don’t Cry Like Girls...</h3>
                                        <span></span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="tt-sm-box">
                                    <div className="img" style="background: url(./img/story/sexism-2-1.jpg);">
                                        <button onClick={() => this.onClickLikeButton}>
                                            <Icon17 />
                                        </button>
                                        <div className="l-count">1,234!</div>
                                        <span></span>
                                    </div>
                                    <a href="#">
                                        <h3>It’s Just Me, My Clothes & I.. </h3>
                                    </a>
                                    <span></span>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >


                <div className="load-more-mm my-5">
                    <a href="#" title="Load more from MissMalani.com">
                        Load more <span className="v-md">from &nbsp;</span>
                        <img src="img/missmalini-logo.svg" />
                    </a>
                </div>
                <footer>
                    <h3>FOOTER LINKS</h3>
                </footer>
            </React.Fragment>
        );
    }
}
export default Story;
