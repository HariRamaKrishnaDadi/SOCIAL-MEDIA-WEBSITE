import React from "react";
import"./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow( { src , Icon , title}) {
    return (
        <div className="sticky">
             <div className="sidebarRow">
                  {src && <Avatar src= {src} />}
                  {Icon && <Icon />}


                  <h3 className="title">{title}</h3>
                 <div className="profileData">
                     <h3 className="edit">Edit Profile</h3>
                     <h3 className="connections">Connections</h3>
                     <h3 className="myProfile">  My Profile  </h3>
                 </div>
                  
            
            
              </div>

        </div>

    )
}

export default SidebarRow
