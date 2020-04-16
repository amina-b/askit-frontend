import React from 'react';
import { connect } from 'react-redux';
import {getHotQuestions} from '../../redux/actions';

export class HotQuestions extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetch("http://localhost:3000/hot-questions", { method: "GET" })
        .then(res => res.json())
        .then(hotQuestions => 
                    this.props.dispatch(getHotQuestions({ hotQuestions }))
        );
    }

    render() {
        return (
            <div>
                {
                    this.props.hotQuestions.map((hotquestion, index) => (
                    <div key={index}>
                        <div className="mt-5">{index+1}. {hotquestion.text}</div>
                        <div className="ml-5 text-danger">Number of likes: {hotquestion.likes}</div>
                        <div className="ml-5 text-secondary">Number of dislikes: {hotquestion.dislikes}</div>
                    </div>
                    ))
                }
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(HotQuestions);