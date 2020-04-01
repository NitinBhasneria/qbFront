import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import ImageTestimonial from './../../statics/images/testimonial1.png'
import TestimonialArrow from './../../statics/images/testimonialArrow.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

class Testimonial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div id="myCarousel1" className="carousel slide" data-ride="carousel">
                   
                <div className="carousel-inner car-inner">
                    <div className="item active">
                        <div className="speaker-item">
                            <div className='contbox'>
                                <img className='testimonialImage' src={ImageTestimonial} ></img>
                                <div className='testimonialContent' >
                                    <img className='testimonialArrow' src={TestimonialArrow} ></img>
                                    <p className='para'> With a large pool of dedicated, highly qualified and experienced faculty members, we maintain an optimal student-faculty ratio to attend every student with extra care.</p>
                                    <h3 className='namee'>Mike hannigan </h3>
                                    <p className='purp'>Father</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="speaker-item">
                            <div className='contbox'>
                                <img className='testimonialImage' src={ImageTestimonial} ></img>
                                <div className='testimonialContent' >
                                    <img className='testimonialArrow' src={TestimonialArrow} ></img>
                                    <p className='para'> With a large pool of dedicated, highly qualified and experienced faculty members, we maintain an optimal student-faculty ratio to attend every student with extra care.</p>
                                    <h3 className='namee'>Mike hannigan </h3>
                                    <p className='purp'>Father</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="speaker-item">
                            <div className='contbox'>
                                <img className='testimonialImage' src={ImageTestimonial} ></img>
                                <div className='testimonialContent' >
                                    <img className='testimonialArrow' src={TestimonialArrow} ></img>
                                    <p className='para'> With a large pool of dedicated, highly qualified and experienced faculty members, we maintain an optimal student-faculty ratio to attend every student with extra care.</p>
                                    <h3 className='namee'>Mike hannigan </h3>
                                    <p className='purp'>Father</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="left carousel-control car-control" href="#myCarousel1" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left control-but"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control car-control" href="#myCarousel1" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right control-but"></span>
                        <span className="sr-only">Next</span>
                    </a>
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