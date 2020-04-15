import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';
import { loadAnswers } from '../../redux/actions';


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
                userId: this.props.user.userId,
                questionId: this.id
            }),
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + this.props.user 
            }
        })
        .then(res => res.json())
        .then(answer => this.props.dispatch(loadAnswers({
            answers: [answer, ...this.props.answers]
        })));

    }

    render() {
        return (
            <div className="container width">
                { this.props.user &&
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
                            <div className="mb-4 border-bottom">
                                <p key={index}><span className="text-primary">Number {index+1}.</span> {answer.text}</p>
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