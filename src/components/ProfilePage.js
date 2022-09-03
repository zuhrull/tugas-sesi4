import React from "react";
import Aside from "./Aside";
import NavBar from "./NavBar";
import Overview from "./Overview";

class ProfilePage extends React.Component{
    render() {
        return (
            <>
                <NavBar />
                <div className="flex-container">
                    <div className="flex-item-left">
                        <Aside />
                    </div>
                    <div className="flex-item-right">
                        <Overview />                    
                    </div>
                </div>
            </>
        )
    }
}

export default ProfilePage;