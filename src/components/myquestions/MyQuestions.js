import React from 'react';
import { connect } from 'react-redux';
import { loadMyQuestions } from '../../redux/actions';

class MyQuestions extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch("http://localhost:3000/user-questions", { method: "GET" ,
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + localStorage.getItem('access_token') 
            }})
        .then(res => res.json())
        .then(myQuestions => this.props.dispatch(loadMyQuestions({ myQuestions })))
    }

    render() {
        return (
            <div className="container width">
                <h1 className="mb-5 text-info">My questions: </h1>
                {
                     localStorage.getItem('access_token') && (
                     this.props.myQuestions.map((myQuestion, index) => (
                           <div key={index} className="mb-5 border-bottom">Number {index+1}. {myQuestion.text }</div>
                            ))
                     )
                }
                <a href="/" className="btn btn-outline-primary">Go back to Homepage!</a>
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(MyQuestions)