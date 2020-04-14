import React from 'react';
import { connect } from 'react-redux';
import { getTopUsers } from '../../redux/actions';

class TopUsers extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
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
                            <p>{user.username}</p>
                                <div className="mb-3 ml-5">Number of answers: {user.odgovor}</div>
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