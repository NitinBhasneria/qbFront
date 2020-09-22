import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {loadDetail} from './../../actions/studentDetail'
import MediaQuery from 'react-responsive';
import {withRouter} from 'react-router-dom';

// import history from '../../history';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink,
// } from "react-router-dom";

class Head extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        this.getSubjectCard = this.getSubjectCard.bind(this);
        if(this.props.isAuthenticated)
        this.props.loadDetail(this.props.auth.user.user.id);
        this.subjectClick = this.subjectClick.bind(this);
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

    getSubjectCard() {
        var subjectList = []
        if(this.props.isAuthenticated){
        subjectList.push(this.props.details.data.sub1)
        subjectList.push(this.props.details.data.sub2)
        subjectList.push(this.props.details.data.sub3)
        subjectList.push(this.props.details.data.sub4)
        subjectList.push(this.props.details.data.sub5)
        // console.log(subjectList)
        var subjectCard = []
        for(var i=0;i<subjectList.length;i++){
            if(subjectList[i].replace(/\s/g,'')!=''){
            subjectCard.push(<div onClick={this.subjectClick} id={subjectList[i]} className='subjectCardMainPage'>
                                <div id={subjectList[i]} className={`${subjectList[i].replace(/\s/g,'')}Blue cardImage`} ></div>
                                <div id={subjectList[i]} className='subjectCardHead'>{subjectList[i]}</div>
                                <div  id={subjectList[i]} className='cardClass'>{this.props.details.data.Class}</div>
                            </div>)}
        }
        return subjectCard}
    }

    render() {
        return (
            <div className={(this.props.isAuthenticated?`subjectHeadCont`:`HeadCont` )}>
                { !this.props.isAuthenticated && <div className='laptop'></div>}
                { !this.props.isAuthenticated && 
                <div className='SignUp'>
                    <MediaQuery query="(max-device-width: 800px)">
                        <h2 className='Head'>Built For You!<br />Practice Makes Perfect</h2>
                    </MediaQuery>
                    <MediaQuery query="(min-device-width: 801px">
                        <h2 className='Head'>Practice Makes Perfect</h2>
                        <h4 className='headPara'>Prepare for your boards like never before</h4>
                    </MediaQuery>
                    <MediaQuery query="(max-device-width: 800px)">
                        <div className='signUpContMobile'>
                            <Link className='SignUpBtn'>START YOUR 7 DAY FREE TRAIL</Link>
                        </div>
                    </MediaQuery>
                    <MediaQuery query="(min-device-width: 801px">
                        <Link className='SignUpBtn'>START YOUR 7 DAY FREE TRAIL</Link>
                    </MediaQuery>
                </div>
                }
                { this.props.isAuthenticated && <h2 className='subjectCardContHead'>WHAT WOULD YOU LIKE TO STUDY TODAY</h2> }
                { this.props.isAuthenticated && <div className='subjectCardCont'>
                    {this.getSubjectCard()}
            </div> }
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    details: state.studentdetail,
});

Head = connect(
    mapStateToProps,
    { loadDetail },
)(Head);

export default withRouter(Head);