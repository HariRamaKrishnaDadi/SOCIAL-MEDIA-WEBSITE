import React from "react";
import "./Friend.css";
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';


export default function Friend() {
    return (
        <div className="friend">
            <div className="friendSection">
                <PersonIcon />
                <h3 className="friendH3">Friends</h3>

            </div>
            <div className="searchFriends">
                <SearchIcon />
                <input placeholder="search" type="text" />


            </div>
            
        </div>
    )
}
