import React from "react";
import avatar from '../assets/avatar.JPG';

class NavBar extends React.Component {
    render(){
        return (
            <>
                <div className="topnav" id="myTopnav">
                    <i className="fa fa-github"></i>
                    <form>
                        <input type="text" placeholder="Search or jump to..." />
                    </form>
                    <a href="#sejarah">Pull requests</a>
                    <a href="#ragam">Issues</a>
                    <a href="#legendaris">Marketplace</a>
                    <a href="#legendaris">Explore</a>
                    <div className="dropdown">
                        <img src={avatar} alt="profile pic" className="profile-pic"></img>
                        <div class="dropdown-content">
                            <a href="#1">Link 1</a>
                            <a href="#2">Link 2</a>
                            <a href="#3">Link 3</a>
                        </div>
                    </div>
                    <a href="#icon" className="icon" onclick="myFunction()">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </>
        )
    }
}

export default NavBar;