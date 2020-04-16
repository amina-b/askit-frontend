import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';
import { loadAnswers } from '../../redux/actions';
import { aswersOfOneUser } from '../../redux/actions';

class QuestionPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            question: null,
            answer: ""
        }
    }
    
    handleAnswerChange = (answer) => {
        this.setState(() => ({
            answer
        }));
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch("http://localhost:3000/questions/" + id, { method: "GET" })
        .then(res => res.json())
        .then(question => {
            this.setState({ question })
        }); 

        fetch("http://localhost:3000/questions/" + id + "/answers", { method: "GET" })
        .then(res => res.json())
        .then(answers => 
            this.props.dispatch(loadAnswers({ answers }))); 
    }

    handleSubmit = (e) => {
        const id = this.props.match.params.id;
        e.preventDefault();

        fetch("http://localhost:3000/questions/" + id + "/answers", {
            method: "POST",
            body: JSON.stringify({
                text: this.state.answer,
                questionId: this.id
            }),
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + localStorage.getItem('access_token') 
            }
        })
        .then(res => res.json())
        .then(answer => this.props.dispatch(loadAnswers({
            answers: [answer, ...this.props.answers]
        })));

    }

    handleDelete = (e) => {
        e.preventDefault();
        const id = e.target.elements.answerId.value;
        fetch("http://localhost:3000/answers/" + id, { method: "DELETE", headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token') 
        }}).then(() => this.props.dispatch(loadAnswers({
            answers: [...this.props.answers.filter(answer => answer._id !== id)]
        })));
    }

    render() {
        return (
            <div className="container width">
                { localStorage.getItem('access_token') &&
                    (
                        <form onSubmit={(e) => { this.handleSubmit(e) }}>
                            <h1 className="mb-4">Add Answer!</h1>
                            <div className="form-group">
                                <input className="form-control" type="text" name = "answer" value={this.state.answer} onChange={(e) => this.handleAnswerChange(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <button className="form-control btn btn-primary">Add!</button>
                            </div>
                        </form>
                    )
                }
                <h1 className="text-info mb-4 mt-4">Answers: </h1>
                    {  
                        this.props.answers.map((answer, index) => (
                            <div key={index} className="mb-4 border-bottom">
                                <form onSubmit={(e) => this.handleDelete(e)}>
                                <p className="fixed-width"><span className="text-primary">Number {index+1}.</span> {answer.text}</p>
                                    {answer.userId == localStorage.getItem('userId') && (
                                        <div>
                                            <input hidden name="answerId" value={answer._id}></input>
                                            <button className="btn-danger border-round mt-3 mb-3 btn-small"> Delete</button>
                                        </div> 
                                    )} 
                                       
                                </form>
                            </div>
                        ))
                    }
                <a href="/" className="btn btn-outline-primary">Go back to Homepage!</a>
            </div>
        );
    }
}

    export default connect((state) => {
        return state;
    })(QuestionPage)