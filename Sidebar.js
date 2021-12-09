import React from "react";
import "./Sidebar.css";
import  SidebarRow from "./SidebarRow";
import  MYPIC from "./images/MYPIC.jpeg";
import {useStateValue} from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
          <SidebarRow
             src= {user.photoURL}
             title={user.displayName}
             
          />


            
        </div>
    )
}

export default Sidebar
