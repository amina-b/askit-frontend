import React from 'react';
import { connect } from 'react-redux';
import { loadMyQuestions } from '../../redux/actions';

class MyQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfQuestions: 20
        }
    }

    componentDidMount() {
        this.loadMyQuestions(this.state.numberOfQuestions);
    }

    loadMyQuestions(numberOfQuestions) {
        fetch("http://localhost:3000/user-questions?limit=" + numberOfQuestions, { method: "GET" ,
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + localStorage.getItem('access_token') 
            }})
        .then(res => res.json())
        .then(myQuestions => this.props.dispatch(loadMyQuestions({ myQuestions })))
    }

    handleLoadMore() {
        this.loadMyQuestions(this.state.numberOfQuestions + 20);
        this.setState((prevState) => ({
            numberOfQuestions: prevState.numberOfQuestions + 20
        }))
    }

    render() {
        return (
            <div className="container width">
                <h1 className="mb-5 text-info">My questions: </h1>
                {
                     localStorage.getItem('access_token') && (
                     this.props.myQuestions.map((myQuestion, index) => (
                           <div key={index} className="mb-5 border-bottom fixed-width">Number {index+1}. {myQuestion.text }</div>
                            ))
                     )
                }
                <div> 
                    <button className="btn btn-info mb-4" onClick={() => this.handleLoadMore()}>LOAD MORE</button>
                </div>
                <a href="/" className="btn btn-outline-primary">Go back to Homepage!</a>
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(MyQuestions)