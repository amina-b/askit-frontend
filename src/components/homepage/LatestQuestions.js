import React from 'react';
import { connect } from 'react-redux';
import { loadLatestQuestions } from '../../redux/actions';
import { Link, NavLink} from 'react-router-dom';

class LatestQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfQuestions: 3
        }
    }

    componentDidMount() {
        this.loadLatestQuestions(this.state.numberOfQuestions);
    }

    loadLatestQuestions(numberOfQuestions) {
        fetch("http://localhost:3000/questions?limit=" + numberOfQuestions, { method: "GET" })
            .then(res => res.json())
            .then(latestQuestions => 
                this.props.dispatch(loadLatestQuestions({ latestQuestions }))
            );
    }

    handleLoadMore() {
        this.loadLatestQuestions(this.state.numberOfQuestions * 2);
        this.setState((prevState) => ({
            numberOfQuestions: prevState.numberOfQuestions * 2
        }))
    }

    handleForLikes = questionId => event => {
       fetch("http://localhost:3000/questions/"+questionId+"/likes", 
       { 
           method: "PUT",
           headers: {
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        },
           body: JSON.stringify({
               questionId: questionId,
               state: 1
           })
        });
    }

    handleForDislikes = questionId => event => {
        fetch("http://localhost:3000/questions/"+questionId+"/likes", 
        { 
            method: "PUT",
            headers: {
             'Content-Type': 'application/json', 
             'Authorization': 'Bearer ' + localStorage.getItem('access_token')
         },
            body: JSON.stringify({
                questionId: questionId,
                state: -1
            })
         });
     }

    render() {  
        return (
            <div>
                {
                    this.props.latestQuestions.map((question, index) => (
                    <div className="mb-4 border-bottom" key={index}>{index+1}. Pitanje: <Link to={"/questionpage/" + question._id}>{question.text}</Link>
                        <div className="mt-2 ml-5 font-italic text-secondary"> 
                            <p>Created: {new Date(Number.parseInt(question.dateOfCreation)).toLocaleDateString()}</p>
                            {
                                localStorage.getItem('access_token') && (
                                    <div>
                                        <button className="ml-5 btn-danger btn-sm mb-3" onClick={this.handleForLikes(question._id)}>
                                            Likes
                                        </button>
                                        <button className="ml-3 btn-secondary btn-sm mb-3" onClick={this.handleForDislikes(question._id)}>
                                            Dislikes
                                        </button>
                                    </div>
                                )
                            }
                        </div> 
                    </div>                
                    ))
                }
                <button className="btn btn-info mb-3" onClick={() => this.handleLoadMore()}>LOAD MORE</button>
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(LatestQuestions); 