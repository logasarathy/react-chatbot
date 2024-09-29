import react from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Chatmessage from "./Chatmessage";
import { Analyze } from "./Utils";
import { Career } from "./Career";
export default function Chatbot() {
  const [message, setmessage] = useState([
    {
      message: "hi,May i have your name?",
    },
  ]);
  const [text, setText] = useState("");
  const onSend = () => {
    let list = [...message, { message: text, user: true }];
    const lowerCaseText = text.toLowerCase();//
    if (list.length > 2) {
      const reply = Career(lowerCaseText);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: `Hi,${text}`,
        },
        {
          message: "What is your current Education",
        },
      ];
    }
    setmessage(list);
    setText("");
    setTimeout(() => {
      document.querySelector('#copyright').scrollIntoView();
    },1)
  };
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
      
        <img
          src="https://previews.123rf.com/images/denvitruk/denvitruk2212/denvitruk221200322/195958598-robot-logo-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support-bot.jpg"
          alt="logo"
          height={200}
          width={200}
        />
        <h2 className="text-primary">chatbot</h2>
      </div>
      <div className="chat-message">
        {message.length > 0 && message.map((data) => <Chatmessage {...data} />)}
        <div className="d-flex mt-2">
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="primary" className="ms-3" onClick={onSend}>
            send
          </Button>
        </div>
        <div id="copyright">copy right reserved ls</div>
      </div>
    </div>
  );
}
