import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { getLeftOff } from './../../actions/leftOff'
// import history from '../../history';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink,
// } from "react-router-dom";

class PT extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        this.subjectClick = this.subjectClick.bind(this);
        this.props.getLeftOff(this.props.auth.user.id);
        this.giveTopics = this.giveTopics.bind(this);
    }

    subjectClick(e) {
        var subject= e.target.id.toString()
        console.log( e.target.id )
        this.props.history.push({
            pathname: '/qbFront/qb',
            // search: '?query=sub',
            state: { subject: subject, detail: 0},
          })
    }


    giveTopics () {
        var SubTopic12=[
            {
                subject: 'Economics',
                Topic: 'Consumer Equilibrium and Demand',
            },
            {
                subject: 'Mathematics',
                Topic: 'Continuity and Differentiability'
            },
            {
                subject: 'Biology',
                Topic: 'Sexual reproduction in plants'
            },
            {
                subject: 'Physics',
                Topic: 'Alternating current'
            },
            {
                subject: 'Chemistry',
                Topic: 'D anf F block'
            },
            {
                subject: 'Accountancy',
                Topic: 'Accounting for Non-for-Profit'
            },
            {
                subject: 'Bussiness Studies',
                Topic: 'Marketting Managements'
            }
        ]
        var SubTopic10=[
            {
                subject: 'Science',
                Topic: '',
            },
            {
                subject: 'Mathematics',
                Topic: ''
            },
            {
                subject: 'SocialScience',
                Topic: ''
            }
        ]
        var subject = []
        if(this.props.details.Class = 10){
            for(var i=0;i<SubTopic10.length;i++){
                if(i>=3)
                    break;
                if(window.innerWidth>800){
                    subject.push(                    
                    <div className='Cardptpt'>
                        <div onClick={this.subjectClick} id={SubTopic10[i].subject}  className={`${SubTopic10[i].subject}Blue cardImage`}></div>
                        <div className='PTPT'>
                            <div className='cardHeadPT'>TOPIC</div>
                            <div className='cardDetailPT'>
                                <h4 className='classPT'>CLASS {this.props.details.Class}</h4>
                                <h4 className='subjectPT'>{SubTopic10[i].subject}</h4>
                            </div>
                        </div>
                    </div>)
                    }
                else {
                    subject.push(                    
                        <div className='Cardptpt item'>
                            <div onClick={this.subjectClick} id={SubTopic10[i].subject}  className={`${SubTopic10[i].subject}Blue cardImage`}></div>
                            <div className='PTPT'>
                                <div className='cardHeadPT'>TOPIC</div>
                                <div className='cardDetailPT'>
                                    <h4 className='classPT'>CLASS {this.props.details.Class}</h4>
                                    <h4 className='subjectPT'>{SubTopic10[i].subject}</h4>
                                </div>
                            </div>
                        </div>)
                }
            }
        }
        else if(this.props.details.Class = 12){
            for(var i=0;i<SubTopic12.length;i++){
                if(i>=3)
                    break;
                if(window.innerWidth>800){
                    subject.push(                    
                    <div className='Cardptpt'>
                        <div onClick={this.subjectClick} id={SubTopic12[i].subject}  className={`${SubTopic12[i].subject}Blue cardImage`}></div>
                        <div className='PTPT'>
                            <div className='cardHeadPT'>{SubTopic12[i].Topic}</div>
                            <div className='cardDetailPT'>
                                <h4 className='classPT'>CLASS {this.props.details.Class}</h4>
                                <h4 className='subjectPT'>{SubTopic12[i].subject}</h4>
                            </div>
                        </div>
                    </div>)
                }
                else {
                    subject.push(                    
                        <div className='Cardptpt item'>
                            <div onClick={this.subjectClick} id={SubTopic12[i].subject}  className={`${SubTopic12[i].subject}Blue cardImage`}></div>
                            <div className='PTPT'>
                                <div className='cardHeadPT'>TOPIC</div>
                                <div className='cardDetailPT'>
                                    <h4 className='classPT'>CLASS {this.props.details.Class}</h4>
                                    <h4 className='subjectPT'>{SubTopic12[i].subject}</h4>
                                </div>
                            </div>
                        </div>)
                }
            }
        }
        return subject;
    }

    render() {

        return (
            <div className='about'>
                <div className='PT'>POPULAR</div>
                <div className='PTCard'>
                    <MediaQuery query='(min-device-width: 801px)'>
                        <div className='Cardptpt'>
                            <div onClick={this.subjectClick} id={this.props.leftOff.Subject} className='cardImage2 cardImage'></div>
                            <div className='PTPT'>
                                <div className='cardHeadPTLeft'>Your Progress</div>
                                <h4 className='whereLeft'>(where you left off)</h4>
                                <div className='cardDetailPT'>
                                    <h4 className='classPT'>{(this.props.details.Class)}</h4>
                                    <h4 className='subjectPT'>{this.props.leftOff.Subject}</h4>
                                </div>
                            </div>
                        </div>
                        {this.giveTopics()}
                    </MediaQuery>
                    <MediaQuery query='(max-device-width:800px)'>
                    <div id="carouseltopic" class="carousel slide" data-ride="carousel">

                        <div class="carousel-inner popularCardPT">
                            <div className='Cardptpt item active'>
                                <div onClick={this.subjectClick} id={this.props.leftOff.Subject} className='cardImage2 cardImage'></div>
                                <div className='PTPT'>
                                    <div className='cardHeadPT'>Your Progress</div>
                                    <h4 className='whereLeft'>(where you left off)</h4>
                                    <div className='cardDetailPT'>
                                        <h4 className='classPT'>{(this.props.details.Class=='Class 10')?"Class 10":"Class 12"}</h4>
                                        <h4 className='firstsubjectPT'>{this.props.leftOff.Subject}</h4>
                                    </div>
                                </div>
                            </div>
                            {this.giveTopics()}
                            {/* <div class="item">
                            <a href="#"><img src="http://placekitten.com/1600/600" /></a>
                            <div class="carousel-caption">
                                <h3>Meow</h3>
                                <p>Just Kitten Around</p>
                            </div>
                            </div>
                            <div class="item">
                            <a href="#"><img src="http://placekitten.com/1600/600" /></a>
                            <div class="carousel-caption">
                                <h3>Meow</h3>
                                <p>Just Kitten Around</p>
                            </div>
                            </div> */}
                        </div>

                        <a class="left carousel-control" href="#carouseltopic" data-slide="prev">
                            <span class="glyphicon glyphiconpt-chevron-left"></span>
                        </a>
                        <a class="right carousel-control" href="#carouseltopic" data-slide="next">
                            <span class="glyphicon glyphiconpt-chevron-right"></span>
                        </a>
                    </div>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    details: state.studentdetail.data,
    auth: state.auth.user,
    leftOff: state.leftOff.data

});

PT = connect(
    mapStateToProps,
    { getLeftOff },
)(PT);

export default withRouter(PT);