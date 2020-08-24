import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import history from '../../history';
import ImageTestimonial from './../../statics/images/testimonial1.png'
import MediaQuery from 'react-responsive';
import TestimonialArrow from './../../statics/images/testimonialArrow.png'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink,
// } from "react-router-dom";

class Testimonial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        var imageEle = [
            ImageTestimonial,
            ImageTestimonial,
            ImageTestimonial
        ]

        var style = {
            backgroundSize: "145% 100%",
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ImageTestimonial})`
        }
        return (
            <div id="myCarousel1" className="carousel slide" data-ride="carousel">
                <h1 className='testimonialHead'>TESTIMONIAL</h1>
                <div className="carousel-inner car-inner">
                    <div className="item active">
                        <div className="speaker-item">
                            <div className='contbox'>
                                <MediaQuery query="(min-device-width: 801px)">
                                    <a className="left carousel-control car-control previousBackground" style = {{'backgroundImage': `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageEle[imageEle.length-1]})`}} href="#myCarousel1" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left control-but"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </MediaQuery>
                                <MediaQuery query="(max-device-width: 800px)">
                                    <a className="left carousel-control car-control previousBackground" href="#myCarousel1" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left control-but"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </MediaQuery>
                                <img className='testimonialImage' src={ImageTestimonial} ></img>
                                <div className='testimonialContent' >
                                    <img className='testimonialArrow' src={TestimonialArrow} ></img>
                                    <p className='para'> With a large pool of dedicated, highly qualified and experienced faculty members, we maintain an optimal student-faculty ratio to attend every student with extra care.</p>
                                    <h3 className='namee'>Mike hannigan </h3>
                                    <p className='purp'>Father</p>
                                </div>
                                <MediaQuery query = "(min-device-width:801px)">
                                    <a className="right carousel-control car-control" style = {{'backgroundImage': `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageEle[0]})`}} href="#myCarousel1" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right control-but"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </MediaQuery>
                                <MediaQuery query = "(max-device-width:800px)">
                                    <a className="right carousel-control car-control" href="#myCarousel1" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right control-but"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </MediaQuery>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="speaker-item">
                            <div className='contbox'>
                                <MediaQuery query="(min-device-width: 801px)">
                                    <a className="left carousel-control car-control previousBackground" style = {{'backgroundImage': `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageEle[0]})`}}  href="#myCarousel1" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left control-but"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </MediaQuery>
                                <MediaQuery query="(max-device-width: 800px)">
                                    <a className="left carousel-control car-control previousBackground" href="#myCarousel1" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left control-but"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </MediaQuery>
                                <img className='testimonialImage' src={ImageTestimonial} ></img>
                                <div className='testimonialContent' >
                                    <img className='testimonialArrow' src={TestimonialArrow} ></img>
                                    <p className='para'> With a large pool of dedicated, highly qualified and experienced faculty members, we maintain an optimal student-faculty ratio to attend every student with extra care.</p>
                                    <h3 className='namee'>Mike hannigan </h3>
                                    <p className='purp'>Father</p>
                                </div>
                                <MediaQuery query = "(min-device-width:801px)">
                                    <a className="right carousel-control car-control" style = {{'backgroundImage': `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageEle[1]})`}} href="#myCarousel1" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right control-but"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </MediaQuery>
                                <MediaQuery query = "(max-device-width:800px)">
                                    <a className="right carousel-control car-control" href="#myCarousel1" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right control-but"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </MediaQuery>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="speaker-item">
                            <div className='contbox'>
                                <MediaQuery query="(min-device-width: 801px)">
                                    <a className="left carousel-control car-control previousBackground" style = {{'backgroundImage': `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageEle[1]})`}}  href="#myCarousel1" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left control-but"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </MediaQuery>
                                <MediaQuery query="(max-device-width: 800px)">
                                    <a className="left carousel-control car-control previousBackground" href="#myCarousel1" data-slide="prev">
                                        <span className="glyphicon glyphicon-chevron-left control-but"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </MediaQuery>
                                <img className='testimonialImage' src={ImageTestimonial} ></img>
                                <div className='testimonialContent' >
                                    <img className='testimonialArrow' src={TestimonialArrow} ></img>
                                    <p className='para'> With a large pool of dedicated, highly qualified and experienced faculty members, we maintain an optimal student-faculty ratio to attend every student with extra care.</p>
                                    <h3 className='namee'>Mike hannigan </h3>
                                    <p className='purp'>Father</p>
                                </div>
                                <MediaQuery query = "(min-device-width:801px)">
                                    <a className="right carousel-control car-control" style = {{'backgroundImage': `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageEle[imageEle.length-1]})`}} href="#myCarousel1" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right control-but"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </MediaQuery>
                                <MediaQuery query = "(max-device-width:800px)">
                                    <a className="right carousel-control car-control" href="#myCarousel1" data-slide="next">
                                        <span className="glyphicon glyphicon-chevron-right control-but"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </MediaQuery>
                            </div>
                        </div>
                    </div>
                </div>
                  
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

Testimonial = connect(
    mapStateToProps,
    {  },
)(Testimonial);

export default Testimonial;