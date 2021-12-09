import React from "react";
import "./Header.css";
import vvv from "./images/vvv.png";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import GroupIcon from '@material-ui/icons/Group';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/Person';
import { Avatar } from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {useStateValue} from "./StateProvider";



function Header() {
    const[{ user} , dispatch] = useStateValue();
  return (
     <div className="header">
        <div className="header__left">
            <img
               src={vvv}
               alt="ivlogo"
            />

            <div className="header__input">
                <SearchIcon />
                <input placeholder="search" type="text" />

            </div>

        </div>



        <div className="header__middle">


            <div className="header__option  header__option--active">
                <IconButton className="icon">
                <HomeIcon fontSize="large" />
                </IconButton>
            </div>
            <div className="header__option">
                <IconButton>
                <ChatBubbleIcon fontSize="large" />
                </IconButton>
            </div>

            <div className="header__option">
                <IconButton>
                <PersonIcon fontSize="large" />
                </IconButton>
            </div>
        
            <div className="header__option">
                <IconButton>
                <GroupIcon fontSize="large" />
                </IconButton>
            </div>
            <div className="header__option">
                <IconButton>
                <NotificationsActiveIcon fontSize="large" />
                </IconButton>
            </div>


        </div>

        <div className="header__right">
            <div className="header__info">
             
               <Avatar  src={user.photoURL}/>
               
               <h4>
                   {user.displayName}
               </h4>
            </div>




        </div>

    </div>
  );

}

export default Header;
