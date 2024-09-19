import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open,setOpen] = useState(false)
  const [Text, setText] = useState("");

  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({behaviour:"smooth"})

  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false)
  };
  
    return (
        <div className='chat'>
            <div className="top">
              <div className="user">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Lorem ipsum dolor.</p>
                </div>
              </div>
              <div className="icons">
                <img src="./phone.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./info.png" alt="" />
            </div>
           </div>
           <div className="message own"></div>
               <img src="./avatar.png" alt="" />
                 <div className="texts">
                   <p> Lorem ipsum dolor.</p>
                   <span> 1 min ago</span>
            </div>
            <div className="message own"></div>
               <img src="./avatar.png" alt="" />
                 <div className="texts">
                   <p> Lorem ipsum dolor.</p>
                   <span> 1 min ago</span>
            </div>
            <div className="message own"></div>
               <img src="https://images.pexels.com/photos/19155212/pexels-photo-19155212/free-photo-of-roof-on-a-yellow-building" alt="" />
                 <div className="texts">
                   <p> Lorem ipsum dolor.</p>
                   <span> 1 min ago</span>
            </div>
            <div ref={endRef}></div>
           <div className="bottom">
            <div className="icons">
                <img src="./img.png" alt="" />
                <img src="./camera.png" alt="" />
                <img src="./mic.png" alt="" />
            </div>
           </div>
            <input type="text" placeholder="Type a message..." value={Text} onChange={e=>setText(e.target.value)} />
            <div className="emoji">
                <img src="./emoji.png" alt=""onClick={()=>setOpen(prev=>!prev)}/>
                <div className="picker"></div>
                <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
            <button className="sendButton">Send</button>
           </div>
    )
}

export default Chat