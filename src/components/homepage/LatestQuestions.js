import React from 'react';
import { connect } from 'react-redux';
import { loadLatestQuestions } from '../../redux/actions';

class LatestQuestions extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentDidMount() {
        fetch("http://localhost:3000/questions?=20", { method: "GET" })
            .then(res => res.json())
            .then(latestQuestions => 
                this.props.dispatch(loadLatestQuestions({ latestQuestions }))
            );
    }

    render() {  
        return (
            <div>
                {
                    this.props.latestQuestions.map((question, index) => (
                    <div className="mb-4 border-bottom" key={index}>{index+1}. Pitanje: {question.text}
                        <div className="mt-2 ml-5 font-italic text-secondary"> Created: {new Date(Number.parseInt(question.dateOfCreation)).toLocaleDateString()}</div> 
                    </div>                
                    ))
                }
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(LatestQuestions); 