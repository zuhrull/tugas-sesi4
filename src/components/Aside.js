import React from "react";
import avatar from '../assets/avatar.JPG';
import AsideButton from "./AsideButton";

class Aside extends React.Component{
    render() {
        return (
            <>
                <div className="aside">
                    <img src={avatar} alt="avatar" className="avatar"></img>
                    <h2>Zuhrulle</h2>
                    <h3>Zuhrul Ikfa</h3>
                    <p>Designer, Networker, and Programmer Wanna Be.</p>
                    <AsideButton />
                    <br /><hr />
                </div>
            </>
        )
    }
}

export default Aside;