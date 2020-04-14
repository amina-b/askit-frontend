import React from 'react';
import SimpleReactValidator from 'simple-react-validator';

export default class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            status: ""
        }
    }

    handleFirstNameChange = (firstname) => {
        console.log(firstname);
        this.setState(() => ({
            firstname
        }));
    }

    handleLastNameChange = (lastname) => {
        console.log(lastname);
        this.setState(() => ({
            lastname
        }));
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
            fetch("http://localhost:3000/users/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(res => res.text())
            .then(() => {
                this.setState({
                    status: "Successful register."
                })
                this.props.history.push('/loginpage');
                })
            }
        else { 
            this.validator.showMessages();
            this.forceUpdate();
          }
    }

    render() {
        return(
            <div>
                <div className="container width">
                    <form onSubmit={(e) => this.handleOnSubmit(e)}>
                        <h1 className="mb-4">Register!</h1>
                        <p>If you already have account go to Login!</p>
                        <a href="/loginpage" className="mb-5">Go to Login</a>
                        <div className="form-group mt-3">
                            <input className="form-control" type="text" name = "firstname" placeholder="firstname" value={this.state.firstname} onChange={(e) => this.handleFirstNameChange(e.target.value)} />
                            {this.validator.message('firstname', this.state.firstname, 'required|alpha')}
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name = "lastname" placeholder="lastname" value={this.state.lastname} onChange={(e) => this.handleLastNameChange(e.target.value)} />
                            {this.validator.message('lastname', this.state.lastname, 'required|alpha')}
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name = "username" placeholder="username" value={this.state.username} onChange={(e) => this.handleUsernameChange(e.target.value)} />
                            {this.validator.message('username', this.state.username, 'required|email')}
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name = "password" placeholder="password" value={this.state.password} onChange={(e) => this.handlePasswordChange(e.target.value)} />
                            {this.validator.message('password', this.state.password, 'required|min:5')}
                        </div>
                        <div className="form-group">
                            <button className="form-control btn btn-primary">Submit</button>
                        </div>
                    </form>
                    {
                        this.state.status && <p>{this.state.status}</p> 
                    }
                </div>
            </div>
        );
    }
}