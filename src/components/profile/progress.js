import React from 'react';
import { connect } from 'react-redux';
import { render } from '@testing-library/react';
import { Link, Redirect } from 'react-router-dom';
import './progress.css'
import './progressBar.css'
import {withRouter} from 'react-router-dom';
import {loadDetail} from './../../actions/studentDetail'
import { getYear } from './../../actions/years'
import { getSolved } from './../../actions/solved'


class Progress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            savedYear: '',
        };
        this.progressCard = this.progressCard.bind(this);
        this.useEffect = this.useEffect.bind(this);
        this.subjectCard = this.subjectCard.bind(this);
        this.savedQuestionRoute = this.savedQuestionRoute.bind(this);
    }

    useEffect() {
        if(this.state.flag){
          this.setState({
            flag: false,
          })
          this.props.getSolved(this.props.auth.user.user.id);
          this.props.loadDetail(this.props.auth.user.user.id)
  
          if(this.props.details.data.Class === 'Class 10') {
            this.props.getYear('class10');
          }
          else if(this.props.details.data.Class === 'Class 12') {
            this.props.getYear('science');
          }
  
        }
      }

    subjectCard (year) {
        var total=30;
        if(year > 2017 && this.props.details.data.Class === 'Class 10')
            total = 26;
        var subjectList = []
        subjectList.push(this.props.details.data.sub1);
        subjectList.push(this.props.details.data.sub2);
        subjectList.push(this.props.details.data.sub3);
        subjectList.push(this.props.details.data.sub4);
        subjectList.push(this.props.details.data.sub5);

        var subject = [];
        for(var i=0;i<subjectList.length;i++){
            var count=0;
            var yearSub = year.toString() + subjectList[i].toString();
            for(var j=0;j<this.props.solved.length; j++){
                if(this.props.solved[j].yearsub.toString() == yearSub.toString())
                    count++;
            }
            var result = (count == 0)? '' : Math.floor(count);
            var width = Math.floor((count/total)*100)
            if(subjectList[i]!='')
                subject.push(
                                <div className='subjectCard'>
                                    <h2 className='subjectHeadCard'>{subjectList[i]}</h2>
                                        <progress max="30" value={result} class="html5">
                                        </progress>
                                        <div class="progress-ele">
                                            <span className='progress-mid-ele'>0</span>
                                            <div className='midEleCont'>
                                                <div className='progress-mid-ele' style={{"width": `${width}%`}}>{result}</div>
                                            </div>
                                            <span className='progress-mid-ele' >{total}</span>
                                        </div>
                                </div>)
        }
        return subject
    }

    savedQuestionRoute (e) {
        console.log(e.target.id)
        this.props.history.push({
            pathname: '/qbFront/qb',
            search: '?query=abc',
            state: { detail: e.target.id, subject:'' },
          })
    }

    progressCard () {
        var progress = [];
        for(var i=0; i<this.props.years.length; i++){
            progress.push(<div className='yearWiseProgessCard'>
                            <div className='progressCardHead'>
                                <h1 className='yearHeadProgress'>Year {this.props.years[i].years}</h1>
                                <button className='savedQuestBtn' id={this.props.years[i].years} onClick={this.savedQuestionRoute}>Saved Question</button>
                            </div>
                            <div className='subjectWiseProgressCard'>
                                {this.subjectCard(this.props.years[i].years)}
                            </div>
                        </div>)
        }
        return progress;
    }

    render() {
        this.useEffect();
        this.progressCard();
        return(
            <div className='progressSite'>
                {this.progressCard()}
            </div>
        )
    }

}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    syllabus: state.syllabus.data,
    details: state.studentdetail,
    subjects: state.subjects.data,
    image: state.image.data,
    years: state.years.data,
    solved: state.solved.data,
});


Progress = connect(
    mapStateToProps,
    { loadDetail, getYear, getSolved},
)(Progress);

export default withRouter(Progress);
