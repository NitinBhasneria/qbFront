import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import './tqb.css';
import Bookmark from './../../statics/images/bookmark.png'
import Cross from './../../statics/images/cross.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

class SelectDropdown extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        selectedOption: props.selectedOption || props.defaultOption,
        showDropdown: false
      }
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
      const { options, name } = this.props
      const optionKeys = Object.keys(options)
  
      let styles = {
        dropdown: {
          fontFamily: 'Helvetica',
          color: '#6f6f6f',
          letterSpacing: 0.5,
          fontWeight: 300,
          outline: 'none',
          position: 'relative',
          width: '100%',
          display: 'inline-block'
        },
        icon: {
          color: '#CCCCCC',
          fontSize: 16,
          transform: 'none',
          transition: 'all 0.1s ease-in'
        },
        list: {
          background: '#FFFFFF',
          border: '3px solid #EEEEEE',
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
            fontSize: 14
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
          fontSize: '20px',
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
          fontSize: 14
        }
      }
  
      return (
        <div style={styles.dropdown} tabIndex={1}>
          <div className={`selectedOption-${showDropdown ? 'down' : 'up'}`} style={styles.selectedOption} onClick={this.toggleDropdown}>
            <a style={styles.selectedOptionLink}>{options[selectedOption]}</a>
            <i className={`fa fa-chevron-${showDropdown ? 'up' : 'down'}`} style={styles.icon} />
          </div>
          <ul className={`${showDropdown ? 'show' : ''}`} style={styles.list}>
            {
              optionKeys.map((optionKey, index) => (
                <li style={styles.listItem} key={index} name={name} value={optionKey} onClick={this.setSelectedOption}>
                  {options[optionKey]}
                  <i className={`far fa-${selectedOption === optionKey ? 'dot-circle' : 'circle'}`} style={styles.listItem.icon} />
                </li>
              ))
            }
          </ul>
        </div>
      )
    }
  }
  
class Demo extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        selectedOption: 'red'
      }
    }
  
    setOption = (selectedOption) => {
      this.setState({ selectedOption })
    }

    render() {
      const name = 'select'
      const selectedOption = this.state.selectedOption
      const options = {
        red: 'Red',
        blue: 'Blue',
        green: 'Green'
      }
  
      return (
        <SelectDropdown
          name={name}
          onChange={this.setOption}
          options={options}
          selectedOption={selectedOption}
        />
      )
    }
}

class QBA extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            click: true,
        };
        this.myClick = this.myClick.bind(this);
    }

    myClick(){
        if(!this.state.click){
            document.getElementById('inputSolved').checked = false;
            this.setState({
                ...this.state,
                click: true,
            }) 
        }
        else 
            this.setState({
                ...this.state,
                click: false,
            })
    }

    render() {
        
        return (
            <div className='TQB'>
                <div className='tqbNav'>
                    <button className="tqbNavBtn parra">Class10</button>
                    <button className="tqbNavBtn ">{'  >  '}</button>
                    <button className="tqbNavBtn">Mathematics</button>
                </div>
                <div className='qbCont'>
                    <div className='qbSideBar'>
                    <Demo />            
                    <div className='filterYear'>
                        <h1 className='filterHead'>Filters</h1>
                        <h2 className='chooseHead'>Choose by year</h2>
                        <div className='yearList'>
                            <input className='inputSelect' type="radio" name="radio"></input>
                            <p className='year'>2019</p>
                        </div>
                        <h2 className='chooseHead'>Choose the topic</h2>
                        <div className='topicList'>
                            <input className='inputSelect' type="radio" name="radio1"></input>
                            <p className='year'>Permutation and Combination</p>
                        </div>
                        <div className='solved'>
                            <h2 className='chooseHead'>Solved Questions</h2>
                            <input id='inputSolved' className='solvedinputSelect' type="radio" name="radio2" onClick={this.myClick}></input>
                        </div>
                        <div className='applyFilter'>
                            <button className='applyBtn'>Apply Filters</button>
                        </div>
                    </div>
                    </div>
                    <div className='questions'>
                        <div className='questionAnswerCont'>
                            <div className='questionCard'>
                                <div className='questionHead'>
                                    <h1>Question 1</h1>
                                    <img src={Bookmark} className='bookmark' alt={`1`}></img>
                                </div>
                                <div className='question'>What is the value (cos^2 67* - sin^2 23*) ?</div>
                            </div>
                            <div className='solutionBtn'>VIEW SOLUTION</div>
                            <div className='answer'>
                                <div className='solutionHead'>
                                    <h2 className='solutionHead'>SOLUTION</h2>
                                    <img className='cross' src={Cross}></img>
                                </div>
                                <div className='solution'>The Beverton-Holt model has been used extensively by fisheries. This model assumes that populations are competing for a single limiting resource and reproduce at discrete moments in time. If we let </div>
                            </div>
                            <hr className='endBar'></hr>
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

QBA = connect(
    mapStateToProps,
    {  },
)(QBA);


export default QBA;