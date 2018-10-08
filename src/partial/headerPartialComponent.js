import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg py-0 px-0 fixed-top">
                    <a className="nav-burger" id="sidebarCollapse">
                        <span />
                        <span />
                        <span />
                    </a>
                    <a className="navbar-brand py-md-2" href="#">
                        <img src="./img/missmalini-logo.svg" className="mb-1" height={27} width={186} />
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
                {/* Mobile Sidebar Navigation */}
                <div id="sidebar">
                    <ul className="list-unstyled">
                        <br />
                        <li>
                            <ul className="nav-language">
                                <li className="mx-1"> English</li>
                                <li className="px-1"><a href="#"> हिंदी</a></li>
                            </ul>
                        </li>
                        <li className="h6 my-3">
                            <a href="#">BOLLYWOOD</a>
                        </li>
                        <li className="h6 my-3">
                            <a href="#">
                                TELIVISION
                  </a>
                        </li>
                        <li className="h6 my-3">
                            <a href="#">
                                FASHION
                  </a>
                        </li>
                        <li className="h6 my-3">
                            <a href="#">
                                LIFESTYLE
                  </a>
                        </li>
                        <li className="h6 my-3">
                            <a href="#">
                                MALANI'S WORLD
                  </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Header;
