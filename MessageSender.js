import React , { useRef , useState } from "react";
import"./MessageSender.css";
import {Avatar} from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {IconButton} from "@material-ui/core";
import {useStateValue} from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";



function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input , setInput] = useState("");
    const [imageUrl , setImageUrl] = useState("");
    const filepickerRef = useRef(null);
    const[ImageToPost , setImageToPost] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,

        });


        setInput("");
        setImageUrl("");

    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        };
    };

    const removeImage = () =>{
        setImageToPost(null);
    }


    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <div className="avatarMsender">
                <Avatar src={user.photoURL} />  
                </div>
            
                <form>
                   <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      className="messageSender__input"
                      placeholder= { ` what's going on, ${user.displayName} ? ` }
                    />
                    <input
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="image URL (optional)"
                    />


                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>

                    {ImageToPost && (
                        <div
                          onClick={removeImage}
                          className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover: scale-105 cursor:pointer"
                        >
                            <img classname="h-10 object-contain" src={ImageToPost} alt="" />
                            
                        </div>
                    )}


                </form>


            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                   <IconButton className="icons">
                      <VideocamIcon style = { { color : "tomato"}}/>
                      <h6>Live Video</h6>
                    </IconButton>
                </div>

                <div onClick={() => filepickerRef.current.click()} className="messageSender__option">
                    <IconButton className="icons">
                      <PhotoLibraryIcon style = { { color : "tomato"}}/>
                      <h6>Photo/Video</h6>
                      <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden />
                    </IconButton>
                </div>


            </div>

        </div>
    )
}

export default MessageSender
