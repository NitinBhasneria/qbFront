import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import history from '../../history';
import {withRouter, Redirect} from 'react-router-dom';
import './tqb.css';
import Bookmark from './../../statics/images/bookmark.png'
import Bookmarked from './../../statics/images/bookmarked.png'
import Cross from './../../statics/images/cross.png'
import {loadDetail} from './../../actions/studentDetail'
import { getYear } from './../../actions/years'
import { getQuestion } from '../../actions/question'
import { getSubject } from './../../actions/subject'
import { createBookmark, getBookmark, deleteBookmark } from './../../actions/bookmark'
import { getSolved, createSolved } from './../../actions/solved'
import MediaQuery from 'react-responsive';
import { createLeftOff, updateLeftOff } from './../../actions/leftOff'
import { getQuestionImage } from './../../actions/imageQuestion'
import imageQuestion from '../../reducers/imageQuestion';
import { REGISTER } from 'redux-persist';
// import question from '../../reducers/question';
// import { getTopic } from './../../actions/topics';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink,
// } from "react-router-dom";

class SelectDropdown extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        selectedOption: props.selectedOption || props.defaultOption,
        showDropdown: false,
      };
    }
  
    toggleDropdown = () => {
        this.setState(prevState => {
            return { showDropdown: !prevState.showDropdown }
        })
    }
  
    setSelectedOption = event => {
      const selectedOption = event.target.getAttribute('value')
      const { onChange } = this.props
  
      this.setState({ selectedOption, showDropdown: false })
  
      if (onChange) {
        onChange(selectedOption)
      }
    }
  
    render() {
      const { showDropdown, selectedOption } = this.state
      const {options,  name } = this.props
      let styles = {
        dropdown: {
          fontFamily: 'Helvetica',
          color: '#6f6f6f',
          letterSpacing: 0.5,
          fontWeight: 300,
          outline: 'none',
          marginTop: 0,
          position: 'relative',
          width: '100%',
          display: 'inline-block'
        },
        icon: {
          color: '#CCCCCC',
          fontSize: 20,
          transform: 'none',
          marginLeft:'100px',
          transition: 'all 0.1s ease-in'
        },
        list: {
          background: '#FFFFFF',
          // border: '3px solid #EEEEEE',
          borderBottom: 'none',
          borderBottomLeftRadius: '3px',
          borderBottomRightRadius: '3px',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.06)',
          listStyle: 'none',
          marginTop: -1,
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          width: '100%',
          zIndex: 10
        },
        listItem: {
          alignItems: 'center',
          borderBottom: '0.5px solid darkgrey',
          cursor: 'pointer',
          display: 'flex',
          fontSize: '14px',
          background: '#F3F3F3',
          justifyContent: 'space-between',
          paddingBottom: 15,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 15,
          icon: {
            color: '#31D0EC',
            fontSize: 22
          }
        },
        selectedOption: {
          alignItems: 'center',
          ...(showDropdown && {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }),
          ...(!showDropdown && {
          }),
          cursor: 'pointer',
          color:'white',
          fontSize: '22px',
          fontWeight: '600',
          display: 'flex',
          background: '#10C7B6',
          justifyContent: 'space-between',
          paddingBottom: 18,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 18,
          marginBottom: -3,
        },
        selectedOptionLink: {
          color: 'inherit',
          fontSize: 22,
          marginLeft: 0,
        }
      }
      if(window.innerWidth<=800){
        styles.list.width = '80%';
        styles.dropdown.width= '80%';
        styles.selectedOptionLink.fontSize= 17;
        styles.selectedOptionLink.marginLeft= '10px';
        styles.list.marginTop=7;
        styles.dropdown.marginTop='5px';
      }
      if(window.innerWidth>800){
        styles.list.width = '100%';
        styles.dropdown.width= '100%';
        styles.selectedOptionLink.fontSize= 22;
        styles.selectedOptionLink.marginLeft= 0;
        styles.list.marginTop=0;
        styles.dropdown.marginTop=0;
      }
      return (
        <div style={styles.dropdown} tabIndex={1}>
          <div className={`selectedOption-${showDropdown ? 'down' : 'up'}`} style={styles.selectedOption} onClick={this.toggleDropdown}>
            <a style={styles.selectedOptionLink}>{selectedOption}</a>
            <i className={`fa fa-chevron-${showDropdown ? 'up' : 'down'}`} style={styles.icon} />
          </div>
          <ul className={`${showDropdown ? 'show' : ''}`} style={styles.list}>
            {
              options.map((option, index) => (
                <li style={styles.listItem} key={index} name={name} value={option} onClick={this.setSelectedOption}>
                  {option}
                  <i className={`far fa-${selectedOption === option ? 'dot-circle' : 'circle'}`} style={styles.listItem.icon} />
                </li>
              ))
            }
          </ul>
        </div>
      )
    }
  }

class QBA extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: (this.props.location.state.subject!='')? this.props.location.state.subject:this.props.details.data.sub1,
            optionLoaded: false,
            click: true,
            year: 0,
            topic: '',
            topicNumber: 0,
            showQuestion: false,
            activeSolution: '',
            flag: true,
            savedQuestion: false,
            savedQuestionYear: '',
            questionLoading: false,
            showFilter: false,
        };
        this.myClick = this.myClick.bind(this);
        this.yearsChange = this.yearsChange.bind(this);
        this.topicChange = this.topicChange.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.questionCard = this.questionCard.bind(this);
        this.viewSolution = this.viewSolution.bind(this);
        this.hideSolution = this.hideSolution.bind(this);
        this.bookmarkQuestion = this.bookmarkQuestion.bind(this);
        this.useEffect = this.useEffect.bind(this);
        this.myClickSaved = this.myClickSaved.bind(this);
        this.clearfilter = this.clearfilter.bind(this);
        this.filterImage = this.filterImage.bind(this);
    }

    filterImage() {
      if(this.state.showFilter){
        document.getElementsByClassName('filterYear')[0].style.display = 'none';
        document.getElementsByClassName('filterYear')[0].style.opacity = 0;
        this.setState({
          showFilter: false,
        })
      }
      else{
        document.getElementsByClassName('filterYear')[0].style.display = 'flex';
        document.getElementsByClassName('filterYear')[0].style.opacity = 1;
        this.setState({
          showFilter: true,
        })
      }
    }

    useEffect() {
      if(this.props.location.state.detail != 0){
        this.setState({
          showQuestion: true,
          year: this.props.location.state.detail,
          savedQuestionYear: this.props.location.state.detail,
          savedQuestion: true,
        })
        // document.getElementById(this.props.location.state.detail).checked = true;
      }
      if(this.state.flag){
        this.setState({
          flag: false,
        })
        this.props.getBookmark(this.props.auth.user.user.id);
        this.props.getSolved(this.props.auth.user.user.id);
        this.props.loadDetail(this.props.auth.user.user.id);
        if(this.props.details.data.Class === 'Class 10') {
          this.props.getYear('class10');
        }
        else if(this.props.details.data.Class === 'Class 12') {
          this.props.getYear('science');
        }

      }
      // console.log(this.props.location.state);
      if(this.props.location.state.subject!=''){
        this.setState({
          selectedOption: this.props.location.state.subject,
          questionLoading: true,
        })
        this.props.getQuestion(this.props.location.state.subject, this.props.details.data.Class).then(()=>{
          this.setState({questionLoading:false})
        });
      }
      else {
        this.setState({
          questionLoading: true,
        })
        this.props.getQuestionImage(this.props.details.data.sub1, this.props.details.data.Class);
        this.props.getQuestion(this.props.details.data.sub1, this.props.details.data.Class).then(()=>{
          this.setState({questionLoading:false})
        });
      }
    }

    bookmarkQuestion(e) {
      // console.log(this.props.details.data.user);
      if(e.target.src == Bookmarked){
        e.target.src=Bookmark
        this.props.deleteBookmark(this.props.details.data.user, e.target.id).then(()=>{
          this.props.getBookmark(this.props.details.data.user).then(()=>{
            this.questionCard()
          })
        })
      }
      else {
        e.target.src=Bookmarked
        this.props.createBookmark(this.props.details.data.user,e.target.id, this.state.year, this.state.selectedOption).then(()=>{
          this.props.getBookmark(this.props.details.data.user).then(()=>{
            this.questionCard()
          })
        })
      }

    }

    viewSolution(i){
      var solve = [];
      var yearSub = this.state.year.toString() + this.state.selectedOption.toString();
      console.log(yearSub);
      for(var l=0;l<this.props.solved.length;l++){
        solve.push(this.props.solved[l].qid);
      }
      solve.push(parseInt(this.state.activeSolution))
      // console.log(solve)
      if(!(solve.includes(parseInt(i.target.id)))) {
        this.props.createSolved(this.props.details.data.user, i.target.id, yearSub)
      }
        document.getElementById('check'+i.target.id.toString()).style.display='block'
        if((document.getElementById('check'+this.state.activeSolution.toString()))&&(this.state.activeSolution.toString()!==i.target.id.toString()))
          document.getElementById('check'+this.state.activeSolution.toString()).style.display='none'
      this.setState({
        ...this.state,
        activeSolution: i.target.id,
      })
    }

    hideSolution(i){
      document.getElementById('check'+i.target.id.toString()).style.display='none'
    }

    applyFilter(){
      this.setState({
        ...this.state,
        showQuestion: true
      })
    }

    clearfilter() {
      console.log('clear');
      if(document.getElementById(this.state.topic))
        document.getElementById(this.state.topic).checked = false;
      if(document.getElementById(this.state.year))
        document.getElementById(this.state.year).checked = false;
      this.setState({
        ...this.state,
        year: '',
        topic: '',
        savedQuestionYear:'',
        savedQuestion: false,
        click: false,
        showQuestion: true
      })
      if(document.getElementById('inputSolved'))
      document.getElementById('inputSolved').checked = false
      }
    

    questionCard(){
      // console.log(this.state.savedQuestion)
      var images = [];
      for(var i=0;i<this.props.imageQuestion.length;i++)
        images.push(this.props.imageQuestion[i].qid);
      var qb = []
      var quest = this.props.question;
      var questionBookmark = [];
      for(var k=0;k<this.props.bookmarks.length;k++)
        questionBookmark.push(this.props.bookmarks[k].qid);
      if(!this.state.savedQuestion && this.state.year==='' && this.state.topic==='' )
        { 
          for(var j=0,i=1;j<quest.length;j++){
            var image = '';
            if(images.includes(quest[j].qid)){
              for(var i=0;i<this.props.imageQuestion.length;i++){
                if(quest[j].qid == this.props.imageQuestion[i].qid)
                  image = this.props.imageQuestion[i].image
              }
            }
            // console.log(image);
          // if((this.state.year==quest[j].year[0])&&(this.state.topic==quest[j].topic)){
            var bookmarked = (questionBookmark.includes(quest[j].qid) ? Bookmarked:Bookmark)
            qb.push(<div className='questionAnswerCont'>
                                <div className='questionCard'>
                                    <div className='questionHead'>
                                        <h1>Question {i}</h1>
                                        <img onClick={(e)=>this.bookmarkQuestion(e)} id={quest[j].qid} src={bookmarked} className='bookmark' alt={`1`}></img>
                                    </div>
                                    <div className='question'>Q{quest[j].question}</div>
                                    <img className='questionImage' src={image}></img>
                                </div>
                                <div onClick={(e)=>this.viewSolution(e)} id={quest[j].qid} className='solutionBtn'>VIEW SOLUTION</div>
                                <div id={`check${quest[j].qid}`} className='answer'>
                                    <div className='solutionHead'>
                                        <h2 className='solutionHead'>SOLUTION</h2>
                                        <img onClick={(e)=>this.hideSolution(e)} id={quest[j].qid} className='cross' src={Cross}></img>
                                    </div>
                                    <div className='solution'>The Beverton-Holt model has been used extensively by fisheries. This model assumes that populations are competing for a single limiting resource and reproduce at discrete moments in time. If we let </div>
                                </div>
                                <hr className='endBar'></hr>
                            </div>)
            i++;
          // }
        }
      }
      else if(!this.state.savedQuestion)
        {
          for(var j=0,i=1;j<quest.length;j++){
            if((this.state.year==quest[j].year[0])&&(this.state.topic==quest[j].topic)){
              var bookmarked = (questionBookmark.includes(quest[j].qid) ? Bookmarked:Bookmark)
              qb.push(<div className='questionAnswerCont'>
                                  <div className='questionCard'>
                                      <div className='questionHead'>
                                          <h1>Question {i}</h1>
                                          <img onClick={(e)=>this.bookmarkQuestion(e)} id={quest[j].qid} src={bookmarked} className='bookmark' alt={`1`}></img>
                                      </div>
                                      <div className='question'>Q{quest[j].question}</div>
                                  </div>
                                  <div onClick={(e)=>this.viewSolution(e)} id={quest[j].qid} className='solutionBtn'>VIEW SOLUTION</div>
                                  <div id={`check${quest[j].qid}`} className='answer'>
                                      <div className='solutionHead'>
                                          <h2 className='solutionHead'>SOLUTION</h2>
                                          <img onClick={(e)=>this.hideSolution(e)} id={quest[j].qid} className='cross' src={Cross}></img>
                                      </div>
                                      <div className='solution'>The Beverton-Holt model has been used extensively by fisheries. This model assumes that populations are competing for a single limiting resource and reproduce at discrete moments in time. If we let </div>
                                  </div>
                                  <hr className='endBar'></hr>
                              </div>)
              i++;
            }
          }
        }
       else if(this.state.savedQuestion && this.state.topic!='') {
        var bookmark = []
        for(var l=0;l<this.props.bookmarks.length;l++){
          if((this.props.bookmarks[l].year == this.state.year)&&(this.props.bookmarks[l].subject == this.state.selectedOption))
            bookmark.push(this.props.bookmarks[l].qid)
        }
          // bookmark.push(this.props.bookmarks[l].qid)
        for(var j=0,i=1;j<quest.length;j++){
          if((this.state.year==quest[j].year[0])&&(this.state.topic==quest[j].topic)&&(bookmark.includes(quest[j].qid))){
            var bookmarked = (questionBookmark.includes(quest[j].qid) ? Bookmarked:Bookmark)
            qb.push(<div className='questionAnswerCont'>
                                <div className='questionCard'>
                                    <div className='questionHead'>
                                        <h1>Question {i}</h1>
                                        <img onClick={(e)=>this.bookmarkQuestion(e)} id={quest[j].qid} src={bookmarked} className='bookmark' alt={`1`}></img>
                                    </div>
                                    <div className='question'>Q{quest[j].question}</div>
                                </div>
                                <div onClick={(e)=>this.viewSolution(e)} id={quest[j].qid} className='solutionBtn'>VIEW SOLUTION</div>
                                <div id={`check${quest[j].qid}`} className='answer'>
                                    <div className='solutionHead'>
                                        <h2 className='solutionHead'>SOLUTION</h2>
                                        <img onClick={(e)=>this.hideSolution(e)} id={quest[j].qid} className='cross' src={Cross}></img>
                                    </div>
                                    <div className='solution'>The Beverton-Holt model has been used extensively by fisheries. This model assumes that populations are competing for a single limiting resource and reproduce at discrete moments in time. If we let </div>
                                </div>
                                <hr className='endBar'></hr>
                            </div>)
            i++;
          }
        }
      } else if(this.state.savedQuestion && this.state.topic=='') {
        var bookmark = []
        for(var l=0;l<this.props.bookmarks.length;l++){
          if((this.props.bookmarks[l].year == this.state.year)&&(this.props.bookmarks[l].subject == this.state.selectedOption))
            bookmark.push(this.props.bookmarks[l].qid)
        }
          // bookmark.push(this.props.bookmarks[l].qid)
          for(var j=0,i=1;j<quest.length;j++){
            if((this.state.year==quest[j].year[0])&&(bookmark.includes(quest[j].qid))){
              var bookmarked = (questionBookmark.includes(quest[j].qid) ? Bookmarked:Bookmark)
              qb.push(<div className='questionAnswerCont'>
                                  <div className='questionCard'>
                                      <div className='questionHead'>
                                          <h1>Question {i}</h1>
                                          <img onClick={(e)=>this.bookmarkQuestion(e)} id={quest[j].qid} src={bookmarked} className='bookmark' alt={`1`}></img>
                                      </div>
                                      <div className='question'>Q{quest[j].question}</div>
                                  </div>
                                  <div onClick={(e)=>this.viewSolution(e)} id={quest[j].qid} className='solutionBtn'>VIEW SOLUTION</div>
                                  <div id={`check${quest[j].qid}`} className='answer'>
                                      <div className='solutionHead'>
                                          <h2 className='solutionHead'>SOLUTION</h2>
                                          <img onClick={(e)=>this.hideSolution(e)} id={quest[j].qid} className='cross' src={Cross}></img>
                                      </div>
                                      <div className='solution'>The Beverton-Holt model has been used extensively by fisheries. This model assumes that populations are competing for a single limiting resource and reproduce at discrete moments in time. If we let </div>
                                  </div>
                                  <hr className='endBar'></hr>
                              </div>)
              i++;
            }
          }
        }
      return qb;
    }

    yearsChange(e){
      if(document.getElementById(this.state.topic))
        document.getElementById(this.state.topic).checked = false;
      const { name, value } = e.target;
      if(this.state.savedQuestionYear!=``)
        this.setState({
          ...this.state,
          [name]: value,
          showQuestion:false,
          topic: '',
          savedQuestionYear: '',
          savedQuestion: false,
        })
      else
        this.setState({
          ...this.state,
          [name]: value,
          showQuestion:false,
          topic: '',
          savedQuestionYear: '',
          savedQuestion: false,
        });
      var year = e.target.value;
      this.props.updateLeftOff(this.props.auth.user.user.id, year, this.state.selectedOption).then((res)=>{
        if(!res){
          this.props.createLeftOff(this.props.auth.user.user.id, year, this.state.selectedOption)
        }
      });

    }

    topicChange(e){
      const { name, value } = e.target;
        this.setState({
          ...this.state,
          [name]: value,
        });
      if(document.getElementById('check'+this.state.activeSolution.toString()))
        document.getElementById('check'+this.state.activeSolution.toString()).style.display='none'
    }

    setOption = (selectedOption) => {
      this.props.getQuestionImage(selectedOption, this.props.details.data.Class)

      this.setState({
        ...this.state,
        questionLoading: true,
        showQuestion: false,
        year: '',
        topic: ''
      })
      if(document.getElementById(this.state.topic))
        document.getElementById(this.state.topic).checked = false;
      if(document.getElementById(this.state.year))
        document.getElementById(this.state.year).checked = false;
      
      if(this.state.savedQuestionYear!=``)
        this.setState({
          selectedOption,
          savedQuestion: false,
          savedQuestionYear: '',
        })
      else 
        this.setState({ selectedOption,
          savedQuestionYear: '', })

      this.props.getQuestion(selectedOption, this.props.details.data.Class).then(()=>{
        this.setState({
          questionLoading: false,
        })
      })
    }

    myClickSaved(){
      this.setState({
        savedQuestionYear:'',
        savedQuestion: false,
        year: ''
      })
    }

    myClick(){
      console.log(document.getElementById('inputSolved').checked);
        if(!this.state.click){
            document.getElementById('inputSolved').checked = false;
            this.setState({
                ...this.state,
                click: true,
                savedQuestion: false,
                showQuestion: false,
            }) 
        }
        else 
            this.setState({
                ...this.state,
                click: false,
                savedQuestion: true,
                showQuestion: false,
            })
    }


    render() {
        
        if(this.state.flag){this.useEffect()}
        var options = []
        var subject = this.props.details.data;

        if(subject.sub1!=='')
          options.push(subject.sub1)
        if(subject.sub2!=='')
          options.push(subject.sub2)
        if(subject.sub3!=='')
          options.push(subject.sub3)
        if(subject.sub4!=='')
          options.push(subject.sub4)
        if(subject.sub5!=='')
          options.push(subject.sub5)
        
        const name = 'select'
        const selectedOption = this.state.selectedOption
        
        var years = []
        for(var i=0;i<this.props.years.length;i++){
          if(this.props.years[i].years == this.state.savedQuestionYear){
            years.push(<div className='yearsInput'><input className='inputSelect' checked='true' id={this.props.years[i].years} value={this.props.years[i].years} type="radio" name="year" onChange={this.yearsChange}></input>
            <p className='year'>{this.props.years[i].years}</p></div>)
          }
          else {
            years.push(<div className='yearsInput'><input className='inputSelect' id={this.props.years[i].years} value={this.props.years[i].years} type="radio" name="year" onChange={this.yearsChange}></input>
            <p className='year'>{this.props.years[i].years}</p></div>)
          }
        }
        var topicAdded = []
        var topics = []
        if(this.state.selectedOption!='Subject'){
          for(var i=0,j=0;i<this.props.question.length;i++,j++){
            if((this.props.question[i].year[0] == this.state.year)&&!(topicAdded.includes(this.props.question[i].topic))){
              topics.push(<div className='topicInput'><input id={this.props.question[i].topic} className='inputSelect' value={this.props.question[i].topic} type="radio" name="topic" onClick={this.topicChange}></input>
              <p className='topic'>{this.props.question[i].topic}</p></div>)
              j++;
              topicAdded.push(this.props.question[i].topic);
            }
          }
        }
        if (!this.props.isAuthenticated) {
          return <Redirect to='/login/' />;
       }
        return (
            <div className='TQB'>
                <div className='tqbNav'>
                    <button className="tqbNavBtn parra">Class10</button>
                    <button className="tqbNavBtn ">{'  >  '}</button>
                    <button className="tqbNavBtn">{this.state.selectedOption}</button>
                </div>
                <div className='qbCont'>
                    <div className='qbSideBar'>
                    <SelectDropdown
                      name={name}
                      onChange={this.setOption}
                      options={options}
                      selectedOption={selectedOption}
                    />
                    <MediaQuery query='(max-device-width: 800px)'>
                      <div onClick={this.filterImage} className='imageFilterCont'><div className='imageFilter'></div></div>           
                    </MediaQuery>
                    <div className='filterYear'>
                        <h1 className='filterHead'>Filters</h1>
                        <h2 className='chooseHead'>Choose by year</h2>
                        <div className='yearList'>
                            {years}
                        </div>
                        <h2 className='chooseHead'>Choose the topic</h2>
                        <div className='topicList'>
                            {topics}
                        </div>
                        <div className='solved'>
                            <h2 className='chooseHead'>Saved Questions</h2>
                            {this.state.savedQuestionYear!='' &&
                            <input id='inputSolvedTwo' checked='true' className='solvedinputSelect' type="radio" name="radio2" onClick={this.myClickSaved}></input>
                            }
                            {this.state.savedQuestionYear=='' &&
                            <input id='inputSolved' className='solvedinputSelect' type="radio" name="radio2" onClick={this.myClick}></input>
                            }
                        </div>
                        <div className='applyFilter'>
                            <button className='clearBtn' onClick={this.clearfilter}>CLEAR FILTERS</button>
                            <button className='applyBtn' onClick={this.applyFilter}>APPLY FILTERS</button>
                        </div>
                    </div>
                    </div>
                    <div className='questions'>
                      {this.state.showQuestion &&
                      this.questionCard()}
                      {this.state.questionLoading && <div class="Box">
                        <span>
                            <span></span>
                        </span>
                      </div>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    details: state.studentdetail,
    years: state.years.data,
    question: state.question.data,
    topics: state.topic.data,
    bookmarks: state.bookmark.data,
    imageQuestion: state.imageQuestion.data,
    solved: state.solved.data,
});

QBA = connect(
    mapStateToProps,
    { loadDetail, getSubject, getYear, getQuestion, createBookmark, getBookmark, getQuestionImage, deleteBookmark, getSolved, createSolved, createLeftOff, updateLeftOff },
)(QBA);


export default withRouter(QBA);