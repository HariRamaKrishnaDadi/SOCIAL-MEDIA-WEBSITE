import React from "react";
import"./GroupRow.css";
import GroupIcon from '@material-ui/icons/Group';

function GroupRow() {
    return (
        <div className="groupRow">
            <div className="groupIcon">
                <GroupIcon  />
                <h3 className="title2">Groups</h3>
             
            </div>

            <div className="groups">
                <h3 className="group1">Python Group</h3>
                <h3 className="group2">Placements Group</h3>
                <h3 className="group3">Gate preperation Group</h3>

            </div>
            
        </div>
    )
}

export default GroupRow
