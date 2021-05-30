import React, { Component } from 'react';
import Identicon from 'identicon.js';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light fixed-top shadow-lg" style={{
                height: "70px"
            }
            }>
                <Link to={"/"}><span className="navbar-brand mb-0 h1 ml-3 hashpuppies cursor_ptr"><i className="fas fa-paw mr-2 ml-1 cursor_ptr"></i>Hash Puppies</span></Link>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                        <Link to={"/forsale"}><span className="navbar-brand h8 mr-5 cursor_ptr darker_grey create_pup_nav">For Sale</span></Link>
                        <Link to={"/owned"}><span className="navbar-brand h8 mr-5 cursor_ptr darker_grey create_pup_nav">My Pups</span></Link>
                        <Link to={"/createdbyme"}><span className="navbar-brand h8 mr-5 cursor_ptr darker_grey create_pup_nav">Created by me</span></Link>
                        <Link to={"/create"}><span className="navbar-brand h8 mr-5 cursor_ptr darker_grey create_pup_nav">Create Pup</span></Link>

                        <small className="mr-3 text_color">
                            <small id="account">{this.props.account}</small>
                        </small>

                        {this.props.account
                            ? <img
                                className="ml-1 mr-3 identicon"
                                width='25'
                                height='25'
                                src={`data:image/png;base64,${new Identicon(this.props.account.substr(5, 24), 40).toString()}`}
                                alt=""
                            />
                            : <span></span>
                        }

                    </li>
                </ul>
            </nav >
        );
    }
}

export default Navbar;