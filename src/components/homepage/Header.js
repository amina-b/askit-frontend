import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';
import AddQuestion from './AddQuestion';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="nav mb-4">
                    <Link className="nav-link active mr-5" to="/" >HOMEPAGE </Link>
                    <Link className="nav-link active mr-5" to="/myquestions" >MY QUESTIONS </Link>
                    <Link className="nav-link active mr-5" to="/loginpage" >LOGIN </Link>
                    <Link className="nav-link active mr-5" to="/registerpage" >REGISTER </Link>
                    <Link className="nav-link active mr-5" to="/profilepage" >PROFILE </Link>
                    <Link className="nav-link active mr-5" to="/loginpage" onClick={() => {
                        localStorage.removeItem('access_token');
                        localStorage.removeItem('userId');
                        localStorage.removeItem('username');
                    }} >LOGOUT </Link>
                </nav>
                { localStorage.getItem('access_token') &&
                 (
                        <AddQuestion />
                )
                }
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(Header);