import React from "react";
import "./Post.css";
import{Avatar} from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';



function Post({profilePic , Image , username , timestamp , message}) {

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar"/>
                <div classname="post__topInfo">
                 <h3 className="name">{username}</h3>
                 <p className="time">{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>
            

            <div className="post__bottom">
                <p className="message">{message}</p>
            </div>

            <div className="post__image">
                <img src={Image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <ChatBubbleIcon />
                    <p className="comment">Comment</p>
                </div>

                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>

               

            </div>
        </div>
    );
}

export default Post;
