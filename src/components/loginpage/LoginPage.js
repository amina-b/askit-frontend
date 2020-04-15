import React from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { connect } from 'react-redux';
import AddQuestion from '../homepage/AddQuestion';
import { userLogin } from '../../redux/actions';
import { Redirect } from "react-router-dom";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            username: "",
            password: "",
            error: ""
        }
    }

    handleUsernameChange = (username) => {
        console.log(username);
        this.setState(() => ({
            username
        }));
    }

    handlePasswordChange = (password) => {
        console.log(password);
        this.setState(() => ({
            password
        }));
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        
        if (this.validator.allValid()) {
            console.log(this.state);
            fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(res => res.text())
            .then(access_token => {
                localStorage.setItem('access_token', access_token);
                this.props.history.push('/');
            })
            .catch(() => this.setState({
                error: "Failed to Login."
            }));
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div>
                <div className="container width">
                    <form onSubmit={(e) => this.handleOnSubmit(e)}>
                        <h1 className="mb-4">Login!</h1>
                        <div className="form-group">
                            <input className="form-control" type="text" name = "username" placeholder="username" value={this.state.username} onChange={(e) => this.handleUsernameChange(e.target.value)} />
                            {this.validator.message('username', this.state.username, 'required|email')}
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name = "password" placeholder="password" value={this.state.password} onChange={(e) => this.handlePasswordChange(e.target.value)} />
                            {this.validator.message('password', this.state.password, 'required|min:5')}
                        </div>
                        <div className="form-group">
                            <button className="form-control btn btn-primary">Login</button>
                        </div>
                        { this.state.error && <p className="errors">{this.state.error}</p> }
                    </form>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(LoginPage);