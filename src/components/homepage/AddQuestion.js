import React from 'react';
import { loadLatestQuestions } from '../../redux/actions';
import { connect } from 'react-redux';

class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: ""
        }
    } 

    handleQuestionChange = (question) => {
        this.setState(() => ({
            question
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:3000/questions", {
            method: "POST",
            body: JSON.stringify({
                text: this.state.question
            }),
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + localStorage.getItem('access_token') 
            }
        })
        .then(res => res.json())
        .then(question => this.props.dispatch(loadLatestQuestions({ 
            latestQuestions: [question, ...this.props.latestQuestions]
        })));

    }
    
    render() {  
        return (
            <div className="container width">
                {
                    <form onSubmit={(e) => { this.handleSubmit(e) }}>
                        <h1 className="mb-4">Add Question!</h1>
                        <div className="form-group">
                            <input className="form-control" type="text" name = "question" value={this.state.question} onChange={(e) => this.handleQuestionChange(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <button className="form-control btn btn-primary">Add!</button>
                        </div>
                    </form>
                }
            </div>
        );
    }
}

export default connect ((state) => {
    return state;
})(AddQuestion);