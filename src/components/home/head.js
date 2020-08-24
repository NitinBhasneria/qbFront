import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {loadDetail} from './../../actions/studentDetail'
import MediaQuery from 'react-responsive';

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
        this.props.loadDetail(this.props.auth.user.user.id)
    }

    getSubjectCard() {
        var subjectList = []
        if(this.props.isAuthenticated){
        subjectList.push(this.props.details.data.sub1)
        subjectList.push(this.props.details.data.sub2)
        subjectList.push(this.props.details.data.sub3)
        subjectList.push(this.props.details.data.sub4)
        subjectList.push(this.props.details.data.sub5)
        console.log(subjectList)
        var subjectCard = []
        for(var i=0;i<subjectList.length;i++){
            if(subjectList[i].replace(/\s/g,'')!=''){
            subjectCard.push(<div className='subjectCardMainPage'>
                                <div className={`${subjectList[i].replace(/\s/g,'')} cardImage`} ></div>
                                <div className='subjectCardHead'>{subjectList[i]}</div>
                                <div className='cardClass'>{this.props.details.data.Class}</div>
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
                        <h2 className='Head'>Built for you!<br />Practice makes perfect</h2>
                    </MediaQuery>
                    <MediaQuery query="(min-device-width: 801px">
                        <h2 className='Head'>Practice makes perfect</h2>
                        <h4 className='headPara'>Practice makes perfect Prepare for you boards like never before</h4>
                    </MediaQuery>
                    <MediaQuery query="(max-device-width: 800px)">
                        <div className='signUpContMobile'>
                            <Link className='SignUpBtn'>START YOUR FREE TRAIL</Link>
                        </div>
                    </MediaQuery>
                    <MediaQuery query="(min-device-width: 801px">
                        <Link className='SignUpBtn'>Sign Up</Link>
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

export default Head;