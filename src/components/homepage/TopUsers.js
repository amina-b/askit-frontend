import React from 'react';
import { connect } from 'react-redux';
import { getTopUsers } from '../../redux/actions';

class TopUsers extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        fetch("http://localhost:3000/top-users", { method: "GET" })
        .then(res => res.json())
        .then(topUsers => 
                this.props.dispatch(getTopUsers({ topUsers }))
            );
    }

    render() {
        return (
            <div>
                {
                    this.props.topUsers.map((user, index) => (
                        <div key={index}>
                            <div className="mt-5">{index+1}. {user.username}</div>
                                <div className="ml-5">Number of answers: {user.numberOfAnswers}</div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(TopUsers);