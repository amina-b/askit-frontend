import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';
const url = "http://localhost:3000";

class QuestionPage extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    componentDidMount() {
        fetch(url, { method : "GET" })
        .then(res => res.json())
        .then(user => {
            if (user != null) {
                this.props.dispatch(userLogin({ user }));
            }
        });
    }

    render () {
        return (
            <div>
                {
                    this.props.user.username
                }
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(QuestionPage);

