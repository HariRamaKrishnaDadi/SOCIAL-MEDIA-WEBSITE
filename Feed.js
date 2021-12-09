import React , {useState , useEffect} from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";




function Feed() {
    
    return (
        <div className="feed">
            <MessageSender />
             
            <Post 
              username="HARI"
              message="ajhfikahfkjfh"
              timestamp=""
              profilePic="https://www.bing.com/th?id=OIP.DDaN62F83emhIm7yqA3uQAHaFj&w=124&h=95&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
              Image="https://www.bing.com/th?id=OIP.WC1iJEa4GQpV8UZxNMJDjAHaEo&w=152&h=95&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            />

        </div>
    );
}

export default Feed;
