import React, { Component } from 'react';


class ExploreMoreCategory extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
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
        )
    }
}
export default ExploreMoreCategory;
