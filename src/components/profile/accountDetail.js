import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import history from '../../history';
import Demo from './../../statics/images/stuImageDemo.png';
import Edit from './../../statics/images/editImage.png'
import { getSubject } from './../../actions/subject';
import { updateDetail } from './../../actions/studentDetail'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     NavLink,
// } from "react-router-dom";
import { loadDetail } from './../../actions/studentDetail'

class AccountDetail extends React.Component {
    constructor(props) {
        super(props);
        this.props.loadDetail(this.props.auth.id);
        this.state = {
            edit: {
                student_name: '',
                phone: ''
            },
            subb1: this.props.detail.sub1,
            subb2: this.props.detail.sub2,
            subb3: this.props.detail.sub3,
            subb4: this.props.detail.sub4,
            subb5: this.props.detail.sub5,
            image: '',
            editProfile: false,
            editSubject: false
        };
        this.props.loadDetail(this.props.auth.id);
        this.syllabusID = this.syllabusID.bind(this);
        this.editProfileBtn = this.editProfileBtn.bind(this);
        this.editSubjectBtn = this.editSubjectBtn.bind(this);
        this.editProfileDetail = this.editProfileDetail.bind(this);
        this.handleChangeProfile = this.handleChangeProfile.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleChangeSubject = this.handleChangeSubject.bind(this);
        this.updateSubject = this.updateSubject.bind(this);
    }

    updateSubject() {
        this.props.updateDetail(
            this.props.detail.id,
            this.props.detail.student_name,
            this.props.detail.phone,
            this.props.detail.syllabus, 
            this.props.detail.Class,
            this.state.sub1,
            this.state.sub2,
            this.state.sub3,
            this.state.sub4,
            this.state.sub5,
            this.props.detail.user,
        )
    }

    handleChangeSubject = (e) => {
        const { name, value } = e.target;
        console.log(value);
        this.setState({
            ...this.state,
            [name]: value,
        });
    }

    handleImageChange = (e) => {
        this.setState({
            ...this.state,
          image: e.target.files[0]
        })
        console.log(e.target.files[0]);
        this.props.updateDetail(
            this.props.detail.id,
            this.props.detail.student_name,
            this.props.detail.phone,
            this.props.detail.syllabus, 
            this.props.detail.Class,
            this.props.detail.sub1,
            this.props.detail.sub2,
            this.props.detail.sub3,
            this.props.detail.sub4,
            this.props.detail.sub5,
            this.props.detail.user,
            e.target.files[0]
        )
    };

    handleChangeProfile(event) {
        const { name, value } = event.target;
        const { edit } = this.state;
        this.setState({
            edit: {
                ...edit,
                [name]: value
            },
        });
    }

    syllabusID() {
        for(var i=0;i<this.props.syllabus.length;i++){
            if((this.props.syllabus[i].classes === this.props.detail.Class) && (this.props.syllabus[i].syllabus === this.props.detail.syllabus))
                return this.props.syllabus[i].id;
        }
    }

    editSubjectBtn() {
        this.setState({
            editSubject: true,
        })
    }

    editProfileBtn() {
        this.setState({
            editProfile: true,
        })
    }

    editProfileDetail() {
        const { edit } = this.state;
        if(edit.student_name==='' && edit.phone==='')
            this.setState({
                editProfile: false,
            })
        if(edit.student_name!=='' && edit.phone==='')
            this.props.updateDetail(
                this.props.detail.id,
                this.state.edit.student_name,
                this.props.detail.phone,
                this.props.detail.syllabus, 
                this.props.detail.Class,
                this.props.detail.sub1,
                this.props.detail.sub2,
                this.props.detail.sub3,
                this.props.detail.sub4,
                this.props.detail.sub5,
                this.props.detail.user,
                this.props.detail.image
            ).then( () => {            
                this.setState({
                    edit: {
                        student_name: '',
                        phone: ''
                    },
                editProfile: false,
            })})
        if(edit.student_name==='' && edit.phone!=='')
            this.props.updateDetail(
                this.props.detail.id,
                this.props.detail.student_name,
                this.state.edit.phone,
                this.props.detail.syllabus, 
                this.props.detail.Class,
                this.props.detail.sub1,
                this.props.detail.sub2,
                this.props.detail.sub3,
                this.props.detail.sub4,
                this.props.detail.sub5,
                this.props.detail.user,
                this.props.detail.image
            ).then( () => {            
                this.setState({
                    edit: {
                        student_name: '',
                        phone: ''
                    },
                editProfile: false,
            })})
        else             
        this.props.updateDetail(
            this.props.detail.id,
            this.state.edit.student_name,
            this.state.edit.phone,
            this.props.detail.syllabus, 
            this.props.detail.Class,
            this.props.detail.sub1,
            this.props.detail.sub2,
            this.props.detail.sub3,
            this.props.detail.sub4,
            this.props.detail.sub5,
            this.props.detail.user,
            this.props.detail.image
        ).then( () => {            
            this.setState({
                edit: {
                    student_name: '',
                    phone: ''
                },
            editProfile: false,
        })})
    }
    
    render() {
        var Class;
        if(this.props.auth.Class == 'Class 10')
            Class = 'class10'
        else
            Class = 'class12'
        if(!this.props.subjects)
            this.props.getSubject(Class)
        var subjects = [];
        subjects.push(this.props.detail.sub1);
        subjects.push(this.props.detail.sub2);
        subjects.push(this.props.detail.sub3);
        subjects.push(this.props.detail.sub4);
        subjects.push(this.props.detail.sub5);
        var subjectList = [];
        for(var i=0;i<subjects.length;i++){
            if(subjects[i]!==''){
                subjectList.push(<h2 className='componentDetail'>{subjects[i]}</h2>)
                if(i!==(subjects.length-1))
                subjectList.push(<h2 className='componentDetail'>|</h2>)
            }
        }

        var options = [];
        for(var j=0;j<this.props.subjects.length;j++){
            if(this.props.subjects[j].subject !== ''){
                options.push(<option value={this.props.subjects[j].subject}>{this.props.subjects[j].subject}</option>)
            }
        }
        var SubjectList = [];
        for(i=0;i<5;i++){
            // var name = 'sub' + i.toString();
            SubjectList.push(<div className={'form-group nameSubject'}>
                <select className='form-control-register' name={`subb`+(i+1)} onChange={this.handleChangeSubject}>
                    <option value='Subject'>{(subjects[i])?subjects[i]:"Subject"}</option>
                    {options}
                </select>
            </div>
            )
        }
        return (
            <div className='AccountCont'>
                <div className = 'StuImage'>
                    <img className='Image' src={this.props.detail.image}></img>
                    <input type="file" name="image[photo]" id="thumbnail-img" onChange={this.handleImageChange}/>
                    <label for="thumbnail-img" class="thumbnailBtn">
                        <img className='editImage' for="image" src={Edit}></img>
                    </label>
                </div>
                <div className='StuName'>{this.props.detail.student_name}</div>
                <div className='StuDetail'>
                    <h2 className='componentDetail'>{this.props.auth.email}</h2>
                    <h2 className='componentDetail'>|</h2>
                    <h2 className='componentDetail'>{this.props.detail.phone}</h2>
                </div>
                <div className='edit'>
                    <button className='editBtn' onClick={this.editProfileBtn}>EDIT PROFILE</button>
                </div>
                <div className='Class'>{this.props.detail.Class}</div>
                <div className='Subjects'>
                    {subjectList}
                </div>
                <div className='edit'>
                    <button className='editBtn' onClick={this.editSubjectBtn}>EDIT SUBJECTS</button>
                </div>
                {this.state.editProfile && 
                <div className='edit'>
                    <div className='editProfile'></div>
                    <div className='editProfilePopup'>
                        <div className='editProfileBox'>
                            <div className='formProfile'>
                            <h2 className='registerHead'>Edit profile</h2>
                            <div className='form-group name'>
                                <input type="text" placeholder='Change Name' className='form-control-register' name="student_name" value={this.state.edit.student_name} onChange={this.handleChangeProfile}/>
                            </div>
                            <div className='form-group name'>
                                <input type="text" placeholder='Change Phone Number' className='form-control-register' name="phone" value={this.state.edit.phone} onChange={this.handleChangeProfile}/>
                            </div>
                            </div>
                            <div className='form-group SaveBtn'>
                                <button className=' RegisterBtnBtn' onClick={this.editProfileDetail}>SAVE CHANGES</button>
                            </div>
                        </div>
                    </div>
                </div>
                }
                {this.state.editSubject && 
                <div className='edit'>
                    <div className='editProfile'></div>
                    <div className='editProfilePopup'>
                        <div className='subjectProfileBox editProfileBox'>
                            <div className='subjectfromProfile formProfile'>
                            <h2 className='registerHead'>Edit Subjects</h2>
                            {SubjectList}
                            </div>
                            <div className='form-group SaveBtn subjectSaveBtn'>
                                <button className=' RegisterBtnBtn' onClick={this.updateSubject}>SAVE CHANGES</button>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth.user.user,
    syllabus: state.syllabus.data,
    detail: state.studentdetail.data,
    subjects: state.subjects.data
});


AccountDetail = connect(
    mapStateToProps,
    {  loadDetail, getSubject, updateDetail  },
)(AccountDetail);

export default AccountDetail;