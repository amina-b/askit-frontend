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
                    <Link className="nav-link active mr-5" to="/questionpage" >QUESTION PAGE </Link>
                    <Link className="nav-link active mr-5" to="/myquestions" >MY QUESTIONS </Link>
                    <Link className="nav-link active mr-5" to="/loginpage" >LOGIN </Link>
                    <Link className="nav-link active mr-5" to="/registerpage" >REGISTER </Link>
                    <Link className="nav-link active mr-5" to="/profilepage" >PROFILE </Link>
                </nav>
                { this.props.user &&
                 (
                        <AddQuestion />
                )
                }
                {console.log(this.props.user)}
            </div>
        );
    }
}

export default connect((state) => {
    return state;
})(Header);